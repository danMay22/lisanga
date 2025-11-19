"use client"

import React from 'react';
import { Button } from './ui/button';
import { Calendar, MapPin, Users } from 'lucide-react';
import Link from 'next/link';

export default function UpcomingEventsPromo() {
  return (
    <section className="py-16 mb-8">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Événements à Venir
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Ne manquez pas nos prochains événements scolaires et activités éducatives
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg bg-white dark:bg-gray-800">
            <Calendar className="h-8 w-8 mx-auto mb-3 text-blue-600" />
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Journée Portes Ouvertes</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">15 Janvier 2025</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Découvrez notre école et nos programmes</p>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg bg-white dark:bg-gray-800">
            <Users className="h-8 w-8 mx-auto mb-3 text-blue-600" />
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Réunion Parents-Professeurs</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">22 Janvier 2025</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Échanges sur la progression des élèves</p>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg bg-white dark:bg-gray-800">
            <MapPin className="h-8 w-8 mx-auto mb-3 text-blue-600" />
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Sortie Éducative</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">5 Février 2025</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Visite du musée des sciences</p>
          </div>
        </div>
        
        <Button 
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700"
          asChild
        >
          <Link href="/events">
            Voir Tous les Événements
          </Link>
        </Button>
      </div>
    </section>
  );
}