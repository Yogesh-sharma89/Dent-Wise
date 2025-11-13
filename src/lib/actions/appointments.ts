'use server'
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