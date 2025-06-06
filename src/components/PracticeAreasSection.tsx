import React from 'react';
import { UserIcon, BriefcaseIcon, BuildingIcon, LandmarkIcon } from 'lucide-react';
import { CTAButton } from './CTAButton';
export const PracticeAreasSection = () => {
  const areas = [{
    icon: <UserIcon size={32} className="text-burgundy-700" />,
    title: 'PARA APOSENTADOS',
    description: 'Revisão de benefícios, aposentadoria por tempo de contribuição, e demais aposentadorias',
    items: ['Revisões', 'Aposentadoria especial', 'Auxílio-doença', 'Pensão por morte']
  }, {
    icon: <BriefcaseIcon size={32} className="text-burgundy-700" />,
    title: 'PARA TRABALHADORES',
    description: 'Defesa dos seus direitos trabalhistas, verbas rescisórias, horas extras e assédio moral.',
    items: ['Rescisão indireta', 'Horas extras', 'Assédio moral', 'Danos morais']
  }, {
    icon: <BuildingIcon size={32} className="text-burgundy-700" />,
    title: 'PARA EMPRESAS',
    description: 'Consultoria preventiva, acordos trabalhistas e representação em processos administrativos.',
    items: ['Análise de contratos', 'Acordos coletivos', 'Compliance trabalhista', 'Defesa em reclamações']
  }, {
    icon: <LandmarkIcon size={32} className="text-burgundy-700" />,
    title: 'PARA SERVIDORES PÚBLICOS',
    description: 'Aposentadoria especial para servidores, abono de permanência e incorporação de gratificações.',
    items: ['Aposentadoria especial', 'Abono de permanência', 'Progressão funcional', 'Adicionais de insalubridade']
  }];
  return <section id="areas" className="py-16 bg-primary-200 w-full">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-4 text-navy-800">
        ÁREAS DE <span className="text-burgundy-700">ATUAÇÃO</span>
      </h2>
      <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
        OFERECEMOS SERVIÇOS JURÍDICOS ESPECIALIZADOS EM DIREITO PREVIDENCIÁRIO E TRABALHISTA, ATENDENDO ÀS NECESSIDADES ESPECÍFICAS DE CADA CLIENTE.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {areas.map((area, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              {area.icon}
              <h3 className="ml-3 font-semibold text-navy-800">
                {area.title}
              </h3>
            </div>
            <p className="text-gray-700 mb-4 text-sm">{area.description}</p>
            <ul className="space-y-2 mb-6">
              {area.items.map((item, idx) => <li key={idx} className="flex items-center font-bold text-gray-700 text-sm">
                <span className="w-1.5 h-1.5 bg-burgundy-700 rounded-full mr-2"></span>
                {item}
              </li>)}
            </ul>
          </div>
          <div className="px-6 pb-6">
            <CTAButton text="Saiba Mais" secondary fullWidth />
          </div>
        </div>)}
      </div>
      <div className="mt-12 text-center">
        <CTAButton text="Consulte Seu Caso Agora" />
      </div>
    </div>
  </section>;
};