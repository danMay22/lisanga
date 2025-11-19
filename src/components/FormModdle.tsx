"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";
import Image from "next/image";
import { Plus, Edit, Trash2 } from "lucide-react";
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
  [key:string]: (type: "create" | "update" | "delete", data?: any) => JSX.Element;
}={
teacher: (type,data) => type !== "delete" ? <TeacherForm type={type} data={data}/> : <div>Delete not supported</div>,
student: (type,data) => type !== "delete" ? <StudentForm type={type}  data={data}/> : <div>Delete not supported</div>,
parent: (type,data) => <div className="p-4"><h3 className="text-lg font-semibold mb-4">{type === 'create' ? 'Create' : 'Update'} Parent</h3><p className="text-gray-600">Parent form coming soon...</p></div>,
exam: (type,data) => (
  <div className="space-y-6">
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Subject</label>
          <input 
            type="text" 
            defaultValue={data?.subject} 
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
            placeholder="Enter subject" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Class</label>
          <input 
            type="text" 
            defaultValue={data?.class} 
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
            placeholder="Enter class" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Teacher</label>
          <input 
            type="text" 
            defaultValue={data?.teacher} 
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
            placeholder="Enter teacher name" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Date</label>
          <input 
            type="date" 
            defaultValue={data?.date} 
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
          />
        </div>
      </div>
      <div className="flex justify-end gap-3 pt-4">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </div>
    </form>
  </div>
),
result: (type,data) => (
  <div className="space-y-6">
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Subject</label>
          <input 
            type="text" 
            defaultValue={data?.subject} 
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
            placeholder="Enter subject" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Student</label>
          <input 
            type="text" 
            defaultValue={data?.student} 
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
            placeholder="Enter student name" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Class</label>
          <input 
            type="text" 
            defaultValue={data?.class} 
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
            placeholder="Enter class" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Score</label>
          <input 
            type="number" 
            min="0" 
            max="100" 
            defaultValue={data?.score} 
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
            placeholder="Enter score (0-100)" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Date</label>
          <input 
            type="date" 
            defaultValue={data?.date} 
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
          />
        </div>
      </div>
      <div className="flex justify-end gap-3 pt-4">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </div>
    </form>
  </div>
),
assignment: (type,data) => (
  <div className="space-y-6">
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Subject</label>
          <input 
            type="text" 
            defaultValue={data?.subject} 
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
            placeholder="Enter subject" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Class</label>
          <input 
            type="text" 
            defaultValue={data?.class} 
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
            placeholder="Enter class" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Teacher</label>
          <input 
            type="text" 
            defaultValue={data?.teacher} 
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
            placeholder="Enter teacher name" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Due Date</label>
          <input 
            type="date" 
            defaultValue={data?.dueDate} 
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
          />
        </div>
      </div>
      <div className="flex justify-end gap-3 pt-4">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
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
  const getIcon = () => {
    switch (type) {
      case "create": return <Plus className="h-4 w-4" />;
      case "update": return <Edit className="h-4 w-4" />;
      case "delete": return <Trash2 className="h-4 w-4" />;
      default: return null;
    }
  };

  const getButtonVariant = () => {
    switch (type) {
      case "create": return "default";
      case "update": return "outline";
      case "delete": return "destructive";
      default: return "outline";
    }
  };

  if (type === "delete" && id) {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant={getButtonVariant()} size="sm">
            {getIcon()}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete {table}</AlertDialogTitle>
            <AlertDialogDescription>
              Are you absolutely sure you want to delete this {table}? This action cannot be undone.
              <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                <p className="font-medium text-destructive">
                  {data?.name || `${table} #${id}`}
                </p>
                <p className="text-sm text-muted-foreground">ID: {id}</p>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={getButtonVariant()} size="sm">
          {getIcon()}
          <span className="ml-2 hidden sm:inline">
            {type === "create" ? `Add ${table}` : `Edit`}
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {type === "create" ? `Create New ${table}` : `Update ${table}`}
          </DialogTitle>
        </DialogHeader>
        {forms[table] && type !== "delete" ? forms[table](type, data) : (
          <div className="p-6 text-center text-muted-foreground">
            Form for {table} is not available yet.
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FormModdle;
