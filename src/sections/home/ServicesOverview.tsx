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

function ServiceCardItem({
  service,
}: {
  service: (typeof services)[number];
}) {
  const IconComponent = service.Icon;
  return (
    <Link
      to={service.link as any}
      className="group relative aspect-square overflow-hidden bg-white flex flex-col justify-center items-center p-8 text-center border border-gray-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.14)] z-10 hover:z-20"
    >
      {/* Background Image & Balanced Dual Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover scale-100 group-hover:scale-[1.04] transition-transform duration-500 ease-out"
        />
        {/* Clean neutral overlay: preserves appliance visibility with calm backdrop */}
        <div className="absolute inset-0 bg-white/80 group-hover:opacity-0 transition-opacity duration-300" />
        {/* Refined dark overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content: Clean visual hierarchy */}
      <div className="relative z-10 flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-1">
        {/* Red Icon Badge */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#e30613] flex items-center justify-center mb-5 text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
          <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        </div>
        {/* Service Title */}
        <h3 className="service-card-title text-xl sm:text-2xl font-bold font-heading uppercase tracking-wide text-gray-900 group-hover:text-white transition-colors duration-300 drop-shadow-sm">
          {service.title}
        </h3>
      </div>
    </Link>
  );
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
          {/* Row 1: Cards 0, 1, 2 */}
          <ServiceCardItem service={services[0]} />
          <ServiceCardItem service={services[1]} />
          <ServiceCardItem service={services[2]} />

          {/* Row 1 & 2, Col 4: Featured Technician Showcase Card */}
          <div className="lg:row-span-2 relative bg-black flex flex-col justify-center items-center p-8 lg:p-12 text-center overflow-hidden aspect-square lg:aspect-auto border border-gray-900/40 group">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="/c3.jpeg"
                alt="Black+Decker Home Appliances Repair & Maintenance"
                className="w-full h-full object-cover object-center scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/35 group-hover:from-black/75 group-hover:via-black/40 group-hover:to-black/25 transition-colors duration-300" />
            </div>
            <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
              <h2 className="text-3xl lg:text-4xl xl:text-[44px] font-bold text-white font-heading leading-tight drop-shadow-xl">
                Reliable Swift<br />and<br />Dependable<br />Professional<br />Services
              </h2>
            </div>
          </div>

          {/* Row 2: Cards 3, 4, 5 */}
          <ServiceCardItem service={services[3]} />
          <ServiceCardItem service={services[4]} />
          <ServiceCardItem service={services[5]} />
        </div>
      </div>
    </section>
  );
}
