import React from 'react';
import { MapPin, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQFxDrpLM9cgKA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727447762596?e=1762992000&v=beta&t=UeVnVR2QwwbrvS65F1WQAWp2r320kb8KGngB53VpGBc"
              alt="Surya Adhikari"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-emerald-400/30 shadow-xl shadow-emerald-500/20"
            />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-emerald-300 to-white bg-clip-text text-transparent drop-shadow-lg">
              Surya Adhikari
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-emerald-400 mb-4 font-light drop-shadow-md">
            Senior Carbon Analyst
          </p>
          
          <div className="flex items-center justify-center gap-2 text-white/70 mb-8">
            <MapPin size={16} />
            <span className="text-sm">Conway, Arkansas</span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed">
            Forest Carbon Specialist with 10+ years advancing Nature-Based Solutions for climate resilience and sustainable forestry
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="glass glass-hover px-8 py-3 rounded-full text-white font-medium"
            >
              Get in Touch
            </a>
            <a
              href="#about"
              className="border border-white/30 hover:border-white/50 px-8 py-3 rounded-full text-white font-medium transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <ArrowDown className="mx-auto text-white/50" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

