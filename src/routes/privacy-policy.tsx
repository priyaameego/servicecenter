import { createFileRoute, Link } from '@tanstack/react-router'
import { SEO } from '../components/SEO'
import { ShieldCheck } from 'lucide-react'

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicy,
})

function PrivacyPolicy() {
  return (
    <div>
      <SEO 
        title="Privacy Policy" 
        description="Read the privacy policy of ServiceCenter.ae to understand how we collect, use, and protect your personal information." 
        path="/privacy-policy" 
      />
      {/* Page Header */}
      <section className="relative h-[300px] md:h-[400px] bg-[#1A1A1A] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop" 
            alt="Privacy Policy Header" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4 uppercase tracking-wider">Privacy Policy</h1>
          <div className="flex items-center justify-center text-sm font-bold tracking-widest uppercase text-white space-x-2">
            <Link to="/" className="text-[var(--color-primary)] hover:text-white transition-colors">HOME</Link>
            <span>/</span>
            <span>PRIVACY POLICY</span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center mb-8">
            <ShieldCheck className="w-12 h-12 text-[var(--color-primary)] mr-4" />
            <h2 className="text-3xl font-extrabold uppercase">Data Protection & Privacy</h2>
          </div>
          <div className="w-20 h-1 bg-[var(--color-primary)] mb-8"></div>

          <div className="prose prose-lg max-w-none text-[#555555]">
            <p className="mb-6 leading-relaxed">
              At Light House Electrical Co., we respect your privacy and are committed to protecting any personal information you share with us. This policy outlines our practices regarding data collection, usage, and protection, ensuring complete compliance with the relevant data privacy regulations in the UAE.
            </p>

            <h3 className="text-xl font-bold text-[#1A1A1A] mt-8 mb-4 uppercase">Information We Collect</h3>
            <p className="mb-6 leading-relaxed">
              We collect information that you voluntarily provide when contacting us for consultations, requesting quotes, or interacting with our services. This may include your name, email address, phone number, and any project-specific details provided via our secure forms.
            </p>

            <h3 className="text-xl font-bold text-[#1A1A1A] mt-8 mb-4 uppercase">How We Use Your Information</h3>
            <p className="mb-6 leading-relaxed">
              The information we collect is strictly used to fulfill your service requests, communicate maintenance updates, process transactions, and improve our customer service. We do not sell, trade, or rent your personal identification information to third parties.
            </p>

            <h3 className="text-xl font-bold text-[#1A1A1A] mt-8 mb-4 uppercase">Data Security</h3>
            <p className="mb-6 leading-relaxed">
              We adopt robust data collection, storage, and processing practices alongside rigorous security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, transaction information, and data stored on our site.
            </p>

            <h3 className="text-xl font-bold text-[#1A1A1A] mt-8 mb-4 uppercase">Contacting Us</h3>
            <p className="mb-6 leading-relaxed">
              If you have any questions regarding this Privacy Policy or the practices of this site, please contact us at our official Dubai support channels.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
