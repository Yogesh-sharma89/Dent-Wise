import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'
import Navbar from '../admin/_components/Navbar';

const AppoitmentsPage = async () => {

   const user  = await currentUser();

   if(!user) redirect('/')

  return (
    <div className='min-h-screen bg-background'>

        <Navbar/>

      
    </div>
  )
}

export default AppoitmentsPage
