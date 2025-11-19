"use client";

import AdminStudentAttendance from "@/components/AdminStudentAttendance";
import Announcements from "@/components/Announcements";
import EventCalendar from "@/components/EventCalendar";
import TeacherAttendance from "@/components/TeacherAttendance";

export default function AdminPage() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <TeacherAttendance />
        <EventCalendar />
        <AdminStudentAttendance />
      </div>
      <div className="w-full">
        <Announcements />
      </div>
    </div>
  );
}