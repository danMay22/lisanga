"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { MoreHorizontal, Edit, Trash2, Plus, Users, GraduationCap, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";

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

const announcements = [
  {
    id: 1,
    title: "Orientation: pour Examen d'Etat pour la 6em Math Physique.",
    date: "2025/05/19",
    description: "Chaque eleve des 6em Math-Physique doivent se rendre a la salle de classe 56, ce vendredi 23 May a 14h pour l'orientation a l'examen d'Etat.",
  },
  {
    id: 2,
    title: "Livre a vendre",
    date: "2025-05-03",
    description: "Pour tous ceux en manque des livres de Math, Physique et Geo... veillent contacter chef de Classe Mbuyi Clarrisse de la 5 em Bio-Chimie. (laisse lui un message sur son profile)",
  },
  {
    id: 3,
    title: "Gardez la salle d'informatique PROPRE!!!",
    date: "2025-04-02",
    description: "Nous avons recu plusieur nouvelle au sujet de plastic, bouteille de boisson et autres condiment ou enmballages dans la salle d'informatique. veillez a garder la salle propre stp.",
  },
  {
    id: 4,
    title: "OBJECT TROUVER:",
    date: "2025-04-01",
    description: "Sac orange and rouge, trouver dans la salle de classe 32, veillez passer voir la prefet.. si vous avez perdu votre sac.",
  },
  {
    id: 5,
    title: "Noel !!!!!",
    date: "2024-12-17",
    description: "Pour la Noel cette annee nous SANGA, organisons une journee d'Art et de music au theme de Noel. veillez nous a 17h pour une presentation theatral de la naissance de Jesus par nous talenteux eleves.,)",
  },
];

function EventsSection() {
  const router = useRouter();
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<number | null>(null);
  const [assignmentType, setAssignmentType] = useState('');
  const [assignmentTarget, setAssignmentTarget] = useState('');
  
  const handleEdit = (id: number) => {
    router.push('/events');
  };
  
  const handleDelete = (id: number) => {
    toast.error('You need to be an admin to delete events. Please contact an administrator.');
  };

  const handleAssign = (announcementId: number) => {
    setSelectedAnnouncement(announcementId);
    setShowAssignModal(true);
  };

  const submitAssignment = () => {
    if (!assignmentType || !assignmentTarget) {
      toast.error('Please select assignment type and target');
      return;
    }
    toast.success(`Announcement assigned to ${assignmentType}: ${assignmentTarget}`);
    setShowAssignModal(false);
    setAssignmentType('');
    setAssignmentTarget('');
  };

  return (
    <div>
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
      
      <div className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Announcements</h3>
          <span className="text-sm text-blue-600 cursor-pointer hover:underline">View All</span>
        </div>
        
        <div className="space-y-3">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-gray-900">{announcement.title}</h4>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">{announcement.date}</span>
                  <button 
                    onClick={() => handleAssign(announcement.id)}
                    className="text-blue-600 hover:text-blue-800 p-1"
                    title="Assign to group/class/individual"
                  >
                    <Users className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600">{announcement.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4">
        <input
          type="text"
          placeholder="Report an issue or leave a message..."
          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Assignment Modal */}
      {showAssignModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 max-w-[90vw]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Assign Announcement</h3>
              <button 
                onClick={() => setShowAssignModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Assignment Type</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setAssignmentType('group')}
                    className={`p-3 border rounded-lg flex flex-col items-center gap-1 ${
                      assignmentType === 'group' ? 'bg-blue-50 border-blue-500' : 'hover:bg-gray-50'
                    }`}
                  >
                    <Users className="w-5 h-5" />
                    <span className="text-xs">Group</span>
                  </button>
                  <button
                    onClick={() => setAssignmentType('class')}
                    className={`p-3 border rounded-lg flex flex-col items-center gap-1 ${
                      assignmentType === 'class' ? 'bg-blue-50 border-blue-500' : 'hover:bg-gray-50'
                    }`}
                  >
                    <GraduationCap className="w-5 h-5" />
                    <span className="text-xs">Class</span>
                  </button>
                  <button
                    onClick={() => setAssignmentType('individual')}
                    className={`p-3 border rounded-lg flex flex-col items-center gap-1 ${
                      assignmentType === 'individual' ? 'bg-blue-50 border-blue-500' : 'hover:bg-gray-50'
                    }`}
                  >
                    <User className="w-5 h-5" />
                    <span className="text-xs">Individual</span>
                  </button>
                </div>
              </div>
              
              {assignmentType && (
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Select {assignmentType === 'group' ? 'Group' : assignmentType === 'class' ? 'Class' : 'Student'}
                  </label>
                  <select
                    value={assignmentTarget}
                    onChange={(e) => setAssignmentTarget(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Choose...</option>
                    {assignmentType === 'group' && (
                      <>
                        <option value="Teachers">Teachers</option>
                        <option value="Students">Students</option>
                        <option value="Parents">Parents</option>
                        <option value="Staff">Staff</option>
                      </>
                    )}
                    {assignmentType === 'class' && (
                      <>
                        <option value="1A">1A</option>
                        <option value="2B">2B</option>
                        <option value="3C">3C</option>
                        <option value="4B">4B</option>
                        <option value="5A">5A</option>
                        <option value="6B">6B</option>
                      </>
                    )}
                    {assignmentType === 'individual' && (
                      <>
                        <option value="John Doe">John Doe</option>
                        <option value="Jane Smith">Jane Smith</option>
                        <option value="Mike Johnson">Mike Johnson</option>
                      </>
                    )}
                  </select>
                </div>
              )}
            </div>
            
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => setShowAssignModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={submitAssignment}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Assign
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventsSection;