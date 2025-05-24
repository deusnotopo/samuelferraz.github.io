import React from 'react';
import { Star, User } from 'lucide-react';

interface TestimonialProps {
  name: string;
  text: string;
  rating: number;
  location?: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, text, rating, location }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className={`${
              index < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{text}"</p>
      <div className="flex items-center">
        <div className="bg-gray-200 rounded-full p-2 mr-3">
          <User size={20} className="text-gray-500" />
        </div>
        <div>
          <p className="font-semibold text-gray-800">{name}</p>
          {location && <p className="text-gray-500 text-sm">{location}</p>}
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Ana L.",
      text: "Serviço excelente! O porcelanato da minha cozinha ficou perfeito. O Samuel é muito profissional, pontual e cuidadoso com os detalhes.",
      rating: 5,
      location: "São Paulo, SP"
    },
    {
      name: "Ricardo M.",
      text: "Contratei o Samuel para instalar o piso da minha sala e estou impressionado com o resultado. Trabalho limpo, rápido e com acabamento impecável.",
      rating: 5,
      location: "Campinas, SP"
    },
    {
      name: "Juliana S.",
      text: "Já é a segunda vez que contrato os serviços do Samuel. A qualidade do trabalho é excepcional e os prazos são sempre cumpridos. Super recomendo!",
      rating: 5,
      location: "Santos, SP"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">O que nossos clientes dizem</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior orgulho e motivação para continuar oferecendo serviços de excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              text={testimonial.text}
              rating={testimonial.rating}
              location={testimonial.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;