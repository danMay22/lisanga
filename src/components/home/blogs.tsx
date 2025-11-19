import React from "react";
import { Button } from "../ui/button";
import { BookOpen, Calendar, User } from "lucide-react";

export default function Blogs() {
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-2">
          Articles: Guide pour Etudiants & Eleves
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Ici, trouve nos meilleurs eleves et,ou nos profs conseilles sur ton parcours et apprend leurs technique pour une meilleur et facile comprehension de tes sujets.
        </p>
        
        <div className="mt-6 sm:mt-8 lg:flex lg:gap-8">
          <div className="w-full divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 dark:divide-gray-700 dark:border-gray-700">
            
            <div className="space-y-4 p-6">
              <div className="flex items-center gap-6">
                <div className="h-14 w-14 shrink-0 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <a href="/blog" className="min-w-0 flex-1 font-medium text-gray-900 hover:underline dark:text-white">
                  QUOI, OU et COMMENT utiliser l'internet comme aide pour mes etudes.
                </a>
              </div>
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium quia tempore delect
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="h-4 w-4" />
                  21 October 2019
                </div>
              </div>
            </div>

            <div className="space-y-4 p-6">
              <div className="flex items-center gap-6">
                <div className="h-14 w-14 shrink-0 flex items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                  <User className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <a href="/blog" className="min-w-0 flex-1 font-medium text-gray-900 hover:underline dark:text-white">
                  Se Preparer pour mes Examen.
                </a>
              </div>
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium quia tempore delect
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="h-4 w-4" />
                  20 October 2019
                </div>
              </div>
            </div>

            <div className="space-y-4 bg-gray-50 p-6 dark:bg-gray-800">
              <div className="flex items-center justify-center">
                <Button className="w-full rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800">
                  <a href="/blog">Lire Plus d'Articles</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
