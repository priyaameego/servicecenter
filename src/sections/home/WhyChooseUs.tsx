import { Settings, ShieldCheck, Clock, Award } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: 'GENUINE PARTS',
      description: 'We exclusively use 100% authentic OEM spare parts to ensure the safety, performance, and longevity of your equipment.',
    },
    {
      icon: Award,
      title: 'CERTIFIED EXPERTS',
      description: 'Our technicians are factory-trained and certified by leading brands like DeWalt and Stanley for precision repairs.',
    },
    {
      icon: Clock,
      title: 'FAST TURNAROUND',
      description: 'Minimize downtime with our efficient diagnostic processes and fully-stocked inventory of critical replacement parts.',
    },
    {
      icon: Settings,
      title: 'WARRANTY SECURE',
      description: 'As an authorized center, our repairs maintain your manufacturer warranty, providing complete peace of mind.',
    },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-bg-light)] rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-primary)] opacity-[0.03] rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="section-eyebrow">The ServiceCenter Advantage</span>
          <h2 className="section-title">WHY CHOOSE US</h2>
          <div className="section-divider-center mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal-group">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 border border-gray-100 shadow-[var(--shadow-premium)] hover:shadow-[var(--shadow-premium-hover)] hover:-translate-y-2 transition-all duration-500 ease-out group flex flex-col items-center text-center relative overflow-hidden"
              >
                {/* Top border hover effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <div className="w-16 h-16 bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10 flex items-center justify-center rounded-full mb-6 group-hover:bg-[var(--color-primary)] transition-colors duration-500">
                  <Icon className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h3 
                  className="text-lg font-bold text-[#111111] uppercase tracking-wide mb-4 group-hover:text-[var(--color-primary)] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {feature.title}
                </h3>
                
                <p className="text-[#555555] text-sm leading-[1.85]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
