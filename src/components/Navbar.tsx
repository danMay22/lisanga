'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import UserMenu from "./UserMenu";

function Navbar() {
  const handleSignOut = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/';
  };

  return (
    <header className="p-4 bg-white border-b">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-blue-500 hover:underline text-sm">
            ← Back to Home
          </Link>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="rounded-full w-7 h-7 flex items-center justify-center">
            <Image
              src="/message.png"
              alt="Messages"
              width={25}
              height={25}
              className="cursor-pointer"
            />
          </div>
          <div className="rounded-full w-7 h-7 flex items-center justify-center relative">
            <Image
              src="/announcement.png"
              alt="Announcements" 
              width={30}
              height={30}
              className="cursor-pointer"
            />
            <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center text-white bg-green-500 rounded-full text-xs">7</div>
          </div>
          
          <UserMenu onSignOut={handleSignOut} />
        </div>
      </div>
    </header>
  );
}

export default Navbar;