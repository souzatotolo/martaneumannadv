import React from 'react';
import { StarIcon, QuoteIcon } from 'lucide-react';
export const TestimonialsSection = () => {
  const testimonials = [{
    text: 'A Dra. Maria foi fundamental na minha aposentadoria especial. Seu conhecimento técnico e dedicação fizeram toda a diferença no resultado positivo do meu processo.',
    author: 'R.S., Aposentado',
    rating: 5
  }, {
    text: 'Excelente profissional! Resolveu minha questão trabalhista com eficiência e sempre me manteve informada sobre cada passo do processo. Recomendo fortemente.',
    author: 'M.L., Professora',
    rating: 5
  }, {
    text: 'Agradeço imensamente o trabalho da Dra. Maria na revisão do meu benefício previdenciário. Sua orientação precisa e atendimento humanizado foram essenciais.',
    author: 'J.P., Pensionista',
    rating: 5
  }, {
    text: 'Após tentar resolver administrativamente sem sucesso, procurei a Dra. Maria que conseguiu reverter minha demissão injusta. Profissional competente e atenciosa.',
    author: 'T.C., Bancário',
    rating: 5
  }];
  return <section id="depoimentos" className="py-16 bg-primary-100 w-full">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-4 text-navy-800">
        O Que Dizem Nossos <span className="text-burgundy-700">Clientes</span>
      </h2>
      <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
        A satisfação de nossos clientes é o nosso maior reconhecimento.
        Confira alguns depoimentos de pessoas que confiaram em nosso trabalho.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm relative">
          <QuoteIcon className="absolute top-4 right-4 text-beige-200" size={32} />
          <div className="flex mb-4">
            {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} size={18} className="text-yellow-500 fill-current" />)}
          </div>
          <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
          <p className="text-navy-700 font-medium">{testimonial.author}</p>
        </div>)}
      </div>
    </div>
  </section>;
};