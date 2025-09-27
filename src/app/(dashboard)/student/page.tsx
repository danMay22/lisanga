import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";
import { Label } from "@/components/ui/label";

function StudentPage() {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <Label className="text-lg font-semibold">My weekly schedule: </Label>
          <BigCalendar/>
        </div>
      </div>
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
}

export default StudentPage;