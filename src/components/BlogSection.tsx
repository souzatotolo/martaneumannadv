import React from 'react';
import { CalendarIcon, ClockIcon } from 'lucide-react';
import { CTAButton } from './CTAButton';
export const BlogSection = () => {
  const articles = [{
    title: 'Mudanças Recentes na Previdência Social',
    excerpt: 'Saiba como as novas regras da Previdência Social podem afetar sua aposentadoria e quais medidas tomar para garantir seus direitos.',
    date: '22 de Abril, 2023',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  }, {
    title: 'Como Solicitar Benefícios do INSS',
    excerpt: 'Um guia prático sobre o processo administrativo para solicitação de benefícios previdenciários junto ao INSS.',
    date: '15 de Março, 2023',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  }, {
    title: 'O Que Saber Sobre Rescisões na CLT',
    excerpt: 'Entenda seus direitos em caso de demissão, os tipos de rescisão contratual e como calcular suas verbas rescisórias.',
    date: '28 de Fevereiro, 2023',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80'
  }];
  return <section id="blog" className="py-16 bg-primary-400 w-full">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-4 text-navy-800">
        Blog <span className="text-burgundy-700">Jurídico</span>
      </h2>
      <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
        Artigos e informações relevantes sobre Direito Previdenciário e
        Trabalhista para manter você bem informado.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, index) => <div key={index} className="bg-white border border-none rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
          <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <div className="flex items-center mr-4">
                <CalendarIcon size={14} className="mr-1" />
                {article.date}
              </div>
              <div className="flex items-center">
                <ClockIcon size={14} className="mr-1" />
                {article.readTime} de leitura
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-navy-800">
              {article.title}
            </h3>
            <p className="text-gray-700 mb-4 text-sm">{article.excerpt}</p>
            <a href="#" className="text-burgundy-700 font-medium hover:underline">
              Leia mais →
            </a>
          </div>
        </div>)}
      </div>
      <div className="mt-12 text-center">
        <CTAButton text="Ver Todos os Artigos" secondary />
      </div>
    </div>
  </section>;
};