import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import AppointmentClient from './AppointmentClient';

const AppoitmentsPage = async () => {

   const user  = await currentUser();

   if(!user) redirect('/')

  return (
   <>
    <AppointmentClient/>
   </>
  )
}

export default AppoitmentsPage
