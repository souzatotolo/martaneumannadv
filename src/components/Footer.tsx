import React from 'react';
import { ScaleIcon, MapPinIcon, PhoneIcon, ClockIcon } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary-600 text-gray-200 py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          {/* Logo e descrição */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <ScaleIcon className="text-gray-400 mr-2" size={24} />
              <h3 className="text-xl font-serif font-bold">
                Orsini & Totolo
              </h3>
            </div>
            <p className="text-gray-200 max-w-xs">
              Advocacia especializada com atendimento dedicado, ética profissional e foco na defesa dos direitos dos nossos clientes.
            </p>
          </div>

          {/* Links rápidos */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-medium mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#sobre" className="text-gray-200 hover:text-white transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#areas" className="text-gray-200 hover:text-white transition-colors">
                    Áreas de Atuação
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-gray-200 hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Áreas de Atuação */}
            <div>
              <h4 className="text-lg font-medium mb-4">Áreas de Atuação</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Direito Civil</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Direito Trabalhista</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Direito Previdenciário</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Consultoria Jurídica</a></li>
              </ul>
            </div>

            {/* Informações Legais */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-lg font-medium mb-4">Informações</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <MapPinIcon size={16} className="mr-2 mt-0.5" />
                  R. Anastácio de Lima, 471 - Santana, Ribeirão Pires - SP
                </li>
                <li className="flex items-start">
                  <PhoneIcon size={16} className="mr-2 mt-0.5" />
                  (11) 95986-7106
                </li>
                <li className="flex items-start">
                  <ClockIcon size={16} className="mr-2 mt-0.5" />
                  Seg. a Sex.: 9h às 17h
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Direitos autorais */}
        <div className="pt-8 border-t border-gray-700 text-center text-sm text-gray-200">
          <p className="mb-2">
            © {new Date().getFullYear()} Orsini & Totolo Advocacia - Todos os direitos reservados.
          </p>
          <p>
            As informações contidas neste site têm caráter meramente informativo
            e não constituem aconselhamento jurídico.
          </p>
        </div>
      </div>
    </footer>
  );
};
