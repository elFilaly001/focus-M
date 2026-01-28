import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      sector,
      screenCount,
      preferredDate,
      additionalInfo
    } = await request.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !company) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${process.env.SMTP_FROM}>`, // Shows user's name but sends from Gmail
      replyTo: email, // Reply goes to user's email
      to: process.env.NEXT_EMAIL_TO || 'contact@focusm.ma',
      subject: `Demo Request from ${firstName} ${lastName}`,
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Sector:</strong> ${sector || 'Not specified'}</p>
        <p><strong>Screen Count:</strong> ${screenCount || 'Not specified'}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate || 'Not specified'}</p>
        <p><strong>Additional Info:</strong></p>
        <p>${additionalInfo ? additionalInfo.replace(/\n/g, '<br>') : 'None'}</p>
      `,
    };

    // Send email
    const result = await transporter.sendMail(mailOptions);
    console.log('Demo email sent successfully:', result.messageId);
    return NextResponse.json({ message: 'Demo request sent successfully', messageId: result.messageId });
  } catch (error) {
    console.error('Error sending demo email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: 'Failed to send demo request', details: errorMessage }, { status: 500 });
  }
}