import StudentAttendance from "@/components/StudentAttendance";
import TeacherPerformance from "@/components/TeacherPerformance";
import BigCalendar from "@/components/BigCalendar";
import { Label } from "@/components/ui/label";
import { teacherStudents } from "@/lib/data";
import React from "react";

function TeacherPage() {
  const teacherId = 1; // Mock teacher ID - John Doe
  const students = teacherStudents[teacherId] || [];

  return (
    <div className="p-4 flex gap-4 flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <StudentAttendance teacherId={teacherId} students={students} />
        <TeacherPerformance teacherId={teacherId} className="5A" totalStudents={students.length} />
      </div>
      
      <div className="w-full">
        <div className="h-full bg-white p-4 rounded-md">
          <Label className="text-lg font-semibold">My weekly schedule: </Label>
          <BigCalendar/>
        </div>
      </div>
    </div>
  );
}

export default TeacherPage;
