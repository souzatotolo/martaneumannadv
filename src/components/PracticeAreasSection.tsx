import React from 'react';
import { LandmarkIcon, BriefcaseIcon, UserIcon, Building2Icon } from 'lucide-react';
import { CTAButton } from './CTAButton';

export const PracticeAreasSection = () => {
  const areas = [
    {
      icon: <LandmarkIcon size={32} className="text-primary-500" />,
      title: 'DIREITO TRIBUTÁRIO',
      description:
        'Planejamento fiscal, recuperação de créditos e defesa em autuações tributárias.',
      items: [
        'Planejamento tributário',
        'Recuperação de créditos (PIS/COFINS/ICMS)',
        'Defesa em execuções fiscais',
        'Consultoria preventiva'
      ]
    },
    {
      icon: <BriefcaseIcon size={32} className="text-primary-500" />,
      title: 'DIREITO TRABALHISTA',
      description:
        'Atuação estratégica para empresas e trabalhadores em disputas e prevenção de conflitos.',
      items: [
        'Acordos e rescisões',
        'Horas extras e adicionais',
        'Assédio moral',
        'Compliance trabalhista'
      ]
    },
    {
      icon: <UserIcon size={32} className="text-primary-500" />,
      title: 'DIREITO PREVIDENCIÁRIO',
      description:
        'Consultoria e ações para aposentadorias, revisões e benefícios do INSS.',
      items: [
        'Revisão de aposentadoria',
        'Aposentadoria especial',
        'Auxílio-doença',
        'Pensão por morte'
      ]
    },
    {
      icon: <Building2Icon size={32} className="text-primary-500" />,
      title: 'DIREITO PENAL',
      description:
        'Atuação em defesa criminal com advogado parceiro, consultoria penal e acompanhamento processual.',
      items: [
        'Defesa criminal em inquéritos e ações penais',
        'Consultoria em direito penal',
        'Análise de processos criminais',
        'Atuação em medidas cautelares'
      ]
    }
  ];

  return (
    <section id="areas" className="py-16 bg-primary-600 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-4 text-gray-200">
          ÁREAS DE <span className="text-gray-200">ATUAÇÃO</span>
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Atendimento especializado em Direito Tributário, Trabalhista e Previdenciário,
          com soluções personalizadas para empresas e pessoas físicas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {area.icon}
                  <h3 className="ml-3 font-semibold text-primary-700">
                    {area.title}
                  </h3>
                </div>
                <p className="text-gray-700 mb-4 text-sm">{area.description}</p>
                <ul className="space-y-2 mb-6">
                  {area.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center font-bold text-gray-700 text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://calendly.com/richardtotolo/agendar-consulta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CTAButton secondary text="Agende uma Consulta" />
          </a>
        </div>
      </div>
    </section>
  );
};
