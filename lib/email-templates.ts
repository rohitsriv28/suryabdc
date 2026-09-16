import { BRAND } from "@/lib/constants";

/**
 * Escapes HTML characters in untrusted user strings to prevent HTML injection in emails.
 */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export interface ContactEmailPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  submittedAt: string;
  clientIp?: string;
}

/**
 * Internal Notification Email sent to SBDC staff (suryabusinessdc@gmail.com)
 */
export function generateInternalNotificationEmail(data: ContactEmailPayload): {
  subject: string;
  html: string;
  text: string;
} {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safePhone = data.phone ? escapeHtml(data.phone) : "Not provided";
  const safeSubject = escapeHtml(data.subject);
  const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br />");
  const safeTimestamp = escapeHtml(data.submittedAt);

  const subject = `[SBDC Inquiry] ${data.subject} - ${data.name}`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f4; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1c1917;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f5f4; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e7e5e4; box-shadow: 0 4px 12px rgba(0,0,0,0.05);" cellspacing="0" cellpadding="0">
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #3B1113; padding: 28px 32px; border-bottom: 4px solid #F36A21;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <div style="color: #F36A21; font-size: 11px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 6px;">
                      WEBSITE CONTACT NOTIFICATION
                    </div>
                    <h1 style="color: #ffffff; font-size: 22px; font-weight: 700; margin: 0; line-height: 1.3;">
                      New Inquiry Received
                    </h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px;">
              <p style="font-size: 14px; line-height: 1.6; color: #44403c; margin: 0 0 24px 0;">
                A visitor has submitted a new inquiry through the official SBDC website contact form.
              </p>

              <!-- Visitor Details Box -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #fafaf9; border-radius: 12px; border: 1px solid #e7e5e4; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #e7e5e4; width: 35%; font-size: 12px; font-weight: 700; color: #78716c; text-transform: uppercase; letter-spacing: 0.5px;">
                    Full Name
                  </td>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #e7e5e4; font-size: 14px; font-weight: 600; color: #1c1917;">
                    ${safeName}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #e7e5e4; font-size: 12px; font-weight: 700; color: #78716c; text-transform: uppercase; letter-spacing: 0.5px;">
                    Email Address
                  </td>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #e7e5e4; font-size: 14px; color: #1c1917;">
                    <a href="mailto:${safeEmail}" style="color: #F36A21; text-decoration: none; font-weight: 600;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #e7e5e4; font-size: 12px; font-weight: 700; color: #78716c; text-transform: uppercase; letter-spacing: 0.5px;">
                    Phone Number
                  </td>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #e7e5e4; font-size: 14px; color: #1c1917;">
                    ${safePhone}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #e7e5e4; font-size: 12px; font-weight: 700; color: #78716c; text-transform: uppercase; letter-spacing: 0.5px;">
                    Subject / Topic
                  </td>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #e7e5e4; font-size: 14px; font-weight: 600; color: #3B1113;">
                    ${safeSubject}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 20px; font-size: 12px; font-weight: 700; color: #78716c; text-transform: uppercase; letter-spacing: 0.5px;">
                    Submitted At
                  </td>
                  <td style="padding: 16px 20px; font-size: 13px; color: #78716c;">
                    ${safeTimestamp}
                  </td>
                </tr>
              </table>

              <!-- Message Section -->
              <div style="margin-bottom: 24px;">
                <div style="font-size: 12px; font-weight: 700; color: #78716c; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                  Message Body
                </div>
                <div style="background-color: #fffaf5; border-left: 4px solid #F36A21; padding: 18px 20px; border-radius: 0 12px 12px 0; font-size: 14px; line-height: 1.7; color: #292524; border-top: 1px solid #fed7aa; border-right: 1px solid #fed7aa; border-bottom: 1px solid #fed7aa;">
                  ${safeMessage}
                </div>
              </div>

              <!-- Quick Reply Action Tip -->
              <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 14px 18px; font-size: 13px; color: #166534; line-height: 1.5;">
                <strong>Quick Reply:</strong> Click <em>Reply</em> in your email client to respond directly to <strong>${safeName}</strong> at <strong>${safeEmail}</strong>.
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #fafaf9; border-top: 1px solid #e7e5e4; padding: 20px 32px; font-size: 12px; color: #a8a29e; text-align: center;">
              Surya Business Development Center Pvt. Ltd. (SBDC) &bull; ${BRAND.address}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  const text = `
NEW CONTACT INQUIRY - SURYA BDC
---------------------------------------------
A visitor has submitted an inquiry via the SBDC website contact form.

Visitor Details:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone || "Not provided"}
- Subject: ${data.subject}
- Timestamp: ${data.submittedAt}

Message Body:
---------------------------------------------
${data.message}
---------------------------------------------

You can reply directly to this email to respond to ${data.name} (${data.email}).

Surya Business Development Center Pvt. Ltd.
Birgunj, Parsa, Madhesh Province, Nepal
  `.trim();

  return { subject, html, text };
}

/**
 * Visitor Confirmation Email sent to the user acknowledging inquiry receipt
 */
export function generateVisitorConfirmationEmail(data: {
  name: string;
  subject: string;
  message: string;
}): {
  subject: string;
  html: string;
  text: string;
} {
  const safeName = escapeHtml(data.name);
  const safeSubject = escapeHtml(data.subject);
  const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br />");

  const subject = `We have received your message - Surya Business Development Center`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f4; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1c1917;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f5f4; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e7e5e4; box-shadow: 0 4px 12px rgba(0,0,0,0.05);" cellspacing="0" cellpadding="0">
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #3B1113; padding: 32px; border-bottom: 4px solid #F36A21; text-align: center;">
              <div style="color: #F36A21; font-size: 11px; font-weight: 800; letter-spacing: 2.5px; text-transform: uppercase; margin-bottom: 8px;">
                SURYA BUSINESS DEVELOPMENT CENTER
              </div>
              <h1 style="color: #ffffff; font-size: 22px; font-weight: 700; margin: 0; line-height: 1.3;">
                Thank You for Reaching Out
              </h1>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 36px 32px;">
              <p style="font-size: 16px; font-weight: 600; color: #1c1917; margin: 0 0 16px 0;">
                Dear ${safeName},
              </p>
              <p style="font-size: 14px; line-height: 1.7; color: #44403c; margin: 0 0 20px 0;">
                Thank you for contacting <strong>Surya Business Development Center Pvt. Ltd. (SBDC)</strong>. We have successfully received your inquiry regarding <strong>&ldquo;${safeSubject}&rdquo;</strong>.
              </p>
              <p style="font-size: 14px; line-height: 1.7; color: #44403c; margin: 0 0 28px 0;">
                Our advisory team is reviewing your message and will respond within <strong>24 to 48 business hours</strong> (Sunday &ndash; Friday, 9:00 AM &ndash; 5:00 PM NPT).
              </p>

              <!-- Reference Summary -->
              <div style="background-color: #fafaf9; border-radius: 12px; border: 1px solid #e7e5e4; padding: 20px; margin-bottom: 28px;">
                <div style="font-size: 11px; font-weight: 800; color: #78716c; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
                  Your Message Reference
                </div>
                <div style="font-size: 13px; line-height: 1.6; color: #57534e; font-style: italic;">
                  &ldquo;${safeMessage}&rdquo;
                </div>
              </div>

              <!-- Direct Channels Card -->
              <div style="background-color: #fffaf5; border: 1px solid #fed7aa; border-radius: 12px; padding: 20px; margin-bottom: 16px;">
                <div style="font-size: 12px; font-weight: 800; color: #c2410c; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px;">
                  Need Immediate Assistance?
                </div>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="font-size: 13px; color: #44403c; line-height: 1.6;">
                  <tr>
                    <td style="padding-bottom: 6px; font-weight: 600; width: 30%;">Phone:</td>
                    <td style="padding-bottom: 6px;"><a href="tel:${BRAND.phone}" style="color: #F36A21; text-decoration: none;">${BRAND.phone}</a></td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 6px; font-weight: 600;">Email:</td>
                    <td style="padding-bottom: 6px;"><a href="mailto:${BRAND.email}" style="color: #F36A21; text-decoration: none;">${BRAND.email}</a></td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600;">Office Hours:</td>
                    <td>${BRAND.officeHours}</td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #fafaf9; border-top: 1px solid #e7e5e4; padding: 24px 32px; font-size: 12px; color: #78716c; text-align: center; line-height: 1.6;">
              <strong style="color: #3B1113;">${BRAND.name}</strong><br />
              ${BRAND.address}<br />
              <a href="https://www.suryabdc.com.np" style="color: #F36A21; text-decoration: none; font-weight: 600;">www.suryabdc.com.np</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  const text = `
Dear ${data.name},

Thank you for contacting Surya Business Development Center Pvt. Ltd. (SBDC).

We have received your message regarding "${data.subject}". Our team will review your inquiry and get back to you within 24–48 business hours (Sunday – Friday: 9:00 AM – 5:00 PM NPT).

Your Message:
"${data.message}"

Need immediate assistance?
- Phone: ${BRAND.phone}
- Email: ${BRAND.email}
- Office Hours: ${BRAND.officeHours}
- Address: ${BRAND.address}

Website: https://www.suryabdc.com.np
  `.trim();

  return { subject, html, text };
}
