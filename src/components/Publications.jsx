import React from 'react';
import { BookOpen, Award, ExternalLink } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: 'Aboveground woody biomass estimation of Populus using mobile LiDAR',
      journal: 'Trees, Forests and People',
      date: 'Sep 2024',
      description: 'Research on using mobile terrestrial LiDAR to predict AGB of Populus and its hybrids with comparison to field-based allometric models.',
      link: 'https://www.sciencedirect.com'
    },
    {
      title: 'Assessment of soil organic carbon of tropical forest',
      journal: 'Nepalese Journal of Agricultural Sciences',
      date: 'Sep 2016',
      description: 'Carbon assessment at different soil depths in Terai Sal-Shorea robusta forest of Nepal.'
    }
  ];

  const certifications = [
    {
      title: 'Remsoft Modeling Fundamentals',
      issuer: 'Remsoft',
      date: 'Jan 2025'
    },
    {
      title: 'sUAS Remote Pilot',
      issuer: 'Federal Aviation Administration',
      date: 'Dec 2022'
    }
  ];

  return (
    <section id="publications" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Publications & Certifications
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto mb-16"></div>

        {/* Publications */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-emerald-300 mb-6">
            <BookOpen size={24} />
            <h3 className="text-2xl font-bold">Publications</h3>
          </div>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="glass glass-hover rounded-xl p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {pub.title}
                    </h4>
                    <p className="text-emerald-300 text-sm mb-2">
                      {pub.journal} • {pub.date}
                    </p>
                    <p className="text-gray-300">
                      {pub.description}
                    </p>
                  </div>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-2 text-emerald-300 mb-6">
            <Award size={24} />
            <h3 className="text-2xl font-bold">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass glass-hover rounded-xl p-6"
              >
                <h4 className="text-lg font-semibold text-white mb-2">
                  {cert.title}
                </h4>
                <p className="text-gray-300 text-sm">
                  {cert.issuer}
                </p>
                <p className="text-emerald-300 text-sm mt-1">
                  {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;

