import React from 'react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center md:text-left md:pl-12 lg:pl-24">
        <div className="max-w-2xl animate-fade-in">
          <div className="mb-4">
            <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium tracking-wider">
              ESPECIALISTA EM PISOS E PORCELANATOS
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Samuel Santos Ferraz
          </h1>
          <p className="text-xl md:text-2xl font-medium text-white/90 mb-8">
            Transforme seus ambientes com acabamento impecável e qualidade superior
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center md:justify-start">
            <Button href="#contato" size="large">
              Solicitar Orçamento Gratuito
            </Button>
            <a 
              href="#trabalhos" 
              className="text-white font-medium hover:text-blue-400 transition-colors duration-300 underline underline-offset-4"
            >
              Ver Trabalhos Realizados
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;