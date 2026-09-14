import { useState, useEffect } from 'react';
import { Button } from '../../components/ui/Button';
import { dubaiBranch } from '../../data/business';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop",
    title: "Precision Expertise in Electrical Machinery",
    subtitle: "Rewinding, Repair, Maintenance, and Dynamic Balancing of AC & DC Motors, Generators, and Rotating Parts for Optimal Operational Performance."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2000&auto=format&fit=crop",
    title: "Authorized Service Center",
    subtitle: "We are an authorized service center and spare parts provider for top brands including Stanley, Black+Decker, and DeWalt."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop",
    title: "Quality Only Happens When You Care",
    subtitle: "Committed to providing industry with a premium standard of excellence and safety."
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[600px] md:h-[700px] bg-[#1A1A1A] overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 z-0">
            <img 
              src={slide.image} 
              alt={slide.title}
              fetchPriority={index === 0 ? "high" : "auto"}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              className="w-full h-full object-cover opacity-60 brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-60"></div>
          </div>
          
          <div className="container-custom relative z-10 h-full flex items-center">
            <div className={`max-w-2xl transform transition-all duration-1000 delay-300 ${
              index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white leading-tight mb-6 uppercase tracking-tight break-words">
                {slide.title}
              </h1>
              <p className="text-lg text-gray-200 mb-8 max-w-xl border-l-4 border-[var(--color-primary)] pl-4">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/services" variant="primary">OUR SERVICES</Button>
                <a 
                  href={`tel:${dubaiBranch.phone.replace(/\s+/g, '')}`} 
                  className="inline-flex items-center justify-center px-7 py-3.5 font-heading text-sm md:text-base font-bold uppercase transition-all duration-300 border-2 border-white text-white hover:bg-white hover:text-[#1A1A1A]"
                >
                  CALL NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slider Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-[var(--color-primary)] scale-125' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
