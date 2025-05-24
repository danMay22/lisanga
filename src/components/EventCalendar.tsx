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
    title: "Fin D'annee Scolaire: ",
    time: "09:00AM - 2:00PM",
    description: "2 Juin 2025, constitue la derniere journee de notre programme, cette annee et comme par coutume nous vous invintons...",
  },
  {
    id: 2,
    title: "Parent-eleve",
    time: "10:00AM - 2:00PM",
    description: "Un jour de l'annee ou chaque parent peut  experimente notre structure scolaire, apprendre des nouvelles ou visiter l'enviroment de son enfant.",
  },
  {
    id: 3,
    title: "Journee Culturelle",
    time: "21:00PM - 00:00AM",
    description: "Yeaaahh!! journee de fete culturelle. ",
  },
  {
    id: 4,
    title: "SPORT: Interclass Foot",
    time: "15:00PM - 18:00PM",
    description: "Sport et match de foot. ",
  },
  {
    id: 5,
    title: "Intero-General",
    time: "12:00PM - 2:00PM",
    description: "23 Mars, debut des intero genereaux",
  },
  {
    id: 6,
    title: "Exams",
    time: "08:00AM - 12:00PM",
    description: "17 May, debut des exam.",
  },
];

function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} className="mb-4" />
      <div className="flex items-center justify-between">
        <Label className="text-xl font-semibold my-4">Evenement Scolaire: </Label>
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
