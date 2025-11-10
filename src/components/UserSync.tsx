'use client'
import { AddUserToDb } from "@/lib/actions/user"
import { useUser } from "@clerk/nextjs"
import { useEffect } from "react"

const UserSync  = ()=>{
    const  {isSignedIn,isLoaded} = useUser()

    useEffect(()=>{


        const handleUserSync = async ()=>{
            if(isLoaded && isSignedIn){
                try{
                    await AddUserToDb();

                }catch(err){
                    console.log("error while usersync in components : "+err);
                }
            }
        }

        handleUserSync();
    },[isLoaded,isSignedIn])

    return null;
}

export default  UserSync;