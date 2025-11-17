'use client'

import { createDoctor, editDoctor, getAvailableDoctors, getDoctors, getUniqueDoctor } from "@/lib/actions/doctors"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export function useGetDoctors(){
    const result  = useQuery({
        queryKey:['getDoctors'],
        queryFn:getDoctors
    })

    return result;
}


export function useCreateDoctor(){
    
    const queryClient = useQueryClient();

    const result = useMutation({
        mutationKey:['createDoctors'],
        mutationFn:createDoctor,
        onSuccess:()=>{
            console.log('Doctor created successfully in hook')
            queryClient.invalidateQueries({queryKey:['getDoctors']})
        },
        onError:(err)=>console.log('Error while creating doctor in hook '+err)
    })

    return result
}


export function useUpdateDoctor(){
    const queryClient = useQueryClient();

    const result  = useMutation({
        mutationKey:['updateDoctor'],
        mutationFn:editDoctor,
        onSuccess:()=>{
            console.log('doctor updated successfully in hook')
            queryClient.invalidateQueries({queryKey:['getDoctors']})
        },
        onError:(err)=>console.log('Error while updating doctor in hook '+err)
    })

    return result;
}


export function useAvailableDoctors(){

   const result = useQuery({
        queryKey:['getAvailableDoctors'],
        queryFn:getAvailableDoctors
    })

    return result;

}


export  function useGetUniqueDoctor(doctorId:string){
    const result = useQuery({
        queryKey:['getUniqueDoctor'],
        queryFn:()=>getUniqueDoctor(doctorId),
    })

    return result;

}
    
