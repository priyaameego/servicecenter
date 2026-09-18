import { Link } from '@tanstack/react-router';
import { Button } from '../../components/ui/Button';

function RoboticArmIcon({ className = "w-10 h-10 text-white" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="38" width="36" height="4" rx="1" />
      <circle cx="12" cy="40" r="1.5" fill="currentColor" />
      <circle cx="24" cy="40" r="1.5" fill="currentColor" />
      <circle cx="36" cy="40" r="1.5" fill="currentColor" />
      <rect x="14" y="30" width="20" height="8" rx="2" />
      <path d="M20 30V22" />
      <circle cx="20" cy="20" r="3" />
      <path d="M22 18L32 10" />
      <circle cx="32" cy="10" r="2.5" />
      <path d="M34 11L38 15" />
      <path d="M37 17L35 19" />
      <path d="M40 14L42 16" />
    </svg>
  );
}

function DualGearsIcon({ className = "w-10 h-10 text-white" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="19" cy="27" r="7" />
      <path d="M19 16v4M19 34v4M8 27h4M26 27h4M11.2 19.2l2.8 2.8M24 32l2.8 2.8M11.2 34.8l2.8-2.8M24 22l2.8-2.8" />
      <circle cx="33" cy="17" r="5" />
      <path d="M33 9v3M33 22v3M25 17h3M38 17h3M27.3 11.3l2.2 2.2M36.5 20.5l2.2 2.2M27.3 22.7l2.2-2.2M36.5 13.5l2.2-2.2" />
    </svg>
  );
}

export function IntroSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Heading same as LHE */}
        <div className="text-center max-w-4xl mx-auto mb-10 reveal">
          <span className="section-eyebrow text-[#666666] tracking-[0.2em] uppercase text-sm sm:text-base font-bold">
            OUR SERVICES
          </span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase mt-1 mb-4">
            WHAT WE DO?
          </h2>
          <div className="section-divider-center mt-2 mb-6" />
          
          <p className="text-[#666666] text-base md:text-lg leading-relaxed mb-3">
            At our <strong className="text-gray-900 font-semibold">Black+Decker Service Center</strong>, we provide professional repair, maintenance, and after-sales support for a wide range of Black+Decker home and kitchen appliances, motors, and electromechanical equipment.
          </p>
          <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
            A dedicated service center equipped with specialized testing facilities, diagnostic tools, and experienced technicians to ensure every product is inspected carefully and serviced to the required standards.
          </p>
        </div>

        {/* 2 Image Cards Side by Side (Same as LHE.ae screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto mt-12 mb-16">
          
          {/* Card 1 (Left): Motor Overhaul & Repairs */}
          <Link
            to="/services"
            className="relative group block"
            aria-label="Motor Overhaul & Repairs - REPAIR INDUSTRIAL MOTORS"
          >
            <div className="relative h-[280px] sm:h-[320px] md:h-[360px] overflow-hidden shadow-lg border border-gray-200/80 bg-black">
              <img
                src="/c2.jpeg"
                alt="Motor Overhaul & Repairs"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105 brightness-90"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-8 z-10">
                <h3 
                  className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-white mb-2 tracking-tight drop-shadow-lg"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Motor Overhaul &amp; Repairs
                </h3>
                <p 
                  className="text-white text-base sm:text-lg md:text-xl font-bold uppercase tracking-wider drop-shadow-md text-white/95"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  REPAIR INDUSTRIAL MOTORS
                </p>
              </div>
            </div>

            {/* Overlapping Red Icon Box at Bottom Center */}
            <div className="absolute -bottom-8 sm:-bottom-9 md:-bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-[#e30613] flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-[#cc0000] transition-all duration-300 z-20">
              <RoboticArmIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </Link>

          {/* Card 2 (Right): Authorized Service Center For BLACK + DECKER, STANLEY, DEWALT */}
          <Link
            to="/services"
            className="relative group block"
            aria-label="Authorized Service Center For BLACK + DECKER, STANLEY, DEWALT"
          >
            <div className="relative h-[280px] sm:h-[320px] md:h-[360px] overflow-hidden shadow-lg border border-gray-200/80 bg-black">
              <img
                src="/c.jpeg"
                alt="Authorized Service Center For BLACK + DECKER, STANLEY, DEWALT"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105 brightness-90"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-8 z-10">
                <h3 
                  className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-white mb-2 tracking-tight drop-shadow-lg"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Authorized Service Center For
                </h3>
                <p 
                  className="text-white text-base sm:text-lg md:text-xl font-bold uppercase tracking-wider drop-shadow-md text-white/95"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  BLACK + DECKER, STANLEY, DEWALT
                </p>
              </div>
            </div>

            {/* Overlapping Red Icon Box at Bottom Center */}
            <div className="absolute -bottom-8 sm:-bottom-9 md:-bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-[#e30613] flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-[#cc0000] transition-all duration-300 z-20">
              <DualGearsIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </Link>

        </div>

        {/* Centered VIEW ALL SERVICES Button same as LHE */}
        <div className="text-center mt-14 sm:mt-16 reveal">
          <Button to="/services" variant="secondary">
            VIEW ALL SERVICES
          </Button>
        </div>
      </div>
    </section>
  );
}
