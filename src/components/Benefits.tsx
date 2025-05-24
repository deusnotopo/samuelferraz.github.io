import React from 'react';
import { Clock, Award, Calendar, MapPin, Shield } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Mais de 10 anos de experiência",
      description: "Expertise consolidada em instalações de pisos e porcelanatos, garantindo um trabalho de qualidade superior."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Acabamento de alto padrão",
      description: "Instalações com acabamento impecável, com atenção aos mínimos detalhes para um resultado perfeito."
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Cumprimento rigoroso de prazos",
      description: "Compromisso com cronogramas bem definidos e entrega pontual, respeitando seu tempo e planejamento."
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "Atendimento em toda região",
      description: "Disponibilidade para realizar serviços em diversas localidades, levando qualidade onde você estiver."
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Agilidade na execução",
      description: "Trabalho rápido e eficiente, minimizando transtornos durante a reforma ou construção."
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Por que escolher nossos serviços?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em instalação de pisos e porcelanatos com qualidade comprovada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;