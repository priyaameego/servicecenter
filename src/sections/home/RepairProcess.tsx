import { MapPin, Search, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MapPin,
    title: 'Bring Your Appliance',
    description: 'Drop off your Black+Decker appliance at our dedicated service center.',
  },
  {
    icon: Search,
    title: 'Product Inspection & Diagnosis',
    description: 'We perform a thorough product inspection and diagnosis to identify the required repair.',
  },
  {
    icon: Wrench,
    title: 'Repair & Parts Replacement',
    description: 'Upon repair approval, we perform the repair and replace parts as needed.',
  },
  {
    icon: CheckCircle,
    title: 'Testing & Quality Check',
    description: 'Every serviced appliance undergoes functional testing before it is released to the customer and ready for collection.',
  },
];

export function RepairProcess() {
  return (
    <section className="section-padding bg-[#111111] relative overflow-hidden">
      {/* Background styling */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.05]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)] opacity-[0.1] blur-3xl rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="section-eyebrow !text-[var(--color-primary)]">How It Works</span>
          <h2 className="section-title text-white">OUR REPAIR PROCESS</h2>
          <div className="section-divider-center mt-2 bg-gray-800 before:bg-[var(--color-primary)]" />
        </div>

        <div className="relative">
          {/* Connecting Line (Hidden on Mobile) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-gray-800 -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 reveal-group">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center group">
                  {/* Step Number Badge */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-[#1A1A1A] border border-gray-800 rounded-full flex items-center justify-center group-hover:border-[var(--color-primary)] group-hover:shadow-[0_0_30px_rgba(255,102,0,0.2)] transition-all duration-500 relative z-10">
                      <Icon className="w-10 h-10 text-white group-hover:text-[var(--color-primary)] transition-colors duration-500" />
                    </div>
                    
                    {/* Floating number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-[var(--color-primary)] text-white font-bold rounded-full flex items-center justify-center text-sm shadow-lg border-2 border-[#111111]">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 
                    className="text-lg font-bold text-white uppercase tracking-wide mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-[1.85] max-w-xs">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
