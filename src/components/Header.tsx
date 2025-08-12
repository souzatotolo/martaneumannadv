import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CTAButton } from './CTAButton';
import logo from '../assets/logo3.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary-500">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="h-20 w-auto " // tamanho proporcional e responsivo
            src={logo}
            alt="Orsini Totolo"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#sobre" className="text-white hover:text-[#D4AF37] transition-colors">
            SOBRE
          </a>
          <a href="#areas" className="text-white hover:text-[#D4AF37] transition-colors">
            ÁREAS DE ATUAÇÃO
          </a>
          <a href="#contato" className="text-white hover:text-[#D4AF37] transition-colors">
            CONTATO
          </a>
          <a
            href="https://calendly.com/richardtotolo/agendar-consulta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CTAButton secondary text="Agende uma Consulta" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white transition duration-300 ease-in-out"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={24} className="transition duration-300 ease-in-out" />
          ) : (
            <Menu size={24} className="transition duration-300 ease-in-out" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#1C2833] py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <a
              href="#sobre"
              className="text-white py-2 px-4 hover:bg-[#D4AF37] hover:text-[#1C2833] rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              SOBRE
            </a>
            <a
              href="#areas"
              className="text-white py-2 px-4 hover:bg-[#D4AF37] hover:text-[#1C2833] rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              ÁREAS DE ATUAÇÃO
            </a>
            <a
              href="#contato"
              className="text-white py-2 px-4 hover:bg-[#D4AF37] hover:text-[#1C2833] rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTATO
            </a>
            <div className="px-4">
              <a
                href="https://calendly.com/richardtotolo/agendar-consulta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CTAButton text="Agende uma Consulta" />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};
