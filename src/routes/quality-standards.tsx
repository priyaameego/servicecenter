import { createFileRoute } from '@tanstack/react-router'
import { SEO } from '../components/SEO'
import {
  ShieldCheck, Award, AlertTriangle, ClipboardCheck,
  Star, Clock, DollarSign, MessageSquare, Lock,
  AlertCircle, Leaf, Wrench
} from 'lucide-react'
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

const certifications = [
  { code: 'ISO 9001:2015', label: 'Quality Management Systems' },
  { code: 'ISO 14001:2015', label: 'Environmental Management Systems' },
  { code: 'ISO 27001:2022', label: 'Information Security & Privacy Protection' },
  { code: 'ISO 45001:2018', label: 'Occupational Health & Safety Management' },
]

const trainingBadges = ['Fire Fighting', 'First Aid']

function QualityStandards() {
  return (
    <div>
      <SEO
        title="Quality & Standards"
        description="ServiceCenter.ae is committed to uncompromising quality, customer service and safety. ISO 9001, 14001, 27001 & 45001 certified service center in Dubai, UAE."
        path="/quality-standards"
      />
      <PageHero
        title="Quality & Standards"
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Quality & Standards' },
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
              ServiceCenter.ae prides itself on its commitment to quality, customer service and safety, and has spent years developing into a full-service company with the ability to adapt to customers' every need.
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
                ServiceCenter.ae is committed to providing industry with a premium standard of excellence. We are dedicated to working with our customers to ensure that their needs and concerns are addressed and solutions are provided. We produce a product of uncompromising quality and are not satisfied until our customer is satisfied.
              </p>
              <ul className="space-y-3">
                {[
                  'Rigorous testing protocols for all repaired machinery.',
                  'Use of premium-grade, certified genuine spare parts.',
                  'Continuous training and development for our technical staff.',
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
                Safety on and off the job is stressed and enforced at ServiceCenter.ae. Employees that work on customers' sites adhere strictly to the owners' safety policies, as well as the 'ServiceCenter Safety Policy'. Management is proud of the excellent safety record of its team and will continue to work closely with employees to ensure continued success in this area.
              </p>
              <ul className="space-y-3">
                {[
                  'Mandatory PPE for all workshop and on-site staff.',
                  'Regular safety audits and risk assessments.',
                  'Zero-tolerance policy for safety violations.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 w-4 h-4 flex-shrink-0 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-[10px] font-bold">✓</span>
                    <span className="text-[#555555] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── ISO CERTIFICATIONS ── */}
          <div className="bg-[#111111] p-10 md:p-14 text-center rounded-sm reveal mb-16 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[var(--color-primary)] opacity-[0.06] blur-3xl pointer-events-none" />
            <ShieldCheck className="w-14 h-14 text-[var(--color-primary)] mx-auto mb-5" />
            <span className="section-eyebrow !text-[var(--color-primary)]">Internationally Recognised</span>
            <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider mb-2">ISO CERTIFICATIONS</h3>
            <div className="w-10 h-[3px] bg-[var(--color-primary)] mx-auto mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {certifications.map(({ code, label }) => (
                <div key={code} className="bg-white/5 border border-white/10 p-5 hover:border-[var(--color-primary)]/50 hover:bg-white/10 transition-all duration-300 group rounded-sm text-left">
                  <div className="text-[var(--color-primary)] font-bold text-sm mb-1 tracking-wider">{code}</div>
                  <div className="text-white/60 text-xs leading-relaxed">{label}</div>
                </div>
              ))}
            </div>
            {/* Training badges */}
            <div className="flex justify-center gap-4 flex-wrap">
              {trainingBadges.map((badge) => (
                <span key={badge} className="inline-flex items-center gap-2 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-sm">
                  ✓ {badge}
                </span>
              ))}
            </div>
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
