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
parent: (type,data) => <div className="p-4"><h3 className="text-lg font-semibold mb-4">{type === 'create' ? 'Create' : 'Update'} Parent</h3><p className="text-gray-600">Parent form coming soon...</p></div>,
exam: (type,data) => (
  <div className="p-6">
    <h3 className="text-xl font-semibold mb-6">{type === 'create' ? 'Create' : 'Update'} Exam</h3>
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Subject</label>
        <input type="text" defaultValue={data?.subject} className="w-full p-2 border rounded-md" placeholder="Enter subject" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Class</label>
        <input type="text" defaultValue={data?.class} className="w-full p-2 border rounded-md" placeholder="Enter class" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Teacher</label>
        <input type="text" defaultValue={data?.teacher} className="w-full p-2 border rounded-md" placeholder="Enter teacher name" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Date</label>
        <input type="date" defaultValue={data?.date} className="w-full p-2 border rounded-md" />
      </div>
      <div className="flex gap-3 pt-4">
        <Button className="bg-blue-600 hover:bg-blue-700 px-6">Save</Button>
        <Button variant="outline" className="px-6">Cancel</Button>
      </div>
    </form>
  </div>
),
assignment: (type,data) => (
  <div className="p-6">
    <h3 className="text-xl font-semibold mb-6">{type === 'create' ? 'Create' : 'Update'} Assignment</h3>
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Subject</label>
        <input type="text" defaultValue={data?.subject} className="w-full p-2 border rounded-md" placeholder="Enter subject" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Class</label>
        <input type="text" defaultValue={data?.class} className="w-full p-2 border rounded-md" placeholder="Enter class" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Teacher</label>
        <input type="text" defaultValue={data?.teacher} className="w-full p-2 border rounded-md" placeholder="Enter teacher name" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Due Date</label>
        <input type="date" defaultValue={data?.dueDate} className="w-full p-2 border rounded-md" />
      </div>
      <div className="flex gap-3 pt-4">
        <Button className="bg-blue-600 hover:bg-blue-700 px-6">Save</Button>
        <Button variant="outline" className="px-6">Cancel</Button>
      </div>
    </form>
  </div>
),
result: (type,data) => (
  <div className="p-6">
    <h3 className="text-xl font-semibold mb-6">{type === 'create' ? 'Create' : 'Update'} Result</h3>
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Subject</label>
        <input type="text" defaultValue={data?.subject} className="w-full p-2 border rounded-md" placeholder="Enter subject" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Student</label>
        <input type="text" defaultValue={data?.student} className="w-full p-2 border rounded-md" placeholder="Enter student name" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Class</label>
        <input type="text" defaultValue={data?.class} className="w-full p-2 border rounded-md" placeholder="Enter class" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Score</label>
        <input type="number" min="0" max="100" defaultValue={data?.score} className="w-full p-2 border rounded-md" placeholder="Enter score (0-100)" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Date</label>
        <input type="date" defaultValue={data?.date} className="w-full p-2 border rounded-md" />
      </div>
      <div className="flex gap-3 pt-4">
        <Button className="bg-blue-600 hover:bg-blue-700 px-6">Save</Button>
        <Button variant="outline" className="px-6">Cancel</Button>
      </div>
    </form>
  </div>
),
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
      <div className="p-6 flex flex-col gap-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Delete {table}</h3>
          <p className="text-gray-600 mb-4">
            All data will be lost. Are you absolutely sure you want to delete:
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <p className="font-medium text-red-800">
              {data?.name || `${table} #${id}`}
            </p>
            <p className="text-sm text-red-600">ID: {id}</p>
          </div>
          <p className="text-sm text-gray-500">This action cannot be undone.</p>
        </div>
        <div className="flex gap-3 justify-center">
          <Button 
            variant="outline" 
            onClick={() => setOpen(false)}
            className="px-6"
          >
            Cancel
          </Button>
          <Button 
            className="bg-red-600 hover:bg-red-700 px-6"
            onClick={() => {
              // Handle delete logic here
              setOpen(false);
            }}
          >
            Delete
          </Button>
        </div>
      </div>
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
