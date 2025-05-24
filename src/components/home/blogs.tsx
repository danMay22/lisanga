import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Blogs() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
           Articles: Guide pour Etudiants & Eleves
          </h1>
          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            Ici, trouve nos meilleurs eleves et,ou nos profs conseilles sur ton parcours et apprend leurs technique pour une meilleur et facile comprehension de tes sujets. 
          </p>
          <Button className="inline-flex items-center px-4 py-2 mt-4 font-medium  text-white hover:bg-blue-700"
            >
            <a
              href="#"
             >
              Lire
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          <div>
            <Image
              className="relative z-10 object-cover w-full rounded-md h-96"
              src="https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              width={200}
              height={200}
            />

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
              <a
                href="/blog"
                className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
              >
                QUOI, OU et COMMENT utiliser l&apos;internet comme aide pour mes etudes.
               
              </a>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                veritatis sint autem nesciunt, laudantium quia tempore delect
              </p>

              <p className="mt-3 text-sm text-blue-500">21 October 2019</p>
            </div>
          </div>

          <div>
            <Image
              className="relative z-10 object-cover w-full rounded-md h-96"
              src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              width={200}
              height={200}
            />

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
              <a
                href="/blog"
                className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
              >
               Se Preparer pour mes Examen.
              </a>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                veritatis sint autem nesciunt, laudantium quia tempore delect
              </p>
              <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
