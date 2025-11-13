import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'
import AdminDashboard from './AdminDashboard';

const AdminPage = async() => {

  const user = await  currentUser();

  if(!user) redirect('/')

  if(user?.primaryEmailAddress?.emailAddress !== process.env.ADMIN_EMAIL)  redirect('/dashboard')

  return (
    <div>
      <AdminDashboard/>
    </div>
  )
}

export default AdminPage
