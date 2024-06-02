import nodemailer from "nodemailer";
import getOtpMailBody from "./otpMailBody";

export const sendVerificationEmail = async (email: string, otp: number) => {
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let info = await transporter.sendMail({
    from: '"Style Share" <yourapp@example.com>',
    to: email,
    subject: "Email Verification",
    text: `Your OTP for email verification is ${otp}`,
    html: getOtpMailBody(otp),
  });
};
