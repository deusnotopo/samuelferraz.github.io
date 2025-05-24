import React from 'react';
import { Clock, CheckCircle, Users } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-blue-600 mb-2">
        {icon}
      </div>
      <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">{value}</p>
      <p className="text-gray-600 text-center">{label}</p>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/8092517/pexels-photo-8092517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Samuel Santos Ferraz trabalhando" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Sobre Samuel Santos Ferraz</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Com mais de uma década de experiência, Samuel Santos Ferraz é referência em instalação de pisos e porcelanatos, 
                garantindo elegância, durabilidade e perfeição em cada projeto.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Especializado em acabamentos de alto padrão, Samuel dedica-se a transformar ambientes com soluções personalizadas 
                que atendem às necessidades específicas de cada cliente. Seu compromisso com a qualidade e atenção aos detalhes 
                resulta em trabalhos impecáveis e clientes satisfeitos.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <StatItem 
                  icon={<Clock size={32} />} 
                  value="10+" 
                  label="Anos de experiência" 
                />
                <StatItem 
                  icon={<CheckCircle size={32} />} 
                  value="500+" 
                  label="Projetos concluídos" 
                />
                <StatItem 
                  icon={<Users size={32} />} 
                  value="350+" 
                  label="Clientes satisfeitos" 
                />
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <p className="text-gray-700 italic">
                  "Meu objetivo é oferecer soluções de acabamento que transformem ambientes comuns em espaços extraordinários, 
                  combinando técnica, estética e funcionalidade em cada projeto."
                </p>
                <p className="text-gray-800 font-semibold mt-2">— Samuel Santos Ferraz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;