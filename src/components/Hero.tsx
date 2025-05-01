
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-songcm-dark py-20 overflow-hidden">
      {/* Animation elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="animate-pulse-light absolute h-32 w-32 rounded-full bg-songcm-primary top-20 left-[10%]"></div>
        <div className="animate-pulse-light absolute h-48 w-48 rounded-full bg-songcm-secondary top-40 right-[15%] opacity-30"></div>
        <div className="animate-pulse-light absolute h-24 w-24 rounded-full bg-songcm-secondary bottom-10 left-[20%] opacity-40"></div>
        <div className="animate-float absolute h-40 w-40 rounded-full bg-songcm-primary bottom-20 right-[25%] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Partagez Votre </span>
            <span className="text-songcm-primary">Musique</span>
            <span className="text-white"> Avec Le </span>
            <span className="text-songcm-secondary">Monde</span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-8">
            SongCmStream est la plateforme où les artistes peuvent partager leur musique gratuitement,
            et où les fans découvrent de nouveaux talents et soutiennent leurs artistes préférés.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/upload">
              <Button className="btn-primary text-lg py-6 px-8">
                Poster Votre Musique
              </Button>
            </Link>
            <Link to="/explore">
              <Button variant="outline" className="text-lg border-white text-white hover:bg-white/10 py-6 px-8">
                Explorer
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
