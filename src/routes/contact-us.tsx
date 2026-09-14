import { useState, type FormEvent } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { MapPin, Phone, Mail, Clock, AlertCircle, CheckCircle2 } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { dubaiBranch } from '../data/business'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message?: string;
}

export const Route = createFileRoute('/contact-us')({
  component: ContactUs,
})

function ContactUs() {
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

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message?.trim()) {
      setValidationError('All fields are required.')
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
    <div>
      <SEO 
        title="Contact Us" 
        description="Contact ServiceCenter.ae (Light House Electrical Co.) for expert motor repair, rewinding, and industrial servicing in Dubai, UAE." 
        path="/contact-us" 
      />
      <PageHero
        title="Contact Us"
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Contact Us' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 animate-fade-in-up">
            <div className="bg-white p-8 text-center border border-gray-100 shadow-sm hover:shadow-[var(--shadow-premium-hover)] hover:-translate-y-1.5 transition-all duration-500 ease-out group rounded-sm">
              <MapPin className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-4 transition-transform duration-500 group-hover:scale-110" />
              <h3 className="font-bold text-lg mb-2 uppercase">Address</h3>
              <p className="text-[#555555]">{dubaiBranch.address.fullAddress}</p>
            </div>
            
            <div className="bg-white p-8 text-center border border-gray-100 shadow-sm hover:shadow-[var(--shadow-premium-hover)] hover:-translate-y-1.5 transition-all duration-500 ease-out group rounded-sm">
              <Phone className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-4 transition-transform duration-500 group-hover:scale-110" />
              <h3 className="font-bold text-lg mb-2 uppercase">Phone Number</h3>
              <a href={`tel:${dubaiBranch.phone.replace(/\s+/g, '')}`} className="text-[#555555] hover:text-[var(--color-primary)] block">{dubaiBranch.phone}</a>
            </div>
            
            <div className="bg-white p-8 text-center border border-gray-100 shadow-sm hover:shadow-[var(--shadow-premium-hover)] hover:-translate-y-1.5 transition-all duration-500 ease-out group rounded-sm">
              <Mail className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-4 transition-transform duration-500 group-hover:scale-110" />
              <h3 className="font-bold text-lg mb-2 uppercase">Email Address</h3>
              <a href={`mailto:${dubaiBranch.email}`} className="text-[#555555] hover:text-[var(--color-primary)] block">{dubaiBranch.email}</a>
            </div>
            
            <div className="bg-white p-8 text-center border border-gray-100 shadow-sm hover:shadow-[var(--shadow-premium-hover)] hover:-translate-y-1.5 transition-all duration-500 ease-out group rounded-sm">
              <Clock className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-4 transition-transform duration-500 group-hover:scale-110" />
              <h3 className="font-bold text-lg mb-2 uppercase">Working Hours</h3>
              <p className="text-[#555555]">Mon-Sat: 8:00am - 6:00pm</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="bg-white p-8 md:p-10 shadow-lg border border-gray-100 rounded-sm">
              <span className="text-[var(--color-primary)] font-bold uppercase tracking-wider text-sm mb-2 block">Send Message</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">GET IN TOUCH</h2>
              <div className="w-20 h-1 bg-[var(--color-primary)] mb-8"></div>
              
              {isSuccess && (
                <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-green-700 font-medium">Thank you! Your message has been submitted successfully.</p>
                </div>
              )}

              {validationError && (
                <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 flex items-start">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-yellow-700 font-medium">{validationError}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Your Name *" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 bg-[var(--color-bg-light)] border border-transparent focus:border-[var(--color-primary)] focus:bg-white focus:outline-none transition-colors disabled:opacity-50"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email *" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 bg-[var(--color-bg-light)] border border-transparent focus:border-[var(--color-primary)] focus:bg-white focus:outline-none transition-colors disabled:opacity-50"
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Subject *" 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  disabled={isSubmitting}
                  className="w-full px-5 py-4 bg-[var(--color-bg-light)] border border-transparent focus:border-[var(--color-primary)] focus:bg-white focus:outline-none transition-colors disabled:opacity-50"
                />
                <textarea 
                  placeholder="Your Message *" 
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  disabled={isSubmitting}
                  className="w-full px-5 py-4 bg-[var(--color-bg-light)] border border-transparent focus:border-[var(--color-primary)] focus:bg-white focus:outline-none transition-colors resize-none disabled:opacity-50"
                ></textarea>
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="px-10"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </Button>
              </form>
            </div>
            
            <div className="h-[400px] lg:h-auto min-h-[400px] bg-gray-200 rounded-sm overflow-hidden shadow-lg border border-gray-100">
              {/* Note: In a real implementation, use an actual Google Maps iframe or Google Maps API component here */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115450.41376910609!2d55.35245802241684!3d25.316823377708573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f5f02c61db5%3A0x67399dbd76fa1c12!2sIndustrial%20Area%2011%20-%20Industrial%20Area%20-%20Sharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1698246580917!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
