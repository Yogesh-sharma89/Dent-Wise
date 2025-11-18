import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar } from 'lucide-react'
import Link from 'next/link'

const NoNextAppointments = () => {
  return (
    <Card className='col-span-1'>
 
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
            <Calendar className='size-5 text-primary'/>
             Next Appointment

        </CardTitle>

       
      </CardHeader>


       <CardContent>
            <div className='text-center  py-8 text-muted-foreground'>

                <div className='size-16 bg-muted/30 rounded-xl flex items-center justify-center mx-auto mb-4'>
                    <Calendar className='size-10 opacity-60'/>
                </div>

                <p className='text-sm mb-3'>
                    No upcoming Appointments
                </p>

                 <Link href={'/appointments'}>
                   <Button className='w-full' variant={'outline'}>
                     Schedule your next visit
                   </Button>
                </Link>

            </div>
        </CardContent>

    </Card>
  )
}

export default NoNextAppointments
