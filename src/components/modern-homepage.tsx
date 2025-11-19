"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  BookOpen, 
  Users, 
  Award, 
  Calendar,
  Star,
  Play,
  CheckCircle,
  Globe,
  Shield,
  Zap
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const features = [
  {
    icon: Users,
    title: "Student Management",
    description: "Comprehensive student profiles, enrollment tracking, and academic progress monitoring.",
  },
  {
    icon: BookOpen,
    title: "Course Management",
    description: "Create and manage courses, assignments, and educational resources efficiently.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Automated timetable generation and conflict resolution for optimal resource utilization.",
  },
  {
    icon: Award,
    title: "Performance Analytics",
    description: "Real-time insights into student performance and institutional metrics.",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Full support for multiple languages to serve diverse educational communities.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Enterprise-grade security with full compliance to educational data protection standards.",
  },
]

const stats = [
  { label: "Active Students", value: "10,000+" },
  { label: "Schools Served", value: "500+" },
  { label: "Countries", value: "25+" },
  { label: "Satisfaction Rate", value: "99.8%" },
]

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Principal, Riverside High School",
    content: "EduFlow has transformed how we manage our school. The intuitive interface and powerful features have increased our efficiency by 40%.",
    avatar: "/avatar.png",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "IT Director, Metro School District",
    content: "The multilingual support and robust analytics make EduFlow perfect for our diverse student population. Highly recommended!",
    avatar: "/avatar.png",
    rating: 5,
  },
]

export function ModernHomepage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 max-w-7xl flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <BookOpen className="h-4 w-4" />
            </div>
            <span className="text-xl font-bold">EduFlow</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/admin">
                Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit mx-auto lg:mx-0">
                  <Zap className="mr-1 h-3 w-3" />
                  Next-Generation School Management
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Modern School Management
                  <span className="text-primary"> Made Simple</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                  Streamline your educational institution with our comprehensive, 
                  multilingual school management system designed for the modern era.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <Link href="/admin">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                  Free 30-day trial
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                  No setup fees
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass rounded-2xl p-8 shadow-2xl">
                <Image
                  src="/pexels-rdne-7683709.jpg"
                  alt="School Management Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Features
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Everything you need to manage your school
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From student enrollment to performance analytics, EduFlow provides 
              all the tools you need in one integrated platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="modern-card card-hover">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Testimonials
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Trusted by educators worldwide
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="modern-card">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex space-x-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center space-x-3">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-medium">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <Card className="modern-card bg-primary text-primary-foreground">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Ready to transform your school?
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Join thousands of educational institutions already using EduFlow 
                to streamline their operations and improve student outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/admin">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Schedule Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <BookOpen className="h-4 w-4" />
                </div>
                <span className="text-xl font-bold">EduFlow</span>
              </div>
              <p className="text-muted-foreground">
                Modern school management system designed for educational excellence.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Product</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Features</div>
                <div>Pricing</div>
                <div>Security</div>
                <div>Integrations</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Company</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>About</div>
                <div>Blog</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Support</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Help Center</div>
                <div>Documentation</div>
                <div>Community</div>
                <div>Status</div>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            © 2025 EduFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}