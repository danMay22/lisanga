import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Label } from "./ui/label";


const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="dark:text-white rounded-2xl odd:bg-lamaGreen even:bg-lamaSky p-4 flex-1 shadow-md min-w-[130px]">
      <div className="flex justify-between items-center">
        <Label className="text-[10px] px-2 py-1 uppercase tracking-wide">
          2024/2025
        </Label>
        <Badge>
        <Image src="/more.png" width={20} height={20} alt="more" />
        </Badge>
       
      </div>
      <Label className="text-xl font-semibold my-4">234</Label>
      <h2 className="capitalize text-sm font-medium text-gray-500">
        {type}(s)
      </h2>
    </div>
    
  );
};

export default UserCard;

