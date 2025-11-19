"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, GraduationCap, Calendar } from "lucide-react";
import Link from "next/link";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-20">
        <div className="lg:flex items-center">
          <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div className="max-w-xl animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="relative bg-primary/10 p-3 rounded-full">
                    <BookOpen className="h-8 w-8 text-primary animate-bounce" />
                  </div>
                </div>
              </div>
              
              <h2 className="text-3xl font-semibold text-foreground lg:text-4xl mb-2">
                LISANGA <span className="text-primary">School</span> Management
              </h2>

              <p className="mt-4 text-sm text-muted-foreground lg:text-base">
                Complete school management system for students, teachers, parents and administrators. 
                Manage classes, attendance, grades, events and more in one unified platform.
              </p>

              <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                <Link href="/login">
                  <Button className="px-5 py-2 text-sm font-medium tracking-wider hover:scale-105 transition-transform">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" className="px-5 py-2 text-sm font-medium tracking-wider lg:mx-4 hover:scale-105 transition-transform">
                  Learn More
                </Button>
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

      {/* Features Section */}
      <section className="text-muted-foreground">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Everything You Need to Manage Your School
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From student enrollment to grade management, our comprehensive platform handles all aspects of school administration.
            </p>
          </div>
          
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col border-2 rounded-lg border-border p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="w-16 h-16 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-600 flex-shrink-0">
                  <Users className="w-8 h-8" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-foreground text-lg font-medium mb-3">Student Management</h2>
                  <p className="leading-relaxed text-base">Complete student profiles, enrollment tracking, and academic progress monitoring.</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col border-2 rounded-lg border-border p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="w-16 h-16 mb-4 inline-flex items-center justify-center rounded-full bg-green-100 text-green-600 flex-shrink-0">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-foreground text-lg font-medium mb-3">Teacher Portal</h2>
                  <p className="leading-relaxed text-base">Attendance tracking, grade management, and class scheduling for educators.</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col border-2 rounded-lg border-border p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="w-16 h-16 mb-4 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-600 flex-shrink-0">
                  <Calendar className="w-8 h-8" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-foreground text-lg font-medium mb-3">Event Management</h2>
                  <p className="leading-relaxed text-base">School events, announcements, and calendar management system.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;