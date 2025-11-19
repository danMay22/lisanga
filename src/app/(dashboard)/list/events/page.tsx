"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Plus, Users, X } from "lucide-react";
import { toast } from "sonner";
import { eventsData, role } from "@/lib/data";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function EventListPage() {
  const [value, onChange] = useState<Value>(new Date());
  const [showAddModal, setShowAddModal] = useState(false);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [assignmentType, setAssignmentType] = useState('');
  const [assignmentTarget, setAssignmentTarget] = useState('');
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    class: ""
  });

  const handleAddEvent = () => {
    if (!eventData.title || !eventData.date || !eventData.startTime) {
      toast.error("Please fill in all required fields");
      return;
    }
    setShowAddModal(false);
    setShowAssignModal(true);
  };

  const handleAssign = (eventId: number) => {
    setSelectedEvent(eventId);
    setShowAssignModal(true);
  };

  const submitAssignment = () => {
    if (!assignmentType || !assignmentTarget) {
      toast.error('Please select assignment type and target');
      return;
    }
    toast.success(`Event assigned to ${assignmentType}: ${assignmentTarget}`);
    setShowAssignModal(false);
    setAssignmentType('');
    setAssignmentTarget('');
    setEventData({ title: "", date: "", startTime: "", endTime: "", class: "" });
  };

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg font-semibold">Events Calendar</h1>
        {role === "admin" && (
          <button 
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add Event
          </button>
        )}
      </div>

      <div className="mb-6">
        <Calendar onChange={onChange} value={value} />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {eventsData.map((event) => (
          <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg">{event.title}</h3>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">{event.class}</span>
                {role === "admin" && (
                  <button 
                    onClick={() => handleAssign(event.id)}
                    className="text-blue-600 hover:text-blue-800 p-1"
                    title="Assign event"
                  >
                    <Users className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <span>📅</span>
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span>⏰</span>
                <span>{event.startTime} - {event.endTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Event Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 max-w-[90vw]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Add New Event</h3>
              <button onClick={() => setShowAddModal(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Event Title *"
                value={eventData.title}
                onChange={(e) => setEventData({...eventData, title: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="date"
                value={eventData.date}
                onChange={(e) => setEventData({...eventData, date: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="time"
                  placeholder="Start Time *"
                  value={eventData.startTime}
                  onChange={(e) => setEventData({...eventData, startTime: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="time"
                  placeholder="End Time"
                  value={eventData.endTime}
                  onChange={(e) => setEventData({...eventData, endTime: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <select
                value={eventData.class}
                onChange={(e) => setEventData({...eventData, class: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Class</option>
                <option value="1A">1A</option>
                <option value="2B">2B</option>
                <option value="3C">3C</option>
                <option value="4B">4B</option>
                <option value="5A">5A</option>
                <option value="6B">6B</option>
              </select>
            </div>
            
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleAddEvent}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Add & Assign
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
              <h3 className="text-lg font-semibold">Assign Event</h3>
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

export default EventListPage;
