import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAvailableDoctors } from "@/hooks/use-doctor"
import { MapPinIcon, PhoneCallIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DoctorCardsLoading } from "./DoctorLoding";

interface doctorSelect{
  dentistId:string | null,
  onSelect:(dentistId:string)=>void,
  onNext:()=>void
}

const DoctorSelectStep = ({dentistId,onSelect,onNext}:doctorSelect) => {

  const {data:dentists = [],isLoading}  = useAvailableDoctors();

  if(isLoading){
    return(
       <div className="space-y-6 mt-8">
        <h2 className="text-2xl font-semibold mb-3">Choose your Dentist</h2>

        <DoctorCardsLoading/>
       </div>
      )
  }

  return (
    <div className="space-y-6 mt-8 relative">

      <h2 className="text-2xl font-semibold mb-3">Choose your Dentist</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {
          dentists.map((dentist,index)=>(
            <Card key={index} className={`cursor-pointer transition-all hover:shadow-lg
             ${dentistId===dentist.id  ? 'ring-2 ring-primary' : ''}
            `}
             onClick={()=>onSelect(dentist.id)}
            >

              <CardHeader className="mb-4">

                <div className="flex items-center gap-4">


                  <Image
                   src={dentist.imageUrl}
                   alt="Dentist picture"
                   width={64}
                   height={64}
                   className="size-16 rounded-full object-cover"
                   unoptimized={true}
                  />

                  <div className="flex-1">

                    <CardTitle className="text-lg">
                      {dentist.name}
                    </CardTitle>

                    <CardDescription className="font-semibold text-primary">
                      {dentist.speciality || 'General Dentist'}

                    </CardDescription>

                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-1">
                        <StarIcon className="size-4 fill-amber-500 text-amber-500"/>
                        <span className="text-sm font-medium">5</span>

                      </div>

                      <span className="text-sm text-muted-foreground">
                        ({dentist.appointmentCount} appointments)
                      </span>

                    </div>

                  </div>
                  

                </div>

                
              </CardHeader>

              <CardContent className="space-y-3">

                <div className="flex items-center gap-2  text-sm text-muted-foreground">
                  <MapPinIcon className="size-5"/>
                  <span>DentWise Center</span>
                </div>


                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <PhoneCallIcon className="size-4"/>
                  <span>{dentist.phone}</span>
                </div>

                <p className="text-sm text-muted-foreground">
                  Expreienced dental professionls providing  quality care.
                </p>

                <Badge variant={'secondary'}>Licensed Professional</Badge>

              </CardContent>

            </Card>
          ))
        }

      </div>

      {
        dentistId && 
        <div className="flex justify-end">

          <Button onClick={onNext}>Continue to time selection</Button>

        </div>
      }
      
    </div>
  )
}

export default DoctorSelectStep
