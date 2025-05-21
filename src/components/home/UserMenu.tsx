import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { CircleUser, CreditCard, LogOut, Plus, UserIcon } from "lucide-react";
import Link from "next/link";


export default function UserMenu() {
    const handleSignOut = async () => {
       console.log("signing out")
    };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative h-10 w-9 rounded-full border bg-background"
        >
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">Ouvrir user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">John Doe</p>
            <p className="text-sm leading-none text-muted-foreground">
              John.doe@example.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/profile" className="w-full cursor-pointer">
              <UserIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        
          <DropdownMenuItem
            className="cursor-pointer text-red-600 dartk:text-red-400 focus:text-red-600 dark:focus:text-red-400"
            onSelect={handleSignOut}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Deconnecter</span>
        </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
