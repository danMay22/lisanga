'use client';

import React, { useState, useMemo } from 'react';
import { Button } from './ui/button';
import { attendanceData, studentGrades } from '@/lib/data';

interface StudentGrade {
  subject: string;
  semester1: number;
  semester2: number;
}

interface StudentPerformanceProps {
  studentId: number;
  studentName: string;
  className: string;
}

export default function StudentPerformance({ studentId, studentName, className }: StudentPerformanceProps) {
  const [selectedSemester, setSelectedSemester] = useState<'semester1' | 'semester2' | 'both'>('both');
  
  const studentGradeData = studentGrades[studentId as keyof typeof studentGrades] || [];
  
  const averages = useMemo(() => {
    if (studentGradeData.length === 0) return { semester1: 0, semester2: 0, overall: 0 };
    
    const sem1Avg = studentGradeData.reduce((sum, grade) => sum + grade.semester1, 0) / studentGradeData.length;
    const sem2Avg = studentGradeData.reduce((sum, grade) => sum + grade.semester2, 0) / studentGradeData.length;
    const overallAvg = (sem1Avg + sem2Avg) / 2;
    
    return {
      semester1: Number(sem1Avg.toFixed(1)),
      semester2: Number(sem2Avg.toFixed(1)),
      overall: Number(overallAvg.toFixed(1))
    };
  }, [studentGradeData]);

  const attendancePercentage = useMemo(() => {
    const studentAttendance = attendanceData.filter(record => 
      record.present.includes(studentId) || record.absent.includes(studentId)
    );
    if (studentAttendance.length === 0) return 0;
    
    const presentCount = attendanceData.filter(record => record.present.includes(studentId)).length;
    return Math.round((presentCount / studentAttendance.length) * 100);
  }, [studentId]);

  const getGradeColor = (grade: number) => {
    if (grade >= 9) return 'text-green-600';
    if (grade >= 7) return 'text-blue-600';
    if (grade >= 5) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getPerformanceLevel = (avg: number) => {
    if (avg >= 9) return 'Excellent';
    if (avg >= 7) return 'Good';
    if (avg >= 5) return 'Average';
    return 'Needs Improvement';
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Performance</h2>
          <p className="text-sm text-gray-600">{studentName} - Class: {className}</p>
          <div className="mt-2">
            <div className="bg-blue-50 px-3 py-1 rounded-full inline-block">
              <span className="text-2xl font-bold text-blue-600">{attendancePercentage}%</span>
              <span className="text-xs text-gray-600 ml-1">Attendance</span>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className={`text-3xl font-bold ${getGradeColor(averages.overall)}`}>
            {averages.overall}
          </div>
          <div className="text-sm text-gray-500">of 10 max total score</div>
          <div className="text-xs text-gray-400 mt-1">
            {getPerformanceLevel(averages.overall)}
          </div>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        <Button
          variant={selectedSemester === 'semester1' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedSemester('semester1')}
        >
          1st Semester
        </Button>
        <Button
          variant={selectedSemester === 'semester2' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedSemester('semester2')}
        >
          2nd Semester
        </Button>
        <Button
          variant={selectedSemester === 'both' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedSemester('both')}
        >
          Both Semesters
        </Button>
      </div>



      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              {(selectedSemester === 'semester1' || selectedSemester === 'both') && (
                <th className="text-center py-3 px-4 font-medium text-gray-900">1st Semester</th>
              )}
              {(selectedSemester === 'semester2' || selectedSemester === 'both') && (
                <th className="text-center py-3 px-4 font-medium text-gray-900">2nd Semester</th>
              )}
              {selectedSemester === 'both' && (
                <th className="text-center py-3 px-4 font-medium text-gray-900">Average</th>
              )}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              {(selectedSemester === 'semester1' || selectedSemester === 'both') && (
                <td className={`py-3 px-4 text-center text-lg font-bold ${getGradeColor(averages.semester1)}`}>
                  {averages.semester1}
                </td>
              )}
              {(selectedSemester === 'semester2' || selectedSemester === 'both') && (
                <td className={`py-3 px-4 text-center text-lg font-bold ${getGradeColor(averages.semester2)}`}>
                  {averages.semester2}
                </td>
              )}
              {selectedSemester === 'both' && (
                <td className={`py-3 px-4 text-center text-lg font-bold ${getGradeColor(averages.overall)}`}>
                  {averages.overall}
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}