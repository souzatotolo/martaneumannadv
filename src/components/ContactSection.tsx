import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, MessageCircleIcon, Calendar } from 'lucide-react';
import { CTAButton } from './CTAButton';
export const ContactSection = () => {
  return <section id="contato" className="py-16 bg-primary-400 w-full">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-4 text-navy-800">
        ENTRE EM <span className="text-burgundy-700">CONTATO</span>
      </h2>
      <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
        ESTAMOS À DISPOSIÇÃO PARA ESCLARECER SUAS DÚVIDAS E AUXILIAR NA DEFESA DOS SEUS DIREITOS
      </p>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 bg-beige-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-6 text-navy-800">
            Envie sua mensagem
          </h3>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2 text-sm font-medium">
                Nome completo
              </label>
              <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-burgundy-700" placeholder="Seu nome completo" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2 text-sm font-medium">
                E-mail
              </label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-burgundy-700" placeholder="seu.email@exemplo.com" />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 mb-2 text-sm font-medium">
                Telefone
              </label>
              <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-burgundy-700" placeholder="(11) 98765-4321" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2 text-sm font-medium">
                Mensagem
              </label>
              <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-burgundy-700" placeholder="Descreva brevemente seu caso"></textarea>
            </div>
            <div className="text-center">
              <CTAButton text="Enviar Mensagem" fullWidth />
            </div>
          </form>
        </div>
        <div className="md:w-1/2">
          <div className="bg-navy-700 text-white p-6 rounded-lg h-full">
            <h3 className="text-xl font-semibold mb-6">
              Informações de contato
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPinIcon className="mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium mb-1">Endereço</h4>
                  <p className="text-beige-100">
                    <br />
                    Santo André - São Paulo/SP
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium mb-1">Telefone</h4>
                  <p className="text-beige-100">(11) 9000-0000</p>
                </div>
              </div>
              <div className="flex items-start">
                <MailIcon className="mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium mb-1">E-mail</h4>
                  <p className="text-beige-100">
                    contato@martaneumannadv.com.br
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <ClockIcon className="mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium mb-1">Horário de atendimento</h4>
                  <p className="text-beige-100">
                    Segunda a Sexta: 9h às 18h
                    <br />
                    Sábados: 9h às 12h (com agendamento)
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a href="https://wa.me/5511987654321" className="flex items-center justify-center bg-green-400 text-white py-3 px-4 rounded-md hover:bg-green-600 transition-colors">
                <MessageCircleIcon className="mr-2" size={20} />
                Fale Conosco pelo WhatsApp
              </a>
              <br />
              <a href="https://calendly.com/richardtotolo/agendar-consulta" className="flex items-center justify-center bg-blue-400 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors">
                <Calendar className="mr-2" size={20} />
                Ou agende uma consulta
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};