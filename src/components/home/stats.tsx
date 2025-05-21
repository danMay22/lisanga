import React from 'react'

export default function Stats() {
  return (
    <section className="bg-white dark:bg-gray-900">
  <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
  <h1 className="mb-10 text-2xl font-light text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
    Plus de 
  </h1>
      <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-4 dark:text-white">
          <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">65%</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400"> moyenne au Diplome D&apos;etat depuis 2007</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">25+</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">Licensier Professeurs</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">15+</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">Salle de Classe</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">3h+</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">Cours Additionel & Laisons(par semaine)</dd>
          </div>
      </dl>
  </div>
</section>
  )
}
