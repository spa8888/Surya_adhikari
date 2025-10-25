import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Technical',
      skills: ['ArcGIS', 'Python', 'R Programming', 'Forest Vegetation Simulator', 'Machine Learning', 'LiDAR Processing']
    },
    {
      category: 'Carbon & Climate',
      skills: ['Carbon Accounting', 'MRV Processes', 'ACR Methodology', 'GHG Planning', 'Climate Adaptation', 'REDD+']
    },
    {
      category: 'Forestry',
      skills: ['Forest Biometrics', 'IFM Projects', 'Forest Inventory', 'Biomass Estimation', 'Geospatial Analysis', 'Remote Sensing']
    },
    {
      category: 'Professional',
      skills: ['Project Management', 'Field Operations', 'Data Analysis', 'Technical Documentation', 'Stakeholder Coordination', 'Quality Assurance']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Skills
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass glass-hover rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-emerald-300 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm text-white/90 hover:bg-white/20 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

