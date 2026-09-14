import { useState, useEffect, type FormEvent } from 'react'
import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { CheckCircle2, PhoneCall, ChevronRight, AlertCircle } from 'lucide-react'
import { servicesData } from '../../data/servicesData'
import { Button } from '../../components/ui/Button'
import { dubaiBranch } from '../../data/business'
import { SEO } from '../../components/SEO'
import { PageHero } from '../../components/PageHero'

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message?: string;
}

export const Route = createFileRoute('/services/$serviceId')({
  component: ServiceDetailPage,
  loader: ({ params }) => {
    const service = servicesData[params.serviceId]
    if (!service) {
      throw notFound()
    }
    return { service }
  },
})

function ServiceDetailPage() {
  const { service } = Route.useLoaderData()
  const otherServices = Object.values(servicesData).filter(s => s.id !== service.id).slice(0, 4)

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: service.title,
    message: ''
  })
  const [validationError, setValidationError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Reset subject if service changes
  useEffect(() => {
    setFormData(prev => ({ ...prev, subject: service.title }))
    setValidationError(null)
    setIsSuccess(false)
  }, [service.title])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setValidationError(null)
    setIsSuccess(false)

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone?.trim() || !formData.message?.trim()) {
      setValidationError('Please fill out all required fields (Name, Email, Phone, Message).')
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
      setFormData({ name: '', email: '', phone: '', subject: service.title, message: '' })
    }, 800)
  }

  return (
    <div className="bg-white">
      <SEO 
        title={service.title} 
        description={service.shortDescription} 
        path={`/services/${service.id}`} 
      />
      <PageHero
        title={service.h1}
        image={service.image}
        height="lg"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.title },
        ]}
      />

      {/* Main Content Area */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Content */}
            <div className="w-full lg:w-2/3 animate-fade-in-up">
              <div className="overflow-hidden shadow-[var(--shadow-premium)] premium-3d-image mb-8 bg-white border border-gray-100 p-6 md:p-12 rounded-sm">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-auto max-h-[500px] object-contain transform transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              <h2 className="text-3xl font-extrabold mb-4 text-[#1A1A1A] uppercase">{service.title} Overview</h2>
              <div className="w-16 h-1 bg-[var(--color-primary)] mb-6"></div>
              
              <p className="text-lg font-semibold text-[#1A1A1A] mb-6 leading-relaxed border-l-4 border-[var(--color-primary)] pl-4">
                {service.shortDescription}
              </p>
              
              <p className="text-[#555555] mb-8 leading-relaxed">
                {service.fullDescription}
              </p>
              
              <h3 className="text-2xl font-extrabold mb-6 uppercase">Key Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {service.benefits.map((benefit: any, idx: number) => (
                  <div key={idx} className="bg-[var(--color-bg-light)] p-6 border-t-2 border-transparent hover:border-[var(--color-primary)] transition-all duration-300 group">
                    <div className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-[#1A1A1A] mb-2 group-hover:text-[var(--color-primary)] transition-colors">{benefit.title}</h4>
                        <p className="text-sm text-[#555555]">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-full lg:w-1/3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {/* Other Services Widget */}
              <div className="bg-[var(--color-bg-light)] p-8 mb-8 border-t-4 border-[var(--color-primary)] shadow-sm rounded-sm">
                <h3 className="text-xl font-extrabold mb-6 uppercase">Other Services</h3>
                <ul className="space-y-3">
                  {otherServices.map((s: any) => (
                    <li key={s.id}>
                      <Link 
                        to={`/services/${s.id}` as any}
                        className="flex items-center justify-between p-4 bg-white hover:bg-[var(--color-primary)] hover:text-white group transition-all duration-300 font-bold text-sm text-[#555555]"
                      >
                        {s.title}
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to Action Widget */}
              <div className="bg-[#1A1A1A] text-white p-8 text-center relative overflow-hidden shadow-sm rounded-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)] rounded-full opacity-20 -mr-10 -mt-10 blur-2xl"></div>
                <PhoneCall className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-4" />
                <h3 className="text-xl font-extrabold mb-4 uppercase">Need Urgent Support?</h3>
                <p className="text-gray-400 mb-6 text-sm">
                  Our technical team is available to assist you with emergency repairs and technical consultation.
                </p>
                <a 
                  href={`tel:${dubaiBranch.phone.replace(/\s+/g, '')}`} 
                  className="block w-full bg-[var(--color-primary)] hover:bg-white hover:text-[#1A1A1A] text-white font-bold py-3 transition-colors duration-300"
                >
                  {dubaiBranch.phone}
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Consultation Section (Reused structure) */}
      <section className="section-padding bg-[var(--color-bg-light)] border-t border-gray-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white shadow-xl p-8 md:p-12 relative z-20 border-t-4 border-[#1A1A1A] rounded-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-8">
              <span className="text-[var(--color-primary)] font-bold uppercase tracking-wider text-sm mb-2 block">Contact Us</span>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4 uppercase">Request a Service Quote</h2>
              <div className="w-16 h-1 bg-[var(--color-primary)] mx-auto mb-4"></div>
              <p className="text-[#555555]">
                Fill out the form below with your machinery details and our experts will get back to you shortly.
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
                  className="w-full px-5 py-4 border border-gray-200 focus:border-[var(--color-primary)] focus:outline-none transition-colors disabled:opacity-50 disabled:bg-gray-50"
                />
                <input 
                  type="email" 
                  placeholder="Your Email *" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  disabled={isSubmitting}
                  className="w-full px-5 py-4 border border-gray-200 focus:border-[var(--color-primary)] focus:outline-none transition-colors disabled:opacity-50 disabled:bg-gray-50"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Phone Number *" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  disabled={isSubmitting}
                  className="w-full px-5 py-4 border border-gray-200 focus:border-[var(--color-primary)] focus:outline-none transition-colors disabled:opacity-50 disabled:bg-gray-50"
                />
                <input 
                  type="text" 
                  value={formData.subject}
                  readOnly
                  disabled={isSubmitting}
                  className="w-full px-5 py-4 border border-gray-200 bg-gray-50 text-gray-500 focus:outline-none cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <textarea 
                placeholder="Please describe your service requirements... *" 
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                disabled={isSubmitting}
                className="w-full px-5 py-4 border border-gray-200 focus:border-[var(--color-primary)] focus:outline-none transition-colors resize-none disabled:opacity-50 disabled:bg-gray-50"
              ></textarea>
              <div className="text-center pt-4">
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="px-12 py-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SUBMITTING REQUEST...' : 'SUBMIT REQUEST'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
