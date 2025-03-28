import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import { Label } from "@/components/ui/label";
import React from "react";

function ParentPage() {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/** LEFT **/}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <Label className="text-lg font-semibold">Schedule (John Doe)</Label>
          <BigCalendar/>
        </div>
      </div>
      {/** RIGHT **/}

      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  );
}

export default ParentPage;