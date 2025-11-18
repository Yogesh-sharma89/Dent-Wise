'use client'


import { useUser } from '@clerk/nextjs'
import Navbar from './_components/Navbar'
import { SettingsIcon } from 'lucide-react';
import { useGetDoctors } from '@/hooks/use-doctor';
import { useGetAppointments } from '@/hooks/use-appointment';
import { Spinner } from "@/components/ui/spinner"
import AdminStats from './_components/AdminStats';
import DoctorsManagment from './_components/DoctorsManagment';
import { useState } from 'react';
import RecentAppointments from './_components/RecentAppointments';

const AdminDashboard = () => {

   const {user} = useUser();

  

   const {data:doctors =  [], isLoading:doctorLoading} = useGetDoctors();

   const {data:appointments = [], isLoading:appointmentLoading} = useGetAppointments();

   console.log(doctors);
   console.log(appointments)

//    calculated stats from real db data for admin 

   const stats = {
    totalDoctors:doctors.length,
    totalAppointments:appointments.length,
    activeDoctors:doctors.filter(doctor=> doctor.isActive).length,
    completedAppointments:appointments.filter(appointment=>appointment.status==='completed').length
   }

   if(doctorLoading || appointmentLoading){
      return (
       <div className='flex w-full h-screen  items-center justify-center gap-2'>

          <Spinner className="size-8 text-orange-400" />
          <span className='text-foreground text-lg font-medium'>Loading...</span>

       </div>
      )
   }


  return (
      <div className=' w-full min-h-screen bg-background'>

            <Navbar/>

        

        <div className='max-w-[1200px] mx-auto px-6 py-8 pt-22'>

            {/* banner section  */}

            <div className='mb-12 flex items-center justify-between  bg-linear-to-br from-primary/10  via-primary/5 to-background rounded-3xl p-8 border border-primary/10 '>

                <div className='space-y-6'>

                    <div className='inline-flex items-center gap-2 py-1 px-4 bg-primary/10 rounded-full border border-primary/20'>

                        <div className='w-2 h-2 bg-primary rounded-full animte-pulse'></div>
                        <span className='text-sm font-medium text-primary'>Admin Dashboard</span>

                    </div>


                    <div>
                        <h1 className='lg:text-4xl text-3xl font-bold mb-2'>
                            Welcome back {user?.firstName || "Admin"}!

                        </h1>
                        <p className='text-muted-foreground'>
                            Manage doctors, oversee appointments and monitor your dental practice performance
                        </p>
                    </div>

                </div>


                {/* right icon  */}

                <div className='hidden lg:block'>

                        <div className='w-32 h-32 flex items-center justify-center bg-linear-to-br from-primary/20 to-primary/10 rounded-full'>
                            <SettingsIcon className='w-16 h-16 text-primary'/>
                        </div>

                </div>



            </div>


            <AdminStats
             totalDoctors={stats.totalDoctors}
             totalAppoinments={stats.totalAppointments}
             activeDoctors = {stats.activeDoctors}
             completedAppointments = {stats.completedAppointments}
            />

            <DoctorsManagment/>

            <RecentAppointments />

        </div>
     
    </div>
  )
}

export default AdminDashboard
