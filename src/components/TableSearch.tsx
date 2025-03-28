import React from 'react'
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from 'next/image';

function TableSearch() {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-xs  px-2">
    <Input
    type='text'
      className="w-[200px] p-2 bg-transparent outline-none"
      placeholder="Search..."
    />
  </div>
  )
}

export default TableSearch   