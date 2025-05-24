import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className={`font-bold text-xl sm:text-2xl transition-colors duration-300 ${
            isScrolled ? 'text-gray-800' : 'text-white'
          }`}>
            Samuel S. Ferraz
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#beneficios" className={`transition-colors duration-300 ${
            isScrolled ? 'text-gray-800' : 'text-white'
          } hover:text-blue-600`}>
            Benefícios
          </a>
          <a href="#trabalhos" className={`transition-colors duration-300 ${
            isScrolled ? 'text-gray-800' : 'text-white'
          } hover:text-blue-600`}>
            Trabalhos
          </a>
          <a href="#depoimentos" className={`transition-colors duration-300 ${
            isScrolled ? 'text-gray-800' : 'text-white'
          } hover:text-blue-600`}>
            Depoimentos
          </a>
          <a href="#sobre" className={`transition-colors duration-300 ${
            isScrolled ? 'text-gray-800' : 'text-white'
          } hover:text-blue-600`}>
            Sobre
          </a>
          <Button href="#contato" className="flex items-center">
            <Phone size={16} className="mr-2" />
            Contato
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 p-2 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#beneficios" 
              className="text-gray-800 hover:text-blue-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefícios
            </a>
            <a 
              href="#trabalhos" 
              className="text-gray-800 hover:text-blue-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Trabalhos
            </a>
            <a 
              href="#depoimentos" 
              className="text-gray-800 hover:text-blue-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="#sobre" 
              className="text-gray-800 hover:text-blue-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <Button href="#contato" onClick={() => setIsMenuOpen(false)}>
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;