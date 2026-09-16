import { createFileRoute } from '@tanstack/react-router'
import { SEO } from '../components/SEO'
import { Target, Eye } from 'lucide-react'
import { StatsSection } from '../sections/home/StatsSection'
import { PageHero } from '../components/PageHero'
import { CoreValues } from '../sections/about/CoreValues'
import { MeetTheTeam } from '../sections/about/MeetTheTeam'
import { AuthorizedBrands } from '../sections/home/AuthorizedBrands'

export const Route = createFileRoute('/about-us')({
  component: AboutUs,
})

function AboutUs() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <SEO 
        title="About Us" 
        description="Learn about ServiceCenter.ae. We are an authorized service center in Dubai providing premium repair and maintenance for power tools, home appliances, and equipment." 
        path="/about-us" 
      />
      <PageHero
        title="About Us"
        image="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2000&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'About Us' },
        ]}
      />

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <span className="text-[var(--color-primary)] font-bold uppercase tracking-wider text-sm mb-2 block">Our History</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">WHO WE ARE</h2>
              <div className="w-20 h-1 bg-[var(--color-primary)] mb-6"></div>
              
              <p className="text-[#555555] mb-6 leading-relaxed">
                ServiceCenter.ae is a dedicated Black+Decker Service Center located in Dubai, committed to providing a premium standard of excellence in the repair, maintenance, and after-sales support of Black+Decker home and kitchen appliances. We deliver professional appliance servicing, warranty support, out-of-warranty repairs, and genuine spare parts to ensure the highest level of customer satisfaction.
              </p>
              <p className="text-[#555555] leading-relaxed">
                Our workshop is fully equipped with advanced diagnostic tools and staffed by experienced technicians who adhere strictly to manufacturer standards. We prioritize safety, efficiency, and customer-focused service, ensuring that every Black+Decker appliance we service is returned to optimal performance.
              </p>
            </div>
            
            <div className="w-full lg:w-1/2 relative">
              <div className="overflow-hidden shadow-2xl premium-3d-image bg-white border border-gray-100 p-8">
                <img 
                  src="/1.jpeg" 
                  alt="Workshop Tools" 
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 shadow-[var(--shadow-premium)] border-b-4 border-[var(--color-primary)] hover:shadow-[var(--shadow-premium-hover)] hover:-translate-y-2 transition-all duration-500 ease-out group">
              <Target className="w-16 h-16 text-[var(--color-primary)] mb-6 transition-transform duration-500 group-hover:scale-110" />
              <h3 className="text-2xl font-extrabold mb-4 uppercase" style={{ fontFamily: 'var(--font-heading)' }}>OUR MISSION</h3>
              <p className="text-[#555555] leading-relaxed">
                To provide unparalleled quality and dependable service for Black+Decker appliances. We strive to exceed customer expectations by delivering rapid, precision repairs, genuine parts, and expert technical support that keeps our clients' home and kitchen equipment running flawlessly.
              </p>
            </div>
            
            <div className="bg-white p-10 shadow-[var(--shadow-premium)] border-b-4 border-[#1A1A1A] hover:shadow-[var(--shadow-premium-hover)] hover:-translate-y-2 transition-all duration-500 ease-out group">
              <Eye className="w-16 h-16 text-[#1A1A1A] mb-6 transition-transform duration-500 group-hover:scale-110" />
              <h3 className="text-2xl font-extrabold mb-4 uppercase" style={{ fontFamily: 'var(--font-heading)' }}>OUR VISION</h3>
              <p className="text-[#555555] leading-relaxed">
                To be the most trusted and comprehensive Black+Decker service center in the UAE, recognized for our commitment to technical excellence, outstanding customer care, and being the definitive destination for authentic appliance repair and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Core Values */}
      <CoreValues />

      {/* NEW: Meet The Team */}
      <MeetTheTeam />

      {/* NEW: Authorized Brands Marquee (Reused from Home for consistency) */}
      <AuthorizedBrands />
      
      {/* Statistics / Counter Strip */}
      <StatsSection />
      
    </div>
  )
}
