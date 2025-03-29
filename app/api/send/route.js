// src/app/api/send/route.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email, name, message } = await request.json();

    // Send the email using Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>', // Replace with your verified domain
      to: process.env.RESEND_EMAIL, // Your email address
      subject: `New message from ${name} (${email})`,
      text: message,
    });

    console.log('Email sent:', data);
    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Failed to send message.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}