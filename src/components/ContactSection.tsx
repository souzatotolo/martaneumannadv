import React from 'react';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  MessageCircleIcon,
  Calendar
} from 'lucide-react';
import { CTAButton } from './CTAButton';

export const ContactSection = () => {
  return (
    <section id="contato" className="py-16 bg-gray-500 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-4 text-primary-600">
          ENTRE EM <span className="text-primary-600">CONTATO</span>
        </h2>
        <p className="text-center text-primary-600 mb-12 max-w-2xl mx-auto">
          ESTAMOS À DISPOSIÇÃO PARA ESCLARECER SUAS DÚVIDAS E AUXILIAR NA DEFESA DOS SEUS DIREITOS
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Formulário */}
          <div className="md:w-1/2 bg-beige-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 text-primary-600">
              Envie sua mensagem
            </h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-primary-600 mb-2 text-sm font-medium">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-primary-400 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-600"
                  placeholder="Seu nome completo"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-primary-600 mb-2 text-sm font-medium">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-primary-400 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-600"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-primary-600 mb-2 text-sm font-medium">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-primary-400 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-600"
                  placeholder="(11) 98765-4321"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-primary-600 mb-2 text-sm font-medium">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-primary-400 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-600"
                  placeholder="Descreva brevemente seu caso"
                ></textarea>
              </div>
              <div className="text-center">
                <CTAButton text="Enviar Mensagem" secondary />
              </div>
            </form>
          </div>

          {/* Informações de contato */}
          <div className="md:w-1/2">
            <div className="bg-beige-50 text-primary-600 p-6 rounded-lg h-full">
              <h3 className="text-xl font-semibold mb-6">
                Orsini & Totolo - Informações de contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPinIcon className="mr-3 mt-1 flex-shrink-0 text-primary-600" size={20} />
                  <div>
                    <h4 className="font-medium mb-1">Endereço</h4>
                    <p>R. Anastácio de Lima, 471 - Santana<br />Ribeirão Pires - SP</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon className="mr-3 mt-1 flex-shrink-0 text-primary-600" size={20} />
                  <div>
                    <h4 className="font-medium mb-1">Telefone</h4>
                    <p>(11) 95986-7106</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MailIcon className="mr-3 mt-1 flex-shrink-0 text-primary-600" size={20} />
                  <div>
                    <h4 className="font-medium mb-1">E-mail</h4>
                    <p className="break-words overflow-hidden max-w-full">
                      contato@orsinitotolo.com.br
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="mr-3 mt-1 flex-shrink-0 text-primary-600" size={20} />
                  <div>
                    <h4 className="font-medium mb-1">Horário de atendimento</h4>
                    <p>Segunda a Sexta: 9h às 17h</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/5511959867106"
                  className="flex items-center justify-center bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors"
                >
                  <MessageCircleIcon className="mr-2" size={20} />
                  Fale conosco pelo WhatsApp
                </a>
                <br />
                <a
                  href="https://calendly.com/orsinitotolo/agendar-consulta"
                  className="flex items-center justify-center bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Calendar className="mr-2" size={20} />
                  Agende uma consulta
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
