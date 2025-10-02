"use client";

import { Calendar, Plus, X } from "lucide-react";
import { Label } from "./ui/label";
import { useState } from "react";
import { toast } from "sonner";

function EventCard() {
  const [showModal, setShowModal] = useState(false);
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    time: "",
    description: ""
  });

  const handleAddEvent = () => {
    if (!eventData.title || !eventData.date || !eventData.time) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Here you would typically save to your backend/state management
    toast.success("Event added successfully!");
    setShowModal(false);
    setEventData({ title: "", date: "", time: "", description: "" });
  };

  return (
    <>
      <div className="bg-white p-4 rounded-md flex-1 min-w-[130px]">
        <div className="flex justify-between items-center">
          <span className="text-[10px] bg-purple-100 px-2 py-1 rounded-full text-purple-600">
            2024/2025
          </span>
          <Calendar className="w-4 h-4 text-purple-600" />
        </div>
        <h1 className="text-2xl font-semibold my-4">12</h1>
        <h2 className="capitalize text-sm font-medium text-gray-500">Events</h2>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs text-gray-400">School Events</span>
          <button 
            onClick={() => setShowModal(true)}
            className="flex items-center gap-1 text-xs text-purple-600 hover:text-purple-800"
          >
            <Plus className="w-3 h-3" />
            Add
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 max-w-[90vw]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Add School Event</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Event Title *</Label>
                <input
                  id="title"
                  type="text"
                  value={eventData.title}
                  onChange={(e) => setEventData({...eventData, title: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md mt-1"
                  placeholder="Enter event title"
                />
              </div>
              
              <div>
                <Label htmlFor="date">Date *</Label>
                <input
                  id="date"
                  type="date"
                  value={eventData.date}
                  onChange={(e) => setEventData({...eventData, date: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="time">Time *</Label>
                <input
                  id="time"
                  type="time"
                  value={eventData.time}
                  onChange={(e) => setEventData({...eventData, time: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <textarea
                  id="description"
                  value={eventData.description}
                  onChange={(e) => setEventData({...eventData, description: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md mt-1 h-20"
                  placeholder="Enter event description"
                />
              </div>
            </div>
            
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleAddEvent}
                className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
              >
                Add Event
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EventCard;