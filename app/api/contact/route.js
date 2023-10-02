import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
    },
});

export const POST = async (req) => {
    const { name, email, phone, subject, budget, message } = await req.json();
    const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: email,
        name: name,
        phone: phone,
        subject: subject,
        budget: budget,
        text: { message },
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({
            status: "success",
            message: "Your message has been sent!",
        });
    } catch (err) {
        NextResponse.json({
            status: "error",
            message: "Something went wrong. Please try again later.",
        });
    }
};
