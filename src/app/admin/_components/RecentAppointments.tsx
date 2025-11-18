import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useGetAppointments,
  useUpdateAppointmentStatus,
} from "@/hooks/use-appointment";
import { format } from "date-fns";
import { Calendar, Loader2Icon } from "lucide-react";
import { useState } from "react";

const RecentAppointments = () => {
  const { data: appointments = [] } = useGetAppointments();

  const updateAppointmentMutation = useUpdateAppointmentStatus();

  const [updatingStatusLoadingId, setupdatingStatusLoadingId] = useState<string | null>(null);

  const handleToggleAppointmentStatus = (appointmentId: string) => {
    setupdatingStatusLoadingId(appointmentId);

    const appointment = appointments.find((app) => app.id === appointmentId);

    const newStatus =
      appointment?.status === "confirmed" ? "completed" : "confirmed";

      if(!appointment?.id){
       setupdatingStatusLoadingId(null);
       return;
      }

    updateAppointmentMutation.mutate(
      { id: appointment?.id, status: newStatus },

      {
        onSuccess: (data) => {
          console.log(data);
          setupdatingStatusLoadingId(null);
        },
        onError:(err)=>{
          console.log(err);
          setupdatingStatusLoadingId(null);
        }
      }
    );
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
            Confirmed
          </Badge>
        );

      case "completed":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
            Completed
          </Badge>
        );
      default:
        return <Badge variant={"secondary"}>{status}</Badge>;
    }
  };

  return (
    <Card className="py-6 ">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="size-5 text-primary" />
          <span className="font-medium">Recent Appointments</span>
        </CardTitle>

        <CardDescription>
          Monitor and manage all patient appointments
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{`${appointment.user.firstName} ${appointment.user.lastName}`}</div>
                      <div className="text-sm text-muted-foreground">
                        {appointment.user.email}
                      </div>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="font-medium">{appointment.doctor.name}</div>
                  </TableCell>

                  <TableCell>
                    <div>
                      <div className="font-medium">
                        {format(new Date(appointment.date), "d/MM/yyyy")}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {appointment.time}
                      </div>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div>{appointment.reason}</div>
                  </TableCell>

                  <TableCell>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        handleToggleAppointmentStatus(appointment.id)
                      }
                      className="px-2"
                    >
                      {updatingStatusLoadingId===appointment.id ? (
                        <div className="flex items-center">
                          <Loader2Icon className="size-3 animate-spin mr-1" />
                          <span className="text-xs ">updating</span>
                        </div>
                        
                      ) : (
                        getStatusBadge(appointment.status)
                      )}
                    </Button>
                  </TableCell>

                  <TableCell>
                    <div className="text-xs text-muted-foreground text-right">
                      Click status to toggle
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentAppointments;
