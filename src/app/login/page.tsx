"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, User, GraduationCap, Users, Heart } from 'lucide-react';
import { toast } from 'sonner';

const demoAccounts = [
  { email: 'admin@school.edu', role: 'Admin', icon: User, color: 'bg-red-100 text-red-700' },
  { email: 'teacher@school.edu', role: 'Teacher', icon: GraduationCap, color: 'bg-blue-100 text-blue-700' },
  { email: 'student@school.edu', role: 'Student', icon: BookOpen, color: 'bg-green-100 text-green-700' },
  { email: 'parent@school.edu', role: 'Parent', icon: Heart, color: 'bg-purple-100 text-purple-700' }
];

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = login(email, password);
      
      if (success) {
        toast.success('Login successful!');
        setTimeout(() => {
          router.push('/admin');
        }, 500);
      } else {
        toast.error('Invalid email or password');
        setIsLoading(false);
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
      setIsLoading(false);
    }
  };

  const quickLogin = (demoEmail: string) => {
    setEmail(demoEmail);
    setPassword('demo123');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8">
        {/* Login Form */}
        <Card className="w-full">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <BookOpen className="h-6 w-6" />
              </div>
            </div>
            <CardTitle className="text-2xl">LISANGA School Login</CardTitle>
            <CardDescription>
              Enter your credentials to access the school management system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>
            
            <div className="mt-4 text-center text-sm text-gray-600">
              Demo password: <Badge variant="secondary">demo123</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Demo Accounts */}
        <Card>
          <CardHeader>
            <CardTitle>Demo Accounts</CardTitle>
            <CardDescription>
              Click any account below to auto-fill login credentials
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {demoAccounts.map((account) => (
              <div
                key={account.email}
                onClick={() => quickLogin(account.email)}
                className="flex items-center gap-3 p-3 rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div className={`p-2 rounded-lg ${account.color}`}>
                  <account.icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{account.role}</p>
                  <p className="text-sm text-gray-500">{account.email}</p>
                </div>
                <Badge variant="outline">{account.role}</Badge>
              </div>
            ))}
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Role Permissions:</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li><strong>Admin:</strong> Full system access</li>
                <li><strong>Teacher:</strong> Class management, attendance</li>
                <li><strong>Student:</strong> View grades, assignments</li>
                <li><strong>Parent:</strong> View child's progress</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}