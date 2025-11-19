'use client';

import FormModdle from "@/components/FormModdle";
import TableSearch from "@/components/TableSearch";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { parentsData, role } from "@/lib/data";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Parent = {
  id: number;
  name: string;
  students: string[];
  phone: string;
  email?: string;
  address: string;
};

function ParentListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const itemsPerPage = 10;

  const filteredAndSortedParents = useMemo(() => {
    const filtered = parentsData.filter(parent => 
      parent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      parent.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      parent.students.some(student => student.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    
    return filtered.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }, [searchTerm, sortOrder]);

  const totalPages = Math.ceil(filteredAndSortedParents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentParents = filteredAndSortedParents.slice(startIndex, startIndex + itemsPerPage);

  const handleSort = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    setCurrentPage(1);
  };


  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/*Top*/}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Parents</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch 
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search parents..."
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
            {role === "admin" && <FormModdle table="parent" type="create" />}
          </div>
        </div>
      </div>
      {/* List */}
      <div className="rounded-md border mt-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Info</TableHead>
              <TableHead className="hidden md:table-cell">Students</TableHead>
              <TableHead className="hidden lg:table-cell">Phone</TableHead>
              <TableHead className="hidden lg:table-cell">Address</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentParents.map((parent) => (
              <TableRow key={parent.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{parent.name}</div>
                    <div className="text-sm text-muted-foreground">{parent.email}</div>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">{parent.students.join(", ")}</TableCell>
                <TableCell className="hidden lg:table-cell">{parent.phone}</TableCell>
                <TableCell className="hidden lg:table-cell">{parent.address}</TableCell>
                <TableCell>
                  {role === "admin" && (
                    <FormModdle table="parent" type="delete" id={parent.id} data={parent} />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {/* Pagination */}
      <div className="flex items-center justify-between space-x-2 py-4">
        <div className="text-sm text-muted-foreground">
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredAndSortedParents.length)} of {filteredAndSortedParents.length} parents
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

export default ParentListPage;
