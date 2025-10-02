"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Check, X, Users } from "lucide-react";

const pendingSubmissions = [
  {
    id: 1,
    type: "announcement",
    title: "Lost Phone in Classroom 12",
    description: "Someone left their Samsung phone in classroom 12 after math class. Please contact the office.",
    submittedBy: "Marie Dubois",
    date: "2025-01-20",
    status: "pending"
  },
  {
    id: 2,
    type: "event",
    title: "Science Fair Preparation",
    description: "Students need to prepare their science projects for the upcoming fair on March 15th.",
    submittedBy: "Prof. Martin",
    date: "2025-01-19",
    time: "14:00 - 16:00",
    status: "pending"
  },
  {
    id: 3,
    type: "announcement",
    title: "Library Books Overdue",
    description: "Several students have overdue library books. Please return them by Friday to avoid late fees.",
    submittedBy: "Librarian",
    date: "2025-01-18",
    status: "pending"
  }
];

function EventListPage() {
  const [submissions, setSubmissions] = useState(pendingSubmissions);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState<number | null>(null);
  const [assignmentType, setAssignmentType] = useState('');
  const [assignmentTarget, setAssignmentTarget] = useState('');

  const handleApprove = (id: number) => {
    setSelectedSubmission(id);
    setShowAssignModal(true);
  };

  const handleReject = (id: number) => {
    setSubmissions(prev => prev.filter(s => s.id !== id));
    toast.success("Submission rejected");
  };

  const submitAssignment = () => {
    if (!assignmentType || !assignmentTarget) {
      toast.error('Please select assignment type and target');
      return;
    }
    
    setSubmissions(prev => prev.filter(s => s.id !== selectedSubmission));
    toast.success(`Approved and assigned to ${assignmentType}: ${assignmentTarget}`);
    setShowAssignModal(false);
    setAssignmentType('');
    setAssignmentTarget('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Event & Announcement Management</h1>
            <p className="text-gray-600">Review and approve submissions from staff and students</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Pending Submissions ({submissions.length})</h2>
          
          {submissions.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No pending submissions</p>
          ) : (
            <div className="space-y-4">
              {submissions.map((submission) => (
                <div key={submission.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          submission.type === 'event' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {submission.type}
                        </span>
                        <h3 className="font-semibold">{submission.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{submission.description}</p>
                      {submission.time && (
                        <p className="text-gray-500 text-xs">Time: {submission.time}</p>
                      )}
                      <p className="text-gray-500 text-xs">Submitted by: {submission.submittedBy} on {submission.date}</p>
                    </div>
                    
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => handleApprove(submission.id)}
                        className="flex items-center gap-1 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                        title="Approve and assign"
                      >
                        <Check className="w-4 h-4" />
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(submission.id)}
                        className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                        title="Reject submission"
                      >
                        <X className="w-4 h-4" />
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Assignment Modal */}
      {showAssignModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 max-w-[90vw]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Approve & Assign</h3>
              <button 
                onClick={() => setShowAssignModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Assign to</label>
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
              </div>
              
              {assignmentType && (
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Select {assignmentType === 'group' ? 'Group' : assignmentType === 'class' ? 'Class' : 'Person'}
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
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Approve & Assign
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventListPage;
