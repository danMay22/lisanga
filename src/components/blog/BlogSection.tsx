import React from 'react';
import Image from 'next/image';

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      category: "ENSEIGNANTS",
      date: "15 Jan 2024",
      title: "Nos Professeurs Qualifiés",
      excerpt: "Découvrez notre équipe pédagogique composée de 25+ professeurs licenciés, passionnés par l'enseignement et dévoués à la réussite de nos élèves.",
      image: "/pexels-katerina-holmes-5905753.jpg"
    },
    {
      id: 2,
      category: "HORAIRES",
      date: "10 Jan 2024",
      title: "Programme Hebdomadaire",
      excerpt: "Notre emploi du temps optimisé avec 3h+ de cours additionnels par semaine pour garantir une formation complète et approfondie.",
      image: "/pexels-pixabay-256417.jpg"
    },
    {
      id: 3,
      category: "ACTIVITÉS",
      date: "8 Jan 2024",
      title: "Événements Scolaires",
      excerpt: "Participez à nos nombreuses activités parascolaires qui enrichissent l'expérience éducative de nos élèves tout au long de l'année.",
      image: "/pexels-rdne-7683709.jpg"
    },
    {
      id: 4,
      category: "INFRASTRUCTURE",
      date: "5 Jan 2024",
      title: "Nos 15+ Salles de Classe",
      excerpt: "Des espaces d'apprentissage modernes et bien équipés pour offrir les meilleures conditions d'étude à nos élèves.",
      image: "/pexels-pixabay-301926.jpg"
    }
  ];

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Informations Scolaires</h1>
          <p className="text-gray-600">Toutes les informations importantes sur notre établissement, nos enseignants et notre fonctionnement.</p>
        </div>
        
        <div className="-my-8 divide-y-2 divide-gray-100">
          {blogPosts.map((post) => (
            <div key={post.id} className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">{post.category}</span>
                <span className="mt-1 text-gray-500 text-sm">{post.date}</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{post.title}</h2>
                <p className="leading-relaxed">{post.excerpt}</p>
                <a href="/blog" className="text-indigo-500 inline-flex items-center mt-4">
                  Lire Plus
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}