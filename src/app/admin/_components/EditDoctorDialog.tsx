import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { Doctor } from '@/generated/client'
import { useUpdateDoctor } from '@/hooks/use-doctor'
import { formatPhoneNumber } from '@/lib/utils'
import React, { useState } from 'react'

interface editProps{
  isOpen:boolean,
  onClose:()=>void
  doctor:Doctor | null
}

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Gender } from '../../../generated/enums';
import { Loader2Icon } from 'lucide-react'

const EditDoctorDialog = ({isOpen,onClose,doctor}:editProps) => {

  const [editingDoctor,seteditingDoctor] = useState<Doctor | null >(doctor)

  const handlePhoneChange = (value:string)=>{
  
      const formattedNumber  = formatPhoneNumber(value);
      if(editingDoctor){
         seteditingDoctor({...editingDoctor,phone:formattedNumber})
      }
         
    }

  const updateDoctorMutation  = useUpdateDoctor();

  const handleUpdate=()=>{
    if(editingDoctor){
      updateDoctorMutation.mutate({...editingDoctor},{onSuccess:handleClose})
    }
  }

  const handleClose = ()=>{
    onClose();
    seteditingDoctor(null);
  }

  return (

    <Dialog open={isOpen} onOpenChange={handleClose}>
 
      
       <DialogContent className='sm:max-w-[500px] lg:max-w-[700px]'>

         <DialogHeader>
           
          <DialogTitle>
           Edit Doctor
          </DialogTitle>

          <DialogDescription>
            Updtae doctor information and status
          </DialogDescription>

        </DialogHeader>

         {editingDoctor &&
         
           <div className='grid gap-5 py-5'>

          <div className='grid grid-cols-2 gap-4'>

            <div className='grid gap-3'>
             <Label htmlFor='name'>Name *</Label>
             <Input id='name' type='text' placeholder='Dr. John Smith'
              value={editingDoctor.name}
              onChange={(e)=>seteditingDoctor({...editingDoctor,name:e.target.value})}
             />
            </div>

            <div className='grid gap-3'>
               <Label htmlFor='speciality'>Speciality *</Label> 
               <Input id='speciality' placeholder='General Dentistry'
                value={editingDoctor.speciality}
                onChange={(e)=>seteditingDoctor({...editingDoctor,speciality:e.target.value})}
               />
            </div>

          </div>


          <div className='grid lg:grid-cols-2 gap-4'>
              <div className='grid  gap-3'>
                <Label htmlFor='email'>Email *</Label>
                <Input id='email' placeholder='doctor@example.com'
                value={editingDoctor.email}
                onChange={(e)=>seteditingDoctor({...editingDoctor,email:e.target.value})}
                />

              </div>

              <div className='grid gap-3'>

                <Label htmlFor='phone'>Phone</Label>
                
                <Input id='phone' placeholder='(553) 123 4567'
                  value={editingDoctor.phone}
                  onChange={(e)=>handlePhoneChange(e.target.value)}
                />
              </div>

          </div>

          <div className='grid grid-cols-2 gap-4 justify-content-start'>

            <div className='grid gap-3'>
              <Label htmlFor='gender'>Gender</Label>
               <Select value={editingDoctor.gender} onValueChange={(value:Gender)=>seteditingDoctor({...editingDoctor,gender:value})}>
                <SelectTrigger className='w-[170px]'>
                 <SelectValue placeholder='Select gender'/>
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Gender</SelectLabel>
                    <SelectItem value='male'>Male</SelectItem>
                    <SelectItem value='female'>Female</SelectItem>
                  </SelectGroup>
                </SelectContent>
               </Select>

            </div>

            <div className='grid gap-3'>
              <Label htmlFor='status'>Status</Label>
               <Select value={editingDoctor.isActive?'active':'inactive'}  onValueChange={(value)=>seteditingDoctor({...editingDoctor,isActive:value==='active'})}>
                <SelectTrigger className='w-[170px]'>
                 <SelectValue placeholder='Select status'/>
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Status</SelectLabel>
                    <SelectItem value='active' >Active</SelectItem>
                    <SelectItem value='inactive' >Inactive</SelectItem>
                  </SelectGroup>
                </SelectContent>
               </Select>
            </div>


          </div>


        </div>
         }

         <DialogFooter>
         
            <Button variant={'outline'} onClick={handleClose} size={'lg'}>Cancel</Button>
          
          <Button onClick={handleUpdate} size={'lg'} className={`bg-primary hover:bg-primary/80`}>
          
          {
            updateDoctorMutation.isPending ? 
            <p className=' flex gap-1 items-center font-medium text-md'>
              <Loader2Icon size={6} className='animate-spin mr-1'/>
              Updating doctor
            </p>
            :
            'Save changes'
          }
          
          
          </Button>
        </DialogFooter>

       </DialogContent>


        
       

    </Dialog>
    
  )
}

export default EditDoctorDialog
