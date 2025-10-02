'use client';

import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const getVisiblePages = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className='p-4 flex items-center justify-between text-gray-500'>
      <button 
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className='py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-300'
      >
        Prev
      </button>
      
      <div className='flex items-center gap-2 text-sm'>
        {getVisiblePages().map((page, index) => (
          page === '...' ? (
            <span key={index} className='px-2'>...</span>
          ) : (
            <button
              key={index}
              onClick={() => onPageChange(typeof page === 'number' ? page : 1)}
              className={`px-2 rounded-sm ${
                currentPage === page ? 'bg-green-500/75 text-white' : 'hover:bg-gray-200'
              }`}
            >
              {typeof page === 'number' ? page : '...'}
            </button>
          )
        ))}
      </div>
      
      <button 
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className='py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-300'
      >
        Next
      </button>
    </div>
  );
}
 
 export default Pagination