'use server'

import { currentUser } from "@clerk/nextjs/server";
import {prisma} from '../prisma';


/**
 * Ensure a Clerk-authenticated user exists in the database, creating a new record if none is found.
 *
 * @returns An existing user record or a newly created user record, or `undefined` if there is no authenticated requester or an error occurred.
 */
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

        const newUser  = await prisma.user.create({
            data:{
                clerkId:user.id,
                firstName:user.firstName,
                lastName:user.lastName,
                email:user.primaryEmailAddress?.emailAddress,
                phone:user.primaryPhoneNumber?.phoneNumber,
            }
        })

        return newUser;

    }catch(err){
        console.log("Error in addusertoDb function : "+err);
    }
}