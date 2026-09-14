import { Phone, Mail } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function StillHaveQuestions() {
  return (
    <section className="section-padding bg-[var(--color-bg-light)]">
      <div className="container-custom">
        <div className="bg-white border border-gray-100 shadow-[var(--shadow-premium)] rounded-sm overflow-hidden reveal">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
              <span className="section-eyebrow">Can't Find Your Answer?</span>
              <h2 className="text-3xl font-extrabold text-[#111111] mb-4 uppercase tracking-wide">
                STILL HAVE QUESTIONS?
              </h2>
              <p className="text-[#555555] mb-8 leading-relaxed">
                Our expert technicians are standing by to help. Whether you need a quote on a repair or have a technical question about your equipment, we're here to assist.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                    <Phone className="w-5 h-5 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Call Us Directly</div>
                    <a href="tel:+971501234567" className="text-lg font-bold text-[#111111] hover:text-[var(--color-primary)] transition-colors">
                      +971 50 123 4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                    <Mail className="w-5 h-5 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Email Support</div>
                    <a href="mailto:support@servicecenter.ae" className="text-lg font-bold text-[#111111] hover:text-[var(--color-primary)] transition-colors">
                      support@servicecenter.ae
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <Button to="/contact-us" variant="primary">
                  CONTACT US NOW
                </Button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-auto bg-[#111]">
              <img 
                src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1000&auto=format&fit=crop" 
                alt="Customer Support Technician" 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent w-32 hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
