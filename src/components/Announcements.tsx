'use client';

import React from "react";
import { Label } from "./ui/label";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { MoreHorizontal, Edit, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const announcements = [
  {
    id: 1,
    title: "Orientation: pour Examen d'Etat pour la 6em Math Physique.",
    date: "2025/05/19",
    description: "Chaque eleve des 6em Math-Physique doivent se rendre a la salle de classe 56, ce vendredi 23 May a 14h pour l'orientation a l'examen d'Etat.",
    priority: "high"
  },
  {
    id: 2,
    title: "Livre a vendre",
    date: "2025-05-03",
    description: "Pour tous ceux en manque des livres de Math, Physique et Geo... veillent contacter chef de Classe Mbuyi Clarrisse de la 5 em Bio-Chimie. (laisse lui un message sur son profile)",
    priority: "medium"
  },
  {
    id: 3,
    title: "Gardez la salle d'informatique PROPRE!!!",
    date: "2025-04-02",
    description: "Nous avons recu plusieur nouvelle au sujet de plastic, bouteille de boisson et autres condiment ou enmballages dans la salle d'informatique. veillez a garder la salle propre stp.",
    priority: "high"
  },
  {
    id: 4,
    title: "OBJECT TROUVER:",
    date: "2025-04-01",
    description: "Sac orange and rouge, trouver dans la salle de classe 32, veillez passer voir la prefet.. si vous avez perdu votre sac.",
    priority: "low"
  },
  {
    id: 5,
    title: "Noel !!!!!",
    date: "2024-12-17",
    description: "Pour la Noel cette annee nous SANGA, organisons une journee d'Art et de music au theme de Noel. veillez nous a 17h pour une presentation theatral de la naissance de Jesus par nous talenteux eleves.",
    priority: "medium"
  }
];

function Announcements() {
  const router = useRouter();
  
  const handleEdit = (id: number) => {
    router.push('/events');
  };
  
  const handleDelete = (id: number) => {
    toast.error('You need to be an admin to delete announcements. Please contact an administrator.');
  };

  const getBorderColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-blue-500';
      case 'low': return 'border-l-green-500';
      default: return 'border-l-gray-500';
    }
  };

  return (
    <div className="bg-white p-4 rounded-md">

      <div className="flex flex-col gap-4 mt-4">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className={`block p-4 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors border-l-4 ${getBorderColor(announcement.priority)}`}
          >
            <div className="flex items-start justify-between mb-2">
              <h5 className="text-lg font-bold tracking-tight text-gray-900">{announcement.title}</h5>
              <DropdownMenu>
                <DropdownMenuTrigger className="p-1 hover:bg-gray-100 rounded">
                  <MoreHorizontal className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleEdit(announcement.id)}>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleDelete(announcement.id)} className="text-red-600">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="text-sm text-gray-500 mb-2">{announcement.date}</div>
            <p className="font-normal text-gray-700">{announcement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Announcements;