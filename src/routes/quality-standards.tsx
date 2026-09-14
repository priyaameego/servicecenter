import { createFileRoute } from '@tanstack/react-router'
import { SEO } from '../components/SEO'
import { Award, AlertTriangle, ClipboardCheck, Star, Clock, DollarSign, MessageSquare, Lock, AlertCircle, Leaf, Wrench, ShieldCheck } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { Certifications } from '../sections/quality/Certifications'
import { TestingFacility } from '../sections/quality/TestingFacility'

export const Route = createFileRoute('/quality-standards')({
  component: QualityStandards,
})

const servicePolicy = [
  {
    icon: ClipboardCheck,
    title: 'Service Request Handling',
    items: [
      'All service requests will be acknowledged within 24 hours.',
      'Customers will be provided with an estimated timeline and cost before any work begins.',
      'Regular updates will be provided throughout the service process.',
    ],
  },
  {
    icon: Star,
    title: 'Quality Assurance',
    items: [
      'We use only high-quality genuine parts and materials.',
      'All repairs and services are performed to meet or exceed industry standards.',
      'Each service job undergoes a thorough quality check before being deemed complete.',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Warranty and Guarantees',
    items: [
      'We offer a warranty on all services and parts.',
      'Any issues within the warranty period will be addressed promptly and free of charge.',
    ],
  },
  {
    icon: Clock,
    title: 'Turnaround Time',
    items: [
      'We strive to complete all services in the shortest possible time while maintaining quality.',
      'In case of delays, customers will be informed in advance.',
    ],
  },
  {
    icon: DollarSign,
    title: 'Pricing and Quotations',
    items: [
      'Pricing will be transparent and communicated upfront.',
      'Any additional costs will be pre-approved by the customer.',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Customer Feedback & Resolutions',
    items: [
      'Customer feedback is crucial for our continuous improvement.',
      'We encourage feedback through surveys and direct communication channels.',
    ],
  },
  {
    icon: Lock,
    title: 'Privacy and Data Protection',
    items: [
      'Customer information and data are handled with the utmost confidentiality.',
      'We comply with all relevant privacy and data protection laws.',
    ],
  },
  {
    icon: AlertCircle,
    title: 'Complaints and Resolution',
    items: [
      'In case of any complaints, customers can contact our service desk.',
      'We aim to resolve all complaints in a timely and satisfactory manner.',
    ],
  },
  {
    icon: Wrench,
    title: 'Health and Safety',
    items: [
      'Our service center adheres to strict health and safety protocols.',
      'Customers and staff safety is our top priority during service operations.',
    ],
  },
  {
    icon: Leaf,
    title: 'Environmental Responsibility',
    items: [
      'We operate in an environmentally responsible manner, including waste management and energy efficiency practices.',
    ],
  },
]

function QualityStandards() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <SEO 
        title="Quality & Safety" 
        description="Learn about our stringent quality and safety standards, ISO certifications, and testing procedures for electromechanical repairs." 
        path="/quality-standards" 
      />
      <PageHero
        title="Quality Standards"
        image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Quality Standards' },
        ]}
      />

      {/* ── INTRO ── */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">

          <div className="text-center mb-14 reveal">
            <span className="section-eyebrow">Our Commitment</span>
            <h2 className="section-title">QUALITY &amp; SAFETY POLICY</h2>
            <div className="section-divider-center mb-6" />
            <p className="text-[#555555] max-w-3xl mx-auto text-base leading-[1.85]">
              ServiceCenter.ae prides itself on its commitment to quality, customer service and safety. As an authorized service center for premier tool and appliance brands, we have developed rigorous internal standards to ensure every repair meets OEM specifications.
            </p>
          </div>

          {/* ── QUALITY + SAFETY CARDS ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 reveal-group">
            {/* Quality */}
            <div className="bg-white p-8 md:p-10 shadow-[var(--shadow-premium)] border border-gray-100 rounded-sm hover:shadow-[var(--shadow-premium-hover)] hover:-translate-y-1.5 transition-all duration-500 ease-out group reveal">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center mr-4 group-hover:bg-[var(--color-primary)] transition-colors duration-500">
                  <Award className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold tracking-wide">QUALITY</h3>
              </div>
              <p className="text-[#555555] leading-[1.85] mb-6">
                ServiceCenter.ae is committed to providing our clients with a premium standard of excellence. We are dedicated to working closely with our customers to ensure that their equipment repair needs are met with precision. We deliver a repair of uncompromising quality and are not satisfied until our customer is satisfied.
              </p>
              <ul className="space-y-3">
                {[
                  'Rigorous diagnostic and post-repair testing protocols.',
                  'Exclusive use of premium-grade, certified genuine spare parts.',
                  'Continuous manufacturer-led training for our technical staff.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 w-4 h-4 flex-shrink-0 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-[10px] font-bold">✓</span>
                    <span className="text-[#555555] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Safety */}
            <div className="bg-white p-8 md:p-10 shadow-[var(--shadow-premium)] border border-gray-100 rounded-sm hover:shadow-[var(--shadow-premium-hover)] hover:-translate-y-1.5 transition-all duration-500 ease-out group reveal">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center mr-4 group-hover:bg-[var(--color-primary)] transition-colors duration-500">
                  <AlertTriangle className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold tracking-wide">SAFETY</h3>
              </div>
              <p className="text-[#555555] leading-[1.85] mb-6">
                Safety within our workshop is stressed and strictly enforced at ServiceCenter.ae. Our technicians adhere to comprehensive safety guidelines when handling, diagnosing, and testing high-powered equipment and appliances. Management is proud of the excellent safety record of our team and ensures a secure environment for both staff and visiting customers.
              </p>
              <ul className="space-y-3">
                {[
                  'Mandatory protective gear for all workshop technicians.',
                  'Regular tool calibration and electrical safety audits.',
                  'Zero-tolerance policy for safety standard violations.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 w-4 h-4 flex-shrink-0 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-[10px] font-bold">✓</span>
                    <span className="text-[#555555] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Certifications Section */}
      <Certifications />

      {/* NEW: Testing Facility Section */}
      <TestingFacility />

      {/* ── SERVICE EXCELLENCE POLICY ── */}
      <section className="section-padding bg-[var(--color-bg-light)]">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-14 reveal">
            <span className="section-eyebrow">How We Operate</span>
            <h2 className="section-title">SERVICE EXCELLENCE POLICY</h2>
            <div className="section-divider-center mb-6" />
            <p className="text-[#555555] max-w-3xl mx-auto text-base leading-[1.85]">
              Our service center is committed to providing the highest level of service excellence. We ensure that all our technicians are highly trained, our equipment is state-of-the-art, and our customer service is second to none.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-group">
            {servicePolicy.map(({ icon: Icon, title, items }) => (
              <div
                key={title}
                className="bg-white p-7 border border-gray-100 shadow-[var(--shadow-premium)] hover:shadow-[var(--shadow-premium-hover)] hover:-translate-y-1 transition-all duration-400 ease-out group rounded-sm reveal"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10 h-10 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary)] transition-colors duration-400">
                    <Icon className="w-5 h-5 text-[var(--color-primary)] group-hover:text-white transition-colors duration-400" />
                  </div>
                  <h4 className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wide leading-snug">{title}</h4>
                </div>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#555555] leading-relaxed">
                      <span className="flex-shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] block mt-[6px]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
