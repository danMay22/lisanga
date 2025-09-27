'use client';

import { Header } from '@/components/home/Header';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Edit, Trash2, Check, X } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Fin D'annee Scolaire",
    time: "09:00AM - 2:00PM",
    description: "2 Juin 2025, constitue la derniere journee de notre programme, cette annee et comme par coutume nous vous invintons...",
    type: "event"
  },
  {
    id: 2,
    title: "Parent-eleve",
    time: "10:00AM - 2:00PM",
    description: "Un jour de l'annee ou chaque parent peut experimente notre structure scolaire, apprendre des nouvelles ou visiter l'enviroment de son enfant.",
    type: "event"
  },
  {
    id: 3,
    title: "Orientation: pour Examen d'Etat pour la 6em Math Physique.",
    date: "2025/05/19",
    description: "Chaque eleve des 6em Math-Physique doivent se rendre a la salle de classe 56, ce vendredi 23 May a 14h pour l'orientation a l'examen d'Etat.",
    type: "announcement"
  },
  {
    id: 4,
    title: "Livre a vendre",
    date: "2025-05-03",
    description: "Pour tous ceux en manque des livres de Math, Physique et Geo... veillent contacter chef de Classe Mbuyi Clarrisse de la 5 em Bio-Chimie.",
    type: "announcement"
  }
];

export default function EventsPage() {
  const handleApprove = (id: number) => console.log("Approve:", id);
  const handleReject = (id: number) => console.log("Reject:", id);
  const handleEdit = (id: number) => console.log("Edit:", id);
  const handleDelete = (id: number) => console.log("Delete:", id);

  return (
    <div>
      <Header />
      <div className="pt-20 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Events & Announcements Management</h1>
          
          <div className="grid gap-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Events</h2>
              <div className="grid gap-4">
                {events.filter(item => item.type === 'event').map((event) => (
                  <div key={event.id} className="block p-6 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h5 className="text-xl font-bold tracking-tight text-gray-900">{event.title}</h5>
                      <DropdownMenu>
                        <DropdownMenuTrigger className="p-1 hover:bg-gray-100 rounded">
                          <MoreHorizontal className="h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleApprove(event.id)}>
                            <Check className="mr-2 h-4 w-4 text-green-600" />
                            Approve
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleReject(event.id)}>
                            <X className="mr-2 h-4 w-4 text-red-600" />
                            Reject
                          </DropdownMenuItem>
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
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Announcements</h2>
              <div className="grid gap-4">
                {events.filter(item => item.type === 'announcement').map((announcement) => (
                  <div key={announcement.id} className="block p-6 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h5 className="text-xl font-bold tracking-tight text-gray-900">{announcement.title}</h5>
                      <DropdownMenu>
                        <DropdownMenuTrigger className="p-1 hover:bg-gray-100 rounded">
                          <MoreHorizontal className="h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleApprove(announcement.id)}>
                            <Check className="mr-2 h-4 w-4 text-green-600" />
                            Approve
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleReject(announcement.id)}>
                            <X className="mr-2 h-4 w-4 text-red-600" />
                            Reject
                          </DropdownMenuItem>
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
          </div>
        </div>
      </div>
    </div>
  );
}