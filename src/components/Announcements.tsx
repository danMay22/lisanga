import React from "react";
import { Label } from "./ui/label";

function Announcements() {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <Label className="text-xl font-semibold">Communiquees: </Label>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-2">
        <div className="border border-s-orange-800/75 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-transparent rounded-md p-4 border-l-8 sm:py-8 dark:border-violet-600 dark:bg-blue-50 dark:text-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">
              Orientation: pour Examen d&apos;Etat pour la 6em Math Physique.
            </h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025/05/19
            </span>
          </div>
          <p className="text-sm text-gray-400">
          Chaque eleve des 6em Math-Physique doivent se rendre a la salle de classe 56, ce vendredi 23 May a 14h pour l&apos;orientation a l&apos;examen d&apos;Etat.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-2">
        <div className="border border-s-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#48cae4] to-[#023e8a]  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-transparent rounded-md p-4 border-l-8 sm:py-8 dark:border-violet-600 dark:bg-blue-50 dark:text-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">
              Livre a vendre
            </h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-05-03
            </span>
          </div>
          <p className="text-sm text-gray-400">
           Pour tous ceux en manque des livres de Math, Physique et Geo... veillent contacter chef de Classe Mbuyi Clarrisse de la 5 em Bio-Chimie. (laisse lui un message sur son profile)
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-2">
        <div className="border border-s-orange-800/75 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-transparent rounded-md p-4 border-l-8 sm:py-8 dark:border-violet-600 dark:bg-blue-50 dark:text-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">
              Gardez la salle d&apos;informatique PROPRE!!!
            </h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-04-02
            </span>
          </div>
          <p className="text-sm text-gray-400">
         Nous avons recu plusieur nouvelle au sujet de plastic, bouteille de boisson et autres condiment ou enmballages dans la salle d&apos;informatique. veillez a garder la salle propre stp. 
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-2">
        <div className="border border-s-green-800/75 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-transparent rounded-md p-4 border-l-8 sm:py-8 dark:border-violet-600 dark:bg-blue-50 dark:text-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">
            OBJECT TROUVER:
            </h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-04-01
            </span>
          </div>
          <p className="text-sm text-gray-400">
           Sac orange and rouge, trouver dans la salle de classe 32, veillez passer voir la prefet.. si vous avez perdu votre sac. 
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-2">
        <div className="border border-s-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#48cae4] to-[#023e8a]  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-transparent rounded-md p-4 border-l-8 sm:py-8 dark:border-violet-600 dark:bg-blue-50 dark:text-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">
            Noel !!!!!
            </h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024-12-17
            </span>
          </div>
          <p className="text-sm text-gray-400">
          Pour la Noel cette annee nous SANGA, organisons une journee d&apos;Art et de music au theme de Noel. veillez nous a 17h pour une presentation theatral de la naissance de Jesus par nous talenteux eleves.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Announcements;
