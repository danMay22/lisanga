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
    description: "Yeaaahh!! journee de fete culturelle. une journee ou nos eleves expressent toute le creativite. en regard des sport, music, jubilee de vetement et MARATHON de math et physique.",
  },
  {
    id: 4,
    title: "SPORT: Interclass Foot",
    time: "15:00PM - 18:00PM",
    description: "Sport et match de foot. 8 classe de 3eme, 4 de 4eme, 4 de 5eme et 2 classe de 6eme jouerons 2 Match par jour, Mardi et Mercredi apres l'ecole pendant la period de OCT-FEB... La grande final just avant la period de exam et ou chaque classe qui atteint les quart-finale a une chance de gagner un prix",
  },
  {
    id: 5,
    title: "Blogs: LIRE et APPRENDRE par Nous",
    time: "12:00PM - 2:00PM",
    description: "Chaque 2 semaine un prof et une des nos chef de classe nous quelque des leurs conseille, sur la vie aujourd'hui etudes et comment s'y en sortir dans notre realite et comment en faire de son mieux pour s'y en sortir.",
  },
  {
    id: 6,
    title: "Exams",
    time: "08:00AM - 12:00PM",
    description: "17 May... les examens commence. nous esperons que la periode de revision a servie dans son but de vous preparez, pour la period d'exam, nous tenons a vous souhaiter une tres bonne chance. veillez trouvez l'horraire de chacun de vos exam dans la section EXAM, sur la BAR a votre gauche et emcore bonne chance, faite de votre mieux !! ",
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
            className="rounded-tremor-default border-2 border-t-dashed border-gray-300 shadow-sm p-6 dark:border-dark-tremor-content-subtle sm:mx-auto sm:max-w-lg border-t-4 odd:border-t-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#48cae4] to-[#023e8a]  even:border-t-lamaYellow"
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
