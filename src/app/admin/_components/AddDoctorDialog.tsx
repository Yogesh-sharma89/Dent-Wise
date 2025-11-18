'use client'

import { DialogHeader , Dialog, DialogContent, DialogTitle, DialogDescription, DialogFooter} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useCreateDoctor } from '@/hooks/use-doctor'
import React, { useState } from 'react'

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'

import { Loader2Icon } from 'lucide-react'
import { formatPhoneNumber } from '@/lib/utils'
import { Gender } from '@/generated/enums'



interface addDoctorState{
  isOpen:boolean,
  onClose:()=>void
}

const AddDoctorDialog = ({isOpen,onClose}:addDoctorState) => {

  const [newDoctor , setNewDoctor] = useState({
    name:'',
    speciality:'',
    email:'',
    phone:'',
    gender:'male' as Gender,
    isActive:true
  })



  const cretaeDoctorMutation = useCreateDoctor();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePhoneChange = (value:string)=>{

    const formattedNumber  = formatPhoneNumber(value);
    setNewDoctor((prev)=>(
      {...prev,phone:formattedNumber}
    ))
       
  }


  const handleSave = ()=>{

    cretaeDoctorMutation.mutate({
      ...newDoctor,
    },{
      onSuccess:handleClose
    })
  }

  const handleClose = ()=>{
    onClose();

    setNewDoctor({
       name:'',
      speciality:'',
      email:'',
      phone:'',
      gender:'male',
      isActive:true
    })
  }


  return (
    <Dialog open={isOpen} onOpenChange={onClose} defaultOpen={false}>

      <DialogContent className='sm:max-w-[500px] lg:max-w-[700px]'>

        <DialogHeader>
           
          <DialogTitle>
            Add new Doctor
          </DialogTitle>

          <DialogDescription>
            Add a new doctor to your practice
          </DialogDescription>

        </DialogHeader>


        <div className='grid gap-5 py-5'>

          <div className='grid grid-cols-2 gap-4'>

            <div className='grid gap-3'>
             <Label htmlFor='name'>Name *</Label>
             <Input id='name' type='text' placeholder='Dr. John Smith'
              value={newDoctor.name}
              onChange={(e)=>setNewDoctor({...newDoctor,name:e.target.value})}
             />
            </div>

            <div className='grid gap-3'>
               <Label htmlFor='speciality'>Speciality *</Label> 
               <Input id='speciality' placeholder='General Dentistry'
                value={newDoctor.speciality}
                onChange={(e)=>setNewDoctor({...newDoctor,speciality:e.target.value})}
               />
            </div>

          </div>


          <div className='grid lg:grid-cols-2 gap-4'>
              <div className='grid  gap-3'>
                <Label htmlFor='email'>Email *</Label>
                <Input id='email' placeholder='doctor@example.com'
                value={newDoctor.email}
                onChange={(e)=>setNewDoctor({...newDoctor,email:e.target.value})}
                />

              </div>

              <div className='grid gap-3'>

                <Label htmlFor='phone'>Phone</Label>
                
                <Input id='phone' placeholder='(553) 123 4567'
                  value={newDoctor.phone}
                  onChange={(e)=>handlePhoneChange(e.target.value)}
                />
              </div>

          </div>

          <div className='grid grid-cols-2 gap-4 justify-content-start'>

            <div className='grid gap-3'>
              <Label htmlFor='gender'>Gender</Label>
               <Select value={newDoctor.gender} onValueChange={(value:Gender)=>setNewDoctor({...newDoctor,gender:value})}>
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
               <Select value={newDoctor.isActive?'active':'inactive'}  onValueChange={(value)=>setNewDoctor({...newDoctor,isActive:value==='active'})}>
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

        <DialogFooter>
         
            <Button variant={'outline'} onClick={handleClose} size={'lg'}>Cancel</Button>
          
          <Button disabled={!newDoctor.name || !newDoctor.email || !newDoctor.speciality || cretaeDoctorMutation.isPending} onClick={handleSave} size={'lg'} className={`bg-primary hover:bg-primary/80`}>
          
          {
            cretaeDoctorMutation.isPending ? 
            <p className=' flex gap-1 items-center font-medium text-md'>
              <Loader2Icon size={6} className='animate-spin mr-1'/>
              Adding doctor
            </p>
            :
            'Add doctor'
          }
          
          
          </Button>
        </DialogFooter>

      </DialogContent>

    </Dialog>
  )
}

export default AddDoctorDialog
