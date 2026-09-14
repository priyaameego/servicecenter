import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'
import { Plus, Minus, Phone, Mail } from 'lucide-react'
import { dubaiBranch } from '../data/business'
import { StillHaveQuestions } from '../sections/faq/StillHaveQuestions'
import { EmergencyBanner } from '../sections/faq/EmergencyBanner'

export const Route = createFileRoute('/faq')({
  component: FAQ,
})

const faqCategories = [
  {
    category: 'General Questions',
    faqs: [
      {
        question: 'What types of equipment do you repair and service?',
        answer: 'We specialize in the repair, maintenance, and diagnostics of power tools, home appliances, and electrical equipment. As an authorized service center, we handle everything from power drills and saws to blenders, vacuum cleaners, and pressure washers.',
      },
      {
        question: 'Are you an authorized service center?',
        answer: 'Yes. ServiceCenter.ae is a fully authorized service center and genuine spare parts provider for top international brands including Stanley, Black+Decker, and DeWalt. Our technicians are factory-trained and certified.',
      },
      {
        question: 'Where are you located?',
        answer: 'We are located at Building W04, Shop 08, Al Warsan Street, Russia Cluster, Dubai International City, Dubai — UAE. You can also reach us via Toll Free: 800 2527 or at Support@servicenter.ae.',
      },
      {
        question: 'What are your working hours?',
        answer: 'Our service center is open Monday to Saturday from 8:00 AM to 6:00 PM. For urgent queries, you can reach us via our toll-free number or email at any time.',
      },
      {
        question: 'How long does repair usually take?',
        answer: 'Repair times vary based on the complexity of the issue and parts availability. Standard diagnostics and minor repairs are often completed within 24-48 hours. If specialized OEM parts need to be ordered, we will provide you with a clear timeline and cost estimate upfront.',
      },
    ],
  },
  {
    category: 'Services & Technical',
    faqs: [
      {
        question: 'Do you service DeWalt, Stanley, and Black+Decker tools?',
        answer: 'Absolutely. We are an authorized service partner for DeWalt, Stanley, and Black+Decker. We have direct access to their diagnostic software, schematics, and genuine replacement parts to ensure your tools are serviced to exact manufacturer specifications.',
      },
      {
        question: 'How does the repair process work?',
        answer: 'Bring your tool or appliance to our Dubai service center. Our technicians will perform a comprehensive diagnostic inspection to identify the fault. We then provide you with a detailed repair quotation. Once approved, we proceed with the repair using genuine parts, followed by rigorous testing before returning the equipment to you.',
      },
      {
        question: 'Do you provide warranty service?',
        answer: 'Yes, we handle in-warranty repairs for our authorized brands (Stanley, Black+Decker, DeWalt) provided you have valid proof of purchase and the issue is covered under the manufacturer\'s warranty terms.',
      },
      {
        question: 'Can I get genuine spare parts from you?',
        answer: 'Yes. We stock a comprehensive inventory of genuine OEM spare parts, including batteries, chargers, switches, motors, and casing components. Using genuine parts ensures the longevity and safety of your equipment.',
      },
      {
        question: 'What should I do if my power tool stops working?',
        answer: 'First, check for obvious issues like a depleted battery, tripped circuit breaker, or damaged power cord. If the tool still doesn\'t operate, do not attempt to open or modify the tool yourself, as this can void your warranty and pose a safety risk. Bring it to our service center for professional diagnosis.',
      },
      {
        question: 'Do you provide maintenance services?',
        answer: 'Yes. Routine maintenance is crucial for professional equipment. We offer cleaning, lubrication, brush replacement, and calibration services to keep your tools operating at peak efficiency and prevent unexpected breakdowns.',
      },
    ],
  },
  {
    category: 'Quality & Warranty',
    faqs: [
      {
        question: 'Do you offer a warranty on repairs?',
        answer: 'Yes. We stand by the quality of our work. We offer a standard warranty on all out-of-warranty repair services and the replacement parts we install. If the same issue reoccurs within the warranty period, we will address it promptly.',
      },
      {
        question: 'Are your technicians certified?',
        answer: 'Yes. Our technical team undergoes rigorous and continuous training directly from the manufacturers (including Stanley, Black+Decker, and DeWalt) to stay updated on the latest tool technologies, repair protocols, and safety standards.',
      },
      {
        question: 'Do you use genuine parts?',
        answer: 'Yes, exclusively. We use only high-quality genuine parts in all our repairs to ensure performance, safety, and compliance with manufacturer standards.',
      },
    ],
  },
]

function AccordionItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border-b border-gray-100 last:border-b-0 transition-all duration-300 ${
        isOpen ? 'bg-white' : 'bg-white hover:bg-gray-50/50'
      }`}
    >
      <button
        className="w-full flex justify-between items-start gap-4 px-7 py-6 text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {/* Number + Question */}
        <div className="flex items-start gap-4 flex-1">
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)] font-bold text-xs mt-0.5">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span
            className={`font-bold text-base leading-snug transition-colors duration-300 ${
              isOpen ? 'text-[var(--color-primary)]' : 'text-[#1A1A1A] group-hover:text-[var(--color-primary)]'
            }`}
            style={{ fontFamily: 'var(--font-subheading)' }}
          >
            {question}
          </span>
        </div>

        {/* Toggle icon */}
        <span
          className={`flex-shrink-0 w-7 h-7 flex items-center justify-center border transition-all duration-300 mt-0.5 ${
            isOpen
              ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white'
              : 'bg-white border-gray-200 text-gray-400 group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)]'
          }`}
        >
          {isOpen
            ? <Minus className="w-3.5 h-3.5" />
            : <Plus className="w-3.5 h-3.5" />
          }
        </span>
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-7 pb-7 pl-[4.75rem]">
          <p className="text-[#555555] text-sm leading-[1.85]">{answer}</p>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <SEO
        title="FAQ's"
        description="Frequently asked questions about ServiceCenter.ae — Dubai's authorized repair center for AC/DC motors, generators, water pumps, power tools and industrial machinery."
        path="/faq"
      />
      <PageHero
        title="FAQ's"
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: "FAQ's" },
        ]}
      />

      {/* Intro */}
      <section className="section-padding bg-[var(--color-bg-light)]">
        <div className="container-custom max-w-5xl">

          <div className="text-center mb-14">
            <span className="section-eyebrow">Got Questions?</span>
            <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="section-divider-center mb-5" />
            <p className="text-[#555555] max-w-2xl mx-auto text-sm leading-[1.85]">
              Find answers to the most common questions about our services, repair process, quality standards, and certifications. Can't find what you're looking for? Contact us directly.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-10">
            {faqCategories.map((cat) => (
              <div key={cat.category}>
                {/* Category heading */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="w-1 h-8 bg-[var(--color-primary)] flex-shrink-0" />
                  <h3
                    className="text-xl font-bold text-[#111111] uppercase tracking-wide"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {cat.category}
                  </h3>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* Accordion block */}
                <div className="bg-white border border-gray-100 shadow-[var(--shadow-premium)] divide-y divide-gray-100">
                  {cat.faqs.map((faq, i) => (
                    <AccordionItem key={i} question={faq.question} answer={faq.answer} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* NEW: Still Have Questions */}
      <StillHaveQuestions />

      {/* NEW: Emergency Banner */}
      <EmergencyBanner />

    </div>
  )
}
