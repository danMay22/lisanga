'use client';

import React, { useMemo } from 'react';
import { attendanceData, teachersData } from '@/lib/data';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TeacherAttendance() {
  const { t } = useLanguage();
  const today = new Date().toISOString().split('T')[0];
  
  const teacherAttendanceStats = useMemo(() => {
    const todayRecords = attendanceData.filter(record => record.date === today);
    const presentTeachers = todayRecords.length; // Assume if there's a record, teacher is present
    const totalTeachers = teachersData.length;
    const absentTeachers = totalTeachers - presentTeachers;
    
    return {
      present: presentTeachers,
      absent: absentTeachers,
      total: totalTeachers,
      percentage: totalTeachers > 0 ? Math.round((presentTeachers / totalTeachers) * 100) : 0
    };
  }, [today]);

  const teachersList = useMemo(() => {
    return teachersData.map(teacher => {
      const todayRecord = attendanceData.find(record => 
        record.teacherId === teacher.id && record.date === today
      );
      return {
        ...teacher,
        hasUpdatedAttendance: !!todayRecord,
        isPresent: !!todayRecord // If there's a record, assume teacher is present
      };
    });
  }, [today]);

  return (
    <div className="bg-white p-3 sm:p-6 rounded-lg shadow-sm border">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-2">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{t('teacherAttendance')}</h2>
          <p className="text-xs sm:text-sm text-gray-600">{t('today')}: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
        <div className="bg-green-50 p-3 sm:p-4 rounded-lg text-center">
          <div className="text-xl sm:text-2xl font-bold text-green-600">{teacherAttendanceStats.present}</div>
          <div className="text-xs sm:text-sm text-gray-600">{t('present')}</div>
        </div>
        <div className="bg-red-50 p-3 sm:p-4 rounded-lg text-center">
          <div className="text-xl sm:text-2xl font-bold text-red-600">{teacherAttendanceStats.absent}</div>
          <div className="text-xs sm:text-sm text-gray-600">{t('absent')}</div>
        </div>
        <div className="bg-blue-50 p-3 sm:p-4 rounded-lg text-center">
          <div className="text-xl sm:text-2xl font-bold text-blue-600">{teacherAttendanceStats.percentage}%</div>
          <div className="text-xs sm:text-sm text-gray-600">{t('attendanceRate')}</div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-900 text-sm sm:text-base">{t('teacher')}</th>
              <th className="text-center py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-900 text-sm sm:text-base">Status</th>
              <th className="text-center py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-900 text-sm sm:text-base">{t('updated')}</th>
            </tr>
          </thead>
          <tbody>
            {teachersList.map((teacher) => (
              <tr key={teacher.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-2 sm:py-3 px-2 sm:px-4">
                  <div>
                    <div className="font-medium text-gray-900 text-sm sm:text-base">{teacher.name}</div>
                    <div className="text-xs sm:text-sm text-gray-500">{teacher.subjects.join(', ')}</div>
                  </div>
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 text-center">
                  <span className={`inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    teacher.hasUpdatedAttendance 
                      ? teacher.isPresent 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {teacher.hasUpdatedAttendance 
                      ? teacher.isPresent ? t('present') : t('absent')
                      : t('notUpdated')
                    }
                  </span>
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 text-center">
                  <span className={`inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    teacher.hasUpdatedAttendance 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {teacher.hasUpdatedAttendance ? '✓ Done' : `⏳ ${t('pending')}`}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}