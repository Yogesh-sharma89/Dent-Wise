/* eslint-disable @next/next/no-img-element */
'use client'

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { useGetDoctors } from '@/hooks/use-doctor'
import { EditIcon, Loader2Icon, MailIcon, PhoneIcon, PlusIcon, Stethoscope } from 'lucide-react';

import React, { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import AddDoctorDialog from './AddDoctorDialog';
import EditDoctorDialog from './EditDoctorDialog';
import { Gender } from '@/generated/enums';
import { Doctor } from '@/generated/client';




const DoctorsManagment = () => {

  const {data:doctors = [] , isLoading} = useGetDoctors();

   const [selectedDoctor,setselectedDoctor] = useState<Doctor | null>(null);
   console.log(selectedDoctor);

   const handleEditDoctor = (doctor:Doctor)=>{
      setisEditDialogOpen(true);
      setselectedDoctor(doctor)


   }

    const handleCloseEditDialog  = ()=>{
      setisEditDialogOpen(false);
      setselectedDoctor(null);
    }

    const [isAddDialogOpen,setisAddDialogOpen] = useState(false);


   const [isEditDailogOpen , setisEditDialogOpen] = useState(false);

   if(isLoading){
    return (
       <div className='flex items-center gap-2 px-4 py-2 bg-muted-foreground border border-border/60 rounded-xl '>
        <Loader2Icon className='w-10 h-10 animate-spin'/>
        <span className='text-foreground text-lg font-medium'>Fetching Doctors data...</span>
       </div>
    )
   }

  return (
    <>
   

      <Card className='mb-12 border-2  transition-all duration-500 px-6 py-8' >

        <CardHeader className='flex items-center justify-between'>

            <div>

           
            <CardTitle className='flex items-center gap-2'> 
                        <Stethoscope className='size-5 text-primary'/>
                        <span className='text-xl font-medium'>Doctors Management</span>
            </CardTitle>
        
            <CardDescription>
                    Manage and oversee all doctors in your practice
            </CardDescription>

             </div>


            <Button onClick={()=>setisAddDialogOpen(true)} className=' px-4 py-3 bg-linear-to-r from-primary/5 to-primary/30 hover:from-primary/90 hover:to-primary transition-all duration-500'>
                    <PlusIcon size={2} className='mr-1'/>
                    <span>Add Doctor</span>
            </Button>


         </CardHeader>


          <CardContent>
          <div className="space-y-10">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="flex items-center justify-between p-4 bg-muted/30 rounded-xl border border-border/50"
              onClick={()=>setselectedDoctor(doctor)}>
                <div className="flex items-center gap-5">
                  <img
                    src={doctor.imageUrl}
                    alt={doctor.name}
                    className="size-12 rounded-full object-cover ring-2 ring-background"
                  />

                  <div>
                    <div className="font-semibold mb-1">{doctor.name}</div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {doctor.speciality}

                      <span className="ml-2 px-2 py-0.5 bg-muted rounded text-xs">
                        {doctor.gender === "male" ? "Male" : "Female"}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <MailIcon className="h-3 w-3" />
                        {doctor.email}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <PhoneIcon className="h-3 w-3" />
                        {doctor.phone}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-7">
                  <div className="text-center">
                    <div className="font-semibold text-primary">{doctor.appointmentCount}</div>
                    <div className="text-xs text-muted-foreground">Appointments</div>
                  </div>

                  {doctor.isActive ? (
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                  ) : (
                    <Badge variant="secondary">Inactive</Badge>
                  )}
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-8 px-3"
                    onClick={() => handleEditDoctor(doctor)}
                  >
                    <EditIcon className="size-4 mr-1" />
                    Edit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        
      </Card>

      <AddDoctorDialog isOpen = {isAddDialogOpen}  onClose= {()=>setisAddDialogOpen(false)}/>
        <EditDoctorDialog isOpen = {isEditDailogOpen}  onClose={handleCloseEditDialog} doctor={selectedDoctor}
         key={selectedDoctor?.id}
        />

       </>
    
  )
}

export default DoctorsManagment
