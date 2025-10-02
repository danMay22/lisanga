import React from "react";
import Image from "next/image";
import Link from "next/link";
import UserMenu from "./UserMenu";
import { LanguageToggle } from "./LanguageToggle";

function Navbar() {
  return (
    <header className="p-2 sm:p-4 bg-white border-b">
      <div className="container flex justify-between h-12 sm:h-16 mx-auto">
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/" className="text-blue-500 hover:underline text-xs sm:text-sm">
            ← Back to Home
          </Link>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
          <LanguageToggle />
          <div className="rounded-full w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
            <Image
              src="/message.png"
              alt="Messages"
              width={20}
              height={20}
              className="cursor-pointer sm:w-6 sm:h-6"
            />
          </div>
          <div className="rounded-full w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center relative">
            <Image
              src="/announcement.png"
              alt="Announcements" 
              width={24}
              height={24}
              className="cursor-pointer sm:w-7 sm:h-7"
            />
            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-white bg-green-500 rounded-full text-xs">7</div>
          </div>
          
          <UserMenu />
        </div>
      </div>
    </header>
  );
}

export default Navbar;