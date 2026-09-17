import { Button } from '../../components/ui/Button';

export function IntroSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group reveal-left">
            <div className="overflow-hidden bg-white p-6 border border-gray-100 shadow-[var(--shadow-premium)] hover:shadow-[var(--shadow-premium-hover)] transition-all duration-500">
              <img
                src="/3.jpeg"
                alt="Professional Appliance Repair"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain bg-white transform transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
            {/* Accent badge */}
            <div className="absolute -bottom-5 -right-5 md:-bottom-6 md:-right-6 bg-[var(--color-primary)] text-white p-6 md:p-8 hidden md:block shadow-[var(--shadow-orange-glow)] z-10">
              <div className="font-heading text-3xl md:text-4xl font-extrabold mb-0.5 leading-none">20+</div>
              <div className="font-bold uppercase text-xs tracking-[0.15em] mt-1 text-white/80">Years Experience</div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 reveal">
            <span className="section-eyebrow">Our Expertise</span>
            <h2 className="section-title">WHAT WE DO</h2>
            <div className="section-divider mb-7" />
            <p className="text-[#555555] mb-6 leading-[1.85]">
              At our <strong className="text-gray-900 font-semibold">Black+Decker Service Center</strong>, we provide professional repair, maintenance, and after-sales support for a wide range of Black+Decker home and kitchen appliances. Our service center is equipped with dedicated repair facilities, diagnostic tools, and experienced technicians to ensure every appliance is inspected carefully and serviced to the required standards.
            </p>

            <div className="mb-8 border-l-4 border-[var(--color-primary)] pl-5 py-1 bg-gray-50/60 rounded-r-md">
              <h3 className="text-lg font-bold text-[#111111] uppercase tracking-wide mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Appliance Repair &amp; Maintenance
              </h3>
              <p className="text-[#555555] text-sm md:text-base leading-[1.8]">
                We diagnose and repair a wide range of <strong className="text-gray-900 font-semibold">Black+Decker home and kitchen appliances</strong>, from everyday kitchen essentials to cleaning and home-comfort products. Our services include troubleshooting, component replacement, electrical repairs, preventive maintenance, performance testing, and general servicing.
              </p>
            </div>

            <Button to="/about-us" variant="secondary">READ MORE ABOUT US</Button>
          </div>

        </div>
      </div>
    </section>
  );
}
