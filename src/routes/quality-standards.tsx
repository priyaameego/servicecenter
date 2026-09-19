import { createFileRoute } from '@tanstack/react-router'
import { SEO } from '../components/SEO'
import { Home } from 'lucide-react'

export const Route = createFileRoute('/quality-standards')({
  component: QualityStandards,
})

function QualityStandards() {
  return (
    <div className="flex flex-col w-full bg-white">
      <SEO 
        title="Quality & Safety" 
        description="Learn about our stringent quality and safety standards, ISO certifications, and testing procedures for electromechanical repairs." 
        path="/quality-standards" 
      />

      {/* LHE Style Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/3.jpeg" 
            alt="Quality & Standards" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-[#222]/40" />
        </div>
        
        <div className="relative z-10 container-custom">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-md">
            QUALITY & STANDARDS
          </h1>
          <div className="flex items-center justify-center text-white/90 text-sm md:text-base font-semibold uppercase tracking-wider space-x-3">
            <Home className="w-4 h-4" />
            <span>&rarr;</span>
            <span>QUALITY & STANDARDS</span>
          </div>
        </div>
      </section>

      {/* Quality & Safety Policy Section */}
      <section className="py-16 md:py-24 container-custom max-w-5xl">
        <div className="space-y-12 text-[#333]">
          
          <div>
            <h2 className="text-3xl font-bold mb-4 font-heading">Quality & Safety Policy</h2>
            <p className="text-base font-light leading-loose text-gray-700">
              ServiceCenter.ae prides itself on its commitment to quality, customer service and safety, and has spend years developing into a full service company with the ability to adapt to customers' every need.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 font-heading">Quality</h2>
            <p className="text-base font-light leading-loose text-gray-700">
              ServiceCenter.ae is committed to providing industry with a premium standard of excellence. We are dedicated to working with our customers to ensure that their needs and concerns are addressed and solutions are provided. We produce a product of uncompromising quality and are not satisfied until our customer is satisfied.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 font-heading">Safety</h2>
            <p className="text-base font-light leading-loose text-gray-700">
              Safety on and off the job is stressed and enforced at ServiceCenter.ae. Employees that work on customers' sites adhere strictly to the owners' safety policies, as well as the 'ServiceCenter Safety Policy'. Management is proud of the excellent safety record of its team and will continue to work closely with employees to ensure continued success in this area.
            </p>
          </div>

        </div>
      </section>

      {/* B&W Image Divider */}
      <section className="h-[300px] md:h-[500px] w-full">
        <img 
          src="/1.jpeg" 
          alt="Industrial Parts" 
          className="w-full h-full object-cover grayscale"
        />
      </section>

      {/* Certifications Section */}
      <section className="py-16 md:py-24 container-custom max-w-6xl">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-24">
          
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight text-[#111]">
              Certific<br/>ations
            </h2>
          </div>

          <div className="md:w-2/3 relative">
            {/* Vertical Red Line */}
            <div className="absolute left-[20px] md:left-[24px] top-4 bottom-4 w-0.5 bg-[#FF6A00]" />

            <div className="space-y-8 relative z-10">
              {[
                "ISO – 9001:2015 (Quality management systems)",
                "ISO – 14001:2015 (Environmental management systems)",
                "ISO – 27001:2022 (Information security, cybersecurity and privacy protection)",
                "ISO – 45001:2018 (Occupational health and safety management systems)",
                "Fire Fighting",
                "First Aid"
              ].map((cert, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FF6A00] text-white flex items-center justify-center font-bold text-lg rounded-sm z-10 shrink-0">
                    {i + 1}
                  </div>
                  <div className="absolute left-[20px] md:left-[24px] w-2 h-2 rounded-full bg-[#FF6A00] transform -translate-x-1/2" />
                  <p className="text-[#333] font-light text-base md:text-lg">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Standard Policy Section */}
      <section className="py-16 md:py-24 container-custom max-w-5xl border-t border-gray-100 pb-32">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 font-heading text-[#111]">
          ServiceCenter's Standard Policy
        </h2>

        <div className="space-y-10">
          
          <div>
            <h3 className="text-xl font-bold mb-5 text-[#111]">Commitment to Excellence:</h3>
            <p className="text-base font-light text-gray-700 leading-relaxed">
              Our service center is committed to providing the highest level of service excellence. We ensure that all our technicians are highly trained, our equipment is state-of-the-art, and our customer service is second to none.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5 text-[#111]">Service Request Handling:</h3>
            <ul className="list-disc pl-5 space-y-3 text-base font-light text-gray-700 marker:text-[#111]">
              <li>All service requests will be acknowledged within 24 hours.</li>
              <li>Customers will be provided with an estimated timeline and cost before any work begins.</li>
              <li>Regular updates will be provided throughout the service process.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5 text-[#111]">Quality Assurance:</h3>
            <ul className="list-disc pl-5 space-y-3 text-base font-light text-gray-700 marker:text-[#111]">
              <li>We use only high-quality genuine parts and materials.</li>
              <li>All repairs and services are performed to meet or exceed industry standards.</li>
              <li>Each service job undergoes a thorough quality check before being deemed complete.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5 text-[#111]">Warranty and Guarantees:</h3>
            <ul className="list-disc pl-5 space-y-3 text-base font-light text-gray-700 marker:text-[#111]">
              <li>We offer a warranty on all services and parts.</li>
              <li>Any issues within the warranty period will be addressed promptly and free of charge.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5 text-[#111]">Turnaround Time:</h3>
            <ul className="list-disc pl-5 space-y-3 text-base font-light text-gray-700 marker:text-[#111]">
              <li>We strive to complete all services in the shortest possible time while maintaining quality.</li>
              <li>In case of delays, customers will be informed in advance.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5 text-[#111]">Pricing and Quotations:</h3>
            <ul className="list-disc pl-5 space-y-3 text-base font-light text-gray-700 marker:text-[#111]">
              <li>Pricing will be transparent and communicated upfront.</li>
              <li>Any additional costs will be pre-approved by the customer.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5 text-[#111]">Customer Feedback & Resolutions:</h3>
            <ul className="list-disc pl-5 space-y-3 text-base font-light text-gray-700 marker:text-[#111]">
              <li>Customer feedback is crucial for our continuous improvement.</li>
              <li>We encourage feedback through surveys and direct communication channels.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5 text-[#111]">Privacy and Data Protection:</h3>
            <ul className="list-disc pl-5 space-y-3 text-base font-light text-gray-700 marker:text-[#111]">
              <li>Customer information and data are handled with the utmost confidentiality.</li>
              <li>We comply with all relevant privacy and data protection laws.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5 text-[#111]">Complaints and Resolution:</h3>
            <ul className="list-disc pl-5 space-y-3 text-base font-light text-gray-700 marker:text-[#111]">
              <li>In case of any complaints, customers can contact our service desk.</li>
              <li>We aim to resolve all complaints in a timely and satisfactory manner.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5 text-[#111]">Health and Safety:</h3>
            <ul className="list-disc pl-5 space-y-3 text-base font-light text-gray-700 marker:text-[#111]">
              <li>Our service center adheres to strict health and safety protocols.</li>
              <li>Customers and staff safety is our top priority during service operations.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5 text-[#111]">Environmental Responsibility:</h3>
            <ul className="list-disc pl-5 space-y-3 text-base font-light text-gray-700 marker:text-[#111]">
              <li>We operate in an environmentally responsible manner, including waste management and energy efficiency practices.</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  )
}
