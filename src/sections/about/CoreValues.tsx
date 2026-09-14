import { Shield, Target, Users, Zap } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'PRECISION',
    description: 'We execute every repair with exacting standards, ensuring your equipment performs exactly as the manufacturer intended.',
  },
  {
    icon: Shield,
    title: 'INTEGRITY',
    description: 'Honest diagnostics, transparent pricing, and 100% genuine OEM parts—no shortcuts, ever.',
  },
  {
    icon: Zap,
    title: 'EFFICIENCY',
    description: 'We understand that downtime costs money. Our streamlined processes are designed for rapid, reliable turnaround.',
  },
  {
    icon: Users,
    title: 'CUSTOMER FIRST',
    description: 'Your satisfaction is our benchmark. We communicate clearly and stand firmly behind our warranty guarantees.',
  },
];

export function CoreValues() {
  return (
    <section className="section-padding bg-[var(--color-bg-light)] relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="section-eyebrow">What Drives Us</span>
          <h2 className="section-title">OUR CORE VALUES</h2>
          <div className="section-divider-center mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal-group">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 border border-gray-100 shadow-[var(--shadow-premium)] hover:shadow-[var(--shadow-premium-hover)] hover:-translate-y-2 transition-all duration-500 ease-out group text-center"
              >
                <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] group-hover:scale-110 transition-all duration-500">
                  <Icon className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h3 
                  className="text-lg font-bold text-[#111111] uppercase tracking-wide mb-4 group-hover:text-[var(--color-primary)] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {value.title}
                </h3>
                
                <p className="text-[#555555] text-sm leading-[1.85]">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
