import { Wrench } from 'lucide-react';

const team = [
  {
    name: 'Ahmed Y.',
    role: 'Lead Diagnostics Engineer',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop', // Reusing an industrial image
    expertise: 'DeWalt Certified',
  },
  {
    name: 'Sarah K.',
    role: 'Quality Assurance Manager',
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800&auto=format&fit=crop',
    expertise: 'ISO Compliance',
  },
  {
    name: 'Omar T.',
    role: 'Senior Repair Technician',
    image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=800&auto=format&fit=crop',
    expertise: 'Stanley & Black+Decker',
  }
];

export function MeetTheTeam() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16 reveal">
          <span className="section-eyebrow">The Experts Behind The Bench</span>
          <h2 className="section-title">MEET OUR TECHNICIANS</h2>
          <div className="section-divider-center mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-group">
          {team.map((member, index) => (
            <div key={index} className="group relative overflow-hidden bg-white shadow-[var(--shadow-premium)] hover:shadow-[var(--shadow-premium-hover)] transition-shadow duration-500 rounded-sm">
              <div className="h-72 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#111] opacity-20 group-hover:opacity-0 transition-opacity duration-500 z-10" />
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                />
              </div>
              
              <div className="p-6 text-center relative bg-white z-20">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center border-4 border-white shadow-md transform group-hover:-translate-y-2 transition-transform duration-500">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-[#111111] mt-4 mb-1 uppercase tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
                  {member.name}
                </h3>
                <p className="text-[var(--color-primary)] text-sm font-semibold mb-3 tracking-widest uppercase">
                  {member.role}
                </p>
                <div className="inline-block bg-gray-100 text-gray-600 px-3 py-1 text-xs font-bold rounded-sm uppercase tracking-wider">
                  {member.expertise}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
