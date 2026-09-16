import { createFileRoute } from '@tanstack/react-router'
import { SEO } from '../components/SEO'
import { ClipboardCheck, Star, Clock, DollarSign, MessageSquare, Lock, AlertCircle, Leaf, Wrench, ShieldCheck } from 'lucide-react'
import { PageHero } from '../components/PageHero'

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
        <div className="container-custom max-w-4xl mx-auto text-center reveal">
          <span className="section-eyebrow">Our Commitment</span>
          <h2 className="section-title">QUALITY &amp; SAFETY POLICY</h2>
          <div className="section-divider-center mb-6" />
          <p className="text-[#555555] text-base leading-[1.85] mb-12">
            ServiceCenter.ae prides itself on its commitment to quality, customer service, and safety. As a dedicated Black+Decker service center, we have spent years developing into a full-service appliance repair facility with the ability to adapt to our customers’ every need.
          </p>
        </div>
      </section>

      {/* ── QUALITY & SAFETY TEXT SECTIONS ── */}
      <section className="py-12 bg-[var(--color-bg-light)]">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 shadow-[var(--shadow-premium)] border border-gray-100 rounded-sm mb-8 reveal">
            <h3 className="text-2xl font-bold tracking-wide mb-4 uppercase" style={{ fontFamily: 'var(--font-heading)' }}>Quality</h3>
            <p className="text-[#555555] leading-[1.85]">
              ServiceCenter.ae is committed to providing a premium standard of excellence in appliance repair. We are dedicated to working with our customers to ensure that their home and kitchen appliance concerns are addressed and solutions are provided through proper diagnosis and professional workmanship. We produce a repair of uncompromising quality, using appropriate and genuine spare parts where available, and are not satisfied until our customer is satisfied. Every appliance undergoes rigorous functional testing and quality checks before collection.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-[var(--shadow-premium)] border border-gray-100 rounded-sm reveal">
            <h3 className="text-2xl font-bold tracking-wide mb-4 uppercase" style={{ fontFamily: 'var(--font-heading)' }}>Safety</h3>
            <p className="text-[#555555] leading-[1.85]">
              Safety within our workshop is stressed and strictly enforced at ServiceCenter.ae. Our technicians adhere strictly to comprehensive safety guidelines and service procedures when handling, inspecting, and testing your appliances to ensure safe and reliable servicing. Management is proud of the excellent safety record of our team and will continue to work closely with employees to ensure a secure environment for both staff and visiting customers.
            </p>
          </div>
        </div>
      </section>

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
