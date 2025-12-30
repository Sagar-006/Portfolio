import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";


const userData:any = [];
export async function POST(req:NextRequest){

    try{
        const { name, email, phone, message } = await req.json();

        if(!email || !phone || !message){
            return NextResponse.json(
                {error:"Missing required fields"},
                {status:400}
            );
        }

        if(!email.includes("@")){
            return NextResponse.json(
                {error:"Invalid Email"},
                {status:400}
            )
        }

        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: email,
          to: process.env.EMAIL,
          subject: "New Porfolio Contact",
          text: `Name:${name},Phone:${phone},Email:${email},Message:${message}`,
        });

        return Response.json({ success: true },{status:200});
    }catch(e){
        console.error("Email error:", error);

    return NextResponse.json(
        { success: false, message: "Email failed" },
      { status: 500 }
    )
}
}