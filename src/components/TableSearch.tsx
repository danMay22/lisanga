'use client';

import React from 'react';
import { Input } from "@/components/ui/input";

interface TableSearchProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

function TableSearch({ placeholder = "Search...", value, onChange }: TableSearchProps) {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-xs px-2">
      <Input
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-[200px] p-2 bg-transparent outline-none"
        placeholder={placeholder}
      />
    </div>
  );
}

export default TableSearch   