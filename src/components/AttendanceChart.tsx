"use client";
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Label } from "./ui/label";
import Image from "next/image";

const data = [
  {
    name: "Mon",
    present: 64,
    absent: 38,
  },
  {
    name: "Tue",
    present: 97,
    absent: 13,
  },
  {
    name: "Wed",
    present: 98,
    absent: 2,
  },
  {
    name: "Thu",
    present: 87,
    absent: 13,
  },
  {
    name: "Fri",
    present: 97,
    absent: 3,
  },
  {
    name: "Sat",
    present: 86,
    absent: 14,
  },
];
function AttendanceChart() {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
      <Label className="text-lg font-semibold">Attendance</Label>
      <Image src="/moreDark.png" width={20} height={20} alt="" />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false} />
          <YAxis axisLine={false} />
          <Tooltip />
          <Legend align='center' verticalAlign='top' wrapperStyle={{paddingTop: "10px", paddingBottom:"30px"}}/>
          <Bar
            dataKey="present"
            fill="#1e3a8a"
           radius={[10,10,0,0]}
          />
          <Bar
            dataKey="absent"
            fill="#9ca3af"
            radius={[10,10,0,0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AttendanceChart;
