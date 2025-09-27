import React from 'react';
import Image from 'next/image';

export default function ArticlesSection() {
  const articles = [
    {
      id: 1,
      title: "Guide de Mathématiques - Niveau Secondaire",
      category: "MATHÉMATIQUES",
      description: "Manuel complet couvrant l'algèbre, la géométrie et les statistiques pour les classes de 4ème à 6ème.",
      image: "/pexels-pixabay-256490.jpg",
      type: "PDF",
      pages: "250 pages"
    },
    {
      id: 2,
      title: "Littérature Française Contemporaine",
      category: "LITTÉRATURE",
      description: "Recueil d'œuvres et analyses littéraires pour approfondir la compréhension des textes modernes.",
      image: "/pexels-pixabay-256417.jpg",
      type: "eBook",
      pages: "180 pages"
    },
    {
      id: 3,
      title: "Sciences Physiques - Expériences Pratiques",
      category: "SCIENCES",
      description: "Laboratoire virtuel avec expériences interactives en physique et chimie.",
      image: "/pexels-rdne-7683709.jpg",
      type: "Interactif",
      pages: "50 expériences"
    },
    {
      id: 4,
      title: "Histoire du Congo - Ressources Documentaires",
      category: "HISTOIRE",
      description: "Documents historiques et analyses sur l'évolution politique et sociale du Congo.",
      image: "/pexels-rdne-7683745.jpg",
      type: "PDF",
      pages: "320 pages"
    },
    {
      id: 5,
      title: "Anglais Commercial - Business English",
      category: "LANGUES",
      description: "Cours d'anglais spécialisé pour les étudiants en filière commerciale.",
      image: "/pexels-olia-danilevich-8093030.jpg",
      type: "Audio + PDF",
      pages: "120 pages"
    },
    {
      id: 6,
      title: "Techniques de Couture Moderne",
      category: "ARTISANAT",
      description: "Guide pratique avec patrons et techniques de couture contemporaine.",
      image: "/pexels-thirdman-5257892.jpg",
      type: "Vidéo + PDF",
      pages: "80 pages"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Bibliothèque Numérique</h1>
          <p className="text-gray-600">Articles, livres et ressources en ligne pour enrichir vos études</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
                    {article.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">
                    {article.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.pages}</span>
                  <a 
                    href="/blog"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors text-sm font-medium"
                  >
                    Lire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors">
            Voir Plus d'Articles
          </button>
        </div>
      </div>
    </section>
  );
}