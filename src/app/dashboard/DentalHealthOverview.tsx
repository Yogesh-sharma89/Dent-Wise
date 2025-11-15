import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getUserAppointmentsData } from "@/lib/actions/appointments"
import { currentUser } from "@clerk/nextjs/server";
import { BrainIcon, MessageSquareIcon, User } from "lucide-react";
import {format} from "date-fns";
import { Button } from "@/components/ui/button";
import Link from "next/link";



const DentalHealthOverview = async () => {

   const appointmentStats = await getUserAppointmentsData();

   const user = await currentUser();




  return (
     <Card className="relative lg:col-span-2 overflow-hidden bg-background border-2 hover:border-primary/30 tranition-all duration-300 py-6 px-4">

       <CardHeader>

        <CardTitle className="flex items-center gap-2">

            <BrainIcon className="size-5 text-primary"/>
            <span className="font-medium">Your Dental Health</span>

        </CardTitle>

        <CardDescription>
            Keep track of your dental care journey
        </CardDescription>

       </CardHeader>

       <CardContent>

          <div className="grid md:grid-cols-3 gap-8 mt-5">

            <div className="flex items-center flex-col justify-center p-4 rounded-xl bg-muted/30">

              <div className="font-bold text-primary text-2xl mb-1">
                {appointmentStats.completedAppointments}
              </div>

              <div className="text-sm text-muted-foreground">
                Completed Visits
              </div>

            </div>

            <div className="flex items-center flex-col justify-center p-4 rounded-xl bg-muted/30">

              <div className="font-bold text-primary text-2xl mb-1">
                {appointmentStats.totalAppointments}
              </div>

              <div className="text-sm text-muted-foreground">
                Total Appointments
              </div>

            </div>

            <div className="flex items-center flex-col justify-center p-4 rounded-xl bg-muted/30">

              <div className="font-bold text-primary text-2xl mb-1">
                {user?.createdAt && format(new Date(user.createdAt),"MMM yyyy")}
              </div>

              <div className="text-sm text-muted-foreground">
                Member since
              </div>

            </div>

          </div>


          <div className="relative mt-10 p-6 bg-linear-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-xl">


             <div className="flex items-start gap-4">

              <div className="size-11 flex items-center justify-center bg-primary/20 rounded-xl  shrink-0">

              <MessageSquareIcon className="size-5 text-primary"/>

              </div>


              <div>
                <h3 className="text-primary font-bold mb-2 text-xl">Ready to get started? </h3>
                <p className="text-sm text-muted-foreground ">
                  Book your first appointment  or try our AI voice assistant for instant dental advcie
                </p>


                 <div className="flex items-center mt-4 gap-4">
                   
                    <Link href={'/voice'}>
                  
                      <Button size={'lg'} className="bg-primary text-center">
                        Try AI assistant
                      </Button>
                    </Link>

                    <Link href={'/appointments'}>
                        <Button variant={'outline'} size={'lg'} className="text-white">Book Appointement</Button>
                    </Link>

                 </div>

              </div>

             </div>



          </div>



            


       </CardContent>

     </Card>
  )
}

export default DentalHealthOverview
