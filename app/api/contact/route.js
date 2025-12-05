import nodemailer from 'nodemailer';
import { NextResponse } from "next/server";

export async function POST(request) {


    try {
        const body = await request.json();
        console.log('📬 Received body:', body);
        console.log('📬 Body type:', typeof body);
        console.log('📬 Body keys:', Object.keys(body));
        const { name, email, message } = body;
        console.log('📝 Extracted values:');
        console.log('  - name:', name);
        console.log('  - email:', email);
        console.log('  - message:', message);

        if (!name || !email || !message) {
            console.error('❌ Missing required fields');
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('❌ Environment variables missing!');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Create transporter (using Gmail as example)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // your-email@gmail.com
                pass: process.env.EMAIL_PASS, // App password from Gmail
            },
        });

        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `Portfolio Contact from ${name}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
            text:`
            New Contact Form Submission
            
            name: ${name}
            Email: ${email}
            Message: ${message}
            `
        });

        return NextResponse.json({
            success: true,
            messageId: info.messageId
        });
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json(
            {
                error: 'Failed to send email',
                details: error.message
            },
            { status: 500 }
        );
    }
}