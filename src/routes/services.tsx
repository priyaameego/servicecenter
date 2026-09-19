import { useState, type FormEvent } from 'react'
import { createFileRoute, Link, Outlet, useChildMatches } from '@tanstack/react-router'
import { Home, CheckCircle2, AlertCircle } from 'lucide-react'
import { SEO } from '../components/SEO'
import { Hammer, ChefHat, Utensils, Shirt, Wind, Zap } from 'lucide-react'
import { ProductsWeService } from '../sections/home/ProductsWeService'

export const Route = createFileRoute('/services')({
  component: Services,
})

const serviceItems = [
  {
    title: 'RICE COOKERS & STEAMERS',
    description: 'Specialized diagnostic, thermal fuse, heating plate and electronic board repair for rice cookers and food steamers.',
    link: '/services/rice-cooker',
    Icon: ChefHat
  },
  {
    title: 'BLENDERS & FOOD PROCESSORS',
    description: 'Precision blade alignment, motor coupling replacement, speed dial troubleshooting, and jar seal servicing.',
    link: '/services/blender-food-processor',
    Icon: Utensils
  },
  {
    title: 'GARMENT STEAMERS & IRONS',
    description: 'Boiler descaling, steam pump repair, soleplate maintenance, and thermal safety inspection for garment care units.',
    link: '/services/garment-steamer',
    Icon: Shirt
  },
  {
    title: 'VACUUM CLEANERS',
    description: 'Restoration of optimal suction, filter replacement, motor servicing, and battery diagnosis for cordless vacs.',
    link: '/services/vacuum-cleaner',
    Icon: Wind
  },
  {
    title: 'POWER TOOLS',
    description: 'Comprehensive diagnostic, battery diagnostics, brush replacements, and safety testing for cordless drills and drivers.',
    link: '/services/power-tools',
    Icon: Hammer
  },
  {
    title: 'ELECTRIC JIGSAWS & CUTTERS',
    description: 'Mechanical blade clamp inspection, gearbox lubrication, switch repair, and precision motor alignment.',
    link: '/services/electric-jigsaw',
    Icon: Zap
  }
];

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message?: string;
}

function Services() {
  const childMatches = useChildMatches()

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

  if (childMatches && childMatches.length > 0) {
    return <Outlet />
  }

  return (
    <div className="flex flex-col w-full bg-white">
      <SEO 
        title="Services" 
        description="Professional repair, maintenance, and after-sales support for Black+Decker home and kitchen appliances in Dubai, UAE." 
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
              We provide professional repair, maintenance, and after-sales support for a wide range of Black+Decker home and kitchen appliances.
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

      {/* PRODUCTS WE SERVICE (All 4 Categories Breakdown) */}
      <ProductsWeService />

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
