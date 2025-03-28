"use client";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Label } from "./ui/label";
import Image from "next/image";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "white",
  },
  {
    name: "Female",
    count: 35,
    fill: "#ea580c",
  },
  {
    name: "Male",
    count: 55,
    fill: "#1e3a8a",
  },
];

function CountChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* title */}
      <div className="flex justify-between items-center">
        <Label className="text-lg font-semibold">Students</Label>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* Chart */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image src="/maleFemale.png" alt="" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
      </div>
      {/* bottom */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-[#1e3a8a] rounded-full" />
          <Label className="font-bold">1.243</Label>
          <h2 className="text-xs text-gray-500">Male (55%)</h2>
        </div>
        <div className="flex justify-center gap-16">
          <div className="flex flex-col gap-1">
            <div className="w-5 h-5 bg-lamaOran rounded-full" />
            <Label className="font-bold">1.243</Label>
            <h2 className="text-xs text-gray-500">Female (35%)</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountChart;
