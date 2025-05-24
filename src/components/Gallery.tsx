import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItemProps {
  id: number;
  title: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

const galleryItems: GalleryItemProps[] = [
  {
    id: 1,
    title: "Sala de Estar Moderna",
    beforeImage: "https://images.pexels.com/photos/6598338/pexels-photo-6598338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    afterImage: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Transformação completa com porcelanato de alto brilho, valorizando o ambiente."
  },
  {
    id: 2,
    title: "Cozinha Contemporânea",
    beforeImage: "https://images.pexels.com/photos/6306387/pexels-photo-6306387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    afterImage: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Renovação com porcelanato que imita madeira, trazendo aconchego e sofisticação."
  },
  {
    id: 3,
    title: "Banheiro Luxuoso",
    beforeImage: "https://images.pexels.com/photos/6508157/pexels-photo-6508157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    afterImage: "https://images.pexels.com/photos/6316064/pexels-photo-6316064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Aplicação de porcelanato em paredes e piso, criando um ambiente elegante e sofisticado."
  }
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentItem = galleryItems[currentIndex];

  return (
    <section id="trabalhos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Veja o resultado do nosso trabalho
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformamos espaços com acabamentos de alta qualidade e atenção aos detalhes.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Gallery Navigation */}
            <button 
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-gray-800"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-gray-800"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>

            {/* Gallery Content */}
            <div className="grid md:grid-cols-2 gap-8 p-2">
              <div className="rounded-lg overflow-hidden shadow-md">
                <div className="relative">
                  <img 
                    src={currentItem.beforeImage} 
                    alt={`${currentItem.title} - Antes`}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    ANTES
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-md">
                <div className="relative">
                  <img 
                    src={currentItem.afterImage} 
                    alt={`${currentItem.title} - Depois`}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    DEPOIS
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{currentItem.title}</h3>
              <p className="text-gray-600">{currentItem.description}</p>
              <div className="flex justify-center mt-4">
                {galleryItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 mx-1 rounded-full ${
                      index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    aria-label={`View project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;