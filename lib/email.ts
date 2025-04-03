import nodemailer from 'nodemailer';

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendThankYouEmail(to: string, name: string) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: 'Thank You for Contacting Excel Engineers',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank You for Contacting Excel Engineers</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to us. We have received your message and will get back to you shortly.</p>
          <p>Our team will review your inquiry and respond within 24-48 hours.</p>
          <p>If you have any urgent queries, please feel free to call us at +91 90672 73011.</p>
          <br>
          <p>Best regards,</p>
          <p>Excel Engineers Team</p>
          <br>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 5px;">
            <p style="margin: 0;">Excel Engineers</p>
            <p style="margin: 0;">Gat No. 79, Bhalekar Chowk, Jyotiba Nagar, Talwade, Pune, Maharashtra 412114</p>
            <p style="margin: 0;">Phone: +91 90672 73011</p>
            <p style="margin: 0;">Email: info@excelengineers.com</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
} 