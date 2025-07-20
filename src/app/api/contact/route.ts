import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    console.log("🔍 EMAIL_USER:", process.env.EMAIL_USER);
    console.log("🔍 EMAIL_PASS:", process.env.EMAIL_PASS ? "✅ SET" : "❌ MISSING");
    console.log("🔍 EMAIL_SERVICE:", process.env.EMAIL_SERVICE);
    console.log("🔍 TO_EMAIL:", process.env.TO_EMAIL);

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Mail to your email (contact form submission)
    const adminMailOptions = {
      from: `"${firstName} ${lastName}" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL,
      subject: '📬 New Contact Form Submission',
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ccc; border-radius: 10px; background: #f9f9f9;">
          <h2 style="color: #6a0dad;">📨 Contact Form Submission</h2>
          <p><strong>👤 Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>📧 Email:</strong> ${email}</p>
          <p><strong>📱 Phone:</strong> ${phone || 'Not Provided'}</p>
          <p><strong>💬 Message:</strong></p>
          <div style="background: #fff; padding: 10px; border-radius: 8px; border: 1px solid #eee;">
            ${message.replace(/\n/g, "<br />")}
          </div>
          <br />
          <p style="font-size: 12px; color: #999;">Sent via portfolio contact form</p>
        </div>
      `,
    };

    // ✅ Mail to user (Thank You reply)
    const userMailOptions = {
      from: `"Krinal Raval" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: '🙏 Thank You for Contacting Us!',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border-radius: 10px; background: #f0f8ff;">
          <h2 style="color: #007acc;">Hey ${firstName},</h2>
          <p>Thank you for reaching out! 🙌</p>
          <p>We’ve received your message and will get back to you as soon as possible.</p>
          <hr style="margin: 20px 0;" />
          <p><em>Your Message:</em></p>
          <blockquote style="background: #fff; padding: 10px 15px; border-left: 4px solid #007acc;">
            ${message.replace(/\n/g, "<br />")}
          </blockquote>
          <br />
          <p>Best regards,<br/><strong>Krinal Raval</strong></p>
        </div>
      `,
    };

    // 🔄 Send both emails
    await transporter.sendMail(adminMailOptions); // to you
    await transporter.sendMail(userMailOptions);  // to user

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('❌ Email send error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send email. Please check server logs or try again later.',
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
