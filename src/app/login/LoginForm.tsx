'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link';

import React from 'react'



export function LoginForm() {
  return (
    <Card className="mt-40 w-96">
    <form>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Journal de Classe</CardTitle>
        <CardDescription className="text-xs">Bienvenue a nouveau</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
       
        <div className="grid gap-2">
        <p>Ceci est notre digital <strong>Journal
        De Classe</strong>, pour eleves, profs, administrateur et meme parents.</p>
        </div>
        <div className="grid gap-2">   
        
        </div>
        <Button className="w-full">
         <a href={"/student"}> Connecter</a>
        </Button>
      </CardContent>
    </form>
  </Card>
  )
}

