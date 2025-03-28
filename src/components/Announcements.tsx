import React from "react";
import { Label } from "./ui/label";

function Announcements() {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <Label className="text-xl font-semibold">Annoucements</Label>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-2">
        <div className="border border-s-orange-800/75 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-transparent rounded-md p-4 border-l-8 sm:py-8 dark:border-violet-600 dark:bg-blue-50 dark:text-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus?
            </h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025/01/01
            </span>
          </div>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor aliquam enim? Similique, ut molestiae a nihil
            ipsam ipsa natus! Magnam, neque cumque.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-2">
        <div className="border border-s-orange-800/75 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-transparent rounded-md p-4 border-l-8 sm:py-8 dark:border-violet-600 dark:bg-blue-50 dark:text-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus?
            </h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor aliquam enim? Similique, ut molestiae a nihil
            ipsam ipsa natus! Magnam, neque cumque.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-2">
        <div className="border border-s-green-800/75 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-transparent rounded-md p-4 border-l-8 sm:py-8 dark:border-violet-600 dark:bg-blue-50 dark:text-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus?
            </h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor aliquam enim? Similique, ut molestiae a nihil
            ipsam ipsa natus! Magnam, neque cumque.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-2">
        <div className="border border-s-green-800/75 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-transparent rounded-md p-4 border-l-8 sm:py-8 dark:border-violet-600 dark:bg-blue-50 dark:text-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus?
            </h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor aliquam enim? Similique, ut molestiae a nihil
            ipsam ipsa natus! Magnam, neque cumque.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-2">
        <div className="border border-s-orange-800/75 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-transparent rounded-md p-4 border-l-8 sm:py-8 dark:border-violet-600 dark:bg-blue-50 dark:text-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus?
            </h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor aliquam enim? Similique, ut molestiae a nihil
            ipsam ipsa natus! Magnam, neque cumque.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Announcements;
