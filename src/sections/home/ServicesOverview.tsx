import { Link } from '@tanstack/react-router';
import { Hammer, ChefHat, Utensils, Shirt, Wind, Zap, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'POWER TOOLS',
    link: '/services/power-tools',
    image: '/1.jpeg',
    Icon: Hammer
  },
  {
    title: 'RICE COOKER',
    link: '/services/rice-cooker',
    image: '/7.jpeg',
    Icon: ChefHat
  },
  {
    title: 'BLENDER & PROCESSOR',
    link: '/services/blender-food-processor',
    image: '/2.jpeg',
    Icon: Utensils
  },
  {
    title: 'GARMENT STEAMER',
    link: '/services/garment-steamer',
    image: '/5.jpeg',
    Icon: Shirt
  },
  {
    title: 'VACUUM CLEANER',
    link: '/services/vacuum-cleaner',
    image: '/6.jpeg',
    Icon: Wind
  },
  {
    title: 'ELECTRIC JIGSAW',
    link: '/services/electric-jigsaw',
    image: '/4.jpeg',
    Icon: Zap
  }
];

function ServiceIcon({ index, className }: { index: number; className?: string }) {
  const IconComponent = services[index].Icon;
  return <IconComponent className={className} />;
}

export function ServicesOverview() {
  return (
    <section className="bg-white">
      {/* Top Banner exactly like LHE */}
      <div className="bg-[#f4f4f4] py-8 border-b border-gray-200">
        <div className="container-custom flex justify-center items-center">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-[var(--color-primary)] shrink-0" />
            <p className="text-lg md:text-xl font-light text-gray-700 tracking-wide text-center">
              Quality Only Happens When you Care Enough To Do Your Best.
            </p>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
          {/* Row 1, Col 1: Power Tools */}
          <Link
            to={services[0].link as any}
            className="group relative aspect-square overflow-hidden bg-white hover:bg-[#111111] flex flex-col justify-center items-center p-8 text-center border border-gray-100 transition-all duration-500 hover:shadow-2xl"
          >
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
              <img
                src={services[0].image}
                alt={services[0].title}
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/85 to-black/70 transition-colors duration-300" />
            </div>
            <div className="relative z-10 flex flex-col items-center transform transition-transform duration-500 group-hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#e30613] flex items-center justify-center mb-6 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_8px_25px_rgba(227,6,19,0.4)]">
                <ServiceIcon index={0} className="w-8 h-8 text-white" />
              </div>
              <h3 className="service-card-title text-2xl font-bold font-heading uppercase tracking-wide">
                {services[0].title}
              </h3>
            </div>
          </Link>

          {/* Row 1, Col 2: Rice Cooker */}
          <Link
            to={services[1].link as any}
            className="group relative aspect-square overflow-hidden bg-white hover:bg-[#111111] flex flex-col justify-center items-center p-8 text-center border border-gray-100 transition-all duration-500 hover:shadow-2xl"
          >
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
              <img
                src={services[1].image}
                alt={services[1].title}
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/85 to-black/70 transition-colors duration-300" />
            </div>
            <div className="relative z-10 flex flex-col items-center transform transition-transform duration-500 group-hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#e30613] flex items-center justify-center mb-6 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_8px_25px_rgba(227,6,19,0.4)]">
                <ServiceIcon index={1} className="w-8 h-8 text-white" />
              </div>
              <h3 className="service-card-title text-2xl font-bold font-heading uppercase tracking-wide">
                {services[1].title}
              </h3>
            </div>
          </Link>

          {/* Row 1, Col 3: Blender */}
          <Link
            to={services[2].link as any}
            className="group relative aspect-square overflow-hidden bg-white hover:bg-[#111111] flex flex-col justify-center items-center p-8 text-center border border-gray-100 transition-all duration-500 hover:shadow-2xl"
          >
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
              <img
                src={services[2].image}
                alt={services[2].title}
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/85 to-black/70 transition-colors duration-300" />
            </div>
            <div className="relative z-10 flex flex-col items-center transform transition-transform duration-500 group-hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#e30613] flex items-center justify-center mb-6 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_8px_25px_rgba(227,6,19,0.4)]">
                <ServiceIcon index={2} className="w-8 h-8 text-white" />
              </div>
              <h3 className="service-card-title text-2xl font-bold font-heading uppercase tracking-wide">
                {services[2].title}
              </h3>
            </div>
          </Link>

          {/* Row 1 & 2, Col 4: Span 2 */}
          <div className="lg:row-span-2 relative bg-black flex flex-col justify-center items-center p-12 text-center overflow-hidden aspect-square lg:aspect-auto border border-gray-900/40 group">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="/c3.jpeg"
                alt="Black+Decker Home Appliances Repair & Maintenance"
                className="w-full h-full object-cover object-center scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/35 group-hover:bg-black/50 transition-colors duration-500" />
            </div>
            <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
              <h2 className="text-4xl lg:text-5xl font-bold text-white font-heading leading-tight drop-shadow-xl">
                Reliable Swift<br />and<br />Dependable<br />Professional<br />Services
              </h2>
            </div>
          </div>

          {/* Row 2, Col 1: Garment Steamer */}
          <Link
            to={services[3].link as any}
            className="group relative aspect-square overflow-hidden bg-white hover:bg-[#111111] flex flex-col justify-center items-center p-8 text-center border border-gray-100 transition-all duration-500 hover:shadow-2xl"
          >
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
              <img
                src={services[3].image}
                alt={services[3].title}
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/85 to-black/70 transition-colors duration-300" />
            </div>
            <div className="relative z-10 flex flex-col items-center transform transition-transform duration-500 group-hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#e30613] flex items-center justify-center mb-6 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_8px_25px_rgba(227,6,19,0.4)]">
                <ServiceIcon index={3} className="w-8 h-8 text-white" />
              </div>
              <h3 className="service-card-title text-2xl font-bold font-heading uppercase tracking-wide">
                {services[3].title}
              </h3>
            </div>
          </Link>

          {/* Row 2, Col 2: Vacuum Cleaner */}
          <Link
            to={services[4].link as any}
            className="group relative aspect-square overflow-hidden bg-white hover:bg-[#111111] flex flex-col justify-center items-center p-8 text-center border border-gray-100 transition-all duration-500 hover:shadow-2xl"
          >
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
              <img
                src={services[4].image}
                alt={services[4].title}
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/85 to-black/70 transition-colors duration-300" />
            </div>
            <div className="relative z-10 flex flex-col items-center transform transition-transform duration-500 group-hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#e30613] flex items-center justify-center mb-6 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_8px_25px_rgba(227,6,19,0.4)]">
                <ServiceIcon index={4} className="w-8 h-8 text-white" />
              </div>
              <h3 className="service-card-title text-2xl font-bold font-heading uppercase tracking-wide">
                {services[4].title}
              </h3>
            </div>
          </Link>

          {/* Row 2, Col 3: Electric Jigsaw */}
          <Link
            to={services[5].link as any}
            className="group relative aspect-square overflow-hidden bg-white hover:bg-[#111111] flex flex-col justify-center items-center p-8 text-center border border-gray-100 transition-all duration-500 hover:shadow-2xl"
          >
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
              <img
                src={services[5].image}
                alt={services[5].title}
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/85 to-black/70 transition-colors duration-300" />
            </div>
            <div className="relative z-10 flex flex-col items-center transform transition-transform duration-500 group-hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#e30613] flex items-center justify-center mb-6 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_8px_25px_rgba(227,6,19,0.4)]">
                <ServiceIcon index={5} className="w-8 h-8 text-white" />
              </div>
              <h3 className="service-card-title text-2xl font-bold font-heading uppercase tracking-wide">
                {services[5].title}
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
