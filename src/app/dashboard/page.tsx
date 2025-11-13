import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'
import Navbar from '../admin/_components/Navbar';

const Dashboard = async () => {

  const user = await  currentUser();

  if(!user){
    redirect('/')
  }

  return (
    <div>
      <Navbar/>
      My dashboard page
    </div>
  )
}

export default Dashboard
