import React from 'react';

export default function ExpertiseSection() {
  const expertises = [
    {
      id: 1,
      title: "Literaires",
      description: "Pour ceux en reve de poursuivre en voie en Literature.",
      views: "1.2K",
      comments: "6",
      details: "Formation complète en littérature française et mondiale, analyse littéraire, expression écrite et orale."
    },
    {
      id: 2,
      title: "Commercial",
      description: "Pour ceux en reve de poursuivre en voie en Commercial.",
      views: "1.2K",
      comments: "6",
      details: "Études commerciales, gestion d'entreprise, marketing, comptabilité et relations clients."
    },
    {
      id: 3,
      title: "Mechanic",
      description: "Pour ceux en reve de poursuivre en voie en Mechanic.",
      views: "1.2K",
      comments: "6",
      details: "Formation technique en mécanique automobile, industrielle et maintenance d'équipements."
    },
    {
      id: 4,
      title: "Math-Physique",
      description: "Pour ceux en reve de poursuivre en voie en Math-Physique.",
      views: "1.2K",
      comments: "6",
      details: "Sciences exactes, mathématiques avancées, physique théorique et appliquée."
    },
    {
      id: 5,
      title: "Bio-chimie",
      description: "Pour ceux en reve de poursuivre en voie en Bio-chimie.",
      views: "1.2K",
      comments: "6",
      details: "Sciences biologiques, chimie organique et inorganique, laboratoire et recherche."
    },
    {
      id: 6,
      title: "Coupe-Couture",
      description: "Pour ceux en reve de poursuivre en voie en Coupe-Couture.",
      views: "1.2K",
      comments: "6",
      details: "Art de la couture, design vestimentaire, patronage et création textile."
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Nos Filières d'Excellence</h1>
        <p className="text-gray-600 mb-12">Découvrez en détail nos différentes options d'études et les débouchés qu'elles offrent.</p>

        <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
          <div className="lg:mx-12">
            <h2 className="text-xl font-semibold text-gray-800">Table des Matières</h2>
            <div className="mt-4 space-y-4 lg:mt-8">
              {expertises.map((expertise, index) => (
                <a key={expertise.id} href={`#${expertise.title.toLowerCase()}`} 
                   className={`block hover:underline ${index === 0 ? 'text-blue-500' : 'text-gray-500'}`}>
                  {expertise.title}
                </a>
              ))}
            </div>
          </div>

          <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {expertises.map((expertise) => (
                <div key={expertise.id} id={expertise.title.toLowerCase()} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="mb-4">
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">EXPERTISE:</span>
                    <h3 className="text-xl font-semibold text-gray-900 mt-2">{expertise.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{expertise.description}</p>
                  <p className="text-sm text-gray-500 mb-6">{expertise.details}</p>
                  
                  <a href={`/blog/expertise/${expertise.id}`} className="text-indigo-500 inline-flex items-center">
                    En Savoir Plus
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                    <span className="text-gray-400 text-sm">{expertise.views}</span>
                    <span className="text-gray-400 text-sm">{expertise.comments}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}