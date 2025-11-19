"use client";

import { useState } from "react";
import { Check, X, Eye, Calendar, User } from "lucide-react";
import { toast } from "sonner";

const pendingPhotos = [
  {
    id: 1,
    eventId: 2,
    eventTitle: "Sports Tournament",
    uploadedBy: "Coach Williams",
    uploadDate: "2025-01-20",
    photos: ["/15.png", "/16.png", "/17.png", "/18.png", "/19.png"],
    status: "pending"
  },
  {
    id: 2,
    eventId: 3,
    eventTitle: "Science Fair",
    uploadedBy: "Prof. Martin",
    uploadDate: "2025-01-19",
    photos: ["/20.png", "/21.png"],
    status: "pending"
  }
];

export default function AdminPhotosPage() {
  const [photos, setPhotos] = useState(pendingPhotos);

  const handleApprove = (photoId: number) => {
    setPhotos(prev => prev.filter(p => p.id !== photoId));
    toast.success("Photos approved and added to gallery");
  };

  const handleReject = (photoId: number) => {
    setPhotos(prev => prev.filter(p => p.id !== photoId));
    toast.success("Photos rejected");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Photo Management Dashboard</h1>
          <p className="text-gray-600">Review and approve event photos for gallery</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-2xl font-bold text-orange-600">{photos.length}</div>
              <div className="text-sm text-gray-600">Pending Approval</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-2xl font-bold text-green-600">24</div>
              <div className="text-sm text-gray-600">Approved Today</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-2xl font-bold text-blue-600">156</div>
              <div className="text-sm text-gray-600">Total in Gallery</div>
            </div>
          </div>

          {/* Pending Photos */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-semibold mb-4">Pending Photo Uploads</h2>
            <div className="space-y-6">
              {photos.map((upload) => (
                <div key={upload.id} className="bg-white p-6 rounded-lg shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{upload.eventTitle}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {upload.uploadedBy}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {upload.uploadDate}
                        </div>
                        <span>{upload.photos.length} photos</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleApprove(upload.id)}
                        className="flex items-center gap-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                      >
                        <Check className="w-4 h-4" />
                        Approve All
                      </button>
                      <button
                        onClick={() => handleReject(upload.id)}
                        className="flex items-center gap-1 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                      >
                        <X className="w-4 h-4" />
                        Reject
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {upload.photos.map((photo, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={photo}
                          alt={`${upload.eventTitle} ${index + 1}`}
                          className="w-full h-24 object-cover rounded cursor-pointer hover:opacity-80"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 rounded flex items-center justify-center transition-all">
                          <Eye className="w-5 h-5 text-white opacity-0 group-hover:opacity-100" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {photos.length === 0 && (
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <div className="text-gray-500">No pending photo uploads</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}