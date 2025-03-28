"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Separator } from "./ui/separator";
import { Label } from "./ui/label";
import Image from "next/image";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Graduation",
    time: "09:00AM - 2:00PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
  },
  {
    id: 2,
    title: "Parent Day",
    time: "10:00AM - 2:00PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
  },
  {
    id: 3,
    title: "Matric Dance",
    time: "21:00PM - 00:00AM",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
  },
  {
    id: 4,
    title: "Orientation Day",
    time: "11:00AM - 2:00PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
  },
  {
    id: 5,
    title: "SPORT: Interclass Foot",
    time: "15:00PM - 18:00PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
  },
  {
    id: 6,
    title: "Exams",
    time: "12:00PM - 2:00PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
  },
  {
    id: 7,
    title: "Intero-General",
    time: "08:00AM - 12:00PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
  },
  {
    id: 8,
    title: "School Closing",
    time: "12:00PM - 2:00PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
  },
];

function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} className="mb-4" />
      <div className="flex items-center justify-between">
        <Label className="text-xl font-semibold my-4">Events</Label>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <Separator />
      <div className="flex flex-col gap-4 p-4 mt-4">
        {events.map((event) => (
          <div
            className="rounded-tremor-default border-2 border-t-dashed border-gray-300 shadow-sm p-6 dark:border-dark-tremor-content-subtle sm:mx-auto sm:max-w-lg border-t-4 odd:border-t-lamaRed even:border-t-lamaYellow"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-gray-700">{event.title}</h2>
              <span className="text-gray-400 text-xs">{event.time}</span>
              <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong"></p>
            </div>
            <span className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              {event.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCalendar;
