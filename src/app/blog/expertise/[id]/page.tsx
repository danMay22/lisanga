import React from 'react';
import { Header } from '@/components/home/Header';

export default function ExpertisePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  return (
    <div>
      <Header />
      <div className="pt-20 container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-sm font-medium text-blue-500 uppercase tracking-widest">
              EXPERTISE
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Filière Littéraires</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2>Formation Littéraires</h2>
            <p>La filière littéraires prépare les étudiants à une compréhension approfondie de la littérature, de la philosophie et des sciences humaines.</p>
            
            <h3>Matières Principales</h3>
            <ul>
              <li>Littérature française et mondiale</li>
              <li>Philosophie</li>
              <li>Histoire</li>
              <li>Géographie</li>
              <li>Langues vivantes</li>
            </ul>
            
            <h3>Débouchés</h3>
            <p>Cette formation ouvre les portes vers l'enseignement, le journalisme, la traduction, et bien d'autres carrières dans les sciences humaines.</p>
          </div>
        </div>
      </div>
    </div>
  );
}