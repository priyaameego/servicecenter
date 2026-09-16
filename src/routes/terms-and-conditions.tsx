import { createFileRoute, Link } from '@tanstack/react-router'
import { SEO } from '../components/SEO'
import { FileText } from 'lucide-react'

export const Route = createFileRoute('/terms-and-conditions')({
  component: TermsAndConditions,
})

function TermsAndConditions() {
  return (
    <div>
      <SEO 
        title="Terms and Conditions" 
        description="Read the terms and conditions of ServiceCenter.ae." 
        path="/terms-and-conditions" 
      />
      {/* Page Header */}
      <section className="relative h-[300px] md:h-[400px] bg-[#1A1A1A] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop" 
            alt="Terms and Conditions Header" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4 uppercase tracking-wider">Terms & Conditions</h1>
          <div className="flex items-center justify-center text-sm font-bold tracking-widest uppercase text-white space-x-2">
            <Link to="/" className="text-[var(--color-primary)] hover:text-white transition-colors">HOME</Link>
            <span>/</span>
            <span>TERMS & CONDITIONS</span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center mb-8">
            <FileText className="w-12 h-12 text-[var(--color-primary)] mr-4" />
            <h2 className="text-3xl font-extrabold uppercase">Terms of Service</h2>
          </div>
          <div className="w-20 h-1 bg-[var(--color-primary)] mb-8"></div>

          <div className="prose prose-lg max-w-none text-[#555555]">
            <p className="mb-6 leading-relaxed">
              Welcome to ServiceCenter.ae. By accessing our website and utilizing our services, you agree to comply with and be bound by the following terms and conditions of use.
            </p>

            <h3 className="text-xl font-bold text-[#1A1A1A] mt-8 mb-4 uppercase">Service Agreement</h3>
            <p className="mb-6 leading-relaxed">
              Our services are provided "as is" and "as available". We reserve the right to modify or discontinue any service without notice at any time. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.
            </p>

            <h3 className="text-xl font-bold text-[#1A1A1A] mt-8 mb-4 uppercase">User Responsibilities</h3>
            <p className="mb-6 leading-relaxed">
              You are responsible for ensuring that all information provided to us is accurate and complete. You must not use our services for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction.
            </p>

            <h3 className="text-xl font-bold text-[#1A1A1A] mt-8 mb-4 uppercase">Limitation of Liability</h3>
            <p className="mb-6 leading-relaxed">
              In no case shall ServiceCenter.ae, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
