"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  Users, 
  GraduationCap, 
  Calendar, 
  TrendingUp, 
  Clock,
  BookOpen,
  Award,
  AlertCircle,
  Plus,
  ArrowUpRight,
  MoreHorizontal
} from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations"

const stats = [
  {
    title: "Total Students",
    value: "2,847",
    change: "+12%",
    trend: "up",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    title: "Active Teachers",
    value: "124",
    change: "+3%",
    trend: "up",
    icon: GraduationCap,
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
  },
  {
    title: "Classes Today",
    value: "48",
    change: "0%",
    trend: "neutral",
    icon: Calendar,
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
  },
  {
    title: "Attendance Rate",
    value: "94.2%",
    change: "+2.1%",
    trend: "up",
    icon: TrendingUp,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
  },
]

const recentActivities = [
  {
    id: 1,
    type: "enrollment",
    title: "New student enrolled",
    description: "Sarah Johnson joined Grade 10-A",
    time: "2 minutes ago",
    icon: Users,
    color: "text-blue-600",
  },
  {
    id: 2,
    type: "assignment",
    title: "Assignment submitted",
    description: "Mathematics homework by Grade 9-B",
    time: "15 minutes ago",
    icon: BookOpen,
    color: "text-green-600",
  },
  {
    id: 3,
    type: "achievement",
    title: "Achievement unlocked",
    description: "Perfect attendance for John Doe",
    time: "1 hour ago",
    icon: Award,
    color: "text-yellow-600",
  },
  {
    id: 4,
    type: "alert",
    title: "Low attendance alert",
    description: "Grade 8-C below 85% threshold",
    time: "2 hours ago",
    icon: AlertCircle,
    color: "text-red-600",
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Parent-Teacher Conference",
    date: "Tomorrow",
    time: "9:00 AM",
    attendees: 45,
  },
  {
    id: 2,
    title: "Science Fair",
    date: "Dec 15",
    time: "2:00 PM",
    attendees: 120,
  },
  {
    id: 3,
    title: "Winter Break Begins",
    date: "Dec 20",
    time: "All Day",
    attendees: null,
  },
]

export function ModernDashboard() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="flex-1 space-y-6 p-4 md:p-6 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening at your school today.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Quick Action
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="modern-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`rounded-lg p-2 ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className={`mr-1 h-3 w-3 ${
                  stat.trend === 'up' ? 'text-green-600' : 
                  stat.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                }`} />
                {stat.change} from last month
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Activities */}
        <Card className="modern-card lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Latest updates from your school</CardDescription>
              </div>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-4 rounded-lg border p-3 transition-colors hover:bg-muted/50">
                <div className={`rounded-lg p-2 ${activity.color.replace('text-', 'bg-').replace('600', '50')} dark:${activity.color.replace('text-', 'bg-').replace('600', '950/20')}`}>
                  <activity.icon className={`h-4 w-4 ${activity.color}`} />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="mr-1 h-3 w-3" />
                  {activity.time}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card className="modern-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Next scheduled activities</CardDescription>
              </div>
              <Button variant="ghost" size="sm">
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">{event.title}</h4>
                  <Badge variant="outline" className="text-xs">
                    {event.date}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{event.time}</span>
                  {event.attendees && (
                    <span className="flex items-center">
                      <Users className="mr-1 h-3 w-3" />
                      {event.attendees}
                    </span>
                  )}
                </div>
                {event.id !== upcomingEvents.length && (
                  <div className="border-b border-border/50" />
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Performance Overview */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="modern-card">
          <CardHeader>
            <CardTitle>Class Performance</CardTitle>
            <CardDescription>Average scores by grade level</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { grade: "Grade 12", score: 92, students: 145 },
              { grade: "Grade 11", score: 88, students: 156 },
              { grade: "Grade 10", score: 85, students: 167 },
              { grade: "Grade 9", score: 82, students: 178 },
            ].map((item) => (
              <div key={item.grade} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{item.grade}</span>
                  <span className="text-muted-foreground">{item.score}% • {item.students} students</span>
                </div>
                <Progress value={item.score} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="modern-card">
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
            <CardDescription>Key metrics at a glance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-2xl font-bold">98.5%</p>
                <p className="text-xs text-muted-foreground">System Uptime</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold">1,247</p>
                <p className="text-xs text-muted-foreground">Active Sessions</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold">89</p>
                <p className="text-xs text-muted-foreground">Pending Tasks</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold">15</p>
                <p className="text-xs text-muted-foreground">New Messages</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}