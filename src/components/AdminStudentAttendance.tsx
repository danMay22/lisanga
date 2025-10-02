'use client';

import React, { useMemo } from 'react';
import { attendanceData, studentsData } from '@/lib/data';

export default function AdminStudentAttendance() {
  const today = new Date().toISOString().split('T')[0];
  
  const studentAttendanceStats = useMemo(() => {
    const todayRecords = attendanceData.filter(record => record.date === today);
    const presentStudents = todayRecords.reduce((acc, record) => acc + record.present.length, 0);
    const absentStudents = todayRecords.reduce((acc, record) => acc + record.absent.length, 0);
    const totalStudents = studentsData.length;
    
    return {
      present: presentStudents,
      absent: absentStudents,
      total: totalStudents,
      percentage: totalStudents > 0 ? Math.round((presentStudents / totalStudents) * 100) : 0
    };
  }, [today]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Student Attendance</h2>
          <p className="text-sm text-gray-600">Today: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600">{studentAttendanceStats.present}</div>
          <div className="text-sm text-gray-600">Present</div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-red-600">{studentAttendanceStats.absent}</div>
          <div className="text-sm text-gray-600">Absent</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-600">{studentAttendanceStats.percentage}%</div>
          <div className="text-sm text-gray-600">Attendance Rate</div>
        </div>
      </div>
    </div>
  );
}