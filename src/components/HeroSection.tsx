import React from 'react';
import { ScaleIcon } from 'lucide-react';
import { CTAButton } from './CTAButton';

export const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
      }}
      className="h-[100vw] md:h-[40vw] w-full flex items-center justify-center"
    >
      {/* Overlay suave escuro */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Conteúdo centralizado e acima do overlay */}
      <div className="relative z-10 container flex flex-col items-center justify-center mx-auto px-4 text-center max-w-3xl">
        <div className="flex items-starts justify-center mb-4">
          <h1 className="text-10xl md:text-5xl font-montserrat text-gray-50">
            DRA. MARTA NEUMANN
          </h1>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-100">
          SUPORTE JURÍDICO COM ÉTICA E TRANSPARÊNCIA
        </h2>

        <div>
          <a
            href="https://calendly.com/richardtotolo/agendar-consulta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CTAButton text="Agende uma Consulta" />
          </a>
        </div>
      </div>
    </section>
  );
};
