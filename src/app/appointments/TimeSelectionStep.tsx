import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useBookedTimeSolts } from "@/hooks/use-appointment";
import { useGetUniqueDoctor } from "@/hooks/use-doctor";
import {
  APPOINTMENT_TYPES,
  getAvailableTimeSlots,
  getNext5Days,
} from "@/lib/utils";
import { ChevronLeftIcon, ClockIcon } from "lucide-react";
import { clsx } from "clsx";

interface TimeSelectionProps {
  dentistId: string;
  selectedDate: string;
  selectedTime: string;
  selectedType: string;
  onBack: () => void;
  onNext: () => void;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
  onTypeChange: (type: string) => void;
}

const TimeSelectionStep = ({
  dentistId,
  selectedDate,
  selectedTime,
  selectedType,
  onBack,
  onNext,
  onDateChange,
  onTimeChange,
  onTypeChange,
}: TimeSelectionProps) => {
  const { data: bookedTimeSlots, isLoading } = useBookedTimeSolts(
    dentistId,
    selectedDate
  );

  const availableDates = getNext5Days();

  const availableTimeSlot = getAvailableTimeSlots();

  const handleSelectDate = (date: string) => {
    onDateChange(date);
    //reste the time for that date
    onTimeChange("");
  };

  const { data: doctor } = useGetUniqueDoctor(dentistId);

  return (
    <div className="space-y-6">
      {/* header  */}
      <div className="flex items-center gap-4 mt-6">
        {/* back button  */}

        <Button variant={"ghost"} onClick={onBack}>
          <ChevronLeftIcon className="size-4 mr-2" />
          Back
        </Button>

        {/* header content  */}

        <div>
          <h2 className="text-xl font-semibold mb-1">Select Date & Time</h2>
          <p className="text-sm text-muted-foreground">
            Booking with {doctor?.name}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* appointment price and type   */}

        <div className="col-span-1 space-y-4 mt-5">
          <h3 className="text-xl font-medium mb-3">Appointment Type</h3>

          <div className="space-y-3">
            {APPOINTMENT_TYPES.map((type, i) => (
              <Card
                key={i}
                className={`cursor-pointer transition-all mb-4 hover:shadow-sm 
                          ${
                            selectedType === type.id
                              ? "ring-2 ring-primary"
                              : ""
                          }
                        `}
                onClick={() => onTypeChange(type.id)}
              >
                <CardContent className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{type.name}</h4>
                      <p className="text-muted-foreground text-sm">
                        {type.duration}
                      </p>
                    </div>

                    <span className="text-primary font-medium">
                      {type.price}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* choose date and time  */}

        <div className="mt-5 mb-6">
          {/* date  */}
          <h3 className="text-xl font-medium">Available Dates</h3>

          <div className="mt-4 grid lg:grid-cols-2 md:grid-cols-3 grid-cols-2 lg:gap-3 md:gap-4 gap-4">
            {availableDates.map((date, index) => (
              <Button
                key={index}
                variant={selectedDate === date ? "default" : "outline"}
                onClick={() => handleSelectDate(date)}
                className="h-auto p-3"
              >
                <div className="text-center">
                  <div className="font-medium">
                    {new Date(date).toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </Button>
            ))}
          </div>

          {selectedDate && (
            <div className="mt-8 mb-5">
              <h3 className="text-lg font-medium">Available Times</h3>

              <div className="mt-4 grid lg:grid-cols-2 md:grid-cols-3 grid-cols-2 lg:gap-4 md:gap-5 gap-4">
                {availableTimeSlot.map((time, index) => {
                  const isBooked = bookedTimeSlots?.includes(time);

                  return (
                    <Button
                      key={index}
                      disabled={isBooked}
                      className={`${
                        isBooked ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      variant={selectedTime === time ? "default" : "outline"}
                      onClick={() => !isBooked && onTimeChange(time)}
                    >
                      <ClockIcon className="size-4 mr-2" />
                      <span>
                        {time}
                        {isBooked && " (Booked)"}
                      </span>
                    </Button>
                  );
                })}
              </div>
            </div>
          )}


        </div>

        {/* show time only when date is selected */}
      </div>

      {
        selectedDate && selectedTime && selectedType && 
        <div className="flex justify-end">

          <Button onClick={onNext}>
            Review Booking
          </Button>

        </div>
      }

    </div>
  );
};

export default TimeSelectionStep;
