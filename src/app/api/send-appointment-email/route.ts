import AppointmentConfirmationEmail from "@/components/AppointmentConfirmationEmail";
import resend from "@/lib/resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    try{

        const body = await request.json();

        const {
            userEmail,
            doctorName,
            appointmentDate,
            appointmentType,
            appointmentTime,
            duration,
            price
        } = body;

        if(!userEmail || !doctorName || !appointmentDate || !appointmentTime){
            return NextResponse.json({error:'Missing required fields'},{status:400})
        }

        const {data,error} = await resend.emails.send({
            from:'DentWise <no-reply@resend.dev>',
            to:[userEmail],
            subject:'Appointment Confirmation - DentWise (Owned by Yogesh Sharma)',
            react:AppointmentConfirmationEmail({ doctorName,
            appointmentDate,
            appointmentType,
            appointmentTime,
            duration,
            price})
        })

        if(error){
            console.log('Resend eror : '+error);
            return NextResponse.json({error:'Failed to send email'},{status:500})
        }

        return NextResponse.json({message:'Email sent successfully',status:200,emailId:data.id})

    }catch(err){
        console.log('Failed to send email : '+err)
        return NextResponse.json({error:'Server side error'},{status:500})
    }
}