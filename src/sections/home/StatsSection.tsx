import { Wrench, CheckCircle, Clock } from 'lucide-react';

const stats = [
  { icon: Wrench,       number: '1250+', label: 'Projects Completed' },
  { icon: CheckCircle,  number: '100%',  label: 'Quality Guaranteed'  },
  { icon: Clock,        number: '24/7',  label: 'Support Available'   },
];

export function StatsSection() {
  return (
    <section className="section-padding bg-[#111111] text-white relative overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop')" }}
        />
      </div>
      {/* Orange glow blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--color-primary)] opacity-[0.04] blur-3xl rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-eyebrow">Our Achievements</span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white uppercase tracking-tight mb-3">
            WHAT WE'VE DONE?
          </h2>
          <div className="section-divider-center" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 reveal-group">
          {stats.map(({ icon: Icon, number, label }, i) => (
            <div
              key={i}
              className={`reveal flex flex-col items-center text-center px-8 py-10 group
                hover:-translate-y-1 transition-transform duration-300
                ${i < stats.length - 1 ? 'md:border-r md:border-white/10 border-b md:border-b-0 border-white/10' : ''}
              `}
            >
              <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)]/10 group-hover:border-[var(--color-primary)]/30 transition-all duration-500">
                <Icon className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <div className="text-5xl md:text-6xl font-heading font-extrabold text-white mb-2 leading-none tracking-tight">
                {number}
              </div>
              {/* Animated underline */}
              <div className="w-8 h-[2px] bg-[var(--color-primary)] mx-auto mb-3 origin-left" />
              <div className="text-gray-400 font-bold uppercase tracking-[0.18em] text-xs">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
