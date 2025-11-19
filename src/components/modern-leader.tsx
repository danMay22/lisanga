"use client"

import React from 'react';
import Image from 'next/image';
import { BookOpen, Calculator, Wrench, Atom, FlaskConical, Scissors, ArrowRight } from 'lucide-react';

export default function ModernLeader() {
  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        {/* President Message */}
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 mb-16">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Fabrice Ligau
            </h2>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
              President/Prefet de l'ecole
            </p>
            <p className="mb-4">
              Bienvenue a l'ecole, Lisanga. Où l'excellence académique rencontre l'épanouissement personnel. Depuis plus de 30 ans, notre établissement cultive non seulement les esprits brillants de demain, mais aussi des citoyens responsables et engagés.
            </p>
            <p>
              Nos enseignants passionnés, nos installations modernes et notre approche pédagogique innovante créent un environnement où chaque élève peut développer son plein potentiel. Chez nous, la tradition d'excellence s'allie à l'innovation pour préparer nos élèves aux défis du monde contemporain.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image 
              className="w-full rounded-lg" 
              src="/pexels-rdne-7683709.jpg" 
              alt="School president"
              width={300}
              height={400}
            />
            <Image 
              className="mt-4 w-full lg:mt-10 rounded-lg" 
              src="/pexels-rdne-7683745.jpg" 
              alt="School leadership"
              width={300}
              height={400}
            />
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Nos Filières d'Excellence
          </h2>
          <a href="#" className="flex items-center text-base font-medium text-primary-700 hover:underline dark:text-primary-500">
            Voir toutes les filières
            <ArrowRight className="ms-1 h-5 w-5" />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <a href="#" className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <BookOpen className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <div className="flex-1">
              <span className="text-sm font-medium text-gray-900 dark:text-white">Littéraires</span>
              <p className="text-xs text-gray-500 dark:text-gray-400">Pour ceux en rêve de poursuivre en voie en Literature</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-gray-600">1.2K étudiants</span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-600">6 classes</span>
              </div>
            </div>
          </a>

          <a href="#" className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Calculator className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <div className="flex-1">
              <span className="text-sm font-medium text-gray-900 dark:text-white">Commercial</span>
              <p className="text-xs text-gray-500 dark:text-gray-400">Pour ceux en rêve de poursuivre en voie en Commercial</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-gray-600">1.2K étudiants</span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-600">6 classes</span>
              </div>
            </div>
          </a>

          <a href="#" className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Wrench className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <div className="flex-1">
              <span className="text-sm font-medium text-gray-900 dark:text-white">Mécanique</span>
              <p className="text-xs text-gray-500 dark:text-gray-400">Pour ceux en rêve de poursuivre en voie en Mechanic</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-gray-600">1.2K étudiants</span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-600">6 classes</span>
              </div>
            </div>
          </a>

          <a href="#" className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Atom className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <div className="flex-1">
              <span className="text-sm font-medium text-gray-900 dark:text-white">Math-Physique</span>
              <p className="text-xs text-gray-500 dark:text-gray-400">Pour ceux en rêve de poursuivre en voie en Math-Physique</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-gray-600">1.2K étudiants</span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-600">6 classes</span>
              </div>
            </div>
          </a>

          <a href="#" className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <FlaskConical className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <div className="flex-1">
              <span className="text-sm font-medium text-gray-900 dark:text-white">Bio-chimie</span>
              <p className="text-xs text-gray-500 dark:text-gray-400">Pour ceux en rêve de poursuivre en voie en Bio-chimie</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-gray-600">1.2K étudiants</span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-600">6 classes</span>
              </div>
            </div>
          </a>

          <a href="#" className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Scissors className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <div className="flex-1">
              <span className="text-sm font-medium text-gray-900 dark:text-white">Coupe-Couture</span>
              <p className="text-xs text-gray-500 dark:text-gray-400">Pour ceux en rêve de poursuivre en voie en Coupe-Couture</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-gray-600">1.2K étudiants</span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-600">6 classes</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}