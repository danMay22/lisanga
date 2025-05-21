"use client"
import React from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link';
import UserMenu from '../UserMenu';
import { Button } from '../ui/button';
import { ModeToggle } from '@/app/(dashboard)/ModeToggle';


interface HeaderProps {
  className?: string;
}

export const Header= ({ className }: HeaderProps) => {
  return (
    <header className={cn('fixed top-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60', className )}>
      <div className=' flex h-16 items-center justify-between gap-2'>
      <Link href="/"
      className="ml-4 flex items-center space-x-2 font-bold text-xl hover:text-primary translate-colors">
        Logo
      </Link>
      <div className='justify-between max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 mr-4 flex items-center gap-4'>
      <UserMenu/>
      <Button>
              <Link href={"/login"}>Se Connecter / Dec</Link>
    </Button>
      <div className='border-l pl-4 dark:border-gray-800'>
     
      <ModeToggle/>
      </div>
      </div>
      </div>
    </header>
  )
}
