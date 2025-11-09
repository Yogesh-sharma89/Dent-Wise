import { Button } from '@/components/ui/button'
import { SignUpButton } from '@clerk/nextjs'
import { ArrowRightIcon, Zap, ZapIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HowItWorks = () => {
  return (
    <section className='relative py-15 px-7 overflow-hidden max-w-6xl mx-auto'>

      {/* header */}
      <div id='howitworks' className='flex justify-center flex-col max-w-6xl mx-auto text-center items-center  space-y-7 mb-20'> 
 
        {/* badge  */}

        <div className='px-4 py-2 flex items-center gap-3 border border-primary/10 bg-linear-to-r from-primary/5 to-primary/10 backdrop-blur-sm rounded-full '>
          <ZapIcon className='text-primary text-sm'/>
          <span className='text-sm text-primary font-semibold'>Simple Process</span>
        </div>


        <h1 className='text-3xl md:text-4xl lg:text-6xl xl:7xl tracking-wide text-center '>

         <span className='bg-linear-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent font-bold'>Three steps to</span>
         <br/>
         <span className='bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent font-bold'>better dental health</span>
        </h1>

        <p className='lg:text-xl md:text-lg text-md font-medium text-muted-foreground max-w-2xl'>Our streamlined process make dental care accessible, conveneint, and stress-free for everyone</p>
        



      </div>

      {/* steps for appointments */}

      <div className='relative'>

        {/* connection line  */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2 hidden lg:block"></div>

        
        <div className='grid lg:grid-cols-3 gap-12 lg:gap-6'>

          {/* step1 */}

           <div className="relative group">
            <div className="relative bg-linear-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              {/* Step Number */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-linear-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                1
              </div>

              {/* Icon */}
              <div className="w-20 h-20 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6">
                <Image src="/audio.png" alt="Voice Chat" width={40} height={40} className="w-14" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-center">Ask Questions</h3>
              <p className="text-muted-foreground text-center leading-relaxed mb-6">
                Chat with our AI assistant about any dental concerns. Get instant answers about
                symptoms, treatments, and oral health tips.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  24/7 Available
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  Instant Response
                </span>
              </div>
            </div>
          </div>


          {/* STEP 2 */}
          <div className="relative group">
            <div className="relative bg-linear-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              {/* Step Number */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-linear-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                2
              </div>

              {/* Icon */}
              <div className="w-20 h-20 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6">
                <Image src="/brain.png" alt="AI Brain" width={40} height={40} className="w-14" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-center">Get Expert Advice</h3>
              <p className="text-muted-foreground text-center leading-relaxed mb-6">
                Receive personalized recommendations based on thousands of dental cases. Our AI
                provides professional-grade insights.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  AI-Powered
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  Personalized
                </span>
              </div>
            </div>
          </div>

          {/* STEP 3  */}
          <div className="relative group">
            <div className="relative bg-linear-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              {/* Step Number */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-linear-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                3
              </div>

              {/* Icon */}
              <div className="w-20 h-20 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6">
                <Image src="/calendar.png" alt="Calendar" width={40} height={40} className="w-14" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-center">Book & Get Care</h3>
              <p className="text-muted-foreground text-center leading-relaxed mb-6">
                Schedule with verified dentists and receive comprehensive follow-up care. Track your
                progress seamlessly.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  Verified Doctors
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  Follow-up Care
                </span>
              </div>
            </div>
          </div>


        </div>

      </div>


       {/* bottom CTA  */}
       <div className='text-center w-full mt-15'>

        <SignUpButton mode='modal'>
          <Button size={'lg'} className='font-semibold'>
            Get started now
            <ArrowRightIcon className='ml-3 font-semibold'/>
          </Button>
        </SignUpButton>

       </div>
      
    </section>
  )
}

export default HowItWorks
