import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'
import { Plus, Minus, CheckCircle2 } from 'lucide-react'

export const Route = createFileRoute('/faq')({
  component: FAQ,
})

const faqCategories = [
  {
    category: 'General Service Questions',
    faqs: [
      {
        question: 'What Black+Decker products do you service?',
        answer: 'We provide service for a wide range of Black+Decker home, kitchen, garment-care, cleaning and selected home-comfort appliances, subject to model, condition and parts availability.',
      },
      {
        question: 'What happens when I bring my appliance for repair?',
        answer: 'The appliance is inspected and diagnosed first. After diagnosis, the required repair is discussed and, where applicable, approved before repair and parts replacement. The appliance is then tested before collection.',
      },
      {
        question: 'Do you service Black+Decker kitchen appliances?',
        answer: 'Yes. Service capabilities include selected Black+Decker kitchen appliances such as blenders, mixers, grinders, choppers, juicers, food processors, air fryers, kettles, toasters, coffee makers and rice cookers, subject to model and serviceability.',
      },
      {
        question: 'Do you service Black+Decker vacuum cleaners?',
        answer: 'Yes, selected Black+Decker vacuum and floor-care appliances can be serviced depending on the model, condition and spare-parts availability.',
      },
    ],
  },
  {
    category: 'Warranty & Parts',
    faqs: [
      {
        question: 'Do you provide Black+Decker warranty service?',
        answer: 'For eligible Black+Decker products, warranty inspection and service are provided according to the applicable warranty terms and conditions.',
      },
      {
        question: 'Do you repair Black+Decker appliances outside warranty?',
        answer: 'Yes. Out-of-warranty Black+Decker appliances can be inspected and serviced, subject to product condition and availability of suitable spare parts.',
      },
      {
        question: 'Do you use genuine Black+Decker spare parts?',
        answer: 'Genuine Black+Decker spare parts are used where available and appropriate for the applicable service requirement.',
      },
      {
        question: 'What should I bring for warranty service?',
        answer: 'Bring the appliance and the required proof of purchase. Our service team will guide you through the applicable warranty process.',
      },
    ],
  },
];

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      form.reset(); // Clear the form data
      // Reset after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 800);
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <SEO
        title="FAQ's"
        description="Frequently asked questions about ServiceCenter.ae — Dubai's authorized repair center for AC/DC motors, generators, water pumps, power tools and industrial machinery."
        path="/faq"
      />
      <PageHero
        title="FAQ's"
        image="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2000&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: "FAQ's" },
        ]}
      />

      {/* Main FAQ Layout */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          
          {/* TOP ROW: Title & Features + Image */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20 reveal">
            
            {/* Left Content */}
            <div className="flex-1">
              <div className="w-10 h-6 bg-[var(--color-primary)] mb-6 transform -skew-x-12" />
              <span className="text-gray-500 uppercase tracking-widest text-sm mb-2 block font-semibold">
                FEEL FREE TO ASK US
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#111111] uppercase leading-tight mb-10">
                FREQUENTLY ASKED QUESTIONS
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['Quality', 'Accuracy', 'Safety', 'Reliance'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full border-2 border-[var(--color-primary)] text-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-bold text-sm text-[#111111]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-[450px] relative">
              {/* Black offset block */}
              <div className="absolute -bottom-8 -right-8 w-full h-full bg-[#1A1A1A] z-0 hidden md:block" />
              
              {/* Image with red border */}
              <div className="relative z-10 border-4 border-[var(--color-primary)]">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" 
                  alt="Appliance Repair Setup" 
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>


          {/* BOTTOM ROW: FAQ Accordion + Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start reveal-group">
            
            {/* Left Column: FAQs */}
            <div>
              {/* Header block */}
              <div className="flex items-center gap-6 mb-10">
                <div className="w-20 h-20 bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a8.96 8.96 0 01-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.496 1.508 1.333 1.508 2.316V18" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading uppercase text-[#111111] leading-none mb-2">
                    GENERAL QUESTIONS
                  </h3>
                  <p className="text-gray-500 text-sm">Frequently asked questions</p>
                </div>
              </div>

              {/* Accordions */}
              <div className="space-y-8">
                {faqCategories.map((cat) => (
                  <div key={cat.category}>
                    <h4 className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
                      {cat.category}
                    </h4>
                    <div className="border border-gray-100 bg-white">
                      {cat.faqs.map((faq, i) => (
                        <AccordionItem key={i} question={faq.question} answer={faq.answer} index={i} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white p-8 md:p-10 border border-gray-100 shadow-[var(--shadow-premium)] relative group">
              {/* Top border hover effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              {/* Header block */}
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0 border border-[var(--color-primary)]/20 rounded-full group-hover:bg-[var(--color-primary)] transition-colors duration-500">
                  <svg className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading uppercase text-[#111111] leading-none mb-2">
                    Ask Us
                  </h3>
                  <p className="text-gray-500 text-sm">Quick contact form</p>
                </div>
              </div>

              {isSuccess && (
                <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 flex items-start text-left animate-in fade-in slide-in-from-top-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-green-700 font-medium text-sm">Message sent successfully! We'll reply shortly.</p>
                </div>
              )}

              {/* Form */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-800 text-xs uppercase tracking-wider mb-2 font-bold">Your name</label>
                  <input required type="text" disabled={isSubmitting} className="w-full bg-gray-50 border border-gray-200 p-3 text-sm outline-none focus:border-[var(--color-primary)] focus:bg-white transition-all disabled:opacity-50" />
                </div>
                <div>
                  <label className="block text-gray-800 text-xs uppercase tracking-wider mb-2 font-bold">Your email</label>
                  <input required type="email" disabled={isSubmitting} className="w-full bg-gray-50 border border-gray-200 p-3 text-sm outline-none focus:border-[var(--color-primary)] focus:bg-white transition-all disabled:opacity-50" />
                </div>
                <div>
                  <label className="block text-gray-800 text-xs uppercase tracking-wider mb-2 font-bold">Subject</label>
                  <input required type="text" disabled={isSubmitting} className="w-full bg-gray-50 border border-gray-200 p-3 text-sm outline-none focus:border-[var(--color-primary)] focus:bg-white transition-all disabled:opacity-50" />
                </div>
                <div>
                  <label className="block text-gray-800 text-xs uppercase tracking-wider mb-2 font-bold">Your message (optional)</label>
                  <textarea rows={4} disabled={isSubmitting} className="w-full bg-gray-50 border border-gray-200 p-3 text-sm outline-none focus:border-[var(--color-primary)] focus:bg-white transition-all resize-none disabled:opacity-50"></textarea>
                </div>
                <div className="pt-2">
                  <button type="submit" disabled={isSubmitting} className="w-full bg-[#111111] text-white uppercase text-sm font-bold tracking-widest px-8 py-4 hover:bg-[var(--color-primary)] hover:shadow-[0_4px_20px_rgba(242,101,34,0.3)] transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none">
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </div>
              </form>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}
