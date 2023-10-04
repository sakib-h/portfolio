import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});

export const POST = async (req) => {
    const { name, email, phone, subject, budget, message } = await req.json();
    const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: process.env.NODEMAILER_EMAIL,
        subject: subject,
        text: `Hi, I'm ${name}. My contact number is ${phone} and my email is ${email}. I would like to discuss ${subject} with you. My budget is $${budget}. Also ${message}`,
    };

    try {
        transporter.sendMail(mailOptions);
        return NextResponse.json({
            status: "success",
            message: "Your message has been sent!",
        });
    } catch (err) {
        return NextResponse.json({
            status: "error",
            message: "Something went wrong. Please try again later.",
        });
    }
};
