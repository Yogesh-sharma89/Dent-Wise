"use server"
import { Gender } from "@/generated/enums";
import { prisma } from "../prisma";
import { generateAvtar } from "../utils";
import { revalidatePath } from "next/cache";


 

export async function getDoctors(){
    try{
        
        const doctors = await prisma.doctor.findMany({
            include:{
                _count:{select:{appointments:true}}
            },
            orderBy:{createdAt:'desc'}
        })

        return doctors.map(doctor=>(
            {
                ...doctor,
                appointmentCount:doctor._count.appointments
            }
        ))

    }catch(err){
        console.log('Error while fetchig doctors in actions : '+err);
    }
} 


interface doctorInput{
    name:string,
    email:string,
    phone:string,
    speciality:string,
    gender:Gender,
    isActive:boolean,
}

export async function createDoctor(input:doctorInput){
    try{

        if(!input.name || !input.email){
            throw new Error('name and email are required');
        }

        const newDoctor = await prisma.doctor.create({
            data:{
                ...input,
                imageUrl:generateAvtar(input.name,input.gender)
            }
        })

        revalidatePath('/admin');

        return newDoctor;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(err:any){
        console.log('Error while creating new doctors : '+err);

       if(err?.code==='P2002'){
         throw new Error('A doctor with email alreday exists')
       } 

        throw new Error('Failed to create new doctor')
    }
}


interface editInput extends Partial<doctorInput>{
  id:string
}

export async function editDoctor(input:editInput){
   try{
      
     //validate coming input 
     if(!input.name || !input.email || !input.speciality) throw new Error("Name, email and speciality are required")

    // get that doctors which is going to be update 
    const currentDoctor = await prisma.doctor.findUnique({
        where:{id:input.id}, select:{email:true, id:true}
    })

    if(!currentDoctor) throw new Error('Doctor not found!')


    //if user change email then also check if that new email is existed in our db or not ??

    if(currentDoctor.email !== input.email){ //it means email is changing 

        const existingUser = await prisma.doctor.findUnique({
            where:{email:input.email}
        })

        if(existingUser) throw new Error('A doctor alreday exists with this email')

        //now we will finally update doctor 

    }

    const updatedDoctor = await prisma.doctor.update({
        where:{id:input.id},
        data:{
            name:input.name,
            email:input.email,
            speciality:input.speciality,
            gender:input.gender,
            phone:input.phone,
            isActive:input.isActive
        }
    })

    return updatedDoctor;

   }catch(err){
    console.log("error occured while editing doctor in action doctor : "+err);
    throw new Error("Failed to edit doctor in editdoctor sever function")
   }
}


export async function getAvailableDoctors(){
    try{

        const availableDoctors = await prisma.doctor.findMany({
            where:{isActive:true},
            include:{
                _count:{
                    select:{appointments:true}
                }
            },
            orderBy:{name:'asc'}
        })

        return availableDoctors.map((doctor)=>(
            {
                ...doctor,appointmentCount:doctor._count.appointments
            }
        ))

    }catch(err){
        console.log('Error occured while fetching available doctors : '+err);
        throw new Error('Failed to fetch available doctors');
    }
}


export async function getUniqueDoctor(doctorId:string){
    try{

        const doctor = await prisma.doctor.findUnique({
            where:{id:doctorId},
            select:{name:true,email:true,speciality:true,imageUrl:true}
        })

        return doctor;

    }catch(err){
        console.log('Error in fetching unique doctor details '+err);
        throw new Error('Failed to fetch specific doctor information');
    }
}