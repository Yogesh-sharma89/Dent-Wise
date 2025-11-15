'use server'
import { auth } from "@clerk/nextjs/server";
import { prisma } from "../prisma"

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


    const userAppoitmentsData = await prisma.appointment.findMany({
        where:{userId:user.id},
        include:{
            user:{select:{firstName:true,lastName:true,email:true}},
            doctor:{select:{name:true,imageUrl:true,speciality:true}}
        },
        orderBy:[{date:'asc'},{time:'asc'}]
    })

    return userAppoitmentsData.map((appointment)=>(
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

  }
}



