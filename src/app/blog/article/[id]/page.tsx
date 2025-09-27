import { Header } from '@/components/home/Header';

export default function ArticlePage({ params }: { params: { id: string } }) {
  return (
    <div>
      <Header />
      <div className="pt-20 container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-sm font-medium text-blue-500 uppercase tracking-widest">
              MATHÉMATIQUES
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Guide de Mathématiques - Niveau Secondaire</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2>Introduction aux Mathématiques Secondaires</h2>
            <p>Les mathématiques au niveau secondaire constituent la base fondamentale pour toute poursuite d'études scientifiques. Ce guide complet vous accompagnera dans votre apprentissage.</p>
            
            <h3>Algèbre</h3>
            <p>L'algèbre est l'étude des structures mathématiques et des relations entre elles. Vous apprendrez les équations, les fonctions et les systèmes.</p>
            
            <h3>Géométrie</h3>
            <p>La géométrie étudie les formes, les tailles, les positions relatives des figures dans l'espace.</p>
          </div>
        </div>
      </div>
    </div>
  );
}