import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="container mx-auto text-center">
        <p className="text-white/60 flex items-center justify-center gap-2">
          Built with <Heart size={16} className="text-emerald-400" /> by Surya Adhikari
        </p>
        <p className="text-white/40 text-sm mt-2">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

