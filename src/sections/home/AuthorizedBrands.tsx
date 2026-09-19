export function AuthorizedBrands() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-gray-100">
      <div className="container-custom">

        <div className="text-center mb-10 reveal">
          <span className="section-eyebrow">Trusted By Industry</span>
          <h2 className="text-xl md:text-2xl font-heading font-extrabold uppercase text-[#1A1A1A] tracking-tight mb-3">
            AUTHORIZED SERVICE CENTER &amp; SPARE PARTS PROVIDER OF
          </h2>
          <div className="section-divider-center" />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 reveal">
          {[
            { name: 'BLACK+DECKER', color: '#FF6A00' },
          ].map(({ name, color }) => (
            <div
              key={name}
              className="group relative cursor-default select-none"
              style={{ '--brand-color': color } as React.CSSProperties}
            >
              <span
                className="block text-2xl md:text-3xl font-black tracking-[-0.02em] text-gray-300 group-hover:text-[var(--brand-color)] transition-all duration-500 group-hover:drop-shadow-sm"
              >
                {name}
              </span>
              {/* Brand-color accent underline */}
              <span
                className="block h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out origin-left rounded-full mt-1"
                style={{ backgroundColor: color }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
