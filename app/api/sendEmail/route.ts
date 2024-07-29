import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  return NextResponse.json({ message: "error" }, { status: 405 });
}

export async function POST(request: any) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.MAIL_TO,
      subject: `Contact Us Form Submission from ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
