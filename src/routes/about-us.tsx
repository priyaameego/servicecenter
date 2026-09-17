import { useState, useEffect, useRef } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { SEO } from '../components/SEO'
import { Home, CheckCircle2, Check, UserCheck, FileText } from 'lucide-react'
import { AuthorizedBrands } from '../sections/home/AuthorizedBrands'

export const Route = createFileRoute('/about-us')({
  component: AboutUs,
})

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const nodeRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.3 }
    )
    if (nodeRef.current) observer.observe(nodeRef.current)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return
    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const easeOut = progress * (2 - progress)
      setCount(Math.floor(easeOut * end))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [hasStarted, end, duration])

  return (
    <span ref={nodeRef}>
      {count >= 1000 ? count.toLocaleString() : count}
    </span>
  )
}

const certifications = [
  { id: 1, text: 'ISO – 9001:2015 (Quality management systems)' },
  { id: 2, text: 'ISO – 14001:2015 (Environmental management systems)' },
  { id: 3, text: 'ISO – 27001:2022 (Information security, cybersecurity and privacy protection)' },
  { id: 4, text: 'ISO – 45001:2018 (Occupational health and safety management systems)' },
  { id: 5, text: 'Fire Fighting' },
  { id: 6, text: 'First Aid' }
]

const missionGallery = [
  { src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop', alt: 'Machinery parts' },
  { src: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=600&auto=format&fit=crop', alt: 'Electrical testing lab' },
  { src: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=600&auto=format&fit=crop', alt: 'Electronic equipment test' },
  { src: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=600&auto=format&fit=crop', alt: 'Engine piston and assembly' },
  { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop', alt: 'Sensor diagnostics' },
  { src: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=600&auto=format&fit=crop', alt: 'Industrial machinery unit' }
]

function AboutUs() {
  return (
    <div className="flex flex-col w-full bg-white">
      <SEO 
        title="About Us" 
        description="Since 1974, providing reliable electromechanical repair, maintenance, and precision services across the UAE." 
        path="/about-us" 
      />

      {/* 1. LHE Style Hero Banner */}
      <section className="relative h-[280px] md:h-[360px] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2000&auto=format&fit=crop" 
            alt="About Us" 
            className="w-full h-full object-cover brightness-40"
          />
          <div className="absolute inset-0 bg-[#0c121e]/65" />
        </div>
        
        <div className="relative z-10 container-custom">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 uppercase tracking-wider drop-shadow-md font-sans">
            ABOUT US
          </h1>
          <div className="flex items-center justify-center text-white/90 text-sm md:text-base font-semibold uppercase tracking-wider space-x-2">
            <Home className="w-4 h-4" />
            <span>&rarr;</span>
            <span>ABOUT US</span>
          </div>
        </div>
      </section>

      {/* 2. OUR HISTORY Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6">
              <div className="w-5 h-6 bg-[var(--color-primary)] -skew-x-12 mb-3" />
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase block mb-2">
                ABOUT US
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#111] uppercase tracking-tight mb-6">
                OUR HISTORY
              </h2>
              
              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light mb-8">
                Since establishing the company in the year of 1974 in Abu Dhabi, United Arab Emirates, Light House Electrical Co. has a long time history of providing services and solutions to the full satisfaction of all our clients in industry, military and marine applications.
              </p>

              {/* 4 Items Check List */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                {['Quality', 'Accuracy', 'Safety', 'Reliance'].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                    <span className="font-bold text-gray-900 text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Images (2 Photos Side-by-Side) */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="overflow-hidden shadow-lg group aspect-square bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop" 
                    alt="Engine and gears" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="overflow-hidden shadow-lg group aspect-square bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=800&auto=format&fit=crop" 
                    alt="Motor rotor shafts" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MISSION & VISIONS Section */}
      <section className="py-20 md:py-28 bg-white border-t border-gray-100">
        <div className="container-custom max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left 6-Image Gallery (3 Columns x 2 Rows) */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-3 gap-3">
                {missionGallery.map((item, idx) => (
                  <div key={idx} className="aspect-square overflow-hidden shadow-sm bg-gray-100 group">
                    <img 
                      src={item.src} 
                      alt={item.alt} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6">
              <div className="w-5 h-6 bg-[var(--color-primary)] -skew-x-12 mb-3" />
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase block mb-2">
                ABOUT US
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#111] uppercase tracking-tight mb-6">
                MISSION &amp; VISIONS
              </h2>

              <div className="space-y-4 text-gray-600 text-base leading-relaxed font-light">
                <p>
                  We are a fully equipped industrial services company that offer a full range of products and services tailored to increase productivity and reliability of our customers. Our values of quality and service are reflected in the solutions we provide and the commitment we make to our customers.
                </p>
                <p>
                  Our goal is achieving the highest possible performance in all works carried out with the best standards of equipment and highly professional trained employees.
                </p>
                <p>
                  We target to create long term business relations with all our customers to their uncompromised satisfactions, offering the highest standards services and workmanship.
                </p>
              </div>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
                {['REPAIR', 'MAINTENANCE', 'AC & DC MOTORS', 'WATER PUMPS'].map((feat) => (
                  <div key={feat} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[var(--color-primary)] flex items-center justify-center shrink-0 shadow-sm">
                      <Check className="w-5 h-5 text-white stroke-[2.5]" />
                    </div>
                    <span className="font-extrabold text-[#111] text-base uppercase tracking-wider">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. OUR MOTIVE & COUNTERS Section */}
      <section className="py-20 md:py-28 bg-[#f4f4f4]">
        <div className="container-custom max-w-6xl mx-auto px-4">
          <div className="bg-white p-10 md:p-16 shadow-2xl border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Motive Text & Button */}
              <div className="lg:col-span-6">
                <span className="text-gray-500 text-xl md:text-2xl uppercase tracking-wider font-light block mb-1">
                  OUR
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#111] uppercase tracking-tight mb-4">
                  MOTIVE
                </h2>
                <p className="text-gray-600 text-base md:text-lg font-light mb-8 max-w-md leading-relaxed">
                  Prioritizing Your Convenience: Easy On-Site Tool Collection and Delivery
                </p>
                <a 
                  href="tel:+9718002527" 
                  className="inline-flex items-center justify-center border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white font-bold px-8 py-3.5 text-sm uppercase tracking-wider transition-all duration-300"
                >
                  CALL NOW
                </a>
              </div>

              {/* Right Column: 3 Counters */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center pt-6 lg:pt-0 border-t lg:border-t-0 border-gray-100">
                <div>
                  <div className="text-5xl md:text-6xl font-light text-[#111] mb-2 leading-none">
                    <CountUp end={1500} /><span className="text-[var(--color-primary)] font-light ml-1">+</span>
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-widest mt-2">
                    CUSTOMERS
                  </div>
                </div>

                <div>
                  <div className="text-5xl md:text-6xl font-light text-[#111] mb-2 leading-none">
                    <CountUp end={30} /><span className="text-[var(--color-primary)] font-light ml-1">+</span>
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-widest mt-2">
                    TEAM MEMBERS
                  </div>
                </div>

                <div>
                  <div className="text-5xl md:text-6xl font-light text-[#111] mb-2 leading-none">
                    <CountUp end={10} /><span className="text-[var(--color-primary)] font-light ml-1">+</span>
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-widest mt-2">
                    SERVICES
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. Certifications Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Title */}
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#111] tracking-tight">
                Certifications
              </h2>
            </div>

            {/* Right Numbered List */}
            <div className="lg:col-span-8 space-y-6">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex items-center space-x-5 border-b border-gray-100 pb-5 last:border-b-0">
                  <div className="w-11 h-11 rounded-full bg-[var(--color-primary)] text-white font-bold text-base flex items-center justify-center shrink-0 shadow-sm">
                    {cert.id}
                  </div>
                  <p className="text-gray-800 text-base md:text-lg font-medium leading-normal">
                    {cert.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 6. We're Hiring Banner */}
      <section className="py-16 bg-[#1d1d1d] text-white">
        <div className="container-custom max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-5 text-center md:text-left">
            <UserCheck className="w-12 h-12 text-[var(--color-primary)] shrink-0 hidden sm:block" />
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                We're Hiring, <span className="text-[var(--color-primary)]">Join Our Talent Team</span>
              </h3>
              <p className="text-gray-300 text-base font-light mt-1">
                Feel free to contact us and send your resume
              </p>
            </div>
          </div>

          <Link 
            to="/contact-us" 
            className="inline-flex items-center space-x-2 bg-white text-[#1d1d1d] hover:bg-[var(--color-primary)] hover:text-white font-bold px-8 py-4 uppercase text-sm tracking-wider transition-all duration-300 shadow-md shrink-0"
          >
            <FileText className="w-4 h-4" />
            <span>SEND RESUME</span>
          </Link>
        </div>
      </section>

      {/* 7. Client / Partner Logos Marquee */}
      <section className="py-12 bg-[#eeeeee] border-t border-gray-200">
        <AuthorizedBrands />
      </section>

    </div>
  )
}
