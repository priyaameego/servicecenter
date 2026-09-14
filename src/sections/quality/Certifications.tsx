import { Award } from 'lucide-react';

const certifications = [
  {
    name: 'ISO 9001:2015',
    title: 'Quality Management',
    description: 'Ensuring consistent, high-quality service and continuous improvement across all operations.'
  },
  {
    name: 'ISO 14001:2015',
    title: 'Environmental Management',
    description: 'Commitment to sustainable practices and minimizing our environmental footprint.'
  },
  {
    name: 'ISO 45001:2018',
    title: 'Occupational Health & Safety',
    description: 'Maintaining the highest safety standards for our employees and visiting customers.'
  }
];

export function Certifications() {
  return (
    <section className="section-padding bg-[#111111] relative overflow-hidden">
      {/* Dynamic Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="section-eyebrow !text-[var(--color-primary)]">Global Standards</span>
          <h2 className="section-title text-white">OUR CERTIFICATIONS</h2>
          <div className="section-divider-center mt-2 bg-gray-800 before:bg-[var(--color-primary)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-group">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="group bg-[#1A1A1A] border border-gray-800 p-8 rounded-sm hover:border-[var(--color-primary)]/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden text-center"
            >
              {/* Background glow on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[var(--color-primary)] opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-full pointer-events-none" />

              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-800 to-[#111] border border-gray-700 rounded-full flex items-center justify-center mb-6 shadow-xl relative group-hover:shadow-[0_0_20px_rgba(255,102,0,0.3)] transition-all duration-500">
                <Award className="w-10 h-10 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-500" />
                
                {/* Golden tick mark styling */}
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md border border-gray-200">
                  <div className="w-4 h-4 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">✓</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
                {cert.name}
              </h3>
              <div className="text-[var(--color-primary)] font-semibold text-xs uppercase tracking-widest mb-4">
                {cert.title}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
