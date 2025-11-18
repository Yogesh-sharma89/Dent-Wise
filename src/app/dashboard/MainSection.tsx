import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, MessageSquare } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MainSection = () => {
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 gap-10  my-10'>
      
      {/* voice card  */}

      <Card className='backdrop-blur-lg group  bg-card/90 relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30'>

        {/* bg gradient  */}
        <div className='absolute inset-0 bg-linear-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>

        </div>

        <CardContent className='relative px-8 py-6'>

            <div className='flex items-center gap-4 mb-6'>

                <div className='size-16 bg-linear-to-br from-primary/20 to-primary/10  rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>

                  <Image
                   src={'/audio.png'}
                   alt='Audio logo'
                   width={33}
                   height={33}
                   className='w-10 '
                  />

                </div>

                <div>
                    <h3 className='text-foreground font-bold text-xl mb-1'>AI Voice Assistant</h3>
                    <p className='text-sm text-muted-foreground'>Get instant dental advice through voice calls</p>
                </div>

            </div>

            <div className='space-y-5'>

                <div className='flex items-center gap-2'>
                    <div className='size-2 rounded-full bg-primary'></div>
                    <span>24/7 Availability</span>
                </div>

                 <div className='flex items-center gap-2'>
                    <div className='size-2 rounded-full bg-primary'></div>
                    <span>Professional dental guidance</span>
                </div>

                <div className='flex items-center gap-2'>
                    <div className='size-2 rounded-full bg-primary'></div>
                    <span>Instant pain relief advice</span>
                </div>

               

            </div>

            <div className='w-full mt-6'>
              <Link href={'/voice'}>
             
              <Button size={'lg'} className='w-full text-center py-2 inline-flex text-white bg-primary hover:bg-primary/90 items-center gap-2'>
                 <MessageSquare/>
                 <span className='font-medium'>Start voice call</span>
              </Button>
               </Link>
            </div>

        </CardContent>

      </Card>

      {/* appointment book card  */}

      <Card className='backdrop-blur-lg bg-card/90 group relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30'>

        {/* bg gradient  */}
        <div className='absolute inset-0 bg-linear-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>

        </div>

        <CardContent className='relative px-8 py-6'>

            <div className='flex items-center gap-4 mb-6'>

                <div className='size-16 bg-linear-to-br from-primary/20 to-primary/10  rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>

                  <Image
                   src={'/calendar.png'}
                   alt='calender image'
                   width={33}
                   height={33}
                   className='w-10 '
                  />

                </div>

                <div>
                    <h3 className='text-foreground font-bold text-xl mb-1'>Book Appointments</h3>
                    <p className='text-sm text-muted-foreground'>Schedule with verified dentist in your area</p>
                </div>

            </div>

            <div className='space-y-5'>

                <div className='flex items-center gap-2'>
                    <div className='size-2 rounded-full bg-primary'></div>
                    <span>Verified dental professionals</span>
                </div>

                 <div className='flex items-center gap-2'>
                    <div className='size-2 rounded-full bg-primary'></div>
                    <span>Flexible scheduling</span>
                </div>

                <div className='flex items-center gap-2'>
                    <div className='size-2 rounded-full bg-primary'></div>
                    <span>Instant confirmations</span>
                </div>

               

            </div>

            <div className='w-full mt-6'>
              <Link href={'/appointments'}>
             
              <Button size={'lg'} variant={'outline'} className='w-full text-center py-2 inline-flex  items-center gap-2'>
                 <Calendar/>
                 <span className='font-medium'>Schedule now</span>
              </Button>
               </Link>
            </div>

        </CardContent>

      </Card>

    </div>
  )
}

export default MainSection
