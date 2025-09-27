'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = '/student';
      setIsLoading(false);
    }, 500);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Se Connecter</CardTitle>
          <CardDescription className="text-xs">
            Bienvenue à LISANGA School
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            Pas de compte?{' '}
            <Link href="/signup" className="text-blue-500 hover:underline">
              S'inscrire
            </Link>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="votre@email.com"
              value={formData.email}
              onChange={handleInputChange}
              disabled={isLoading}
              required
            />
          </div>

          <div className="grid gap-2 my-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Entrez votre mot de passe"
              value={formData.password}
              onChange={handleInputChange} 
              disabled={isLoading}
              required
            />
          </div>

          <Button className="w-full mt-4" type="submit" disabled={isLoading}>
            {isLoading ? 'Connexion...' : 'Se Connecter'}
          </Button>
        </CardContent>
      </form>
    </Card>
  );
}