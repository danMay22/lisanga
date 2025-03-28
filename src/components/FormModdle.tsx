"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "./ui/button";
import Image from "next/image";
import { Badge } from "./ui/badge";
//import TeacherForm from "./forms/TeacherForm";
//import StudentForm from "./forms/StudentForm";

const TeacherForm = dynamic(() => import("./forms/TeacherForm"),{
  loading:()=><h1>loading...</h1> 
})
const StudentForm = dynamic(() => import("./forms/StudentForm"),{
  loading:()=>
   <h1>loading...</h1> 
})
const forms: {
  [key:string]: (type: "create" | "update", data?: any) => JSX.Element;
}={
teacher: (type,data) => <TeacherForm type={type} data={data}/>,
student: (type,data) => <StudentForm type={type}  data={data}/>,
};

interface FormModdleProps {
  table:
     "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}

const FormModdle: React.FC<FormModdleProps> = ({ table, type, data, id }) => {
  const size = type === "create" ? "icon" : "icon";
  const bgColor = type === "create" ? "bg-lamaYellow" : "";
  const [open, setOpen] = useState(false);
  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4 shadow-md">
        <span className="text-center font-medium text-lg">
          All Data will be lost. Are you absolutely sure you want to delete this{" "}
          <Badge variant="outline" className="text-center font-medium text-lg">
            {table} ??
          </Badge>
        </span>
        <Button className="bg-red-700 py-2 px-4 rounded-md border-none w-max self-center">
          Delete
        </Button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](type,data)
    ):(
      "Form not found"
    )
  };
  return (
    <>
      <Button
        variant="outline"
        size={`${size}`}
        className={`flex items-center justify-center rounded-md ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </Button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center shadow-md">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40]">
            <Form />
            <div className="absolute top-4 right-4 cursor-pointer">
              <Button
                variant="outline"
                size="icon"
                className="w-8 h-8 flex items-center justify-center rounded-md"
                onClick={() => setOpen(false)}
              >
                <Image src="/close.png" alt="" width={14} height={14} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModdle;
