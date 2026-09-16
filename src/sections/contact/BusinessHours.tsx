import { CalendarDays, AlertTriangle } from 'lucide-react';

export function BusinessHours() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="bg-[#111111] text-white rounded-sm shadow-2xl flex flex-col lg:flex-row overflow-hidden reveal">
          
          <div className="w-full lg:w-1/2 p-10 lg:p-16 relative">
            {/* Background design */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)] opacity-10 blur-3xl pointer-events-none rounded-full" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <CalendarDays className="w-8 h-8 text-[var(--color-primary)]" />
                <h2 className="text-2xl font-bold uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>
                  OPERATING HOURS
                </h2>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="font-semibold text-gray-300">Monday - Saturday</span>
                  <span className="font-bold text-white">09:00 AM - 07:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="font-semibold text-[var(--color-primary)]">Sunday</span>
                  <span className="font-bold text-gray-500">CLOSED</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-sm border border-white/10">
                <AlertTriangle className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400 leading-relaxed">
                  Public holidays may affect these hours. For urgent inquiries outside these times, please email us and we will respond on the next working day.
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative min-h-[300px]">
            <img 
              src="https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1000&auto=format&fit=crop" 
              alt="Workshop Exterior" 
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111111] to-transparent w-24 hidden lg:block" />
            
            <div className="absolute bottom-8 right-8 bg-[var(--color-primary)] text-white p-4 font-bold shadow-xl border border-white/20 transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300 hidden md:block">
              ALWAYS READY TO SERVE
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
