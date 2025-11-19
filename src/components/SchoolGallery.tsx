"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Camera, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export default function SchoolGallery() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            School Gallery
          </h2>
          <p className="mb-4">
            Explore memories from our school events. Discover the vibrant moments captured during our educational activities, sports tournaments, and special celebrations that make our school community unique.
          </p>
          <p className="mb-6">
            From academic achievements to recreational activities, every photo tells a story of growth, friendship, and learning.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Lake Trip</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">2025-04-01 • 12 photos</p>
              </div>
              <Button size="sm" variant="outline">
                <ExternalLink className="w-3 h-3 mr-1" />
                View Gallery
              </Button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Sports Tournament</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">2025-04-15 • 8 photos</p>
              </div>
              <Button size="sm" variant="outline">
                <ExternalLink className="w-3 h-3 mr-1" />
                View Gallery
              </Button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Science Fair</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">2025-03-20 • 15 photos</p>
              </div>
              <Button size="sm" variant="outline">
                <ExternalLink className="w-3 h-3 mr-1" />
                View Gallery
              </Button>
            </div>
          </div>
          
          <div className="mt-6">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/gallery">
                <Camera className="w-4 h-4 mr-2" />
                View All Events
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image 
            className="w-full rounded-lg" 
            src="/photo/pexels-anastasiya-gepp-654466-1462630.jpg" 
            alt="School gallery 1"
            width={300}
            height={400}
          />
          <Image 
            className="mt-4 w-full lg:mt-10 rounded-lg" 
            src="/photo/pexels-cottonbro-4769486.jpg" 
            alt="School gallery 2"
            width={300}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}