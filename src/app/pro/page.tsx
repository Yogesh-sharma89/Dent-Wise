import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';

import React from 'react'
import Navbar from '../admin/_components/Navbar';
import { CrownIcon } from 'lucide-react';
import { PricingTable } from '@clerk/nextjs';


const ProPage = async() => {

  const user = await currentUser();

  if(!user){
    redirect('/')
  }

  const {has} =await auth();

  const hasPaidPlan = has({plan:'ai_basic'}) || has({plan:'ai_pro'})

  console.log("User has paid plan : "+hasPaidPlan);


  return (
    <div className='w-full min-h-screen bg-background'>

        <Navbar/>

        <div className='max-w-7xl mx-auto px-6 py-8 pt-22'>

           {/* welcome section  */}
            <div className='mb-12 flex items-center justify-between  bg-linear-to-br from-primary/10  via-primary/5 to-background rounded-3xl p-8 border border-primary/10 '>

                <div className='space-y-6'>

                    <div className='inline-flex items-center gap-2 py-1 px-4 bg-primary/10 rounded-full border border-primary/20'>

                        <div className='w-2 h-2 bg-primary rounded-full animte-pulse'></div>
                        <span className='text-sm font-medium text-primary'>Unlock to Pro</span>

                    </div>


                    <div className='flex-1'>
                        <h1 className='lg:text-4xl text-3xl font-bold mb-3'>
                           Unlock Premium AI Dental Care

                        </h1>
                        <p className='text-muted-foreground lg:max-w-[80%] max-w-[90%]'>
                           Get unlimited AI consultatiions, advanced features, and priority support to take care your dental health to the next level.
                        </p>
                    </div>

                </div>


                {/* right icon  */}

                <div className='hidden lg:block'>

                        <div className='w-32 h-32 flex items-center justify-center bg-linear-to-br from-primary/20 to-primary/10 rounded-full'>
                            <CrownIcon className='w-16 h-16 text-primary'/>
                        </div>

                </div>



            </div>

            {/* pricing section  */}

            <div className='space-y-10 mt-20'>
                <div className='text-center space-y-4'>

                    <h2 className='font-bold text-3xl'>Choose your Plan</h2>
                    <p className=' text-muted-foreground max-w-2xl mx-auto'>Select the perfect plans for your dental care needs. All plans include  secure access and bank-level encryption.</p>

                </div>

                <PricingTable/>

            </div>

        </div>
    </div>
  )
}

export default ProPage
