import React from 'react';
import { ScaleIcon } from 'lucide-react';
import { CTAButton } from './CTAButton';
import wallpaper from '../assets/Wallpaper - PC.png';


export const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundPosition: 'left center', // move pra esquerda e centraliza verticalmente
        backgroundSize: 'cover', // aumenta o zoom (pode ajustar a % pra mais ou menos)
        position: 'relative',
      }}
      className="h-[100vw] md:h-[40vw] w-full flex items-center justify-center"
    >
      {/* Overlay suave escuro */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Conteúdo centralizado e acima do overlay */}
      <div className="relative z-10 container flex flex-col items-center justify-center mx-auto px-4 text-center max-w-3xl">
        {/* <div className="flex items-starts justify-center mb-4">
          <h1 className="text-10xl md:text-5xl font-montserrat text-gray-100">
            ORSINI & TOTOLO ADVOCACIA
          </h1>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-100">
          EXPERIÊNCIA QUE GERA RESULTADOS
        </h2>

        <div>
          <a
            href="https://calendly.com/richardtotolo/agendar-consulta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CTAButton text="Agende uma Consulta" />
          </a>
        </div> */}
      </div>
    </section>
  );
};
