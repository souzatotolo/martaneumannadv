import React from 'react';
import { BookOpenIcon, AwardIcon, HeartHandshakeIcon } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 bg-gray-200 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-12 text-gray-700">
          SOBRE <span className="text-primary-300">DRA. MARTA NEUMANN</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/5">
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-primary-700 shadow-lg mx-auto relative">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQHyleBawtijEA/profile-displayphoto-shrink_400_400/B4DZUEe2k5HkAg-/0/1739536952370?e=1754524800&v=beta&t=BV9uXH_xEUWzbIzcavH84Uded5Y0Rti0WAfHjsNE1Mk"
                    alt="Dra. Marta Neumann - Advogada"
                    className="w-full h-full object-cover"
                  />
                </div>



                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-50 px-6 py-2 rounded-full shadow-md">
                  <p className="text-primary-700 font-medium whitespace-nowrap">
                    OAB/SP 442.710
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-3/5">
            <p className="text-primary-100 mb-6 leading-relaxed">
              Graduada em Direito pela Universidade Metodista, com
              especialização em Direito Previdenciário pelo instituto Legale,
              defendendo os direitos
              de trabalhadores e beneficiários da Previdência Social.
            </p>
            <p className="text-primary-100 mb-8 leading-relaxed">
              Minha trajetória profissional é marcada pelo compromisso com a
              justiça social e a defesa incansável dos direitos dos meus
              clientes, sempre pautada pela ética, transparência e atendimento
              personalizado.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
                <BookOpenIcon className="text-primary-700 mb-3" size={28} />
                <h3 className="font-medium text-primary-900 mb-2">
                  FORMAÇÃO ACADÊMICA
                </h3>
                <p className="text-sm text-gray-700">
                  Graduação e especializações em instituições de excelência
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
                <AwardIcon className="text-primary-700 mb-3" size={28} />
                <h3 className="font-medium text-primary-900 mb-2">EXPERIÊNCIA</h3>
                <p className="text-sm text-gray-700">
                  Diversos processos com atuação especializada
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
                <HeartHandshakeIcon className="text-primary-700 mb-3" size={28} />
                <h3 className="font-medium text-primary-900 mb-2">COMPROMISSO</h3>
                <p className="text-sm text-gray-700">
                  Atendimento humanizado e personalizado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
