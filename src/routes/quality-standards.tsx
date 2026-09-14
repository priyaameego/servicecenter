import { createFileRoute } from '@tanstack/react-router'
import { SEO } from '../components/SEO'
import { ShieldCheck, Award, AlertTriangle } from 'lucide-react'
import { PageHero } from '../components/PageHero'

export const Route = createFileRoute('/quality-standards')({
  component: QualityStandards,
})

function QualityStandards() {
  return (
    <div>
      <SEO 
        title="Quality & Standards" 
        description="Learn about our ISO certified quality standards, stringent testing protocols, and commitment to excellence at ServiceCenter.ae." 
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

      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="text-[var(--color-primary)] font-bold uppercase tracking-wider text-sm mb-2 block">Our Commitment</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">QUALITY & SAFETY POLICY</h2>
            <div className="w-20 h-1 bg-[var(--color-primary)] mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 animate-fade-in-up">
            <div className="bg-white p-8 md:p-10 shadow-lg border border-gray-100 rounded-sm hover:shadow-[var(--shadow-premium-hover)] hover:-translate-y-1.5 transition-all duration-500 ease-out group">
              <div className="flex items-center mb-6">
                <Award className="w-10 h-10 text-[var(--color-primary)] mr-4 transition-transform duration-500 group-hover:scale-110" />
                <h3 className="text-2xl font-extrabold">QUALITY</h3>
              </div>
              <p className="text-[#555555] leading-relaxed mb-4">
                ServiceCenter.ae produces a product of uncompromising quality and is not satisfied until our customer is satisfied. We conform to strict international standards to ensure that every repair and maintenance job meets the highest tier of operational excellence.
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start">
                  <span className="text-[var(--color-primary)] font-bold mr-3">✓</span>
                  <span className="text-[#555555]">Rigorous testing protocols for all repaired machinery.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-primary)] font-bold mr-3">✓</span>
                  <span className="text-[#555555]">Use of premium-grade, certified spare parts.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-primary)] font-bold mr-3">✓</span>
                  <span className="text-[#555555]">Continuous training and development for our technical staff.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 md:p-10 shadow-lg border border-gray-100 rounded-sm hover:shadow-[var(--shadow-premium-hover)] hover:-translate-y-1.5 transition-all duration-500 ease-out group">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-10 h-10 text-[var(--color-primary)] mr-4 transition-transform duration-500 group-hover:scale-110" />
                <h3 className="text-2xl font-extrabold">SAFETY</h3>
              </div>
              <p className="text-[#555555] leading-relaxed mb-4">
                Safety on and off the job is stressed and enforced at ServiceCenter.ae. Employees that work on customers' sites adhere strictly to the owners' safety policies, as well as the 'ServiceCenter Safety Policy'.
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start">
                  <span className="text-[var(--color-primary)] font-bold mr-3">✓</span>
                  <span className="text-[#555555]">Mandatory PPE for all workshop and on-site staff.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-primary)] font-bold mr-3">✓</span>
                  <span className="text-[#555555]">Regular safety audits and risk assessments.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-primary)] font-bold mr-3">✓</span>
                  <span className="text-[#555555]">Zero-tolerance policy for safety violations.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[var(--color-bg-light)] p-8 md:p-12 text-center rounded-sm shadow-inner animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <ShieldCheck className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-6" />
            <h3 className="text-2xl font-extrabold mb-6">ISO CERTIFICATIONS</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <div className="bg-white px-6 py-4 shadow-sm border border-gray-100 rounded-sm font-bold text-[#1A1A1A] hover:shadow-md hover:-translate-y-1 transition-all duration-300">ISO 9001:2015</div>
              <div className="bg-white px-6 py-4 shadow-sm border border-gray-100 rounded-sm font-bold text-[#1A1A1A] hover:shadow-md hover:-translate-y-1 transition-all duration-300">ISO 14001:2015</div>
              <div className="bg-white px-6 py-4 shadow-sm border border-gray-100 rounded-sm font-bold text-[#1A1A1A] hover:shadow-md hover:-translate-y-1 transition-all duration-300">ISO 45001:2018</div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  )
}
