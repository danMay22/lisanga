import Image from 'next/image'
import React from 'react'

export default function OurTeam() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <div className="xl:flex xl:items-center xL:-mx-4">
            <div className="xl:w-1/2 xl:mx-4">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Top 5: Enseignant du Semester</h1>
                <p className="max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
                  Avec un esprit de d&apos;attente, collaboration & notre envi de garder nos standard d&apos;education au maximum, nos invintons nos eleves a voter chaque six mois pour leur professeur favoris...
                </p>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-3">
                <div>
                    <Image className="object-cover rounded-xl aspect-square" src="/pexels-katerina-holmes-5905753.jpg" alt=""/>

                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Nory Likaku</h1>

                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Prof de Latin</p>
                </div>
                <div>
                    <Image className="object-cover rounded-xl aspect-square" src="/pexels-katerina-holmes-5905753.jpg" alt=""/>
                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Robert Nkunku</h1>

                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Prof de Religion (1em)</p>
                </div>
                <div>
                    <Image className="object-cover rounded-xl aspect-square" src="/pexels-katerina-holmes-5905753.jpg" alt=""/>
                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Julien Kalonji</h1>

                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Prof de Geo (4em Math-Physique)</p>
                </div>
                <div>
                    <Image className="object-cover rounded-xl aspect-square" src="/pexels-katerina-holmes-5905753.jpg" alt=""/>
                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Nancy Tambwe</h1>

                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Prof de Chimie (5em Math-Physique)</p>
                </div>
                <div>
                    <Image className="object-cover rounded-xl aspect-square" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Julie Mukuna</h1>

                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Prof de Music</p>
                </div>
                <div>
                    <Image className="object-cover rounded-xl aspect-square" src="/pexels-katerina-holmes-5905753.jpg" alt=""/>
                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Thomas Mayala</h1>

                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Prof d&apos;Informatique</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
