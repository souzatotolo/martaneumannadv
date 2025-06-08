import React from 'react';
import { ScaleIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-primary-600 text-gray-200 py-12 w-full">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center mb-4">
            <ScaleIcon className="text-gray-400 mr-2" size={24} />
            <h3 className="text-xl font-serif font-bold">
              Dra. Marta Neumann
            </h3>
          </div>
          <p className="text-gray-200 max-w-xs">
            Advocacia especializada em Direito Previdenciário e Trabalhista
            com atendimento personalizado e humanizado.
          </p>
        </div>
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
          <div>
            <h4 className="text-lg font-medium mb-4">Áreas de Atuação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-200 hover:text-white transition-colors">
                  Direito Previdenciário
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-white transition-colors">
                  Direito Trabalhista
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-white transition-colors">
                  Aposentadorias
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-white transition-colors">
                  Revisões de Benefícios
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-lg font-medium mb-4">Informações Legais</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-200 hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-gray-700 text-center text-sm text-gray-200">
        <p className="mb-2">
          © {new Date().getFullYear()} Dra. Marta Neumann Advocacia - OAB/SP
          442.710 - Todos os direitos reservados.
        </p>
        <p>
          As informações contidas neste site têm caráter meramente informativo
          e não constituem aconselhamento jurídico.
        </p>
      </div>
    </div>
  </footer>;
};