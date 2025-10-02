const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "home",
        href: role === "admin" ? "/admin" : role === "teacher" ? "/teacher" : role === "student" ? "/student" : role === "parent" ? "/parent" : "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "teacher",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.png",
        label: "students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/parent.png",
        label: "parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/subject.png",
        label: "subject",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "class",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/lesson.png",
        label: "lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/assignment.png",
        label: "assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/mark.jpg",
        label: "marks",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      /*{
        icon: "/attendance.png",
        label: "Presence",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },*/
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      /*{
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },*/
      {
        icon: "/announcement.png",
        label: "announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  /*{
    title: "Autre...",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Paramètres",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Deconnecter",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },*/
];

import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";


function Menu() {
  return (
    <div className="border-b border-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#48cae4] to-[#023e8a]  dark:border-gray-600 mt-4 text-sm bg-white dark:bg-gray-900 ">
      {menuItems.map((i) => (
        <div key={i.title} className="flex flex-col gap-2 mt-4 mb-8">
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-600 md:px-2 py-2 rounded-md scale-110 transition-all duration-300 hover:scale-100 relative group"
                >
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={25}
                    height={25}
                    className="aspect-square rounded-lg "
                  />
                  <span className="hidden lg:block text-gray-700 font-bold capitalize">
                    {item.label}
                  </span>
                  <span className="absolute left-12 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity lg:hidden whitespace-nowrap z-10">
                    {item.label}
                  </span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
}

export default Menu;
