import FormModdle from "@/components/FormModdle";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { Button } from "@/components/ui/button";
import { classesData, parentsData, role, studentsData, subjectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Class = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};
const columns = [
  {
    header: "Class Name",
    accessor: "name",
  },
  {
    header: "Students",
    accessor: "students",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];
function ClassListPage() {
  const renderRow = (item: Class) => (
    <tr
      key={item.id}
      className="border-b border-gray-600 even:bg-slate-50 text-sm hover:bg-green-300"
    >
      <td className="flex items-center gap-4 p-4 ">{item.name}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.capacity}</td>
      <td className="hidden md:table-cell">{item.supervisor}</td>
      <td>
      <div className="flex items-center gap-2">
      {role === "admin" && (
            <>
              <FormModdle table="class" type="update" data={item} />
              <FormModdle table="class" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/*Top*/}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Classes</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
          <Button variant="outline" size="icon" className="w-8 h-8 flex items-center justify-center rounded-md bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </Button>
            <Button variant="outline" size="icon" className="w-8 h-8 flex items-center justify-center rounded-md bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </Button>
            {role === "admin" && <FormModdle table="class" type="create" />}
          </div>
        </div>
      </div>
      {/* List */}
      <Table columns={columns} renderRow={renderRow} data={classesData} />
      {/*Pagination*/}
      <Pagination />
    </div>
  );
}

export default ClassListPage;
