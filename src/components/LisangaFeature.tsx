"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, GraduationCap, Calendar } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function LisangaFeature() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="lg:flex items-center">
          <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div className="max-w-xl">
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="relative bg-primary/10 p-3 rounded-full">
                    <BookOpen className="h-8 w-8 text-primary animate-bounce" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-8 border">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">1,200+</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <GraduationCap className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">80+</div>
                    <div className="text-sm text-gray-600">Teachers</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-600">25+</div>
                    <div className="text-sm text-gray-600">Subjects</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <Calendar className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-600">50+</div>
                    <div className="text-sm text-gray-600">Events</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}