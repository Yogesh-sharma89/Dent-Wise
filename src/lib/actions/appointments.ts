'use server'
import { auth } from "@clerk/nextjs/server";
import { prisma } from "../prisma"
import { AppointmentStatus } from "@/generated/enums";
import { revalidatePath } from "next/cache";

export async function getAppointments(){
    try{

        const appointments = await prisma.appointment.findMany({
            include:{
                user:{
                    select:{
                        firstName:true,lastName:true, email:true
                    }
                },
                doctor:{
                    select:{
                        name:true,
                        imageUrl:true
                    }
                },
                

            },
            orderBy:{createdAt:'desc'}
        })

        return appointments;

    }catch(err){
        console.log('Error while fetching appointments : '+err)
        throw new Error('Failed to fetch appoointments')
    }
}

export async function getUserAppointmentsData(){
    try{

        const {userId} = await auth();

        if(!userId) throw new Error('You are not authenticated');

        const user = await prisma.user.findUnique({where:{clerkId:userId}});

        if(!user) throw new Error("User doesn't exist");

        //get totalappoimatn count related to that user and completed appointments also

        const [totalAppointments,completedAppointments] = await Promise.all([
            prisma.appointment.count({
                where:{userId:user.id}
            }),

            prisma.appointment.count({
                where:{
                    userId:user.id,
                    status:'completed'
                }
            })
        ])

        return {
            totalAppointments,
            completedAppointments
        }
    }catch(err){
        console.log('Error in fetching user appointments data : '+err);
        return {totalAppointments:0,completedAppointments:0};

    }
}


export async function getUserAppointments(){
  try{

    const {userId} = await auth();

    if(!userId) throw new Error('User is not authenticated');

    const user = await prisma.user.findUnique({
        where:{clerkId:userId}
    })

    if(!user) throw new Error('User data not found!')


    const userAppointmentsData = await prisma.appointment.findMany({
        where:{userId:user.id},
        include:{
            user:{select:{firstName:true,lastName:true,email:true}},
            doctor:{select:{name:true,imageUrl:true,speciality:true}}
        },
        orderBy:[{date:'asc'},{time:'asc'}]
    })

    return userAppointmentsData.map((appointment)=>(
        {
            ...appointment,
            patientName:`${appointment.user.firstName} ${appointment.user.lastName}`.trim(),
            patientEmail:`${appointment.user.email}`.trim(),
            doctorName:`${appointment.doctor.name}`.trim(),
            doctorSpeciality:`${appointment.doctor.speciality}`,
            doctorImageUrl :`${appointment.doctor.imageUrl}`,
            date:`${appointment.date.toISOString().split('T')[0]}`
        }
    ))

  }catch(err){
    console.log('Error in fetching user all appointements : '+err);
    return [];

  }
}


export async function getBookedTimeSlots(doctorId:string,date:string){
    try{

        const appointments = await prisma.appointment.findMany({
            where:{
                doctorId,
                date:new Date(date), 
                status:{
                    in:['completed','confirmed']
                }
            },
            select:{time:true}
        })

         return appointments.map((appointment)=>appointment.time)

    }catch(err){
       console.log('Error in fetching particualr doctor booked time slot : '+err);
       throw new Error('Failed to fetch doctors booked time');
    }
}

interface BookAppointment{
doctorId:string,
date:string,
time:string,
reason?:string
}

export async function bookAppointment(input:BookAppointment){
    try{

        const {userId} = await auth();

        if(!userId) throw new Error('Please auhenticate on our platform before booking an appointment')

        if(!input.doctorId || !input.date || !input.time) throw new Error('doctor, name and date are required to book an appointment')


       const user = await prisma.user.findUnique({where:{clerkId:userId}});

      if(!user) throw new Error('User not found! Please set up your account properly before booking an appointment')

      const newAppointment = await prisma.appointment.create({
        data:{
            doctorId:input.doctorId,
            userId:user.id,
            date:new Date(input.date),
            time:input.time,
            reason:input.reason || 'General Consultation',
            status:'confirmed'
        },
        include:{
            user:{
                select:{firstName:true,lastName:true,email:true}
            },
            doctor:{select:{name:true,email:true,imageUrl:true}}
        }

      })

      revalidatePath('/appointments');

      return newAppointment;

    }catch(err){
        console.log('Error in booking a new appoinment '+err);
        throw new Error('Failed to book an appointment');
    }
}


export async function updateAppointmentStatus(input:{id:string,status:AppointmentStatus}){
    try{

        const {userId} = await auth();

        if(!userId){
            throw new Error('User is not authenticated on our platform')
        }

        const user = await prisma.user.findUnique({where:{clerkId:userId}});

        if(!user){
            throw new Error('User not found ! please set up your account properly')
        }

        if(user.email !== process.env.ADMIN_EMAIL){
            throw new Error('Only admin can update appointment status')
        }

    const updatedAppointment = await prisma.appointment.update({
        where:{id:input.id},
        data:{status:input.status}
    })

    revalidatePath('/admin');

    return updatedAppointment;

    }catch(err){
        console.log('Error in updating the appointment status : '+err);
        throw new Error('Failed to update Appointment status.')
    }
}



