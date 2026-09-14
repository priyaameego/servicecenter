import { Zap, ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export function EmergencyBanner() {
  return (
    <section className="bg-[var(--color-primary)] py-12 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-black/10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 20px)' }} />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 reveal">
          <div className="flex items-center gap-6 text-white max-w-2xl">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 border border-white/30 shadow-lg backdrop-blur-sm animate-pulse-slow">
              <Zap className="w-8 h-8 text-white fill-current" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Need Emergency Tool Repair?
              </h3>
              <p className="text-white/90 text-lg">
                We offer priority service for critical equipment failures to minimize your downtime.
              </p>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <Link 
              to="/contact-us" 
              className="inline-flex items-center bg-white text-[var(--color-primary)] font-extrabold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#111111] hover:text-white transition-colors duration-300 shadow-xl group"
            >
              Request Priority Service
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
