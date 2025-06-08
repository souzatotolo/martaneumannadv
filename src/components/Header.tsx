import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CTAButton } from './CTAButton';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="sticky top-0 z-50 bg-primary-600 shadow-sm">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-4xl font-serif font-bold text-gray-600">
          <span className="text-primary-200">M</span> N
        </h1>
      </div>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        <a href="#sobre" className="text-gray-200 hover:text-gray-600 transition-colors">
          SOBRE
        </a>
        <a href="#areas" className="text-gray-200 hover:text-gray-600 transition-colors">
          ÁREAS DE ATUAÇÃO
        </a>
        <a href="#contato" className="text-gray-200 hover:text-gray-600 transition-colors">
          CONTATO
        </a>
        <a href="https://calendly.com/richardtotolo/agendar-consulta" target='_blank' rel="noopener noreferrer">
          <CTAButton text="Agende uma Consulta" />
        </a>
      </nav>
      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
    {/* Mobile Navigation */}
    {isMenuOpen && <nav className="md:hidden bg-primary-600 py-2">
      <div className="container mx-auto px-4 flex flex-col space-y-3">
        <a href="#sobre" className="text-gray-200 py-2 px-4 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>
          SOBRE
        </a>
        <a href="#areas" className="text-gray-200 py-2 px-4 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>
          ÁREAS DE ATUAÇÃO
        </a>

        <a href="#contato" className="text-gray-200 py-2 px-4 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>
          CONTATO
        </a>
        <div className="px-4">
          <a href="https://calendly.com/richardtotolo/agendar-consulta" target='_blank' rel="noopener noreferrer">
            <CTAButton text="Agende uma Consulta" />
          </a>
        </div>
      </div>
    </nav>}
  </header>;
};