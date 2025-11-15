import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import Navbar from '../admin/_components/Navbar';
import WelcomeUser from './Welcome';
import MainSection from './MainSection';
import ActivityOverview from './ActivityOverview';

const Dashboard = async () => {

  const user = await  currentUser();



  if(!user){
    redirect('/')
  }

  return (
    <div className='min-h-screen bg-background'>

      <Navbar/>

      <div className='max-w-7xl mx-auto px-6 py-8 pt-20'>

         <WelcomeUser username={user.firstName}/>

        <MainSection/>

        <ActivityOverview/>

      </div>
      
    </div>
  )
}

export default Dashboard
