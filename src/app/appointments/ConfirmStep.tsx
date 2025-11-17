import React from "react";
import { APPOINTMENT_TYPES } from "../../lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, Loader2Icon } from "lucide-react";
import { useGetUniqueDoctor } from "@/hooks/use-doctor";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

interface bookingStepProps {
  dentistId: string;
  date: string;
  time: string;
  type: string;
  isBooking: boolean;
  onBack: () => void;
  onModify: () => void;
  onConfirm: () => void;
}

const ConfirmStep = ({
  dentistId,
  date,
  time,
  type,
  onBack,
  onModify,
  onConfirm,
  isBooking,
}: bookingStepProps) => {

  const appointmentType = APPOINTMENT_TYPES.find((t) => t.id === type);

  const { data: doctorInfo, isLoading } = useGetUniqueDoctor(dentistId);

  if (isLoading) {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-5 mt-7">
        <Button variant={"ghost"} onClick={onBack}>
          <ChevronLeftIcon className="size-5" />
          <span>Back</span>
        </Button>

        <h2 className="text-2xl font-medium">Confirm your Appointment</h2>
      </div>

      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>Appointment Summary</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* doctor info  */}

          
            
            <div className="flex items-center gap-5 mb-7">
              {/* // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain */}
              {doctorInfo?.imageUrl && <Image src={doctorInfo?.imageUrl} alt="Doctor Profile picture" width={32} height={32}
                className="size-13 rounded-full"
                unoptimized
              />}

              <div>
                <h3 className="font-medium mb-1">{doctorInfo?.name}</h3>
                <p className="text-sm text-muted-foreground">{doctorInfo?.speciality}</p>
              </div>
            
          </div>

          {/* appointment info  */}


          <div className="grid grid-cols-2 gap-10 pt-6 border-t">

            <div>

                <div className="mb-5">
                    <p className="text-sm text-muted-foreground">Appointment Type</p>
                    <p className="font-medium">{appointmentType?.name}</p>
                </div>

                <div className="mb-5">
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-medium">
                        {
                            new Date(date).toLocaleDateString('en-US',{
                                weekday:'long',
                                month:'long',
                                day:'numeric',
                                year:'numeric'
                            })
                        }
                    </p>
                </div>


                <div className="mb-5">
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Dental Center</p>
                </div>

            </div>

            <div>

                <div className="mb-5">
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-medium">{appointmentType?.duration}</p>
                </div>


                 <div className="mb-5">
                    <p className="text-sm text-muted-foreground">Time</p>
                    <p className="font-medium">{time}</p>
                </div>

                 <div className="mb-5">
                    <p className="text-sm text-muted-foreground">Cost</p>
                    <p className="font-medium text-primary">{appointmentType?.price}</p>
                </div>

            </div>

          </div>


           {/* booking button  */}

         
        </CardContent>


      </Card>

        <div className="flex items-center gap-6">

             <Button variant={'outline'} onClick={onModify}>Modify Booking</Button>
            <Button variant={'default'} onClick={onConfirm} disabled={isBooking}>
             {isBooking ? 
                <div className="inline-flex items-center gap-1">
                    <Loader2Icon className="size-6 animate-spin"/>
                    <span>Booking...</span>
                </div>
                :
                'Confirm Booking'
            }
            </Button>

        </div>

    </div>
  );
};

export default ConfirmStep;
