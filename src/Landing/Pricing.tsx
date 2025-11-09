import { SignUpButton } from '@clerk/nextjs'

import { Button } from '@/components/ui/button';
import { CircleCheckBigIcon } from 'lucide-react';

/**
* Renders the Pricing section for the landing page with three subscription plans (Free, AI basic, AI Pro).
* @example
* Pricing()
* <section className='relative px-15 py-6 ...'>...</section>
* @param {{Object}} {{props}} - Optional props object (none used currently).
* @returns {{JSX.Element}} React element containing the pricing section markup.
**/
const Pricing = () => {
  return (
    <section className='relative px-15 py-6 overflow-hidden bg-linear-to-b from-background via-muted/30         to-background'>

      {/* grid background  */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-background via-muted/5 to-primary/5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[3rem_3rem] mask-[radial-gradient(ellipse_75%_50%_at_50%_50%,#000_50%,transparent_85%)] opacity-20"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.06),transparent_70%)]"></div>
      </div>

      {/* main container for all the content  */}
      <div className='relative z-20 max-w-6xl mx-auto py-5'>

        {/* heading section  */}

        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-primary">Simple Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Choose your
            </span>
            <br />
            <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              AI dental plan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Book appointments for free and upgrade for unlimited AI consultations. Perfect for
            ongoing dental care.
          </p>
        </div>


        {/* pricing section  */}

        <div className='grid lg:grid-cols-3  max-w-7xl mx-auto gap-8'>

          {/* free pricing */}

          <div className='group relative'>

            <div className='relative bg-linear-to-br from-card/90 to-card/60 backdrop-blur-xl p-8 border border-border/50 hover:border-primary/30 rounded-3xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500'>

              <div className='space-y-4'>

                <h3 className='font-bold text-2xl'>Free</h3>

                <div className='flex items-end gap-1'>

                  <span className='text-4xl font-bold'>$0</span>
                  <span className='text-sm text-muted-foreground '>/month</span>

                </div>

                <p className='text-muted-foreground'>Essential appoitment dental booking</p>

                <div>
                  <SignUpButton mode='modal'>
                    <Button className='w-full bg-linear-to-r from-muted to-muted/80 text-foreground rounded-3xl font-semibold'>
                      Get started for free
                    </Button>

                  </SignUpButton>
                </div>


                {/* pricing features free  */}

                <div className='space-y-4 relative px-2 mt-8'>

                  {/* circles  */}

                  <div className='flex items-center gap-3 '>
                    <CircleCheckBigIcon className='text-primary w-5 h-5 shrink-0' />
                    <span className='text-sm'>Unlimited appointment booking</span>
                  </div>

                  <div className='flex items-center gap-3 '>
                    <CircleCheckBigIcon className='text-primary w-5 h-5 shrink-0' />
                    <span className='text-sm'>Find dentists in your area</span>
                  </div>

                  <div className='flex items-center gap-3 '>
                    <CircleCheckBigIcon className='text-primary w-5 h-5 shrink-0' />
                    <span className='text-sm'>Basic text chat support</span>
                  </div>

                  <div className='flex items-center gap-3 '>
                    <CircleCheckBigIcon className='text-primary w-5 h-5 shrink-0' />
                    <span className='text-sm'>Appointment reminders</span>
                  </div>

                </div>



              </div>


            </div>

          </div>

          {/* ai basic  */}

          <div className='group relative'>

            {/* pouplar badge  */}
            <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-linear-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Most Popular
              </div>
            </div>


            <div className='relative bg-linear-to-br from-card/90 to-card/60 backdrop-blur-xl p-8 border border-primary/30 hover:border-primary/50 shadow-xl scale-105 rounded-3xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500'>

              <div className='space-y-4'>

                <h3 className='font-bold text-2xl'>AI basic</h3>

                <div className='flex items-end gap-1'>

                  <span className='text-4xl font-bold text-primary'>$9</span>
                  <span className='text-sm text-muted-foreground '>/month</span>

                </div>

                <p className='text-muted-foreground'>AI consultations + appointment booking</p>

                <div>
                  <SignUpButton mode='modal'>
                    <Button className='w-full  rounded-3xl font-semibold'>
                      Get started for free
                    </Button>

                  </SignUpButton>
                </div>


                {/* pricing features free  */}

                <div className='space-y-4 relative px-2 mt-8'>

                  {/* circles  */}

                  <div className='flex items-center gap-3 '>
                    <CircleCheckBigIcon className='text-primary w-5 h-5 shrink-0' />
                    <span className='text-sm'>Everything in free</span>
                  </div>

                  <div className='flex items-center gap-3 '>
                    <CircleCheckBigIcon className='text-primary w-5 h-5 shrink-0' />
                    <span className='text-sm'>10 ai voice calls per month</span>
                  </div>

                  <div className='flex items-center gap-3 '>
                    <CircleCheckBigIcon className='text-primary w-5 h-5 shrink-0' />
                    <span className='text-sm'>AI dental guidance and advice</span>
                  </div>

                  <div className='flex items-center gap-3 '>
                    <CircleCheckBigIcon className='text-primary w-5 h-5 shrink-0' />
                    <span className='text-sm'>Symptom assesment</span>
                  </div>

                   <div className='flex items-center gap-3 '>
                    <CircleCheckBigIcon className='text-primary w-5 h-5 shrink-0' />
                    <span className='text-sm'>Priority support</span>
                  </div>

                   <div className='flex items-center gap-3 '>
                    <CircleCheckBigIcon className='text-primary w-5 h-5 shrink-0' />
                    <span className='text-sm'>Call history and recordings</span>
                  </div>

                </div>



              </div>


            </div>


          </div>



          {/* ai pro plan  */}


          <div className='group relative'>

            <div className='relative bg-linear-to-br from-card/90 to-card/60 backdrop-blur-xl p-8 border border-border/50 hover:border-primary/30 rounded-3xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500'>

              <div className='space-y-4'>

                <h3 className='font-bold text-2xl'>AI Pro</h3>

                <div className='flex items-end gap-1'>

                  <span className='text-4xl font-bold'>$19</span>
                  <span className='text-sm text-muted-foreground '>/month</span>

                </div>

                <p className='text-muted-foreground'>Unlimited AI consultations</p>

                <div>
                  <SignUpButton mode='modal'>
                    <Button variant={'outline'} className='w-full  border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 text-foreground rounded-3xl font-semibold'>
                    Upgrade to AI Pro
                      
                    </Button>

                  </SignUpButton>
                </div>


                {/* pricing features free  */}

                <div className='space-y-4 relative px-2 mt-8'>

                  {/* circles  */}

                  <div className='flex items-center gap-3 '>
                    <CircleCheckBigIcon className='text-primary w-5 h-5 shrink-0' />
                    <span className='text-sm'>Everything in AI Basic</span>
                  </div>

                  <div className='flex items-center gap-3 '>
                    <CircleCheckBigIcon className='text-primary w-5 h-5 shrink-0' />
                    <span className='text-sm'>Unlimited AI voice calls</span>
                  </div>

                  <div className='flex items-center gap-3 '>
                    <CircleCheckBigIcon className='text-primary w-5 h-5 shrink-0' />
                    <span className='text-sm'>Advanced AI Dental Analysis</span>
                  </div>

                  <div className='flex items-center gap-3 '>
                    <CircleCheckBigIcon className='text-primary w-5 h-5 shrink-0' />
                    <span className='text-sm'>Personalized care plans</span>
                  </div>

                   <div className='flex items-center gap-3 '>
                    <CircleCheckBigIcon className='text-primary w-5 h-5 shrink-0' />
                    <span className='text-sm'>24/7 priority AI support</span>
                  </div>

                   <div className='flex items-center gap-3 '>
                    <CircleCheckBigIcon className='text-primary w-5 h-5 shrink-0' />
                    <span className='text-sm'>Detailed health reports</span>
                  </div>

                </div>



              </div>


            </div>

          </div>

        </div>

      </div>


     

      
      
     
    </section>
  )
}

export default Pricing
