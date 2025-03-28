import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { ModeToggle } from "@/app/(dashboard)/ModeToggle";

function Navbar() {
  return (
<header className="p-4 dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex justify-between h-16 mx-auto">
  <div className="flex items-center gap-6 justify-end w-full">
        <div className=" rounded-full w-7 h-7 flex items-center justify-center">
          <Image
            src="/message.png"
            alt=""
            width={25}
            height={25}
            className="cursor-pointer"
          />
        </div>
        <div className="rounded-full w-7 h-7 flex items-center justify-center relative">
          <Image
            src="/announcement.png"
            alt="" 
            width={30}
            height={30}
            className="cursor-pointer"
          />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center text-white bg-green-500 rounded-full text-xs">7</div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
      </div>
		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
    <Image src="/avatar.png" alt="" width={40} height={40} />
		</a>
		<div className="flex items-center md:space-x-4">
			<div className="relative">
				<span className="absolute inset-y-0 left-0 flex items-center pl-2">
					<button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
						<svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800">
							<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
						</svg>
					</button>
				</span>
				<input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50" />
			</div>
	
		</div>
		<button title="Open menu" type="button" className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>


  );
}

export default Navbar;
