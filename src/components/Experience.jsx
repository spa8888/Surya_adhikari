import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Carbon Analyst',
      company: 'NativState',
      period: 'Aug 2024 - Present',
      location: 'Conway, Arkansas',
      highlights: [
        'Lead full lifecycle of IFM projects',
        'Develop GHG plans & Project Design Documents',
        'Conduct QA/QC on field inventory data',
        'Developed R-based automation for GIS workflows'
      ]
    },
    {
      title: 'Forest Carbon Analyst',
      company: 'NativState',
      period: 'Aug 2023 - Aug 2024',
      location: 'Conway, Arkansas',
      highlights: [
        'Long-term carbon projections using FVS',
        'Forest inventory design & field support',
        'Spatial data analysis & mapping',
        'ACR methodology compliance'
      ]
    },
    {
      title: 'Graduate Research Assistant',
      company: 'Mississippi State University',
      period: 'Aug 2021 - Aug 2023',
      location: 'Starkville, Mississippi',
      highlights: [
        'Developed allometric equations for biomass estimation',
        'Mobile LiDAR & UAV data collection',
        'Carbon modeling using LiDAR metrics'
      ]
    },
    {
      title: 'Program Officer',
      company: 'Zoological Society of London',
      period: 'Apr 2021 - Aug 2021',
      location: 'Kathmandu, Nepal',
      highlights: [
        'Tiger conservation in Western Terai',
        'Wildlife monitoring with camera surveillance',
        'Community engagement & GESI policy implementation'
      ]
    },
    {
      title: 'Program Associate',
      company: 'WWF Nepal',
      period: 'Nov 2017 - Jan 2021',
      location: 'Pokhara, Nepal',
      highlights: [
        'Hariyo Ban Program implementation',
        'Forest inventory & climate adaptation programs',
        'Community coordination & capacity building'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Experience
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto mb-16"></div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass glass-hover rounded-xl p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-emerald-300">
                    <Briefcase size={16} />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end text-sm text-white/60">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <span>{exp.location}</span>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-gray-200 flex items-start">
                    <span className="text-emerald-400 mr-2 font-bold">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

