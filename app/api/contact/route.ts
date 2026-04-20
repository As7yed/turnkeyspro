import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract form fields
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const propertyAddress = formData.get('property-address') as string;
    const message = formData.get('message') as string;
    const requestEstimate = formData.get('request-estimate') === 'yes';

    // Map service values to display names
    const serviceDisplayNames: Record<string, string> = {
      'make-ready': 'Make-Ready Turnover',
      'repair': 'Repair & Maintenance',
      'refresh': 'Refresh & Finishes',
      'cleanout': 'Clean-out / Haul-away',
      'portfolio': 'Portfolio / PM Program',
      'other': 'General Inquiry'
    };

    const serviceDisplay = serviceDisplayNames[service] || 'General Inquiry';
    const subject = `New ${serviceDisplay} request from ${name}`;

    // Send email with beautiful HTML template
    const { data, error } = await resend.emails.send({
      from: 'TurnKey Pros Contact Form <noreply@turnkeyprosusa.com>',
      to: 'admin@turnkeyprosusa.com',
      replyTo: email || undefined, // Allows you to reply directly to the customer (only if valid)
      subject: subject,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${subject}</title>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                background-color: #f5f5f5;
                margin: 0;
                padding: 0;
              }
              .email-container {
                max-width: 600px;
                margin: 40px auto;
                background: #ffffff;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .email-header {
                background: #1e293b;
                color: #ffffff;
                padding: 40px 30px;
                text-align: center;
                border-bottom: 4px solid #F0702F;
              }
              .email-header img {
                max-width: 200px;
                height: auto;
                margin-bottom: 20px;
              }
              .email-header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 700;
              }
              .email-header p {
                margin: 8px 0 0 0;
                font-size: 14px;
                opacity: 0.9;
              }
              .email-body {
                padding: 40px 30px;
              }
              .actions {
                display: flex;
                gap: 12px;
                flex-wrap: wrap;
                margin-bottom: 28px;
              }
              .action-btn {
                display: inline-block;
                text-decoration: none;
                border-radius: 8px;
                font-size: 14px;
                font-weight: 600;
                padding: 12px 18px;
              }
              .action-btn-primary {
                background: #F0702F;
                color: #ffffff;
              }
              .action-btn-secondary {
                background: #334155;
                color: #ffffff;
              }
              .info-section {
                margin-bottom: 30px;
              }
              .info-label {
                font-size: 12px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                color: #666;
                margin-bottom: 8px;
              }
              .info-value {
                font-size: 16px;
                color: #111827;
                font-weight: 500;
                padding: 12px 16px;
                background: #f5f6f8;
                border-left: 4px solid #F0702F;
                border-radius: 4px;
              }
              .info-value a {
                color: #F0702F;
                text-decoration: none;
                font-weight: 600;
              }
              .info-value a:hover {
                text-decoration: underline;
              }
              .message-box {
                background: #f5f6f8;
                border-left: 4px solid #F0702F;
                border-radius: 4px;
                padding: 20px;
                margin-top: 8px;
                white-space: pre-wrap;
                font-size: 15px;
                line-height: 1.8;
                color: #111827;
              }
              .estimate-badge {
                display: inline-block;
                background: #F0702F;
                color: white;
                padding: 6px 16px;
                border-radius: 20px;
                font-size: 13px;
                font-weight: 600;
                margin-top: 8px;
              }
              .request-alert {
                background: #fff8f4;
                border-left: 4px solid #F0702F;
                border-radius: 6px;
                padding: 12px 14px;
                margin-bottom: 24px;
                font-size: 14px;
                color: #111827;
                font-weight: 500;
              }
              .email-footer {
                background: #f8f8f8;
                padding: 24px 30px;
                text-align: center;
                border-top: 1px solid #e5e5e5;
              }
              .email-footer p {
                margin: 0;
                font-size: 13px;
                color: #666;
              }
              .divider {
                height: 1px;
                background: #d1d5db;
                margin: 30px 0;
              }

              /* Mobile Optimization */
              @media only screen and (max-width: 600px) {
                .email-container {
                  margin: 20px auto !important;
                  border-radius: 8px !important;
                }
                .email-header {
                  padding: 30px 20px !important;
                }
                .email-header img {
                  max-width: 150px !important;
                  margin-bottom: 15px !important;
                }
                .email-header h1 {
                  font-size: 20px !important;
                }
                .email-header p {
                  font-size: 13px !important;
                }
                .email-body {
                  padding: 30px 20px !important;
                }
                .info-section {
                  margin-bottom: 20px !important;
                }
                .info-label {
                  font-size: 11px !important;
                }
                .info-value {
                  font-size: 14px !important;
                  padding: 10px 12px !important;
                }
                .message-box {
                  font-size: 14px !important;
                  padding: 15px !important;
                }
                .estimate-badge {
                  font-size: 12px !important;
                  padding: 5px 12px !important;
                }
                .email-footer {
                  padding: 20px !important;
                }
                .email-footer p {
                  font-size: 12px !important;
                }
                .divider {
                  margin: 20px 0 !important;
                }
              }
            </style>
          </head>
          <body style="margin:0; padding:0; background-color:#f5f5f5;">
            <div style="display:none; max-height:0; overflow:hidden; opacity:0; mso-hide:all;">
              New ${serviceDisplay} request from ${name}. Open to view contact details and project notes.
            </div>
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#f5f5f5; margin:0; padding:24px 12px;">
              <tr>
                <td align="center">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="width:100%; max-width:600px;">
                    <tr>
                      <td style="background:#ffffff; border-radius:12px; overflow:hidden;">
                        <div class="email-container" style="margin:0; border-radius:12px; overflow:hidden; box-shadow:0 4px 6px rgba(0,0,0,0.1);">
              <!-- Header -->
              <div class="email-header" style="background:#1e293b; color:#ffffff; padding:40px 30px; text-align:center; border-bottom:4px solid #F0702F;">
                <img src="https://turnkeyprosusa.com/ResizedOrangeLogo.png" alt="TurnKey Pros" />
                <h1>New Service Request</h1>
                <p>${serviceDisplay}</p>
              </div>

              <!-- Body -->
              <div class="email-body">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom:28px;">
                  <tr>
                    <td align="left" style="padding:0;">
                      <a href="mailto:${email}" class="action-btn action-btn-primary" style="display:inline-block; text-decoration:none; border-radius:8px; font-size:14px; font-weight:600; padding:12px 18px; background:#F0702F; color:#ffffff; margin-right:8px;">Email ${name}</a>
                      <a href="tel:${phone}" class="action-btn action-btn-secondary" style="display:inline-block; text-decoration:none; border-radius:8px; font-size:14px; font-weight:600; padding:12px 18px; background:#334155; color:#ffffff;">Call ${phone}</a>
                    </td>
                  </tr>
                </table>

                ${requestEstimate ? `
                <div class="request-alert">
                  🔔 Free estimate requested for this project.
                </div>
                ` : ''}

                <!-- Customer Info -->
                <div class="info-section">
                  <div class="info-label">Customer Name</div>
                  <div class="info-value">${name}</div>
                </div>

                <div class="info-section">
                  <div class="info-label">Email Address</div>
                  <div class="info-value">
                    <a href="mailto:${email}">${email}</a>
                  </div>
                </div>

                <div class="info-section">
                  <div class="info-label">Phone Number</div>
                  <div class="info-value">
                    <a href="tel:${phone}">${phone}</a>
                  </div>
                </div>

                <div class="divider"></div>

                <!-- Service Details -->
                <div class="info-section">
                  <div class="info-label">Service Type</div>
                  <div class="info-value">${serviceDisplay}</div>
                </div>

                ${propertyAddress ? `
                <div class="info-section">
                  <div class="info-label">Property Address</div>
                  <div class="info-value">${propertyAddress}</div>
                </div>
                ` : ''}

                ${requestEstimate ? `
                <div class="info-section">
                  <div class="info-label">Estimate Requested</div>
                  <span class="estimate-badge">Free Estimate Requested</span>
                </div>
                ` : ''}

                <div class="divider"></div>

                <!-- Message -->
                <div class="info-section">
                  <div class="info-label">Project Details</div>
                  <div class="message-box">${message}</div>
                </div>
              </div>

              <!-- Footer -->
              <div class="email-footer" style="background:#f8f8f8; padding:24px 30px; text-align:center; border-top:1px solid #e5e5e5;">
                <p><strong>💡 Pro Tip:</strong> Click "Reply" to respond directly to ${name}</p>
                <p style="margin-top: 12px; color: #999; font-size: 12px;">
                  Sent from TurnKey Pros Contact Form • turnkeyprosusa.com
                </p>
              </div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    // Send confirmation email to customer
    if (email) {
      console.log('Attempting to send confirmation email to:', email);
      const { error: customerEmailError } = await resend.emails.send({
        from: 'TurnKey Pros <noreply@turnkeyprosusa.com>',
        to: email,
        replyTo: 'admin@turnkeyprosusa.com',
        subject: 'Thank you for contacting TurnKey Pros!',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Thank you for contacting TurnKey Pros!</title>
              <style>
                body {
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                  line-height: 1.6;
                  color: #333;
                  background-color: #f5f5f5;
                  margin: 0;
                  padding: 0;
                }
                .email-container {
                  max-width: 600px;
                  margin: 40px auto;
                  background: #ffffff;
                  border-radius: 12px;
                  overflow: hidden;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                .email-header {
                  background: #1e293b;
                  color: #ffffff;
                  padding: 40px 30px;
                  text-align: center;
                  border-bottom: 4px solid #F0702F;
                }
                .email-header img {
                  max-width: 200px;
                  height: auto;
                  margin-bottom: 20px;
                }
                .email-header h1 {
                  margin: 0;
                  font-size: 26px;
                  font-weight: 700;
                }
                .email-header p {
                  margin: 8px 0 0 0;
                  font-size: 15px;
                  opacity: 0.95;
                }
                .email-body {
                  padding: 40px 30px;
                }
                .greeting {
                  font-size: 18px;
                  color: #111827;
                  font-weight: 600;
                  margin-bottom: 20px;
                }
                .content-text {
                  font-size: 16px;
                  color: #374151;
                  line-height: 1.8;
                  margin-bottom: 16px;
                }
                .highlight-box {
                  background: #f5f6f8;
                  border-left: 4px solid #334155;
                  border-radius: 8px;
                  padding: 20px;
                  margin: 24px 0;
                }
                .highlight-box h3 {
                  margin: 0 0 12px 0;
                  color: #111827;
                  font-size: 18px;
                  font-weight: 700;
                }
                .highlight-box p {
                  margin: 0;
                  color: #111827;
                  font-size: 15px;
                  line-height: 1.6;
                }
                .info-section {
                  margin-bottom: 20px;
                }
                .info-label {
                  font-size: 12px;
                  font-weight: 600;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
                  color: #666;
                  margin-bottom: 6px;
                }
                .info-value {
                  font-size: 15px;
                  color: #111827;
                  font-weight: 500;
                  padding: 10px 14px;
                  background: #f5f6f8;
                  border-left: 3px solid #F0702F;
                  border-radius: 4px;
                }
                .contact-info {
                  background: #f8f9fa;
                  border-radius: 8px;
                  padding: 20px;
                  margin: 24px 0;
                  text-align: center;
                }
                .contact-info p {
                  margin: 8px 0;
                  font-size: 15px;
                  color: #374151;
                }
                .contact-info a {
                  color: #F0702F;
                  text-decoration: none;
                  font-weight: 600;
                }
                .contact-info a:hover {
                  text-decoration: underline;
                }
                .cta-button {
                  display: inline-block;
                  background: #F0702F;
                  color: white;
                  padding: 14px 32px;
                  border-radius: 8px;
                  text-decoration: none;
                  font-weight: 600;
                  font-size: 16px;
                  margin: 16px 0;
                  box-shadow: 0 4px 6px rgba(240, 112, 47, 0.25);
                }
                .cta-button:hover {
                  box-shadow: 0 6px 8px rgba(240, 112, 47, 0.35);
                }
                .email-footer {
                  background: #f8f8f8;
                  padding: 24px 30px;
                  text-align: center;
                  border-top: 1px solid #e5e5e5;
                }
                .email-footer p {
                  margin: 8px 0;
                  font-size: 13px;
                  color: #666;
                }
                .divider {
                  height: 1px;
                  background: #d1d5db;
                  margin: 30px 0;
                }

                /* Mobile Optimization */
                @media only screen and (max-width: 600px) {
                  .email-container {
                    margin: 20px auto !important;
                    border-radius: 8px !important;
                  }
                  .email-header {
                    padding: 30px 20px !important;
                  }
                  .email-header img {
                    max-width: 150px !important;
                    margin-bottom: 15px !important;
                  }
                  .email-header h1 {
                    font-size: 22px !important;
                  }
                  .email-header p {
                    font-size: 14px !important;
                  }
                  .email-body {
                    padding: 30px 20px !important;
                  }
                  .greeting {
                    font-size: 16px !important;
                  }
                  .content-text {
                    font-size: 15px !important;
                  }
                  .highlight-box {
                    padding: 16px !important;
                  }
                  .highlight-box h3 {
                    font-size: 16px !important;
                  }
                  .contact-info {
                    padding: 16px !important;
                  }
                  .cta-button {
                    padding: 12px 24px !important;
                    font-size: 15px !important;
                  }
                  .email-footer {
                    padding: 20px !important;
                  }
                }
              </style>
            </head>
            <body style="margin:0; padding:0; background-color:#f5f5f5;">
              <div style="display:none; max-height:0; overflow:hidden; opacity:0; mso-hide:all;">
                We received your request and will follow up within 24 hours.
              </div>
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#f5f5f5; margin:0; padding:24px 12px;">
                <tr>
                  <td align="center">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="width:100%; max-width:600px;">
                      <tr>
                        <td style="background:#ffffff; border-radius:12px; overflow:hidden;">
                          <div class="email-container" style="margin:0; border-radius:12px; overflow:hidden; box-shadow:0 4px 6px rgba(0,0,0,0.1);">
                <!-- Header -->
                <div class="email-header" style="background:#1e293b; color:#ffffff; padding:40px 30px; text-align:center; border-bottom:4px solid #F0702F;">
                  <img src="https://turnkeyprosusa.com/ResizedOrangeLogo.png" alt="TurnKey Pros" />
                  <h1>We Received Your Request</h1>
                  <p>Thank you for choosing TurnKey Pros</p>
                </div>

                <!-- Body -->
                <div class="email-body">
                  <p class="greeting">Hi ${name},</p>

                  <p class="content-text">
                    Thank you for reaching out to TurnKey Pros! We've successfully received your ${serviceDisplay.toLowerCase()} request and our team is reviewing it now.
                  </p>

                  <div class="highlight-box">
                    <h3>What Happens Next</h3>
                    <p>
                      One of our property service specialists will review your request and contact you within <strong>24 hours</strong> to discuss your project in detail and provide a customized solution.
                    </p>
                  </div>

                  <p class="content-text">
                    In the meantime, here's a summary of what you submitted:
                  </p>

                  <!-- Request Summary -->
                  <div class="info-section">
                    <div class="info-label">Service Type</div>
                    <div class="info-value">${serviceDisplay}</div>
                  </div>

                  ${propertyAddress ? `
                  <div class="info-section">
                    <div class="info-label">Property Address</div>
                    <div class="info-value">${propertyAddress}</div>
                  </div>
                  ` : ''}

                  ${requestEstimate ? `
                  <div class="info-section">
                    <div class="info-label">Free Estimate</div>
                    <div class="info-value">✓ Requested</div>
                  </div>
                  ` : ''}

                  <div class="divider"></div>

                  <!-- Contact Info -->
                  <div class="contact-info">
                    <p><strong>Need to reach us sooner?</strong></p>
                    <p>📞 Call us at: <a href="tel:+18669896587">(866) 989-6587</a></p>
                    <p>✉️ Email: <a href="mailto:admin@turnkeyprosusa.com">admin@turnkeyprosusa.com</a></p>
                  </div>

                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin:16px 0;">
                    <tr>
                      <td align="center">
                        <a href="https://turnkeyprosusa.com" class="cta-button" style="display:inline-block; background:#F0702F; color:#ffffff; padding:14px 32px; border-radius:8px; text-decoration:none; font-weight:600; font-size:16px;">Visit Our Website</a>
                      </td>
                    </tr>
                  </table>

                  <p class="content-text" style="margin-top: 30px;">
                    We look forward to making your property turn-key ready!
                  </p>

                  <p class="content-text" style="margin-top: 20px; font-weight: 600; color: #111827;">
                    Best regards,<br>
                    The TurnKey Pros Team
                  </p>
                </div>

                <!-- Footer -->
                <div class="email-footer" style="background:#f8f8f8; padding:24px 30px; text-align:center; border-top:1px solid #e5e5e5;">
                  <p><strong>TurnKey Pros</strong></p>
                  <p>Professional Property Services in Ohio & Texas</p>
                  <p style="margin-top: 12px; color: #999; font-size: 12px;">
                    This is an automated confirmation email. Please do not reply directly to this message.
                  </p>
                </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body>
          </html>
        `,
      });

      if (customerEmailError) {
        console.error('Customer confirmation email error:', customerEmailError);
        // Don't fail the whole request - admin email was sent successfully
      }
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
