import { getUserAppointments } from "@/lib/actions/appointments";
import { format, getDay, isAfter, isSameDay, parseISO } from "date-fns";
import NoNextAppointments from "./NoNextAppointments";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ClockIcon, UserIcon } from "lucide-react";

const NextAppointment = async () => {
 
  const appointments = await getUserAppointments();

  //filter for upcoming confirmed appointment 

  const upcomingConfirmedAppointments = appointments?.filter((appointment)=>{

    const appoiontmentDate = parseISO(appointment.date);

    const today = new Date();

    const isUpComing = isSameDay(appoiontmentDate,today)  || isAfter(appoiontmentDate,today)

    return isUpComing && appointment.status=='confirmed'
  })

  //earliest appointments 
  if(upcomingConfirmedAppointments?.length==0) return <NoNextAppointments/>

  const nextAppointment = upcomingConfirmedAppointments && upcomingConfirmedAppointments[0];

  if(!nextAppointment) return <NoNextAppointments/>;

  const appointmentDate = parseISO(nextAppointment.date);
  const formattedDate = format(appointmentDate,'EEEE, MMMM d, yyyy')
  const isToday = isSameDay(appointmentDate,new Date());

  return (
    <Card className="border-primary/20 bg-linear-to-br from-primary/5 to-background">

       <CardHeader>
 
         <CardTitle className="flex items-center gap-2">
          <Calendar className="size-5 text-primary"/>
          <span>Next Appointment</span>

         </CardTitle>

       </CardHeader>


       <CardContent className="space-y-5">
 
          <div className="mt-3 flex items-center justify-between">

            <div className="inline-flex items-center gap-2 py-1 px-4 bg-primary/10 rounded-full border         border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
              <span className="text-sm font-medium text-primary">
                {isToday ? 'Today' : 'Upcoming'}
              </span>
            </div>
 
             <div className="flex items-center justify-center py-2 px-3 rounded-lg bg-muted/30">
               Confirmed
             </div>

            <div>

            </div>

          </div>


          <div className="space-y-4">

            <div className="flex items-center mb-2 gap-3">

              <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                <UserIcon className="size-7 text-primary"/>
              </div>

              <div>
                <h4 className="text-lg font-semibold  mb-1">{nextAppointment.doctorName}</h4>
                <p className="text-sm text-muted-foreground">{nextAppointment.doctorSpeciality}</p>
              </div>

            </div>

            <div className="flex items-center gap-3 mb-2">

              <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                <Calendar className="size-7 text-primary"/>
              </div>

              <div>
                <h4 className="text-lg font-semibold  mb-1">{formattedDate}</h4>
                <p className="text-sm text-muted-foreground">{getDay(nextAppointment.date)}</p>
              </div>

            </div>

            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                <ClockIcon className="size-7 text-primary"/>
              </div>

              <div>
                <h4 className="text-lg font-semibold  mb-1">{nextAppointment.time}</h4>
                <p className="text-sm text-muted-foreground">Local time</p>
              </div>

            </div>

          </div>

       </CardContent>

    </Card>
  )
}

export default NextAppointment
