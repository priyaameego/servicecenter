import { useState, type FormEvent } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Button } from '../components/ui/Button'
import { ServiceCard } from '../components/ui/ServiceCard'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'
import { WhyRepairWithUs } from '../sections/services/WhyRepairWithUs'
import { WarrantyGuarantee } from '../sections/services/WarrantyGuarantee'

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message?: string;
}

export const Route = createFileRoute('/services')({
  component: Services,
})

const services = [
  {
    title: 'POWER TOOLS',
    image: '/1.jpeg',
    imageAlt: 'Professional cordless power drill',
    link: '/services/power-tools'
  },
  {
    title: 'RICE COOKER',
    image: '/7.jpeg',
    imageAlt: 'Electric rice cooker',
    link: '/services/rice-cooker'
  },
  {
    title: 'BLENDER & FOOD PROCESSOR',
    image: '/2.jpeg',
    imageAlt: 'Food processor and blender',
    link: '/services/blender-food-processor'
  },
  {
    title: 'GARMENT STEAMER',
    image: '/5.jpeg',
    imageAlt: 'Handheld garment steamer',
    link: '/services/garment-steamer'
  },
  {
    title: 'VACUUM CLEANER',
    image: '/6.jpeg',
    imageAlt: 'Handheld cordless vacuum cleaner',
    link: '/services/vacuum-cleaner'
  },
  {
    title: 'ELECTRIC JIGSAW',
    image: '/4.jpeg',
    imageAlt: 'Electric jigsaw tool',
    link: '/services/electric-jigsaw'
  }
];

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
    
    // Simulate network request for frontend-only submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 800)
  }

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <SEO 
        title="Our Services" 
        description="Explore our comprehensive range of services including power tool repair, appliance maintenance, and diagnostic testing for top brands." 
        path="/services" 
      />
      <PageHero
        title="Our Services"
        image="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2000&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services' },
        ]}
      />

      {/* Services Grid */}
      <section className="section-padding bg-[var(--color-bg-light)]">
        <div className="container-custom">
          <div className="text-center mb-12 reveal">
            <span className="text-[var(--color-primary)] font-bold uppercase tracking-wider text-sm mb-2 block">What We Do?</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">OUR SERVICES OVERVIEW</h2>
            <div className="w-20 h-1 bg-[var(--color-primary)] mx-auto mb-6"></div>
            <p className="text-[#555555] max-w-2xl mx-auto leading-relaxed">
              Welcome to our comprehensive suite of repair services, where precision meets performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-group">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                image={service.image}
                imageAlt={service.imageAlt}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products We Service */}
      <section className="section-padding bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12 reveal">
            <span className="text-[var(--color-primary)] font-bold uppercase tracking-wider text-sm mb-2 block">Our Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 uppercase">PRODUCTS WE SERVICE</h2>
            <div className="w-20 h-1 bg-[var(--color-primary)] mx-auto mb-6"></div>
            <p className="text-[#555555] max-w-2xl mx-auto leading-relaxed">
              Our service capabilities cover a broad range of Black+Decker appliances, including:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal-group">
            <div className="bg-[var(--color-bg-light)] p-8 border-t-4 border-[var(--color-primary)] premium-card">
              <h3 className="text-xl font-bold mb-4 uppercase" style={{ fontFamily: 'var(--font-heading)' }}>Kitchen Appliances</h3>
              <p className="text-sm text-[#555555] leading-relaxed">Air Fryers • Blenders • Mixers • Grinders • Choppers • Juicers • Food Processors • Toasters • Kettles • Coffee Makers • Rice Cookers • Microwave Ovens</p>
            </div>
            <div className="bg-[var(--color-bg-light)] p-8 border-t-4 border-[#1A1A1A] premium-card">
              <h3 className="text-xl font-bold mb-4 uppercase" style={{ fontFamily: 'var(--font-heading)' }}>Garment Care</h3>
              <p className="text-sm text-[#555555] leading-relaxed">Steam Irons • Garment Steamers</p>
            </div>
            <div className="bg-[var(--color-bg-light)] p-8 border-t-4 border-[var(--color-primary)] premium-card">
              <h3 className="text-xl font-bold mb-4 uppercase" style={{ fontFamily: 'var(--font-heading)' }}>Home & Floor Care</h3>
              <p className="text-sm text-[#555555] leading-relaxed">Vacuum Cleaners • Handheld Vacuums • Cleaning Appliances</p>
            </div>
            <div className="bg-[var(--color-bg-light)] p-8 border-t-4 border-[#1A1A1A] premium-card">
              <h3 className="text-xl font-bold mb-4 uppercase" style={{ fontFamily: 'var(--font-heading)' }}>Home Comfort</h3>
              <p className="text-sm text-[#555555] leading-relaxed">Fans • Air Coolers • Heaters • Humidifiers and selected home-comfort appliances</p>
            </div>
          </div>
          
          <div className="text-center mt-10 reveal">
            <p className="text-xs text-gray-500 italic bg-gray-50 p-4 rounded-sm inline-block border border-gray-100">
              *Product serviceability may vary depending on model, spare-parts availability, warranty status, and product condition.
            </p>
          </div>
        </div>
      </section>

      {/* NEW: Why Repair With Us */}
      <WhyRepairWithUs />

      {/* NEW: Warranty Guarantee */}
      <WarrantyGuarantee />

      {/* Consultation Section */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-white shadow-[var(--shadow-premium-hover)] p-8 md:p-12 relative z-20 border-t-4 border-[var(--color-primary)] rounded-sm reveal">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4">NEED CONSULTATION?</h2>
              <p className="text-[#555555]">
                Feel free to contact us and ask your question, its absolutely free.
              </p>
            </div>
            
            {isSuccess && (
              <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 flex items-start text-left">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-green-700 font-medium">Thank you! Your message has been submitted successfully.</p>
              </div>
            )}

            {validationError && (
              <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 flex items-start text-left">
                <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-yellow-700 font-medium">{validationError}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name *" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[var(--color-primary)] focus:outline-none transition-colors disabled:opacity-50 disabled:bg-gray-50"
                />
                <input 
                  type="email" 
                  placeholder="Your Email *" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[var(--color-primary)] focus:outline-none transition-colors disabled:opacity-50 disabled:bg-gray-50"
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject *" 
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 focus:border-[var(--color-primary)] focus:outline-none transition-colors disabled:opacity-50 disabled:bg-gray-50"
              />
              <textarea 
                placeholder="Your Message (optional)" 
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 focus:border-[var(--color-primary)] focus:outline-none transition-colors resize-none disabled:opacity-50 disabled:bg-gray-50"
              ></textarea>
              <div className="text-center pt-4">
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full md:w-auto px-12"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
