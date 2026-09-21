import { useState } from 'react';
import { Wrench, CheckCircle2, Eye, X } from 'lucide-react';

interface WorkshopItem {
  id: string;
  appliance: string;
  title: string;
  description: string;
  bwImage: string;
  colorImage: string;
  tag: string;
}

const workshopItems: WorkshopItem[] = [
  {
    id: 'microwave',
    appliance: 'Microwave Oven',
    title: 'Microwave Oven Diagnostics',
    description: 'Internal circuit testing, magnetron replacement & safety interlock inspection.',
    bwImage: '/c6.jpeg',
    colorImage: '/c10.jpeg',
    tag: 'Kitchen Care',
  },
  {
    id: 'vacuum',
    appliance: 'Vacuum Cleaner',
    title: 'Vacuum Cleaner Motor Service',
    description: 'HEPA filtration renewal, motor armature overhaul & suction optimization.',
    bwImage: '/c8.jpeg',
    colorImage: '/c11.jpeg',
    tag: 'Floor Care',
  },
  {
    id: 'toaster',
    appliance: 'Toaster',
    title: 'Toaster Element Calibration',
    description: 'Heating coil maintenance, carriage latch servicing & thermal regulation.',
    bwImage: '/c4.jpeg',
    colorImage: '/c12.jpeg',
    tag: 'Breakfast Appliances',
  },
  {
    id: 'airfryer',
    appliance: 'Air Fryer',
    title: 'Air Fryer Heating & Fan Overhaul',
    description: 'Heating element service, thermal sensor calibration & fan motor repair.',
    bwImage: '/c7.jpeg',
    colorImage: '/c13.jpeg',
    tag: 'Healthy Cooking',
  },
  {
    id: 'iron',
    appliance: 'Steam Iron',
    title: 'Steam Iron & Chamber Descaling',
    description: 'Thermostat re-alignment, steam chamber decalcification & soleplate repair.',
    bwImage: '/c9.jpeg',
    colorImage: '/c14.jpeg',
    tag: 'Garment Care',
  },
  {
    id: 'blender',
    appliance: 'Blender & Food Processor',
    title: 'Blender Drive & Motor Overhaul',
    description: 'Drive coupler replacement, blade shaft bearing repair & multi-speed testing.',
    bwImage: '/c5.jpeg',
    colorImage: '/c15.jpeg',
    tag: 'Food Preparation',
  },
];

export function WorkshopGallery() {
  const [activeModalItem, setActiveModalItem] = useState<WorkshopItem | null>(null);

  return (
    <section className="section-padding bg-[#f8f9fa] relative overflow-hidden border-t border-b border-gray-200">
      {/* Background Subtle Accents */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#FF6A00]/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 reveal">
          <span className="section-eyebrow !text-[#FF6A00] tracking-[0.2em] uppercase font-bold text-sm sm:text-base">
            INSIDE OUR DUBAI WORKSHOP
          </span>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-[#1A1A1A] mt-1 mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            CERTIFIED BLACK+DECKER TECHNICIANS
          </h2>
          <div className="section-divider-center mt-2 mb-6" />
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Experienced technicians, dedicated testing benches, and genuine factory parts ensuring every Black+Decker home appliance is diagnosed with precision and repaired to original manufacturer standards.
          </p>
        </div>



        {/* 6 Appliance Repair Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {workshopItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative bg-[#1A1A1A] overflow-hidden border border-gray-200 shadow-[0_6px_25px_rgba(0,0,0,0.07)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1.5 transition-all duration-500 cursor-pointer flex flex-col"
            >
              {/* Image Container with Dual Layer Crossfade */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                {/* Layer 1: Monochrome Image */}
                <img
                  src={item.bwImage}
                  alt={`${item.title} - Monochrome Inspection`}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.04] opacity-100"
                />

                {/* Layer 2: Full Color Image */}
                <img
                  src={item.colorImage}
                  alt={`${item.title} - Certified Black+Decker Service Team`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center transform transition-all duration-700 ease-out group-hover:scale-[1.04] opacity-0 group-hover:opacity-100"
                />

                {/* Top Badge: Appliance Tag */}
                <div className="absolute top-3 left-3 z-20">
                  <span className="inline-flex items-center gap-1.5 bg-[#FF6A00] text-white text-[11px] font-extrabold uppercase px-2.5 py-1 tracking-wider shadow-md">
                    <Wrench className="w-3 h-3" />
                    {item.appliance}
                  </span>
                </div>

                {/* Top Right: Expand / View Icon */}
                <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-sm text-white flex items-center justify-center shadow-lg hover:bg-[#FF6A00] transition-colors">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>

                {/* Subtle vignette gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-20 pointer-events-none">
                  <h3
                    className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide leading-snug drop-shadow-md"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Bottom Card Content Info Box */}
              <div className="p-5 bg-white border-t border-gray-100 flex-1 flex flex-col justify-between">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-gray-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00]" />
                    <span>Genuine Spare Parts</span>
                  </div>
                  <span className="text-[#FF6A00] font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    View Details &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 mb-16 md:mb-24 max-w-4xl mx-auto bg-white border border-gray-200 p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#FF6A00]/10 text-[#FF6A00] flex items-center justify-center shrink-0">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-gray-900 uppercase">
                Need Your Black+Decker Appliance Serviced?
              </h4>
              <p className="text-sm text-gray-600">
                Drop off at our International City service center or speak directly with our certified technical team.
              </p>
            </div>
          </div>
          <a
            href="tel:+971800347"
            className="shrink-0 bg-[#FF6A00] hover:bg-black text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 transition-colors duration-300 shadow-md"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            CONTACT TECHNICIAN
          </a>
        </div>
      </div>

      {/* Lightbox / Modal for High-Res Inspection */}
      {activeModalItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalItem(null)}
        >
          <div 
            className="bg-[#181818] border border-gray-800 max-w-4xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-gray-800 flex items-center justify-between">
              <div>
                <span className="text-[#FF6A00] text-xs font-bold uppercase tracking-widest">
                  {activeModalItem.appliance} Service
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white uppercase mt-0.5">
                  {activeModalItem.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#FF6A00] text-white flex items-center justify-center transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content: High-Res Side-by-Side Comparison */}
            <div className="p-4 sm:p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* B&W Version */}
                <div className="space-y-2">
                  <div className="relative aspect-[4/3] bg-black overflow-hidden border border-gray-800">
                    <img 
                      src={activeModalItem.bwImage} 
                      alt={`${activeModalItem.title} - B&W`} 
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-black/80 text-gray-300 text-[10px] font-bold uppercase px-2 py-0.5">
                      Monochrome Archive
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 text-center">Diagnostic Bench Inspection</p>
                </div>

                {/* Color Version */}
                <div className="space-y-2">
                  <div className="relative aspect-[4/3] bg-black overflow-hidden border border-[#FF6A00]/50">
                    <img 
                      src={activeModalItem.colorImage} 
                      alt={`${activeModalItem.title} - Full Color`} 
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-[#FF6A00] text-white text-[10px] font-bold uppercase px-2 py-0.5">
                      Full Color Black+Decker Service Team
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 text-center">Certified Technician &amp; Genuine Parts</p>
                </div>
              </div>

              <div className="bg-[#222222] p-4 border border-gray-800 mt-4 text-sm text-gray-300 leading-relaxed">
                {activeModalItem.description}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
