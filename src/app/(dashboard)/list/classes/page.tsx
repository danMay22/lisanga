'use client';

import TableSearch from "@/components/TableSearch";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { classesData } from "@/lib/data";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Class = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};

function ClassListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const itemsPerPage = 10;

  const filteredAndSortedClasses = useMemo(() => {
    const filtered = classesData.filter(classItem => 
      classItem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      classItem.supervisor.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return filtered.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }, [searchTerm, sortOrder]);

  const totalPages = Math.ceil(filteredAndSortedClasses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentClasses = filteredAndSortedClasses.slice(startIndex, startIndex + itemsPerPage);

  const handleSort = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    setCurrentPage(1);
  };


  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/*Top*/}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Classes</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch 
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search classes..."
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

          </div>
        </div>
      </div>
      {/* List */}
      <div className="rounded-md border mt-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Class Name</TableHead>
              <TableHead className="hidden md:table-cell">Capacity</TableHead>
              <TableHead className="hidden md:table-cell">Grade</TableHead>
              <TableHead className="hidden md:table-cell">Supervisor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentClasses.map((classItem) => (
              <TableRow key={classItem.id}>
                <TableCell className="font-medium">{classItem.name}</TableCell>
                <TableCell className="hidden md:table-cell">{classItem.capacity}</TableCell>
                <TableCell className="hidden md:table-cell">{classItem.grade}</TableCell>
                <TableCell className="hidden md:table-cell">{classItem.supervisor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {/* Pagination */}
      <div className="flex items-center justify-between space-x-2 py-4">
        <div className="text-sm text-muted-foreground">
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredAndSortedClasses.length)} of {filteredAndSortedClasses.length} classes
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

export default ClassListPage;
