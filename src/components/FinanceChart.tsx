"use client"

import { Label } from "./ui/label"
import Image from "next/image"
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Jan',
      income: 6400,
      expense: 2400,
    
    },
    {
      name: 'Feb',
      income: 4500,
      expense: 1200,
    },
    {
      name: 'Mar',
      income: 7800,
      expense: 2400,
    },
    {
      name: 'Apr',
      income: 4000,
      expense: 7500,
    },
    {
      name: 'May',
      income: 10000,
      expense: 5700,
    },
    {
      name: 'Jun',
      income: 14000,
      expense: 8400,
    },
    {
      name: 'Jul',
      income: 6700,
      expense: 9040,
    },
    {
        name: 'Aug',
        income: 9000,
        expense: 5000,
      },
      {
        name: 'Sep',
        income: 11000,
        expense: 8120,
      },{
        name: 'Oct',
        income: 1500,
        expense: 3080,
      },{
        name: 'Nov',
        income: 4500,
        expense: 1050,
      },{
        name: 'Dec',
        income: 6000,
        expense: 3450,
      },
  ];

function FinanceChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* title */}
      <div className="flex justify-between items-center">
        <Label className="text-lg font-semibold">Finance</Label>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false} tickMargin={10}/>
          <YAxis axisLine={false} tickMargin={20} />
          <Tooltip />
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop: "20px", paddingBottom:"40px"}}/>
          <Line type="monotone" dataKey="income" stroke="#1e3a8a" strokeWidth={5}/>
          <Line type="monotone" dataKey="expense" stroke="#ea580c" strokeWidth={5}/>
        </LineChart>
      </ResponsiveContainer>
      </div>
  )
}

export default FinanceChart