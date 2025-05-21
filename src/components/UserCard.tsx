import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";


const UserCard = ({ type }: { type: string }) => {
  return (

    <Card className="odd:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#e0ae94] w-96 ">
    <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Total: {type}</CardTitle>
        <CardDescription className="text-xs">Members scolaire</CardDescription>
      </CardHeader>
   <CardContent>
  <div className="dark:text-white rounded-2xl  p-4 flex-1 shadow-md min-w-[130px]">
      <div className="flex justify-between items-center">
        <Label className="text-[10px] px-2 py-1 uppercase tracking-wide">
          2024/2025
        </Label>
        <Badge>
        <Image src="/more.png" width={20} height={20} alt="more" />
        </Badge>
       
      </div>
      <Label className="text-xl font-semibold my-4">24</Label>
      <h2 className="capitalize text-sm font-medium text-gray-500">
        {type}(s)
      </h2>
    </div>
    </CardContent>
 </Card>
  );
};

export default UserCard;

