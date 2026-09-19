import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { dubaiBranch } from '../../data/business';

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 1 ? 0 : 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? 0 : 1));
  };

  return (
    <section className="relative h-[560px] sm:h-[620px] md:h-[680px] lg:h-[720px] bg-[#111111] overflow-hidden select-none">
      
      {/* ==================== SLIDE 1: Safety & Precision Care ==================== */}
      <div 
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
          currentSlide === 0 ? 'opacity-100 z-10 visible' : 'opacity-0 z-0 invisible pointer-events-none'
        }`}
      >
        {/* Background Image with Dark Mask & Ken Burns Effect */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="/1.jpeg" 
            alt="Safety and Precision Care"
            className={`w-full h-full object-cover object-center brightness-90 transition-transform duration-1000 ${
              currentSlide === 0 ? 'animate-kenburns-1' : 'scale-100'
            }`}
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
        </div>

        {/* Center Content: Red Box Border with Headline */}
        <div className="container-custom relative z-10 h-full flex items-center justify-center px-4 sm:px-6">
          <div className={`border-[4px] sm:border-[5px] md:border-[6px] border-[#FF6A00] p-6 sm:p-10 md:p-14 lg:p-16 max-w-4xl w-full text-center shadow-2xl bg-black/35 backdrop-blur-[2px] transition-all duration-700 ${
            currentSlide === 0 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}>
            <h1 
              className="!text-white text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-black uppercase tracking-tight leading-[1.2] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
              style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}
            >
              WHAT YOU DON'T KNOW ABOUT SAFETY COULD HURT YOU
            </h1>
          </div>
        </div>
      </div>

      {/* ==================== SLIDE 2: Authorized Service Center ==================== */}
      <div 
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
          currentSlide === 1 ? 'opacity-100 z-10 visible' : 'opacity-0 z-0 invisible pointer-events-none'
        }`}
      >
        {/* Background Image with Dark Mask & Ken Burns Effect */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://lhe.ae/wp-content/uploads/2024/01/Photo-of-an-electrician-man.-with-tools.jpg" 
            alt="Authorized Service Center Workshop"
            className={`w-full h-full object-cover object-center brightness-90 transition-transform duration-1000 ${
              currentSlide === 1 ? 'animate-kenburns-2' : 'scale-100'
            }`}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        </div>

        {/* Content: Left Text & Right Badges */}
        <div className="container-custom relative z-10 h-full flex items-center px-6 sm:px-10 lg:px-16">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8 md:pt-0">
            
            {/* Left Column: Heading, List & Button */}
            <div className="lg:col-span-8">
              <h1 
                className="!text-white text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-black uppercase tracking-tight leading-[1.08] mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
                style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}
              >
                AUTHORIZED<br />
                SERVICE CENTER
              </h1>

              {/* Bullet Points */}
              <div className="space-y-1.5 sm:space-y-2 mb-8 font-bold text-sm sm:text-base md:text-lg tracking-wider uppercase">
                <p className="text-[#FF6A00] text-base sm:text-lg font-black tracking-widest mb-3">
                  5 STAR REPRESENTATION
                </p>
                <p className="flex items-center gap-2 !text-white" style={{ color: '#ffffff' }}>
                  <span className="text-[#FF6A00] font-black text-xl leading-none">*</span>
                  <span className="drop-shadow-sm">RAPID REPAIRS</span>
                </p>
                <p className="flex items-center gap-2 !text-white" style={{ color: '#ffffff' }}>
                  <span className="text-[#FF6A00] font-black text-xl leading-none">*</span>
                  <span className="drop-shadow-sm">HIGHEST QUALITY</span>
                </p>
                <p className="flex items-center gap-2 !text-white" style={{ color: '#ffffff' }}>
                  <span className="text-[#FF6A00] font-black text-xl leading-none">*</span>
                  <span className="drop-shadow-sm">WARRANTY REPAIRS</span>
                </p>
                <p className="flex items-center gap-2 !text-white" style={{ color: '#ffffff' }}>
                  <span className="text-[#FF6A00] font-black text-xl leading-none">*</span>
                  <span className="drop-shadow-sm">GENUINE FACTORY PARTS</span>
                </p>
                <p className="flex items-center gap-2 !text-white" style={{ color: '#ffffff' }}>
                  <span className="text-[#FF6A00] font-black text-xl leading-none">*</span>
                  <span className="drop-shadow-sm">ONLINE TECHNICAL SUPPORT</span>
                </p>
              </div>

              {/* CALL US Button */}
              <div>
                <a 
                  href={`tel:${dubaiBranch.phone.replace(/\s+/g, '')}`} 
                  className="inline-block bg-white hover:bg-[#FF6A00] !text-black hover:!text-white font-extrabold uppercase px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base tracking-widest transition-all duration-300 shadow-xl"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  CALL US
                </a>
              </div>
            </div>

            {/* Right Column: Brand Badge */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col items-center lg:items-end justify-start lg:justify-center gap-4 sm:gap-5">

              {/* BLACK+DECKER Badge */}
              <div className="bg-black border-[3px] border-[#FF6A00] p-3 sm:p-4 w-32 sm:w-40 md:w-48 lg:w-60 shadow-2xl flex flex-col items-center justify-center">
                <span className="font-black text-sm sm:text-lg md:text-xl lg:text-2xl text-[#FF6A00] tracking-tight uppercase leading-tight select-none text-center">
                  BLACK+<br className="sm:hidden" />DECKER
                </span>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ==================== Navigation Controls: Left & Right Red Arrows ==================== */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-10 sm:w-12 md:w-14 h-14 sm:h-16 md:h-20 bg-[#FF6A00] hover:bg-black text-white flex items-center justify-center transition-colors duration-300 shadow-xl focus:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-10 sm:w-12 md:w-14 h-14 sm:h-16 md:h-20 bg-[#FF6A00] hover:bg-black text-white flex items-center justify-center transition-colors duration-300 shadow-xl focus:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
      </button>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {[0, 1].map((index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-[#FF6A00]' : 'w-2.5 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>

    </section>
  );
}
