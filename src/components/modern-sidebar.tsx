"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Home, 
  Users, 
  Calendar, 
  BookOpen, 
  Settings, 
  Bell,
  Camera,
  FileText,
  BarChart3,
  User,
  LogOut,
  ChevronRight,
  GraduationCap,
  School,
  ClipboardList,
  FileCheck,
  Trophy,
  UserCheck
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { useLanguage } from "@/contexts/LanguageContext"
import { useAuth } from "@/contexts/AuthContext"
import { translations } from "@/lib/translations"
import Navbar from "@/components/Navbar"

const menuItems = [
  {
    title: "dashboard",
    icon: Home,
    href: "/admin",
    badge: null,
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    title: "teachers",
    icon: GraduationCap,
    href: "/list/teachers",
    badge: "18",
    visible: ["admin", "teacher"],
  },
  {
    title: "students",
    icon: Users,
    href: "/list/students",
    badge: "124",
    visible: ["admin", "teacher"],
  },
  {
    title: "parents",
    icon: UserCheck,
    href: "/list/parents",
    badge: null,
    visible: ["admin", "teacher"],
  },
  {
    title: "subjects",
    icon: BookOpen,
    href: "/list/subjects",
    badge: null,
    visible: ["admin"],
  },
  {
    title: "classes",
    icon: School,
    href: "/list/classes",
    badge: null,
    visible: ["admin", "teacher"],
  },
  {
    title: "lessons",
    icon: FileText,
    href: "/list/lessons",
    badge: null,
    visible: ["admin", "teacher"],
  },
  {
    title: "exams",
    icon: ClipboardList,
    href: "/list/exams",
    badge: null,
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    title: "assignments",
    icon: FileCheck,
    href: "/list/assignments",
    badge: null,
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    title: "results",
    icon: Trophy,
    href: "/list/results",
    badge: null,
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    title: "events",
    icon: Calendar,
    href: "/list/events",
    badge: "3",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    title: "announcements",
    icon: Bell,
    href: "/list/announcements",
    badge: null,
    visible: ["admin", "teacher", "student", "parent"],
  },
]

const adminItems = [
  {
    title: "settings",
    icon: Settings,
    href: "/settings",
  },
]

function SidebarContentComponent() {
  const pathname = usePathname()
  const { language } = useLanguage()
  const { user, permissions, logout } = useAuth()
  const t = translations[language]

  const filteredMenuItems = menuItems.filter(item => {
    return item.visible.includes(user?.role || 'student')
  })

  return (
    <>
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-3 px-2 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <BookOpen className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">EduFlow</span>
            <span className="text-xs text-muted-foreground">{user?.role?.toUpperCase()} Portal</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredMenuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={t[item.title as keyof typeof t] || item.title}
                  >
                    <Link href={item.href} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span className="flex-1">{t[item.title as keyof typeof t] || item.title}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="ml-auto h-5 px-1.5 text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Administration</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={t[item.title as keyof typeof t] || item.title}
                  >
                    <Link href={item.href} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{t[item.title as keyof typeof t] || item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center gap-3 px-2 py-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user?.avatar || "/avatar.png"} alt={user?.name || "User avatar"} />
                <AvatarFallback>{user?.name?.charAt(0) || 'U'}</AvatarFallback>
              </Avatar>
              <div className="flex flex-1 flex-col text-left text-sm">
                <span className="truncate font-medium">{user?.name}</span>
                <span className="truncate text-xs text-muted-foreground">{user?.email}</span>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={logout}
                title="Logout"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  )
}

export function ModernSidebar({ children }: { children: React.ReactNode }) {
  const { logout } = useAuth()
  
  return (
    <SidebarProvider>
      <Sidebar variant="inset">
        <SidebarContentComponent />
        <SidebarRail />
      </Sidebar>
      <main className="flex flex-1 flex-col overflow-hidden">
        <div className="mx-10 flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <a className="text-blue-500 hover:underline text-xs sm:text-sm" href="/">
              ← Back to Home
            </a>
            <a className="flex items-center space-x-2 font-bold text-xl hover:opacity-80 transition-opacity" href="/">
              LISANGA School
            </a>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="flex items-center gap-2 px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-languages w-4 h-4">
                <path d="m5 8 6 6"></path>
                <path d="m4 14 6-6 2-3"></path>
                <path d="M2 5h12"></path>
                <path d="M7 2h1"></path>
                <path d="m22 22-5-10-5 10"></path>
                <path d="M14 18h6"></path>
              </svg>
              <span className="hidden sm:inline">FR</span>
            </button>
            <Button 
              onClick={logout}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
            >
              Logout
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}