'use client'

import { bookAppointment, getAppointments, getBookedTimeSlots, getUserAppointments, updateAppointmentStatus } from "@/lib/actions/appointments"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export function useGetAppointments (){
    const result  = useQuery({
        queryKey:['getAppointments'],
        queryFn:getAppointments
    })

    return result;
}


export function useBookedTimeSolts (doctorId:string,date:string){
    const result  = useQuery({
        queryKey:['getBookedTimeSlots', doctorId,date],
        queryFn:()=>getBookedTimeSlots(doctorId,date),
        enabled: !!doctorId && !!date
    })

    return result;
}

export function useCreateNewAppointment(){

    const queryClient = useQueryClient();
    const result = useMutation({
        mutationKey:['createAppointment'],
        mutationFn:bookAppointment,
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['getAppointments']})
        },
        onError:(err)=>console.log('Failed to book an appointment '+err)

    })

    return result
}

export function useGetUserAppointment(){
    const result = useQuery({
        queryKey:['getUserAppointments'],
        queryFn:getUserAppointments
    })

    return result;
}

export function useUpdateAppointmentStatus(){

    const queryClient = useQueryClient();

    const result = useMutation({
        mutationKey:['updateAppointmentStatus'],
        mutationFn:updateAppointmentStatus,
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['getAppointments']})
        },
        onError:(err)=>console.log('Failed to update appointment in appointment hook : '+err)
    })

    return result;
}