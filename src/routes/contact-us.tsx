import { useState, type FormEvent } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { MapPin, Phone, Mail, Clock, AlertCircle, CheckCircle2 } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { dubaiBranch } from '../data/business'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'
import { LocationHighlights } from '../sections/contact/LocationHighlights'
import { BusinessHours } from '../sections/contact/BusinessHours'

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
    <div className="flex flex-col w-full overflow-hidden">
      <SEO 
        title="Contact Us" 
        description="Contact ServiceCenter.ae for expert power tool and appliance repair in Dubai, UAE." 
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 reveal-group">
            <div className="bg-white p-8 text-center border border-gray-100 shadow-[var(--shadow-premium)] hover:shadow-[var(--shadow-premium-hover)] hover:-translate-y-1.5 transition-all duration-500 ease-out group rounded-sm reveal">
              <MapPin className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-4 transition-transform duration-500 group-hover:scale-110" />
              <h3 className="font-bold text-lg mb-2 uppercase" style={{ fontFamily: 'var(--font-heading)' }}>Address</h3>
              <p className="text-[#555555]">{dubaiBranch.address.fullAddress}</p>
            </div>
            
            <div className="bg-white p-8 text-center border border-gray-100 shadow-[var(--shadow-premium)] hover:shadow-[var(--shadow-premium-hover)] hover:-translate-y-1.5 transition-all duration-500 ease-out group rounded-sm reveal">
              <Phone className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-4 transition-transform duration-500 group-hover:scale-110" />
              <h3 className="font-bold text-lg mb-2 uppercase" style={{ fontFamily: 'var(--font-heading)' }}>Phone Number</h3>
              <a href={`tel:${dubaiBranch.phone.replace(/\s+/g, '')}`} className="text-[#555555] hover:text-[var(--color-primary)] block transition-colors">{dubaiBranch.phone}</a>
            </div>
            
            <div className="bg-white p-8 text-center border border-gray-100 shadow-[var(--shadow-premium)] hover:shadow-[var(--shadow-premium-hover)] hover:-translate-y-1.5 transition-all duration-500 ease-out group rounded-sm reveal">
              <Mail className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-4 transition-transform duration-500 group-hover:scale-110" />
              <h3 className="font-bold text-lg mb-2 uppercase" style={{ fontFamily: 'var(--font-heading)' }}>Email Address</h3>
              <a href={`mailto:${dubaiBranch.email}`} className="text-[#555555] hover:text-[var(--color-primary)] block transition-colors">{dubaiBranch.email}</a>
            </div>
            
            <div className="bg-white p-8 text-center border border-gray-100 shadow-[var(--shadow-premium)] hover:shadow-[var(--shadow-premium-hover)] hover:-translate-y-1.5 transition-all duration-500 ease-out group rounded-sm reveal">
              <Clock className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-4 transition-transform duration-500 group-hover:scale-110" />
              <h3 className="font-bold text-lg mb-2 uppercase" style={{ fontFamily: 'var(--font-heading)' }}>Working Hours</h3>
              <p className="text-[#555555]">Mon-Sat: 8:00am - 6:00pm</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 reveal">
            <div className="bg-white p-8 md:p-12 shadow-2xl border border-gray-100 rounded-sm relative overflow-hidden group">
              {/* Premium Background Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)] opacity-5 blur-3xl pointer-events-none rounded-full transition-transform duration-1000 group-hover:scale-150" />
              
              <span className="section-eyebrow relative z-10">Send Message</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 relative z-10 uppercase tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                GET IN TOUCH
              </h2>
              <div className="w-20 h-1 bg-[var(--color-primary)] mb-10 relative z-10 transition-all duration-500 group-hover:w-32"></div>
              
              {isSuccess && (
                <div className="mb-8 p-5 bg-green-50 border-l-4 border-green-500 flex items-start animate-fade-in-up">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-0.5" />
                  <p className="text-green-800 font-medium leading-relaxed">Thank you for reaching out! Your message has been submitted successfully and our team will get back to you shortly.</p>
                </div>
              )}

              {validationError && (
                <div className="mb-8 p-5 bg-yellow-50 border-l-4 border-yellow-500 flex items-start animate-fade-in-up">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-4 flex-shrink-0 mt-0.5" />
                  <p className="text-yellow-800 font-medium leading-relaxed">{validationError}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name Input */}
                  <div className="relative group/input">
                    <input 
                      type="text" 
                      placeholder="Your Name *" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      disabled={isSubmitting}
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:outline-none transition-colors disabled:opacity-50 text-[#111111] placeholder-gray-400 font-medium peer"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-500 peer-focus:w-full" />
                  </div>
                  
                  {/* Email Input */}
                  <div className="relative group/input">
                    <input 
                      type="email" 
                      placeholder="Your Email *" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      disabled={isSubmitting}
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:outline-none transition-colors disabled:opacity-50 text-[#111111] placeholder-gray-400 font-medium peer"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-500 peer-focus:w-full" />
                  </div>
                </div>
                
                {/* Subject Input */}
                <div className="relative group/input">
                  <input 
                    type="text" 
                    placeholder="Subject *" 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    disabled={isSubmitting}
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:outline-none transition-colors disabled:opacity-50 text-[#111111] placeholder-gray-400 font-medium peer"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-500 peer-focus:w-full" />
                </div>
                
                {/* Message Input */}
                <div className="relative group/input">
                  <textarea 
                    placeholder="Your Message *" 
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    disabled={isSubmitting}
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:outline-none transition-colors resize-none disabled:opacity-50 text-[#111111] placeholder-gray-400 font-medium peer"
                  ></textarea>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-500 peer-focus:w-full" />
                </div>
                
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full md:w-auto px-12 py-4 text-sm tracking-widest shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </Button>
                </div>
              </form>
            </div>
            
            <div className="h-[400px] lg:h-auto min-h-[400px] bg-gray-200 rounded-sm overflow-hidden shadow-[var(--shadow-premium)] border border-gray-100">
              <iframe 
                src="https://maps.google.com/maps?q=Building%20W04,%20Russia%20Cluster,%20Dubai&t=m&z=15&output=embed&iwloc=near" 
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

      {/* NEW: Location Highlights */}
      <LocationHighlights />

      {/* NEW: Business Hours */}
      <BusinessHours />
    </div>
  )
}
