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
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT || '465'),
      secure: process.env.MAIL_ENCRYPTION === 'ssl',
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      replyTo: email,
      to: process.env.MAIL_FROM_ADDRESS,
      subject: `Demo Request from ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" cellpadding="0" cellspacing="0">
                  <!-- Header -->
                  <tr>
                    <td style="background-color: #C52133; padding: 30px 40px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">FocusM</h1>
                      <p style="margin: 8px 0 0 0; color: #ffffff; font-size: 14px; opacity: 0.9;">Nouvelle Demande de Démonstration</p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding-bottom: 24px;">
                            <h2 style="margin: 0 0 16px 0; color: #162030; font-size: 18px; font-weight: 600;">Informations de Contact</h2>
                            <table width="100%" cellpadding="8" cellspacing="0" style="border: 1px solid #e5e7eb; border-radius: 6px;">
                              <tr>
                                <td style="background-color: #f9fafb; font-weight: 600; color: #162030; width: 160px; border-bottom: 1px solid #e5e7eb;">Nom</td>
                                <td style="color: #374151; border-bottom: 1px solid #e5e7eb;">${firstName} ${lastName}</td>
                              </tr>
                              <tr>
                                <td style="background-color: #f9fafb; font-weight: 600; color: #162030; border-bottom: 1px solid #e5e7eb;">Email</td>
                                <td style="color: #374151; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${email}" style="color: #C52133; text-decoration: none;">${email}</a></td>
                              </tr>
                              <tr>
                                <td style="background-color: #f9fafb; font-weight: 600; color: #162030; border-bottom: 1px solid #e5e7eb;">Téléphone</td>
                                <td style="color: #374151; border-bottom: 1px solid #e5e7eb;">${phone}</td>
                              </tr>
                              <tr>
                                <td style="background-color: #f9fafb; font-weight: 600; color: #162030;">Entreprise</td>
                                <td style="color: #374151;">${company}</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        
                        <tr>
                          <td style="padding-bottom: 24px;">
                            <h2 style="margin: 0 0 16px 0; color: #162030; font-size: 18px; font-weight: 600;">Détails de la Démonstration</h2>
                            <table width="100%" cellpadding="8" cellspacing="0" style="border: 1px solid #e5e7eb; border-radius: 6px;">
                              <tr>
                                <td style="background-color: #f9fafb; font-weight: 600; color: #162030; width: 160px; border-bottom: 1px solid #e5e7eb;">Secteur</td>
                                <td style="color: #374151; border-bottom: 1px solid #e5e7eb;">${sector || 'Non spécifié'}</td>
                              </tr>
                              <tr>
                                <td style="background-color: #f9fafb; font-weight: 600; color: #162030; border-bottom: 1px solid #e5e7eb;">Nombre d'Écrans</td>
                                <td style="color: #374151; border-bottom: 1px solid #e5e7eb;">${screenCount || 'Non spécifié'}</td>
                              </tr>
                              <tr>
                                <td style="background-color: #f9fafb; font-weight: 600; color: #162030;">Date Préférée</td>
                                <td style="color: #374151;">${preferredDate || 'Non spécifié'}</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        
                        ${additionalInfo ? `
                        <tr>
                          <td>
                            <h2 style="margin: 0 0 12px 0; color: #162030; font-size: 16px; font-weight: 600;">Informations Complémentaires</h2>
                            <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px; color: #374151; line-height: 1.6;">
                              ${additionalInfo.replace(/\n/g, '<br>')}
                            </div>
                          </td>
                        </tr>
                        ` : ''}
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #162030; padding: 24px 40px; text-align: center;">
                      <p style="margin: 0; color: #ffffff; font-size: 12px; opacity: 0.8;">Cette demande de démonstration a été envoyée depuis votre site web FocusM</p>
                      <p style="margin: 8px 0 0 0; color: #ffffff; font-size: 12px; opacity: 0.8;">© ${new Date().getFullYear()} FocusM. Tous droits réservés.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
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