import React from 'react';
import { Leaf, TrendingUp, Database } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Leaf size={24} />,
      title: 'Nature-Based Solutions',
      description: 'Environmental conservation & climate resilience'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Carbon Projects',
      description: 'IFM project lifecycle management'
    },
    {
      icon: <Database size={24} />,
      title: 'Technical Analysis',
      description: 'GIS, MRV & carbon accounting'
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Technical Forest Carbon Specialist with <span className="text-emerald-400 font-semibold">10+ years</span> of experience advancing Nature-Based Solutions for environmental conservation, climate resilience, and sustainable forestry.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              I specialize in forest carbon accounting, geospatial analysis, and MRV processes, leading the full lifecycle of Improved Forest Management projects with deep technical rigor across GIS analysis, field data auditing, and carbon stock assessments.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass glass-hover rounded-xl p-6 flex items-start gap-4"
              >
                <div className="text-emerald-400 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

