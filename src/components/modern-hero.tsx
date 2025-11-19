"use client"

import React from "react";
import { Button } from "./ui/button";
import TextAnimate from "./home/animation/animation-docs";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function ModernHero() {
  return (
    <section className="mt-20 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#48cae4] to-[#023e8a] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-8 py-16 lg:py-24 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="space-y-6">
              <div className="space-y-4">
                <TextAnimate
                  className="text-3xl md:text-5xl lg:text-6xl font-bold text-white"
                  text="Modern School Management Made Simple"
                  type="fadeInUp"
                />
                <h2 className="text-xl md:text-2xl font-light text-white/90">
                  Streamline your educational institution with our comprehensive system
                </h2>
                <p className="max-w-2xl text-white/80 text-lg mx-auto lg:mx-0">
                  From student enrollment to performance analytics, manage everything 
                  in one integrated platform designed for modern education.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-white/90"
                  asChild
                >
                  <Link href="/admin">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 mt-8 lg:mt-0">
            <div className="relative">
              <div className="glass rounded-2xl p-4 shadow-2xl">
                <Image 
                  src="/pexels-pixabay-256490.jpg" 
                  alt="Modern School Management" 
                  width={600} 
                  height={400} 
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}