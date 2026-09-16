import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { BRAND } from "@/lib/constants";
import {
  generateInternalNotificationEmail,
  generateVisitorConfirmationEmail,
} from "@/lib/email-templates";

// In-memory rate limiting map: ip -> timestamps[]
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;

  const timestamps = (rateLimitMap.get(ip) || []).filter(
    (time) => time > windowStart,
  );

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);

  // Periodic cleanup to avoid memory leak
  if (rateLimitMap.size > 1000) {
    for (const [key, times] of rateLimitMap.entries()) {
      const validTimes = times.filter((t) => t > windowStart);
      if (validTimes.length === 0) {
        rateLimitMap.delete(key);
      } else {
        rateLimitMap.set(key, validTimes);
      }
    }
  }

  return false;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+0-9\s\-()]{6,30}$/;

export async function POST(request: NextRequest) {
  try {
    // 1. Extract Client IP for rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Too many requests from your network. Please wait a few minutes before trying again or contact us via WhatsApp.",
        },
        { status: 429 },
      );
    }

    // 2. Parse Body
    let body: any;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON payload provided." },
        { status: 400 },
      );
    }

    const { name, email, phone, subject, message, company_hp } = body || {};

    // 3. Honeypot Spam Check: If hidden field is filled, silently return success without sending email
    if (company_hp) {
      return NextResponse.json(
        {
          success: true,
          message:
            "Thank you for reaching out. We will get back to you shortly.",
        },
        { status: 200 },
      );
    }

    // 4. Server-Side Input Validation & Sanitization
    if (
      typeof name !== "string" ||
      name.trim().length < 2 ||
      name.trim().length > 100
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid full name (2–100 characters).",
        },
        { status: 400 },
      );
    }

    if (
      typeof email !== "string" ||
      email.trim().length > 100 ||
      !EMAIL_REGEX.test(email.trim())
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid email address.",
        },
        { status: 400 },
      );
    }

    const trimmedPhone = typeof phone === "string" ? phone.trim() : "";
    if (trimmedPhone && !PHONE_REGEX.test(trimmedPhone)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid phone number (e.g. +977 98XXXXXXXX).",
        },
        { status: 400 },
      );
    }

    if (
      typeof subject !== "string" ||
      subject.trim().length < 2 ||
      subject.trim().length > 150
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Please select or provide a valid inquiry subject.",
        },
        { status: 400 },
      );
    }

    if (
      typeof message !== "string" ||
      message.trim().length < 10 ||
      message.trim().length > 3000
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Message must be between 10 and 3,000 characters.",
        },
        { status: 400 },
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanPhone = trimmedPhone || undefined;
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();

    const internalNotificationTo = process.env.CONTACT_TO_EMAIL || BRAND.email;

    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kathmandu",
      dateStyle: "full",
      timeStyle: "long",
    });

    // 5. Generate Emails
    const internalEmail = generateInternalNotificationEmail({
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      subject: cleanSubject,
      message: cleanMessage,
      submittedAt: `${submittedAt} (NPT)`,
      clientIp: ip,
    });

    const visitorEmail = generateVisitorConfirmationEmail({
      name: cleanName,
      subject: cleanSubject,
      message: cleanMessage,
    });

    // 6. Check Resend API Key Configuration
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn(
        "\n[SBDC Contact API] ⚠️ RESEND_API_KEY is not set. Running in development simulation mode:",
      );
      console.log(
        `📨 [Internal Alert] To: ${internalNotificationTo} | Reply-To: ${cleanEmail}`,
      );
      console.log(`   Subject: ${internalEmail.subject}`);
      console.log(`📨 [Visitor Confirmation] To: ${cleanEmail}`);
      console.log(`   Subject: ${visitorEmail.subject}\n`);

      return NextResponse.json(
        {
          success: true,
          message:
            "Thank you for reaching out. We will get back to you shortly.",
        },
        { status: 200 },
      );
    }

    const resend = new Resend(apiKey);
    const fromAddress =
      process.env.RESEND_FROM_EMAIL || "Surya BDC <noreply@suryabdc.com.np>";

    // 7. Dispatch Emails
    // Email 1: Internal notification with visitor's email as replyTo
    const internalResult = await resend.emails.send({
      from: fromAddress,
      to: [internalNotificationTo],
      replyTo: cleanEmail,
      subject: internalEmail.subject,
      html: internalEmail.html,
      text: internalEmail.text,
    });

    if (internalResult.error) {
      console.error(
        "[SBDC Contact API] Failed to send internal notification:",
        internalResult.error.message,
      );

      const isSandboxError =
        internalResult.error.message.includes(
          "You can only send testing emails",
        ) ||
        internalResult.error.message.includes(
          "testing emails to your own email address",
        );

      if (isSandboxError) {
        return NextResponse.json(
          {
            success: false,
            error:
              'Resend Sandbox Restriction: Resend only delivers to your registered account email (rohitraj2002ind@gmail.com) until the domain is verified. Please add CONTACT_TO_EMAIL="rohitraj2002ind@gmail.com" to your .env.local for testing.',
          },
          { status: 502 },
        );
      }

      return NextResponse.json(
        {
          success: false,
          error:
            "We were unable to deliver your message at this time. Please contact us directly via WhatsApp or phone.",
        },
        { status: 502 },
      );
    }

    // Email 2: Visitor confirmation (attempted in background/parallel)
    try {
      await resend.emails.send({
        from: fromAddress,
        to: [cleanEmail],
        subject: visitorEmail.subject,
        html: visitorEmail.html,
        text: visitorEmail.text,
      });
    } catch (confError: any) {
      // Non-fatal if confirmation fails due to unverified sandbox email recipient in testing
      console.warn(
        "[SBDC Contact API] Visitor confirmation email could not be delivered:",
        confError?.message || confError,
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out. We will get back to you shortly.",
      },
      { status: 200 },
    );
  } catch (error: any) {
    console.error(
      "[SBDC Contact API] Unexpected error in contact route:",
      error?.message || error,
    );
    return NextResponse.json(
      {
        success: false,
        error:
          "An unexpected error occurred while processing your request. Please try again or reach out on WhatsApp.",
      },
      { status: 500 },
    );
  }
}
