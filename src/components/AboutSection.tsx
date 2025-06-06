import React from 'react';
import { BookOpenIcon, AwardIcon, HeartHandshakeIcon } from 'lucide-react';
export const AboutSection = () => {
  return <section id="sobre" className="py-16 bg-primary-400 w-full">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-12 text-primary-800">
        Sobre <span className="text-primary-200">Dra. Marta Neumann</span>
      </h2>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-2/5">
          <img src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Dra. Maria Silva em seu escritório" className="rounded-lg shadow-md w-full h-auto" />
        </div>
        <div className="md:w-3/5">
          <p className="text-gray-200 mb-6 leading-relaxed">
            Graduada em Direito pela Universidade Metodista, com
            especialização em Direito Previdenciário pelo instituto Legale,
            defendendo os direitos
            de trabalhadores e beneficiários da Previdência Social.
          </p>
          <p className="text-gray-200 mb-8 leading-relaxed">
            Minha trajetória profissional é marcada pelo compromisso com a
            justiça social e a defesa incansável dos direitos dos meus
            clientes, sempre pautada pela ética, transparência e atendimento
            personalizado.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4 bg-beige-50 rounded-lg">
              <BookOpenIcon className="text-burgundy-700 mb-3" size={28} />
              <h3 className="font-medium text-navy-700 mb-2">
                Formação Acadêmica
              </h3>
              <p className="text-sm text-gray-200">
                Graduação e especializações em instituições de excelência
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-beige-50 rounded-lg">
              <AwardIcon className="text-burgundy-700 mb-3" size={28} />
              <h3 className="font-medium text-navy-700 mb-2">Experiência</h3>
              <p className="text-sm text-gray-200">
                Diversos processos com atuação especializada
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-beige-50 rounded-lg">
              <HeartHandshakeIcon className="text-burgundy-700 mb-3" size={28} />
              <h3 className="font-medium text-navy-700 mb-2">Compromisso</h3>
              <p className="text-sm text-gray-200">
                Atendimento humanizado e personalizado
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};