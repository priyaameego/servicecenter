import { ShieldCheck } from 'lucide-react';

export function WarrantyGuarantee() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="bg-[#f8f9fa] border border-gray-200 p-8 md:p-12 shadow-[var(--shadow-premium)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-[var(--color-primary)]/30 transition-colors duration-500 reveal">
          
          {/* Subtle background icon */}
          <ShieldCheck className="absolute -right-10 -bottom-10 w-64 h-64 text-[var(--color-primary)] opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-700" />
          
          <div className="flex items-start md:items-center gap-6 relative z-10 w-full md:w-2/3">
            <div className="w-16 h-16 bg-white shadow-md rounded-full flex items-center justify-center flex-shrink-0 border border-gray-100 group-hover:bg-[var(--color-primary)] transition-colors duration-500">
              <ShieldCheck className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors duration-500" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-[#111111] mb-2 uppercase tracking-wide">
                100% Warranty Guarantee
              </h3>
              <p className="text-[#555555] leading-relaxed">
                We stand firmly behind our work. All out-of-warranty repairs performed by ServiceCenter.ae come with a standard service warranty, covering both our workmanship and the genuine parts installed.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-auto relative z-10 text-center md:text-right">
            <div className="inline-block border-2 border-[var(--color-primary)] text-[#111111] font-bold px-8 py-4 uppercase tracking-widest text-sm hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300">
              Read Warranty Terms
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
