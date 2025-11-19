'use client';

import FormModdle from "@/components/FormModdle";
import TableSearch from "@/components/TableSearch";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { assignmentsData, role } from "@/lib/data";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Assignment = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
};

function AssignmentListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const itemsPerPage = 10;

  const filteredAndSortedAssignments = useMemo(() => {
    const filtered = assignmentsData.filter(assignment => 
      assignment.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assignment.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assignment.teacher.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return filtered.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.subject.localeCompare(b.subject);
      } else {
        return b.subject.localeCompare(a.subject);
      }
    });
  }, [searchTerm, sortOrder]);

  const totalPages = Math.ceil(filteredAndSortedAssignments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentAssignments = filteredAndSortedAssignments.slice(startIndex, startIndex + itemsPerPage);

  const handleSort = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    setCurrentPage(1);
  };


  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/*Top*/}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Assignment</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch 
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search assignments..."
          />
          <div className="flex items-center gap-4 self-end">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleSort}
              className="w-8 h-8 flex items-center justify-center rounded-md bg-lamaYellow"
              title={`Sort ${sortOrder === 'asc' ? 'Z-A' : 'A-Z'}`}
            >
              <Image src="/sort.png" alt="" width={14} height={14} />
            </Button>
            {role === "admin" && <FormModdle table="assignment" type="create" />}
          </div>
        </div>
      </div>
      {/* List */}
      <div className="rounded-md border mt-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Subject</TableHead>
              <TableHead className="hidden md:table-cell">Class</TableHead>
              <TableHead className="hidden lg:table-cell">Teacher</TableHead>
              <TableHead className="hidden lg:table-cell">Due Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentAssignments.map((assignment) => (
              <TableRow key={assignment.id}>
                <TableCell className="font-medium">{assignment.subject}</TableCell>
                <TableCell className="hidden md:table-cell">{assignment.class}</TableCell>
                <TableCell className="hidden lg:table-cell">{assignment.teacher}</TableCell>
                <TableCell className="hidden lg:table-cell">{assignment.dueDate}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Assignment Information</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium text-muted-foreground">Subject</label>
                              <p className="font-medium">{assignment.subject}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-muted-foreground">Class</label>
                              <p className="font-medium">{assignment.class}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-muted-foreground">Teacher</label>
                              <p className="font-medium">{assignment.teacher}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-muted-foreground">Due Date</label>
                              <p className="font-medium">{assignment.dueDate}</p>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    {role === "admin" && (
                      <>
                        <FormModdle table="assignment" type="update" data={assignment} />
                        <FormModdle table="assignment" type="delete" id={assignment.id} data={assignment} />
                      </>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {/* Pagination */}
      <div className="flex items-center justify-between space-x-2 py-4">
        <div className="text-sm text-muted-foreground">
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredAndSortedAssignments.length)} of {filteredAndSortedAssignments.length} assignments
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          <div className="text-sm font-medium">
            Page {currentPage} of {totalPages}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AssignmentListPage;
