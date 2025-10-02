'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { toast } from 'sonner';
import { attendanceData } from '@/lib/data';

interface Student {
  id: number;
  name: string;
  studentId: string;
  class: string;
}

interface StudentAttendanceProps {
  teacherId: number;
  students: Student[];
}

export default function StudentAttendance({ teacherId, students }: StudentAttendanceProps) {
  const [attendance, setAttendance] = useState<Record<number, boolean>>({});
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const handleAttendanceChange = (studentId: number, isPresent: boolean) => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: isPresent
    }));
  };

  const handleUpdate = () => {
    const attendees = students.filter(student => attendance[student.id]);
    const absentees = students.filter(student => attendance[student.id] === false);
    const dateStr = new Date().toISOString().split('T')[0];
    
    // Update attendance data and mark teacher as present (since they're updating)
    const existingIndex = attendanceData.findIndex(record => 
      record.teacherId === teacherId && record.date === dateStr
    );
    
    const attendanceRecord = {
      id: existingIndex >= 0 ? attendanceData[existingIndex].id : attendanceData.length + 1,
      date: dateStr,
      teacherId,
      present: attendees.map(s => s.id),
      absent: absentees.map(s => s.id),
      teacherPresent: true // Teacher is present since they're updating attendance
    };
    
    if (existingIndex >= 0) {
      attendanceData[existingIndex] = attendanceRecord;
    } else {
      attendanceData.push(attendanceRecord);
    }
    
    toast.success(`Student attendance updated: ${attendees.length} present, ${absentees.length} absent`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">My Students</h2>
          <p className="text-sm text-gray-600">{today}</p>
        </div>
        <Button onClick={handleUpdate} className="bg-blue-600 hover:bg-blue-700">
          Update Attendance
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-900">Student ID</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Name</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Class</th>
              <th className="text-center py-3 px-4 font-medium text-gray-900">Present</th>
              <th className="text-center py-3 px-4 font-medium text-gray-900">Absent</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-sm text-gray-600">{student.studentId}</td>
                <td className="py-3 px-4 text-sm font-medium text-gray-900">{student.name}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{student.class}</td>
                <td className="py-3 px-4 text-center">
                  <input
                    type="radio"
                    name={`attendance-${student.id}`}
                    checked={attendance[student.id] === true}
                    onChange={() => handleAttendanceChange(student.id, true)}
                    className="w-4 h-4 text-green-600 focus:ring-green-500"
                  />
                </td>
                <td className="py-3 px-4 text-center">
                  <input
                    type="radio"
                    name={`attendance-${student.id}`}
                    checked={attendance[student.id] === false}
                    onChange={() => handleAttendanceChange(student.id, false)}
                    className="w-4 h-4 text-red-600 focus:ring-red-500"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        Total Students: {students.length} | 
        Present: {Object.values(attendance).filter(Boolean).length} | 
        Absent: {Object.values(attendance).filter(a => a === false).length}
      </div>
    </div>
  );
}