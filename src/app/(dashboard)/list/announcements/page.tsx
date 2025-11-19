'use client';

import { announcementsData, role } from "@/lib/data";
import React, { useState, useMemo } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Edit, Trash2, Users, X, Plus, Clock } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

type Announcement = {
  id: number;
  title: string;
  class: string;
  date: string;
};

const publishedAnnouncements = [
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

const recentSubmissions = [
  { id: 1, title: "Lost Phone in Classroom 12", submittedBy: "Marie Dubois", time: "2 min ago", type: "report" },
  { id: 2, title: "Broken Projector in Lab", submittedBy: "Prof. Martin", time: "15 min ago", type: "report" },
  { id: 3, title: "Sports Day Announcement", submittedBy: "Coach Williams", time: "1 hour ago", type: "announcement" }
];
function AnnouncementListPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<number | null>(null);
  const [assignmentType, setAssignmentType] = useState('');
  const [assignmentTarget, setAssignmentTarget] = useState('');
  const [newItem, setNewItem] = useState({ title: '', content: '', type: 'announcement' });

  const filteredAnnouncements = useMemo(() => {
    return announcementsData.filter(announcement => 
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.class.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleEdit = (id: number) => {
    router.push('/events');
  };
  
  const handleDelete = (id: number) => {
    toast.error('You need to be an admin to delete announcements. Please contact an administrator.');
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

  const handleCreateNew = () => {
    if (!newItem.title || !newItem.content) {
      toast.error('Please fill in title and content');
      return;
    }
    toast.success(`${newItem.type} created successfully!`);
    setShowCreateModal(false);
    setNewItem({ title: '', content: '', type: 'announcement' });
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
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">Announcements & Events Management</h2>
          <p className="text-sm text-gray-600">Manage announcements and view recent submissions</p>
        </div>
        {role === "admin" && (
          <div className="flex gap-2">
            <button 
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Plus className="w-4 h-4" />
              Create New
            </button>
            <button 
              onClick={() => router.push('/events')}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              View All
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Class Announcements */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Class Announcements</h3>
            <div className="relative flex-1 max-w-sm">
              <input 
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm" 
                placeholder="Search announcements..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-4 mb-8">
            {filteredAnnouncements.map((announcement) => (
              <article key={announcement.id} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{announcement.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>Class {announcement.class}</span>
                      <span>•</span>
                      <span>{announcement.date}</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-blue-100 text-blue-800">
                    {announcement.class}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Important announcement regarding {announcement.title.toLowerCase()}. Please check with your class teacher for more details and follow the instructions provided.
                </p>
              </article>
            ))}
          </div>

          <h3 className="text-lg font-semibold mb-4">Published Announcements</h3>
          <div className="flex flex-col gap-4">
            {publishedAnnouncements.map((announcement) => (
              <div
                key={announcement.id}
                className={`block p-4 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors border-l-4 ${getBorderColor(announcement.priority)}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h5 className="text-lg font-bold tracking-tight text-gray-900">{announcement.title}</h5>
                  {role === "admin" && (
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleAssign(announcement.id)}
                        className="text-blue-600 hover:text-blue-800 p-1"
                        title="Assign to group/class/individual"
                      >
                        <Users className="w-4 h-4" />
                      </button>
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
                  )}
                </div>
                <div className="text-sm text-gray-500 mb-2">{announcement.date}</div>
                <p className="font-normal text-gray-700">{announcement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Submissions */}
        <div className="lg:col-span-1 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Recent Submissions</h3>
            <div className="space-y-3">
              {recentSubmissions.map((submission) => (
                <div key={submission.id} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-sm">{submission.title}</h4>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      submission.type === 'announcement' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {submission.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{submission.time}</span>
                    <span>•</span>
                    <span>by {submission.submittedBy}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Updates */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Photo Updates</h3>
              {role === "admin" && (
                <Link href="/admin/photos" className="text-blue-600 hover:underline text-sm">
                  View All
                </Link>
              )}
            </div>
            <div className="space-y-3">
              {role === "admin" ? (
                <>
                  <div className="p-3 border border-orange-200 bg-orange-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="font-medium text-sm">5 new photos</span>
                    </div>
                    <p className="text-xs text-gray-600">Sports Tournament - awaiting approval</p>
                  </div>
                  <div className="p-3 border border-green-200 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium text-sm">12 photos approved</span>
                    </div>
                    <p className="text-xs text-gray-600">Lake Trip - now in gallery</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-3 border border-blue-200 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="font-medium text-sm">New Photos Added</span>
                    </div>
                    <p className="text-xs text-gray-600">Sports Tournament photos for Class 5A have been added to the gallery</p>
                  </div>
                  <div className="p-3 border border-green-200 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium text-sm">Event Photos Available</span>
                    </div>
                    <p className="text-xs text-gray-600">Lake Trip photos for Classes 3A, 3B, and 4A are now available</p>
                  </div>
                  <div className="p-3 border border-purple-200 bg-purple-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="font-medium text-sm">Article Updated</span>
                    </div>
                    <p className="text-xs text-gray-600">Science Fair article updated with Class 6A participation details</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Create New Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 max-w-[90vw]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Create New</h3>
              <button onClick={() => setShowCreateModal(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <select
                value={newItem.type}
                onChange={(e) => setNewItem({...newItem, type: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="announcement">Announcement</option>
                <option value="event">Event</option>
              </select>
              
              <input
                type="text"
                placeholder="Title *"
                value={newItem.title}
                onChange={(e) => setNewItem({...newItem, title: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              
              <textarea
                placeholder="Content *"
                value={newItem.content}
                onChange={(e) => setNewItem({...newItem, content: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md h-24"
              />
            </div>
            
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateNew}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Assignment Modal */}
      {showAssignModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 max-w-[90vw]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Assign Announcement</h3>
              <button onClick={() => setShowAssignModal(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
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
                  <Users className="w-5 h-5" />
                  <span className="text-xs">Class</span>
                </button>
                <button
                  onClick={() => setAssignmentType('individual')}
                  className={`p-3 border rounded-lg flex flex-col items-center gap-1 ${
                    assignmentType === 'individual' ? 'bg-blue-50 border-blue-500' : 'hover:bg-gray-50'
                  }`}
                >
                  <Users className="w-5 h-5" />
                  <span className="text-xs">Individual</span>
                </button>
              </div>
              
              {assignmentType && (
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

export default AnnouncementListPage;
   