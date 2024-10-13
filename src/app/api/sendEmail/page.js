import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    console.log('Received request with data:', { name, email, subject, message }); // Add debug log

    // Create a Nodemailer transporter using Gmail or another service
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASSWORD, // Your email password
      },
    });

    // Send the email
    const mailResponse = await transporter.sendMail({
      from: process.env.EMAIL_USER, // Sender email (your email)
      to: process.env.EMAIL_TO, // Your receiving email address
      replyTo: email, // Set reply-to to the email of the person who submitted the form
      subject: `New message from ${name}: ${subject}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    console.log('Mail response:', mailResponse); // Log the mail response for debugging
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Failed to send email', error: error.message }), { status: 500 });
  }
}
