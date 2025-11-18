import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Clock, User, UserCheck, UserIcon } from 'lucide-react'
import React from 'react'

interface Statsprops{
    totalDoctors:number,
    totalAppoinments:number,
    activeDoctors:number,
    completedAppointments:number
}

const AdminStats = ({totalDoctors,totalAppoinments,activeDoctors,completedAppointments}:Statsprops) => {
  return (
    <div className='grid md:grid-cols-4 mb-16 gap-5 lg:gap-10 md:gap-8'>

        {/* total doctor card  */}
        <Card className='border-2 hover:border-primary/30 transition-all duration-500'>

        <CardContent className='p-6'>

            <div className='flex items-center gap-4'>

                <div className='w-12 h-12 flex items-center justify-center rounded-xl bg-linear-to-r from-primary/20 to-primary/10'>

                <User className='shrink-0'/>

                </div>

                <div>
                <div className='text-xl font-medium'>{totalDoctors}</div>
                <div className='text-sm text-muted-foreground'>Total Doctors</div>
                </div>

            </div>

        </CardContent>

        </Card>


       {/* active doctors cards  */}
        <Card className='border-2 hover:border-primary/30 transition-all duration-500'>

        <CardContent className='p-6'>

            <div className='flex items-center gap-4'>

                <div className='w-12 h-12 flex items-center justify-center rounded-xl bg-linear-to-r from-primary/20 to-primary/10'>

                  <UserCheck className='shrink-0'/>

                </div>

                <div>
                <div className='text-xl font-medium'>{activeDoctors}</div>
                <div className='text-sm text-muted-foreground'>Active Doctors</div>
                </div>

            </div>

        </CardContent>

        </Card>


        {/* total appointments card  */}

         <Card className='border-2 hover:border-primary/30 transition-all duration-500'>

          <CardContent className='p-6'>

                <div className='flex items-center gap-4'>

                    <div className='w-12 h-12 flex items-center justify-center rounded-xl bg-linear-to-r from-primary/20 to-primary/10'>

                    <Calendar className='shrink-0'/>

                    </div>

                    <div>
                    <div className='text-xl font-medium'>{totalAppoinments}</div>
                    <div className='text-sm text-muted-foreground'>Total Appointments</div>
                    </div>

                </div>

          </CardContent>

        </Card>


        {/* total completed appointments  */}

         <Card className='border-2 hover:border-primary/30 transition-all duration-500'>

        <CardContent className='p-6'>

            <div className='flex items-center gap-4'>

                <div className='w-12 h-12 flex items-center justify-center rounded-xl bg-linear-to-r from-primary/20 to-primary/10'>

                <Clock className='shrink-0'/>

                </div>

                <div>
                <div className='text-xl font-medium'>{completedAppointments}</div>
                <div className='text-sm text-muted-foreground'>Completed Appointments</div>
                </div>

            </div>

        </CardContent>

        </Card>
      
    </div>
  )
}

export default AdminStats
