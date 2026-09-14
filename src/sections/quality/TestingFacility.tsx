import { Microscope, Activity, Gauge } from 'lucide-react';

export function TestingFacility() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative reveal">
            <div className="overflow-hidden shadow-[var(--shadow-premium)] relative">
              <img 
                src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1000&auto=format&fit=crop" 
                alt="Advanced Diagnostic Testing" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#111]/40 to-transparent pointer-events-none" />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 shadow-2xl border border-gray-100 hidden md:flex items-center gap-4 reveal">
              <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
                <Microscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#111111]">100%</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Pre-Delivery Tested</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 reveal" style={{ transitionDelay: '0.2s' }}>
            <span className="section-eyebrow">State-of-the-art Diagnostics</span>
            <h2 className="section-title">ADVANCED TESTING FACILITY</h2>
            <div className="section-divider-left mt-2 mb-6" />
            
            <p className="text-[#555555] mb-8 leading-relaxed">
              We don't just repair; we verify. Our Dubai workshop is equipped with the latest diagnostic software and load-testing equipment approved by top manufacturers. Every repaired tool undergoes rigorous testing before it leaves our facility.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:border-[var(--color-primary)] transition-colors duration-300">
                  <Activity className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#111111] uppercase tracking-wide mb-1">Electrical Safety Profiling</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Ensuring no short circuits, proper grounding, and battery health management.</p>
                </div>
              </div>
              
              <div className="flex gap-4 group">
                <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:border-[var(--color-primary)] transition-colors duration-300">
                  <Gauge className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#111111] uppercase tracking-wide mb-1">Load & RPM Verification</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Testing motors under actual working loads to guarantee OEM performance standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
