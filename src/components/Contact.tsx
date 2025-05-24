import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import Button from './ui/Button';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Solicite seu orçamento</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Entre em contato agora mesmo e transforme o seu ambiente com qualidade e confiança.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">WhatsApp / Telefone</h4>
                  <p className="text-gray-300">(11) 98765-4321</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">E-mail</h4>
                  <p className="text-gray-300">contato@samuelferraz.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <Instagram className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Instagram</h4>
                  <p className="text-gray-300">@samuelferraz.pisos</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Áreas Atendidas</h4>
                  <p className="text-gray-300">São Paulo e região metropolitana, Campinas, Santos, Sorocaba e litoral norte.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Envie sua mensagem</h3>
            
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Nome completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Seu nome" 
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">Telefone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="(00) 00000-0000" 
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="seu@email.com" 
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Descreva seu projeto ou dúvida..."
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full" size="large">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;