import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'
import Navbar from '../admin/_components/Navbar';
import { HistoryIcon, MicIcon, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProPlanRequired from './ProPlanRequired';
import VapiWidget from './VapiWidget';

const VoicePage = async() => {

  const user  = await currentUser();

  if(!user){
    redirect('/')
  }

  const {has}  = await  auth();

  const hasPaidPlan = has({plan:'ai_basic'}) || has({plan:'ai_pro'})

  if(!hasPaidPlan) return ( <ProPlanRequired/>)

  return (
    <div className='min-h-screen bg-background'>

     <Navbar/>

     <div className='max-w-7xl mx-auto px-6 py-8 pt-20'>

         {/* welcome section  */}
            <div className='mb-12 flex items-center justify-between  bg-linear-to-br from-primary/10  via-primary/5 to-background rounded-3xl p-8 border border-primary/10 '>

                <div className='space-y-4'>

                    <div className='inline-flex items-center gap-2 py-1 px-4 bg-primary/10 rounded-full border border-primary/20'>

                        <div className='w-2 h-2 bg-primary rounded-full animate-bounce'></div>
                        <span className='text-sm font-medium text-primary'>Voice Assistant Ready</span>

                    </div>


                    <div className='flex-1'>
                        <h1 className='lg:text-4xl text-3xl font-bold mb-3'>
                           AI Voice Assistant

                        </h1>
                        <p className='text-muted-foreground lg:max-w-[80%] max-w-[90%]'>
                           Talk to your AI dental assistant using natural voice commands. Get instant advice and professional guidance.
                        </p>
                    </div>

                </div>


                {/* right icon  */}

                <div className='hidden lg:block'>

                        <div className='w-32 h-32 flex items-center justify-center bg-linear-to-br from-primary/20 to-primary/10 rounded-full'>
                            <MicIcon className='w-16 h-16 text-primary'/>
                        </div>

                </div>



            </div>


            {/* cards grid  */}

            <div className='grid lg:grid-cols-2 gap-10 mt-5'>

                {/* how to use card  */}

                <Card className='relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 pb-15'>

                 {/* div for background effect  */}

                 <div className='absolute inset-0 bg-linear-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>

                 </div>


                 <CardHeader className='relative '>

                    <CardTitle className='flex items-center gap-3'>

                        <div className='size-10 rounded-xl bg-linear-to-br from-primary/20 to-primary/10 flex items-center justify-center'>

                          <MicIcon className='text-primary'/>


                        </div>
                        <span className='text-lg font-medium'>How to use</span>

                    </CardTitle>

                    <CardDescription>
                        Simple steps to get started with our voice assistance.
                    </CardDescription>


                 </CardHeader>


                 <CardContent className='relative space-y-5'>

                    <div className='flex items-start gap-2 mt-3'>

                        <div className='size-2 rounded-full bg-primary mt-[5px]'></div>
                        <span className='text-sm'>Click the microphone button to start talking</span>

                    </div>

                    <div className='flex items-start gap-2 mt-2'>

                        <div className='size-2 rounded-full bg-primary mt-[5px]'></div>
                        <span className='text-sm'>Ask questions about dental health and treatments</span>

                    </div>

                    <div className='flex items-start gap-2 mt-2'>

                        <div className='size-2 rounded-full bg-primary mt-[5px]'></div>
                        <span className='text-sm'>Get instant voice responses from the AI</span>

                    </div>

                    <div className='flex items-start gap-2 mt-2'>

                        <div className='size-2 rounded-full bg-primary mt-[5px]'></div>
                        <span className='text-sm'>View conversation transcript in real-time</span>

                    </div>



                 </CardContent>

                </Card>

                {/* features card  */}

                <Card className='relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 pb-15'>

                  {/* div for background effect  */}

                 <div className='absolute inset-0 bg-linear-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                  <CardHeader className='relative'>

                     <CardTitle className='flex items-center gap-3'>

                        <div className='size-10 rounded-xl bg-linear-to-br from-primary/20 to-primary/10 flex items-center justify-center'>
                          <Shield className='text-primary'/>
                        </div>

                        <span className='text-lg font-medium'>Features</span>

                     </CardTitle>

                     <CardDescription>
                        Advanced capabilities for dental care
                     </CardDescription>

                  </CardHeader>

                  <CardContent className='relative space-y-5'>

                       <div className='bg-muted px-3 py-2 flex items-center gap-3 rounded-xl'>

                            <div className='size-8 bg-linear-to-br from-primary/20 to-primary/10 flex items-center justify-center rounded-full'>
                                <MicIcon className='text-primary size-5'/>

                            </div>
                            <span className='text-sm'>Real-time voice recognition</span>

                       </div>

                        <div className='bg-muted px-3 py-2 flex items-center gap-3 rounded-xl'>

                            <div className='size-8 bg-linear-to-br from-primary/20 to-primary/10 flex items-center justify-center rounded-full'>
                                <Shield className='text-primary size-5'/>

                            </div>
                            <span className='text-sm'>AI-Powered Responses</span>

                       </div>


                        <div className='bg-muted px-3 py-2 flex items-center gap-3 rounded-xl'>

                            <div className='size-8 bg-linear-to-br from-primary/20 to-primary/10 flex items-center justify-center rounded-full'>
                                <HistoryIcon className='text-primary size-5'/>

                            </div>
                            <span className='text-sm'>Conversation History</span>

                       </div>

                  </CardContent>

                </Card>

            </div>



            {/* talk to assistant  */}

            <VapiWidget/>

     </div> 
    </div>
  )
}

export default VoicePage
