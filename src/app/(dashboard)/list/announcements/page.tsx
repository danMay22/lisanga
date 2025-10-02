'use client';

import { announcementsData } from "@/lib/data";
import React, { useState, useMemo } from "react";

type Announcement = {
  id: number;
  title: string;
  class: string;
  date: string;
};
const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];
function AnnouncementListPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAnnouncements = useMemo(() => {
    return announcementsData.filter(announcement => 
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.class.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="text-2xl">📢</span>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {filteredAnnouncements.length}
              </span>
            </div>
            <div>
              <h1 className="text-3xl font-bold">Announcements</h1>
              <p className="text-gray-600">Important updates and notifications</p>
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 items-center">
          <div className="relative flex-1 max-w-sm">
            <input 
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm pl-10" 
              placeholder="Search announcements..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="space-y-6">
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
      </div>
    </div>
  );
}

export default AnnouncementListPage;
   