import React from 'react';
import { ScaleIcon } from 'lucide-react';
import { CTAButton } from './CTAButton';
export const HeroSection = () => {
  return <section className="bg-primary-100 w-full">
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <ScaleIcon className="text-primary-700 mr-2" size={28} />
            <h1 className="text-3xl md:text-4xl font-serif  text-primary-800">
              DRA. MARTA NEUMANN
            </h1>
          </div>
          <h2 className="text-2xl md:text-2xl font-semibold mb-4 text-primary-700">
            SUPORTE JURÍDICO COM ÉTICA E TRANSPARÊNCIA
          </h2>
          <p className="text-lg mb-6 text-gray-700">
            ESPECIALISTA EM DIREITO PREVIDENCIÁRIO E TRABALHISTA DEDICADA A PROTEGER SEUS DIREITOS COM EXCELÊNCIA E COMPROMISSO
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://calendly.com/richardtotolo/agendar-consulta" target='_blank' rel="noopener noreferrer">
              <CTAButton text="Agende uma Consulta" />
            </a>


            <CTAButton text="Envie seu Caso" secondary />
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-700 shadow-lg">
              <img src="https://media.licdn.com/dms/image/v2/D4D03AQHyleBawtijEA/profile-displayphoto-shrink_400_400/B4DZUEe2k5HkAg-/0/1739536952370?e=1754524800&v=beta&t=BV9uXH_xEUWzbIzcavH84Uded5Y0Rti0WAfHjsNE1Mk" alt="Dra. Maria Silva - Advogada" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-md">
              <p className="text-primary-700 font-medium whitespace-nowrap">
                OAB/SP 442.710
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};