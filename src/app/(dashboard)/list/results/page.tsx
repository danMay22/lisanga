'use client';

import FormModdle from "@/components/FormModdle";
import TableSearch from "@/components/TableSearch";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { resultsData, role } from "@/lib/data";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Result = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student:string;
  type: "exam" | "assignment";
  date: string;
  score: number;
};

function ResultListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const itemsPerPage = 10;

  const filteredAndSortedResults = useMemo(() => {
    const filtered = resultsData.filter(result => 
      result.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.class.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return filtered.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.subject.localeCompare(b.subject);
      } else {
        return b.subject.localeCompare(a.subject);
      }
    });
  }, [searchTerm, sortOrder]);

  const totalPages = Math.ceil(filteredAndSortedResults.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentResults = filteredAndSortedResults.slice(startIndex, startIndex + itemsPerPage);

  const handleSort = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    setCurrentPage(1);
  };


  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/*Top*/}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Results</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch 
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search results..."
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
            {role === "admin" && <FormModdle table="result" type="create" />}
          </div>
        </div>
      </div>
      {/* List */}
      <div className="rounded-md border mt-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Subject</TableHead>
              <TableHead className="hidden md:table-cell">Student</TableHead>
              <TableHead className="hidden lg:table-cell">Score</TableHead>
              <TableHead className="hidden lg:table-cell">Class</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentResults.map((result) => (
              <TableRow key={result.id}>
                <TableCell className="font-medium">{result.subject}</TableCell>
                <TableCell className="hidden md:table-cell">{result.student}</TableCell>
                <TableCell className="hidden lg:table-cell">
                  <span className={`font-medium ${
                    result.score >= 80 ? 'text-green-600' : 
                    result.score >= 60 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {result.score}/100
                  </span>
                </TableCell>
                <TableCell className="hidden lg:table-cell">{result.class}</TableCell>
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
                          <DialogTitle>Result Information</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium text-muted-foreground">Subject</label>
                              <p className="font-medium">{result.subject}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-muted-foreground">Student</label>
                              <p className="font-medium">{result.student}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-muted-foreground">Class</label>
                              <p className="font-medium">{result.class}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-muted-foreground">Teacher</label>
                              <p className="font-medium">{result.teacher}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-muted-foreground">Type</label>
                              <p className="font-medium capitalize">{result.type}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-muted-foreground">Date</label>
                              <p className="font-medium">{result.date}</p>
                            </div>
                            <div className="col-span-2">
                              <label className="text-sm font-medium text-muted-foreground">Score</label>
                              <div className="flex items-center gap-2">
                                <span className={`text-2xl font-bold ${
                                  result.score >= 80 ? 'text-green-600' : 
                                  result.score >= 60 ? 'text-yellow-600' : 'text-red-600'
                                }`}>
                                  {result.score}/100
                                </span>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  result.score >= 80 ? 'bg-green-100 text-green-800' : 
                                  result.score >= 60 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                                }`}>
                                  {result.score >= 80 ? 'Excellent' : result.score >= 60 ? 'Good' : 'Needs Improvement'}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    {role === "admin" && (
                      <>
                        <FormModdle table="result" type="update" data={result} />
                        <FormModdle table="result" type="delete" id={result.id} data={result} />
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
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredAndSortedResults.length)} of {filteredAndSortedResults.length} results
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

export default ResultListPage;
