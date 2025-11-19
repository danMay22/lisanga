"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, authenticate, getPermissions } from '@/lib/auth';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  permissions: any;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (error) {
          console.error('Error parsing stored user:', error);
          localStorage.removeItem('user');
        }
      }
    }
    setIsLoading(false);
  }, []);

  const login = (email: string, password: string): boolean => {
    const authenticatedUser = authenticate(email, password);
    if (authenticatedUser) {
      setUser(authenticatedUser);
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(authenticatedUser));
      }
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
    }
  };

  const permissions = user ? getPermissions(user.role) : {};

  return (
    <AuthContext.Provider value={{ user, login, logout, permissions, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}