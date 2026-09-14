import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'
import { ChevronDown, ChevronUp } from 'lucide-react'

export const Route = createFileRoute('/faq')({
  component: FAQ,
})

const generalFaqs = [
  {
    question: "What types of industrial machinery do you repair?",
    answer: "We specialize in the repair and maintenance of industrial electromechanical equipment, including AC and DC motors, generators, water pumps, and various rotating machinery. Our technicians are equipped to handle both common and complex industrial electromechanical issues."
  },
  {
    question: "How do you diagnose motor or machinery problems?",
    answer: "Our diagnostic process involves comprehensive electrical and mechanical testing. For motors, this includes megger testing, surge testing, and vibration analysis. This allows us to accurately identify issues like winding failure, bearing wear, or structural imbalances before proceeding with repairs."
  },
  {
    question: "How long does machinery repair usually take?",
    answer: "Repair times vary based on the complexity of the job. Standard maintenance or minor component replacements can be completed quickly, whereas full motor rewinding or complete generator overhauls may require more time. We always provide an estimated timeline following our initial diagnostic assessment."
  }
];

const serviceFaqs = [
  {
    question: "Do you provide AC and DC motor rewinding services?",
    answer: "Yes, motor rewinding is one of our core specialties. We use premium Class H insulation and advanced VPI (Vacuum Pressure Impregnation) techniques to ensure the rewound motors offer maximum thermal resistance and long-lasting durability."
  },
  {
    question: "Can damaged rotating parts be repaired or replaced?",
    answer: "Absolutely. We offer specialized repair and machining for industrial rotating equipment. Through precision machining, shaft metallizing, and dynamic balancing, we restore worn or damaged rotating components to meet strict OEM specifications."
  },
  {
    question: "Do you provide preventive machinery maintenance?",
    answer: "Yes, we highly recommend our preventive maintenance programs. Regular inspections, load bank testing for generators, and vibration analysis can identify potential faults early, reducing the risk of catastrophic failure and minimizing costly downtime."
  }
];

function AccordionItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-100 mb-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 group">
      <button 
        className="w-full flex justify-between items-center p-5 md:p-6 focus:outline-none text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-lg text-[#1A1A1A] pr-4 group-hover:text-[var(--color-primary)] transition-colors duration-300">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-5 md:p-6 pt-0 border-t border-gray-100 text-[#555555] leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  return (
    <div>
      <SEO 
        title="FAQ" 
        description="Frequently Asked Questions about our motor rewinding, dynamic balancing, and industrial repair services in Dubai." 
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

      {/* Accordions */}
      <section className="section-padding bg-[var(--color-bg-light)]">
        <div className="container-custom max-w-4xl">
          
          <div className="mb-12 animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6 flex items-center">
              <span className="w-8 h-1 bg-[var(--color-primary)] mr-4"></span>
              GENERAL QUESTIONS
            </h2>
            <div className="space-y-4">
              {generalFaqs.map((faq, index) => (
                <AccordionItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6 flex items-center">
              <span className="w-8 h-1 bg-[var(--color-primary)] mr-4"></span>
              SERVICE QUESTIONS
            </h2>
            <div className="space-y-4">
              {serviceFaqs.map((faq, index) => (
                <AccordionItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
