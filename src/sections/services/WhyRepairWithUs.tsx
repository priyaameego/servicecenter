import { CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function WhyRepairWithUs() {
  return (
    <section className="section-padding bg-[#111111] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-fixed bg-center opacity-[0.03]" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 reveal">
            <span className="section-eyebrow !text-[var(--color-primary)]">The Authorized Advantage</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 uppercase tracking-tight text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              WHY REPAIR WITH AN AUTHORIZED CENTER?
            </h2>
            <div className="w-20 h-1 bg-[var(--color-primary)] mb-8" />
            
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Don't risk your valuable equipment with unauthorized repair shops. We have direct access to manufacturer schematics, diagnostic software, and factory-certified training.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                'Maintains your existing manufacturer warranty',
                'Guarantees 100% genuine replacement parts',
                'Repairs performed exactly to OEM specifications',
                'Direct support from DeWalt, Stanley, and Black+Decker',
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] mr-4 flex-shrink-0" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
            
            <Button to="/contact-us" variant="primary">
              BOOK A REPAIR
            </Button>
          </div>
          
          <div className="w-full lg:w-1/2 relative reveal">
            <div className="relative z-10 p-2 bg-white/5 border border-white/10 rounded-sm backdrop-blur-sm">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop" 
                alt="Authorized Repair Technician" 
                className="w-full h-auto object-cover opacity-90 shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[var(--color-primary)] p-6 shadow-xl max-w-xs border border-white/20 hidden md:block animate-bounce-slow">
                <p className="text-white font-bold text-lg leading-tight uppercase tracking-wide">
                  Certified by Top Brands
                </p>
              </div>
            </div>
            
            {/* Orange glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-primary)] opacity-10 blur-[100px] -z-10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
