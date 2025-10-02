
import ArticleManager from "@/components/ArticleManager";
import EventCalendar from "@/components/EventCalendar";
import TeacherAttendance from "@/components/TeacherAttendance";
import AdminStudentAttendance from "@/components/AdminStudentAttendance";
import React from "react";

function AdminPage() {
  return (
    <div className="p-2 sm:p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-2 sm:gap-4 auto-rows-min">
      {/* Teacher Attendance - Large block */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-5 lg:row-span-2">
        <TeacherAttendance />
      </div>
      
      {/* Event Calendar - Tall block */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-7 lg:row-span-3">
        <EventCalendar />
      </div>
      
      {/* Article Manager - Left side */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-8">
        <ArticleManager />
      </div>
      
      {/* Student Attendance - Right of Article Manager */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-4">
        <AdminStudentAttendance />
      </div>
    </div>
  );
}

export default AdminPage;
