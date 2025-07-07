import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: "All fields are required." }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `Portfolio Contact <${process.env.EMAIL_USER}>`,
      to: "sobansaeed21@gmail.com",
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`
    });

    return new Response(JSON.stringify({ message: "Message sent successfully!" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to send message. Please try again later." }), { status: 500 });
  }
} 