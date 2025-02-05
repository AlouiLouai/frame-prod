import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { message } = await request.json();

  try {
    if (!process.env.EMAIL_TO) {
      return NextResponse.json(
        { message: "EMAIL_TO is not set in environment variables" },
        { status: 400 }
      );
    }
    // Send the email using Resend
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.EMAIL_TO,
      subject: "Hello World",
      html: `<p>${message}!</p>`,
    });

    return NextResponse.json({ message: "Email sent successfully!", data });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
