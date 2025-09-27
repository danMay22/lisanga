"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Separator } from "./ui/separator";
import { Label } from "./ui/label";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { MoreHorizontal, Edit, Trash2 } from "lucide-react";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Fin D'annee Scolaire",
    time: "09:00AM - 2:00PM",
    description: "2 Juin 2025, constitue la derniere journee de notre programme, cette annee et comme par coutume nous vous invintons...",
  },
  {
    id: 2,
    title: "Parent-eleve",
    time: "10:00AM - 2:00PM",
    description: "Un jour de l'annee ou chaque parent peut experimente notre structure scolaire, apprendre des nouvelles ou visiter l'enviroment de son enfant.",
  },
  {
    id: 3,
    title: "Journee Culturelle",
    time: "21:00PM - 00:00AM",
    description: "Yeaaahh!! journee de fete culturelle. une journee ou nos eleves expressent toute le creativite. en regard des sport, music, jubilee de vetement et MARATHON de math et physique.",
  },
  {
    id: 4,
    title: "SPORT: Interclass Foot",
    time: "15:00PM - 18:00PM",
    description: "Sport et match de foot. 8 classe de 3eme, 4 de 4eme, 4 de 5eme et 2 classe de 6eme jouerons 2 Match par jour, Mardi et Mercredi apres l'ecole pendant la period de OCT-FEB...",
  },
  {
    id: 5,
    title: "Blogs: LIRE et APPRENDRE par Nous",
    time: "12:00PM - 2:00PM",
    description: "Chaque 2 semaine un prof et une des nos chef de classe nous quelque des leurs conseille, sur la vie aujourd'hui etudes et comment s'y en sortir dans notre realite.",
  },
  {
    id: 6,
    title: "Exams",
    time: "08:00AM - 12:00PM",
    description: "17 May... les examens commence. nous esperons que la periode de revision a servie dans son but de vous preparez, pour la period d'exam, nous tenons a vous souhaiter une tres bonne chance.",
  },
];

function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());
  
  const handleEdit = (id: number) => {
    console.log("Edit event:", id);
  };
  
  const handleDelete = (id: number) => {
    console.log("Delete event:", id);
  };

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} className="mb-4" />

      <div className="flex flex-col gap-4 p-4 mt-4">
        {events.map((event) => (
          <div
            className="block p-6 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
            key={event.id}
          >
            <div className="flex items-start justify-between mb-2">
              <h5 className="text-xl font-bold tracking-tight text-gray-900">{event.title}</h5>
              <DropdownMenu>
                <DropdownMenuTrigger className="p-1 hover:bg-gray-100 rounded">
                  <MoreHorizontal className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleEdit(event.id)}>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleDelete(event.id)} className="text-red-600">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="text-sm text-gray-500 mb-2">{event.time}</div>
            <p className="font-normal text-gray-700">{event.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Report an issue or leave a message..."
          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

export default EventCalendar;