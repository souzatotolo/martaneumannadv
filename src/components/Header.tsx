import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CTAButton } from './CTAButton';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="sticky top-0 z-50 bg-primary-200 shadow-sm">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-4xl font-serif font-bold text-primary-800">
          <span className="text-primary-400">M</span> N
        </h1>
      </div>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        <a href="#sobre" className="text-primary-600 hover:text-primary-800 transition-colors">
          SOBRE
        </a>
        <a href="#areas" className="text-primary-600 hover:text-primary-800 transition-colors">
          AREAS DE ATUAÇÃO
        </a>
        <a href="#contato" className="text-primary-600 hover:text-primary-800 transition-colors">
          CONTATO
        </a>
        <a href="https://calendly.com/richardtotolo/agendar-consulta" target='_blank' rel="noopener noreferrer">
          <CTAButton text="Agende uma Consulta" />
        </a>
      </nav>
      {/* Mobile Menu Button */}
      <button className="md:hidden text-navy-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
    {/* Mobile Navigation */}
    {isMenuOpen && <nav className="md:hidden bg-white border-t border-gray-100 py-4">
      <div className="container mx-auto px-4 flex flex-col space-y-3">
        <a href="#sobre" className="text-primary-800 py-2 px-4 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>
          SOBRE
        </a>
        <a href="#areas" className="text-primary-800 py-2 px-4 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>
          ÁREAS DE ATUAÇÃO
        </a>

        <a href="#contato" className="text-primary-800 py-2 px-4 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>
          CONTATO
        </a>
        <div className="px-4">
          <CTAButton text="Agende uma Consulta" fullWidth />
        </div>
      </div>
    </nav>}
  </header>;
};