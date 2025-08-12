import React, { useState, useEffect } from 'react';
import escritorio1 from '../assets/escritorio1.jpeg';
import escritorio2 from '../assets/escritorio2.jpeg';
import equipe1 from '../assets/equipe1.jpeg';
import equipe2 from '../assets/equipe2.jpeg';
import equipe3 from '../assets/equipe3.jpeg';
export const AboutSection = () => {
  const images = [
    escritorio2,
    equipe1,
    equipe2,
    equipe3
  ];

  const [current, setCurrent] = useState(0);

  // Troca automática a cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <section id="sobre" className="py-16 bg-gray-200 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-8 text-gray-700">
          SOBRE O <span className="text-primary-500">ESCRITÓRIO</span>
        </h2>

        <p className="text-primary-900 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          No Orsini & Totolo, unimos tradição jurídica e inovação para oferecer um atendimento próximo,
          humano e eficiente. Nossa equipe é especializada em diversas áreas do Direito,
          sempre comprometida em defender os interesses de nossos clientes com ética, transparência
          e excelência técnica.
        </p>

        {/* Carrossel */}
        <div className="relative max-w-3xl mx-auto ">
          <div className="overflow-hidden rounded-lg shadow-lg max-w-2xl mx-auto h-[700px]">
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {images.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Slide ${idx + 1}`}
                  className="h-full w-auto flex-shrink-0 object-contain"
                />
              ))}
            </div>
          </div>

          {/* Botões de navegação */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-primary-500 text-white p-2 rounded-r hover:bg-primary-600"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-primary-500 text-white p-2 rounded-l hover:bg-primary-600"
          >
            ›
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full ${current === idx ? 'bg-primary-500' : 'bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
