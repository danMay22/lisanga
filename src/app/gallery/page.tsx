"use client";

import { useState } from "react";
import { Download, Eye, Calendar, Grid, List } from "lucide-react";
import Link from "next/link";

const allEvents = [
  {
    id: 1,
    eventTitle: "Lake Trip",
    eventDate: "2025-04-01",
    coverImage: "/img/pexels-amos-getanda-244415932-12496864.jpg",
    imageCount: 12,
    status: "published"
  },
  {
    id: 2,
    eventTitle: "Sports Tournament", 
    eventDate: "2025-04-15",
    coverImage: "/img/pexels-darkshadephotos-32750752.jpg",
    imageCount: 8,
    status: "published"
  },
  {
    id: 3,
    eventTitle: "Science Fair",
    eventDate: "2025-03-20", 
    coverImage: "/img/pexels-armstrong-opulency-185550616-12448839.jpg",
    imageCount: 15,
    status: "published"
  },
  {
    id: 4,
    eventTitle: "Art Exhibition",
    eventDate: "2025-05-09",
    coverImage: "/img/pexels-audy-of-course-306413796-19055070.jpg", 
    imageCount: 20,
    status: "published"
  },
  {
    id: 5,
    eventTitle: "Music Concert",
    eventDate: "2025-08-10",
    coverImage: "/img/pexels-cottonbro-9291043.jpg",
    imageCount: 25,
    status: "published"
  }
];

export default function GalleryPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">School Event Gallery</h1>
            <p className="text-gray-600">Browse photos from all school events</p>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
          {allEvents.map((event) => (
            <div key={event.id} className={`bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow ${
              viewMode === 'list' ? 'flex' : ''
            }`}>
              <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                <img 
                  src={event.coverImage}
                  alt={event.eventTitle}
                  className={`object-cover ${viewMode === 'list' ? 'w-full h-32' : 'w-full h-48'}`}
                />
                <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                  {event.imageCount} photos
                </div>
              </div>
              
              <div className="p-4 flex-1">
                <h3 className="font-semibold text-lg mb-2">{event.eventTitle}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  {event.eventDate}
                </div>
                
                <div className="flex gap-2">
                  <Link 
                    href={`/gallery/${event.id}`}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    View Photos
                  </Link>
                  <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}