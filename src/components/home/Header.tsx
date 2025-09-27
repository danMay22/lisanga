"use client"
import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link';
import UserMenu from '../UserMenu';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  className?: string;
}

export const Header= ({ className }: HeaderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const checkAuth = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
    };
    checkAuth();
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <header className={cn('fixed top-0 w-full z-50 border-b bg-white backdrop-blur', className )}>
      <div className='mx-10 flex h-16 items-center justify-between'>
        <Link href={isLoggedIn ? "/student" : "/"}
          className="flex items-center space-x-2 font-bold text-xl hover:opacity-80 transition-opacity">
          LISANGA School
        </Link>
        <div className='flex items-center gap-4'>
          {isLoggedIn ? (
            <>
              <UserMenu onSignOut={handleSignOut} />
              {!isHomePage && (
                <Button variant="outline">
                  <Link href="/">Retour</Link>
                </Button>
              )}
            </>
          ) : (
            <Button>
              <Link href="/login">Se Connecter</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
