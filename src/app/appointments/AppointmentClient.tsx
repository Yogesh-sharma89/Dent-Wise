
'use client'
import  {  useState } from 'react'
import Navbar from '../admin/_components/Navbar'
import ProgressSteps from './ProgessSteps';
import DoctorSelectStep from './DoctorSelectStep';
import TimeSelectionStep from './TimeSelectionStep';
import { useCreateNewAppointment, useGetUserAppointment } from '@/hooks/use-appointment';
import ConfirmStep from './ConfirmStep';
import { toast } from 'sonner';
import { APPOINTMENT_TYPES } from '@/lib/utils';
import Image from 'next/image';
import { Calendar1Icon, ClockIcon } from 'lucide-react';
import { format } from 'date-fns';

const AppointmentClient = () => {

//    state management for appointment booking 

   const [selectedDentistID,setselectedDentistID] = useState<string | null>(null);
   const [selectedDate,setselectedDate] = useState('');
   const [selectedTime,setselectedTime] = useState('');
   const [selectedType,setselectedType] = useState('');

   const [currentStep,setcurrentStep] = useState(1);

   const[showConfirmationModal,setshowConfirmationModal] = useState(false);

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const [bookedAppointment,setbookedAppoinment] = useState<any>(null);

   const bookedAppointementMutation = useCreateNewAppointment();

   const handleSelectDentist = (doctorId:string)=>{

      setselectedDentistID(doctorId);

      //reset the state when dentist change
      setselectedDate('');
      setselectedTime('');
      setselectedType('');
   };

   const handleBookedAppointment = ()=>{

    if(!selectedDate || !selectedDentistID || !selectedTime || !selectedType){
        toast.error('Please select all require fields.')
        return;
    }

    const appointmentType = APPOINTMENT_TYPES.find((t) => t.id === selectedType);

    bookedAppointementMutation.mutate({
        doctorId:selectedDentistID,
        date:selectedDate,
        time:selectedTime,
        reason:appointmentType?.name,
       
    },{
        onSuccess:async(appointment)=>{

            setbookedAppoinment(appointment)

            // show confirmation  modal and send the email

            setshowConfirmationModal(true);

            //reset the form 
            setselectedDentistID(null);
            setselectedDate('');
            setselectedTime('');
            setselectedType('');
            setcurrentStep(1);
        }
        ,
        onError:(err)=>toast.error("Failed to book appoinment: "+err.message)
    })

   }
   
   const {data:userAppointments=[]} = useGetUserAppointment();

  return (
     <div className='min-h-screen bg-background'>

        <Navbar/>


        <div className='max-w-7xl mx-auto px-6 py-8 pt-20'>

            {/* title  */}

            <div className='mb-10'>
                <h1 className='text-2xl font-bold mb-1'>Book an Appointment</h1>
                <p className='text-sm text-muted-foreground'>Find and book with verified dentist in your area</p>
            </div>


            <ProgressSteps currentStep = {currentStep}/>

            {currentStep === 1 && 
             <DoctorSelectStep
              dentistId = {selectedDentistID}
              onSelect = {handleSelectDentist}
              onNext = {()=>setcurrentStep(2)}
             />
            }


            {
                currentStep ===2 && selectedDentistID && 
                
                <TimeSelectionStep
                 dentistId ={selectedDentistID}
                 selectedDate = {selectedDate}
                 selectedTime = {selectedTime}
                 selectedType = {selectedType}
                 onBack={()=>setcurrentStep(1)}
                 onNext={()=>setcurrentStep(3)}
                 onDateChange={setselectedDate}
                 onTimeChange={setselectedTime}
                 onTypeChange = {setselectedType}
                />
            }

            {
                currentStep === 3 && selectedDentistID && 
                <ConfirmStep
                dentistId={selectedDentistID}
                date={selectedDate}
                time={selectedTime}
                type={selectedType}
                isBooking={bookedAppointementMutation.isPending}
                onBack={()=>setcurrentStep(2)}
                onModify={()=>setcurrentStep(2)}
                onConfirm={handleBookedAppointment}
                />
            }

            
        

        </div>


{/* show current user all existing appointements  */}

   {
    userAppointments.length>0 && 
    <div className='max-w-7xl mx-auto px-6 pt-5 pb-6'>

        <h2 className='text-xl font-semibold mb-3'>Your Upcoming Appointments</h2>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>

            {
                userAppointments.map((appointment,index)=>(
                    <div key={index} className='bg-card border rounded-lg p-4 shadow-sm'>

                        <div className='flex items-center gap-4'>

                            <Image
                             src={appointment.doctorImageUrl}
                             alt='Doctor profile picture'
                             width={30}
                             height={30}
                             className='size-11 rounded-full'
                             unoptimized
                            />

                            <div>
                                <p className='font-medium'>{appointment.doctorName}</p>
                                <p className='text-sm text-muted-foreground'>{appointment.doctorSpeciality}</p>
                            </div>

                        </div>


                        <div className='mt-5 mb-4'>

                           <div className='flex items-center gap-2 mb-1'>

                            <Calendar1Icon className='size-4 mr-1'/>
                            <span>{format(new Date(appointment.date),"MMM d, yyyy")}</span>

                           </div>

                           <div className='flex items-center gap-2'>
                             <ClockIcon className='size-4 mr-1'/>
                             <span>{appointment.time}</span>
                           </div>

                        </div>

                    </div>
                ))
            }

        </div>

    </div>
   }

      
    </div>
  )
}

export default AppointmentClient
