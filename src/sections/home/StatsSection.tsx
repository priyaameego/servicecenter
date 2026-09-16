export function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#f8f8f8]">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20 grayscale"
          style={{ backgroundImage: "url('/3.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container-custom relative z-10 max-w-6xl">
        <div className="bg-white flex flex-col md:flex-row shadow-2xl reveal">
          
          {/* Left Block (Orange/Primary) */}
          <div className="bg-[var(--color-primary)] text-white p-12 md:w-1/3 flex flex-col justify-center items-center text-center">
            <span className="uppercase tracking-widest text-sm mb-2 font-medium">Stats</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold uppercase leading-tight">
              What<br />We<br />Done?
            </h2>
          </div>

          {/* Right Block (Stats) */}
          <div className="p-12 md:w-2/3 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
              
              {/* Stat 1 */}
              <div className="flex flex-col items-center">
                <div className="text-6xl md:text-7xl font-light text-[#111111] leading-none mb-2">
                  1,500
                </div>
                <div className="text-4xl font-light text-[var(--color-primary)]">
                  +
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center">
                <div className="text-5xl md:text-6xl font-light text-[#111111] leading-none mb-3">
                  30<span className="text-4xl text-[#111111]">+</span>
                </div>
                <div className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                  Team
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center">
                <div className="text-5xl md:text-6xl font-light text-[#111111] leading-none mb-3">
                  10<span className="text-4xl text-[var(--color-primary)]">+</span>
                </div>
                <div className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                  Services
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
