'use server'

import { currentUser } from "@clerk/nextjs/server";
import {prisma} from '../prisma';


<<<<<<< HEAD

=======
>>>>>>> 626e70d97c703b4abdfcfac8f244c627c481c305
export async function AddUserToDb(){

    try{

        const user  = await currentUser();

        if(!user){
            console.log('user not authenticated')
            return ;
        }

        //If user is authenticated then check if user alreday in Db or not 

        const existingUser = await prisma.user.findUnique({ where:{clerkId : user.id}})

        if(existingUser) return existingUser;

<<<<<<< HEAD

        if(!user.primaryEmailAddress?.emailAddress){
            throw new Error('Clerk dont provide any email');
        }

=======
>>>>>>> 626e70d97c703b4abdfcfac8f244c627c481c305
        const newUser  = await prisma.user.create({
            data:{
                clerkId:user.id,
                firstName:user.firstName,
                lastName:user.lastName,
<<<<<<< HEAD
                email:user.primaryEmailAddress?.emailAddress   ,
=======
                email:user.primaryEmailAddress?.emailAddress,
>>>>>>> 626e70d97c703b4abdfcfac8f244c627c481c305
                phone:user.primaryPhoneNumber?.phoneNumber,
            }
        })

        return newUser;

    }catch(err){
        console.log("Error in addusertoDb function : "+err);
    }
}