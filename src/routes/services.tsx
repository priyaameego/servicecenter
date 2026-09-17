import { useState, type FormEvent } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Home, CheckCircle2, AlertCircle } from 'lucide-react'
import { SEO } from '../components/SEO'

export const Route = createFileRoute('/services')({
  component: Services,
})

function GearsIcon({ className = "w-10 h-10 text-white" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
    </svg>
  );
}

function FactoryIcon({ className = "w-10 h-10 text-white" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20M3 20V9l5 4V9l5 4V4h4v16M19 14h-2M19 17h-2M15 17h-2M15 14h-2M7 17H5" />
    </svg>
  );
}

function CraneIcon({ className = "w-10 h-10 text-white" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 19h20M3 16h18M4 16v3M8 16v3M12 16v3M16 16v3M20 16v3M6 13h7l3-6h4M13 7l-5 6" />
      <rect x="4" y="10" width="6" height="3" rx="1" />
    </svg>
  );
}

function PumpIcon({ className = "w-10 h-10 text-white" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 21h14M8 21v-3h8v3M12 18V9M8 9h8M6 9l6-6 6 6" />
      <circle cx="12" cy="13" r="2" />
    </svg>
  );
}

function CompressorIcon({ className = "w-10 h-10 text-white" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1" />
      <path d="M3 17l1.5-6h15l1.5 6H3zM7 11V6h5v5M14 11V8h3v3" />
    </svg>
  );
}

function RigIcon({ className = "w-10 h-10 text-white" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 22h16M7 22l5-19 5 19M6.5 16h11M8 11h8M10 7h4" />
    </svg>
  );
}

const serviceItems = [
  {
    title: 'AC & DC MOTOR',
    description: 'Our skilled technicians specialize in the rewinding, repair, and maintenance of both AC and DC motors',
    link: '/services/ac-dc-motor',
    Icon: GearsIcon
  },
  {
    title: 'GENERATORS',
    description: 'Count on us for reliable generator services, encompassing thorough inspections, repairs, and maintenance.',
    link: '/services/generators',
    Icon: FactoryIcon
  },
  {
    title: 'ROTATING PARTS',
    description: 'Our services cover the inspection, repair, and maintenance of rotating parts of electrical machinery.',
    link: '/services/rotating-parts',
    Icon: CraneIcon
  },
  {
    title: 'WATER PUMPS',
    description: 'From routine maintenance to emergency repairs, we provide comprehensive solutions for efficient water circulation.',
    link: '/services/water-pumps',
    Icon: PumpIcon
  },
  {
    title: 'COMPRESSOR & STATOR',
    description: 'Our skilled technicians are equipped to handle the repair and maintenance of compressors and stators, etc',
    link: '/services/compressor-stator',
    Icon: CompressorIcon
  },
  {
    title: 'DYNAMIC BALANCING FOR ROTOR',
    description: 'Ensure optimal performance and prevent wear with our dynamic balancing services for rotors.',
    link: '/services/dynamic-balancing-for-rotor',
    Icon: RigIcon
  }
];

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message?: string;
}

function Services() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [validationError, setValidationError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setValidationError(null)
    setIsSuccess(false)

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim()) {
      setValidationError('Name, email, and subject are required fields.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setValidationError('Please enter a valid email address.')
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 800)
  }

  return (
    <div className="flex flex-col w-full bg-white">
      <SEO 
        title="Services" 
        description="Welcome to our comprehensive suite of electrical machinery services, where precision meets performance." 
        path="/services" 
      />

      {/* LHE Style Hero Banner */}
      <section className="relative h-[280px] md:h-[350px] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2000&auto=format&fit=crop" 
            alt="Services" 
            className="w-full h-full object-cover brightness-40"
          />
          <div className="absolute inset-0 bg-[#0c121e]/65" />
        </div>
        
        <div className="relative z-10 container-custom">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 uppercase tracking-wider drop-shadow-md font-sans">
            SERVICES
          </h1>
          <div className="flex items-center justify-center text-white/90 text-sm md:text-base font-semibold uppercase tracking-wider space-x-2">
            <Home className="w-4 h-4" />
            <span>&rarr;</span>
            <span>SERVICES</span>
          </div>
        </div>
      </section>

      {/* WHAT WE DO? & OUR SERVICES OVERVIEW */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-custom">
          
          {/* Section Header with slanted accent */}
          <div className="text-center mb-16">
            <div className="w-5 h-6 bg-[var(--color-primary)] -skew-x-12 mx-auto mb-3" />
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase block mb-2">
              WHAT WE DO?
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#111] uppercase mb-6 tracking-tight">
              OUR SERVICES <span className="text-[var(--color-primary)]">OVERVIEW</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-light">
              Welcome to our comprehensive suite of electrical machinery services, where precision meets performance.
            </p>
          </div>

          {/* 6 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10 max-w-6xl mx-auto">
            {serviceItems.map((service, index) => {
              const Icon = service.Icon;
              return (
                <Link 
                  key={index} 
                  to={service.link as any}
                  className="group flex flex-col items-center text-center p-4 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-[var(--color-primary)] flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-105">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#111] uppercase mb-4 tracking-tight group-hover:text-[var(--color-primary)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xs mx-auto font-light">
                    {service.description}
                  </p>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* NEED CONSULTATION? Section */}
      <section className="py-20 md:py-28 bg-[#ededed]">
        <div className="container-custom max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 shadow-2xl overflow-hidden bg-white">
            
            {/* Left Box (Primary Orange/Red) */}
            <div className="bg-[var(--color-primary)] p-10 md:p-14 text-white flex flex-col justify-center">
              <span className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-white/90 mb-5 block">
                GET FREE QUOTE
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase mb-6 leading-tight">
                NEED<br className="hidden md:inline" /> CONSULTATION?
              </h2>
              <p className="text-white/90 text-base md:text-lg font-light leading-relaxed">
                Feel free to contact us and ask your question, its absolutely free.
              </p>
            </div>

            {/* Right Box (Form) */}
            <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
              {isSuccess && (
                <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 flex items-start text-left">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-green-700 font-medium text-sm">Thank you! Your inquiry has been sent successfully.</p>
                </div>
              )}

              {validationError && (
                <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 flex items-start text-left">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-yellow-700 font-medium text-sm">{validationError}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1.5 font-normal">Your name</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      disabled={isSubmitting}
                      className="w-full px-3 py-2.5 bg-white border border-gray-200 focus:outline-none focus:border-[var(--color-primary)] text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1.5 font-normal">Your email</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      disabled={isSubmitting}
                      className="w-full px-3 py-2.5 bg-white border border-gray-200 focus:outline-none focus:border-[var(--color-primary)] text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1.5 font-normal">Subject</label>
                  <input 
                    type="text" 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    disabled={isSubmitting}
                    className="w-full px-3 py-2.5 bg-white border border-gray-200 focus:outline-none focus:border-[var(--color-primary)] text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1.5 font-normal">Your message (optional)</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    disabled={isSubmitting}
                    className="w-full px-3 py-2.5 bg-white border border-gray-200 focus:outline-none focus:border-[var(--color-primary)] text-sm transition-colors resize-y"
                  />
                </div>

                <div className="flex justify-end pt-3">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-[var(--color-primary)] hover:brightness-110 text-white font-medium px-8 py-2.5 text-sm uppercase tracking-wider transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? 'SUBMITTING...' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
