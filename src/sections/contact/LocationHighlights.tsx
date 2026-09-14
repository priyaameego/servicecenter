import { Map, Car, Clock3 } from 'lucide-react';

export function LocationHighlights() {
  return (
    <section className="section-padding bg-[var(--color-bg-light)]">
      <div className="container-custom">
        <div className="text-center mb-12 reveal">
          <span className="section-eyebrow">Visit Our Service Center</span>
          <h2 className="section-title">WHY BRING YOUR TOOLS TO US?</h2>
          <div className="section-divider-center mt-2 mb-6" />
          <p className="text-[#555555] max-w-2xl mx-auto leading-relaxed">
            Our Dubai International City facility is designed for quick drop-offs, comprehensive testing, and rapid dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-group">
          <div className="bg-white p-8 shadow-[var(--shadow-premium)] hover:shadow-[var(--shadow-premium-hover)] transition-shadow duration-300 rounded-sm group text-center">
            <div className="w-16 h-16 mx-auto bg-gray-50 flex items-center justify-center rounded-full mb-6 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
              <Map className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-bold text-lg mb-3 uppercase tracking-wide">Central Location</h3>
            <p className="text-[#555555] text-sm leading-relaxed">
              Easily accessible from major highways in Dubai. Located in the heart of International City's commercial district.
            </p>
          </div>
          
          <div className="bg-white p-8 shadow-[var(--shadow-premium)] hover:shadow-[var(--shadow-premium-hover)] transition-shadow duration-300 rounded-sm group text-center">
            <div className="w-16 h-16 mx-auto bg-gray-50 flex items-center justify-center rounded-full mb-6 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
              <Car className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-bold text-lg mb-3 uppercase tracking-wide">Dedicated Parking</h3>
            <p className="text-[#555555] text-sm leading-relaxed">
              Ample parking space available right in front of the workshop for easy loading and unloading of heavy equipment.
            </p>
          </div>
          
          <div className="bg-white p-8 shadow-[var(--shadow-premium)] hover:shadow-[var(--shadow-premium-hover)] transition-shadow duration-300 rounded-sm group text-center">
            <div className="w-16 h-16 mx-auto bg-gray-50 flex items-center justify-center rounded-full mb-6 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
              <Clock3 className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-bold text-lg mb-3 uppercase tracking-wide">Fast-Track Drop-off</h3>
            <p className="text-[#555555] text-sm leading-relaxed">
              Streamlined reception process. Drop your tool, get a receipt, and you're back on the road in minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
