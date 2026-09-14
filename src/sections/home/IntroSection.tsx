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
            <h2 className="section-title">WHAT WE DO?</h2>
            <div className="section-divider mb-7" />

            <p className="text-[#555555] mb-5 leading-[1.85]">
              Precision expertise in the rewinding, repair, maintenance, and dynamic balancing of AC &amp; DC motors, generators, rotating parts, water pumps, compressors, and stators for optimal operational performance.
            </p>
            <p className="text-[#555555] mb-8 leading-[1.85]">
              ServiceCenter.ae is a specialized industrial service center dedicated to keeping your critical electromechanical equipment running smoothly. We provide comprehensive inspection, repair, and preventive maintenance solutions tailored for heavy machinery and industrial applications.
            </p>

            <Button to="/about-us" variant="secondary">READ MORE ABOUT US</Button>
          </div>

        </div>
      </div>
    </section>
  );
}
