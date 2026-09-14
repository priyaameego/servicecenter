import { createFileRoute } from '@tanstack/react-router'
import { SEO } from '../components/SEO'
import { Target, Eye } from 'lucide-react'
import { StatsSection } from '../sections/home/StatsSection'
import { PageHero } from '../components/PageHero'

export const Route = createFileRoute('/about-us')({
  component: AboutUs,
})

function AboutUs() {
  return (
    <div>
      <SEO 
        title="About Us" 
        description="Learn about ServiceCenter.ae. We are an authorized service center in Dubai providing premium industrial machinery repair, rewinding, and electromechanical services." 
        path="/about-us" 
      />
      <PageHero
        title="About Us"
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'About Us' },
        ]}
      />

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-center animate-fade-in-up">
            <div className="w-full lg:w-1/2">
              <span className="text-[var(--color-primary)] font-bold uppercase tracking-wider text-sm mb-2 block">Our History</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">WHO WE ARE</h2>
              <div className="w-20 h-1 bg-[var(--color-primary)] mb-6"></div>
              
              <p className="text-[#555555] mb-6 leading-relaxed">
                ServiceCenter.ae is committed to providing the industry with a premium standard of excellence in Industrial Machinery Repair & Maintenance. We are dedicated to working with our customers to ensure that their electromechanical needs and concerns are addressed and precise solutions are provided. We deliver a service of uncompromising quality and are not satisfied until our customer is satisfied.
              </p>
              <p className="text-[#555555] leading-relaxed">
                Safety on and off the job is stressed and enforced at ServiceCenter.ae. Technicians that work on customers' sites adhere strictly to the owners' safety policies, as well as our own comprehensive safety guidelines. Our management is proud of the excellent safety record of its team across all motor, generator, pump & machinery services.
              </p>
            </div>
            
            <div className="w-full lg:w-1/2 relative">
              <div className="overflow-hidden shadow-2xl premium-3d-image bg-white border border-gray-100 p-8">
                <img 
                  src="/1.jpeg" 
                  alt="Workshop Team" 
                  className="w-full h-[400px] object-contain transform transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[var(--color-bg-light)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up">
            <div className="bg-white p-10 shadow-lg border-b-4 border-[var(--color-primary)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out group">
              <Target className="w-16 h-16 text-[var(--color-primary)] mb-6 transition-transform duration-500 group-hover:scale-110" />
              <h3 className="text-2xl font-extrabold mb-4">OUR MISSION</h3>
              <p className="text-[#555555] leading-relaxed">
                To provide unparalleled quality and dependable service in the electrical machinery industry. We strive to exceed customer expectations by delivering precision repairs, maintenance, and technical solutions.
              </p>
            </div>
            
            <div className="bg-white p-10 shadow-lg border-b-4 border-[#1A1A1A] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out group">
              <Eye className="w-16 h-16 text-[#1A1A1A] mb-6 transition-transform duration-500 group-hover:scale-110" />
              <h3 className="text-2xl font-extrabold mb-4">OUR VISION</h3>
              <p className="text-[#555555] leading-relaxed">
                To be the leading and most trusted service center and spare parts provider globally, recognized for our commitment to safety, technological advancement, and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Statistics / Counter Strip */}
      <StatsSection />
      
    </div>
  )
}
