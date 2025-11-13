'use server'

import { currentUser } from "@clerk/nextjs/server";
import {prisma} from '../prisma';


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


        if(!user.primaryEmailAddress?.emailAddress){
            throw new Error('Clerk dont provide any email');
        }

        const newUser  = await prisma.user.create({
            data:{
                clerkId:user.id,
                firstName:user.firstName,
                lastName:user.lastName,
                email:user.primaryEmailAddress?.emailAddress   ,
                phone:user.primaryPhoneNumber?.phoneNumber,
            }
        })

        return newUser;

    }catch(err){
        console.log("Error in addusertoDb function : "+err);
    }
}