'use client';

import FormModdle from "@/components/FormModdle";
import TableSearch from "@/components/TableSearch";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { role, studentsData } from "@/lib/data";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  grade: number;
  class: string;
  address: string;
  isDelegate?: boolean;
};

function StudentListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const itemsPerPage = 10;

  const filteredAndSortedStudents = useMemo(() => {
    const filtered = studentsData.filter(student => 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.class.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return filtered.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }, [searchTerm, sortOrder]);

  const totalPages = Math.ceil(filteredAndSortedStudents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStudents = filteredAndSortedStudents.slice(startIndex, startIndex + itemsPerPage);

  const handleSort = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    setCurrentPage(1);
  };

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/*Top*/}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Students</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch 
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search students..."
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
            {role === "admin" && (
              //<Button variant="outline" size="icon" className="w-8 h-8 flex items-center justify-center rounded-md bg-lamaYellow">
                //<Image src="/plus.png" alt="" width={14} height={14} />
              //</Button>
              <FormModdle table="student" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* List */}
      <div className="rounded-md border mt-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Info</TableHead>
              <TableHead className="hidden md:table-cell">Student ID</TableHead>
              <TableHead className="hidden md:table-cell">Grade</TableHead>
              <TableHead className="hidden md:table-cell">Class</TableHead>
              <TableHead className="hidden lg:table-cell">Phone</TableHead>
              <TableHead className="hidden lg:table-cell">Address</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell>
                  <div className="flex items-center gap-4">
                    <Image
                      src={student.photo}
                      alt=""
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium">{student.name}</div>
                      <div className="text-sm text-muted-foreground">{student.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">{student.studentId}</TableCell>
                <TableCell className="hidden md:table-cell">{student.grade}</TableCell>
                <TableCell className="hidden md:table-cell">{student.class}</TableCell>
                <TableCell className="hidden lg:table-cell">{student.phone}</TableCell>
                <TableCell className="hidden lg:table-cell">{student.address}</TableCell>
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
                          <DialogTitle>Student Information</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-6">
                          <div className="flex items-center gap-4">
                            <Image
                              src={student.photo}
                              alt={student.name}
                              width={80}
                              height={80}
                              className="w-20 h-20 rounded-full object-cover"
                            />
                            <div>
                              <h3 className="text-xl font-semibold">{student.name}</h3>
                              <p className="text-muted-foreground">{student.email}</p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium text-muted-foreground">Student ID</label>
                              <p className="font-medium">{student.studentId}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-muted-foreground">Grade</label>
                              <p className="font-medium">{student.grade}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-muted-foreground">Class</label>
                              <p className="font-medium">{student.class}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-muted-foreground">Class Delegate</label>
                              <p className="font-medium">
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                  No
                                </span>
                              </p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-muted-foreground">Phone</label>
                              <p className="font-medium">{student.phone || 'N/A'}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-muted-foreground">Address</label>
                              <p className="font-medium">{student.address}</p>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    {role === "admin" && (
                      <FormModdle table="student" type="delete" id={student.id} data={student}/>
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
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredAndSortedStudents.length)} of {filteredAndSortedStudents.length} students
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

export default StudentListPage;
