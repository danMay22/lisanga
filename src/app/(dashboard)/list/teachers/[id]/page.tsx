"use client";
import React from "react";
import Image from "next/image";
import BigCalendar from "@/components/BigCalendar";
import Announcements from "@/components/Announcements";
import Link from "next/link";
import Performance from "@/components/Performance";
import ProfileComponent from "../TeacherProfile";
import { Button } from "@/components/ui/button";
import FormModdle from "@/components/FormModdle";

function SingleTeacherPage() {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row ">
      {/*LEFT*/}
      <div className="w-full xl:w-2/3 ">
        {/*TOP*/}
        <div className="flex flex-col xl:flex-row gap-4">
          {/*USER INFO CARD*/}
          <div className="py-6 px-4 rounded-md flex-1 flex gap-4  items-center bg-gray-50 shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Jese Avatar"
                width={144}
                height={144}
              />
            </a>
            <div className="p-5">
              <div className="flex items-center gap-4 ">
              <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Jese Lumunga
              </h1>
              <FormModdle
                table="teacher"
                type="update"
                data={{
                  id: 1,
                  username: "prof221",
                  email: "joe@gmail.com",
                  password: "hjasddko11",
                  firstName: "John",
                  lastName: "Mayunga",
                  phone: "0984566789",
                  address: "44 guh st, GP, South Africa",
                  bloodType: "A+",
                  birthday: "2000-01-1",
                  genre: "male",
                  img: "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
                }}
              />
              </div>
              <p className="text-sm mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Jese drives the Technical Gym, Strategy and Math for the school
                platform and brand.
              </p>
              <ul className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <li className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-h-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 4.002V12H9.67V8.455H6.33V12H5V4.002h1.33v3.322h3.34V4.002z" />
                      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                    </svg>
                  </a>
                  <span className="flex items-center justify-between gap-2 flex-wrap  font-medium">
                    A+
                  </span>
                </li>
                <li className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-calendar-minus"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 9.5A.5.5 0 0 1 6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5" />
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                    </svg>
                  </a>
                  <span className="flex items-center justify-between gap-2 flex-wrap font-medium">
                    January, 2025
                  </span>
                </li>
                <li className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-envelope-at"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                      <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                    </svg>
                  </a>
                  <span className="flex items-center justify-between gap-2 flex-wrap  font-medium">
                    user@gmail.com
                  </span>
                </li>
                <li className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-telephone"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                    </svg>{" "}
                  </a>
                  <span className="flex items-center justify-between gap-2 flex-wrap font-medium">
                    +27 98765421
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/*SMALL CARD*/}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/*CARD 1*/}
            <div className="bg-white p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/availability.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6 "
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/*CARD 2*/}
            <div className="bg-white p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/office.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6 "
              />
              <div className="">
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-400">Branches</span>
              </div>
            </div>

            {/*CARD 3*/}
            <div className="bg-white p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/pencil.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6 "
              />
              <div className="">
                <h1 className="text-xl font-semibold">9</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>

            {/*CARD 4*/}
            <div className="bg-white p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/lecture-room.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6 "
              />
              <div className="">
                <h1 className="text-xl font-semibold">4</h1>
                <span className="text-sm text-gray-400">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/*Bottom*/}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Teacher&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>

      {/*RIGHT*/}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link href="/">
              <Button className="text-foreground p-3 rounded-md bg-lamaSkylight">
                Teacher&apos;s Classes
              </Button>
            </Link>
            <Link href="/">
              <Button className="text-foreground p-3 rounded-md bg-lamaPurplelight">
                Teacher&apos;s Students
              </Button>
            </Link>
            <Link href="/">
              <Button className="text-foreground p-3 rounded-md bg-lamaYellowlight">
                Teacher&apos;s Lessons
              </Button>
            </Link>
            <Link href="/">
              <Button className="text-foreground p-3 rounded-md bg-pink-50">
                Teacher&apos;s Exams
              </Button>
            </Link>
            <Link href="/">
              <Button className="text-foreground p-3 rounded-md bg-lamaSkylight">
                Teacher&apos;s Assignments
              </Button>
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
}

export default SingleTeacherPage;
