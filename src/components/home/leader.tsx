import Image from 'next/image'
import React from 'react'

export default function Leader() {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="mt-6 rounded-lg border container px-6 py-10 mx-auto">
      <Image alt='' src="/pexels-pavel-danilyuk-7942547.jpg" height={500} width={500} className="object-cover object-center w-full h-full rounded-lg shadow-lg dark:shadow-gray-700"/>
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
          <Image alt='' src="/pexels-rdne-7092613.jpg" height={500} width={500} className="object-cover object-center w-full h-full rounded-lg shadow-lg dark:shadow-gray-700"/>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Fabrice Ligau</h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p className="text-base">President/Prefet de l&apos;ecole</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">Bienvenue a l&apos;ecole, Lisanga. Où l&apos;excellence académique rencontre l&apos;épanouissement personnel. Depuis plus de 30 ans, notre établissement cultive non seulement les esprits brillants de demain, mais aussi des citoyens responsables et engagés. Nos enseignants passionnés, nos installations modernes et notre approche pédagogique innovante créent un environnement où chaque élève peut développer son plein potentiel. Chez nous, la tradition d&apos;excellence s&apos;allie à l&apos;innovation pour préparer nos élèves aux défis du monde contemporain. Saint-Michel : façonner l&apos;avenir, une réussite à la fois.</p>
        { /* <a className="text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>*/}
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
