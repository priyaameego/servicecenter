import { Link } from '@tanstack/react-router';
import { MapPin, Phone, Mail, Globe, Clock, ArrowRight, Wrench, Zap, Settings, ChevronRight } from 'lucide-react';
import { dubaiBranch } from '../data/business';

const quickLinks = [
  { label: 'About Us', to: '/about-us' },
  { label: "FAQ's", to: '/faq' },
  { label: 'Quality & Standards', to: '/quality-standards' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact-us' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
];

const serviceLinks = [
  { label: 'AC & DC Motor Repair', to: '/services/ac-dc-motor' },
  { label: 'Generator Maintenance', to: '/services/generators' },
  { label: 'Water Pump Service', to: '/services/water-pumps' },
  { label: 'Compressor & Stator', to: '/services/compressor-stator' },
  { label: 'Dynamic Balancing', to: '/services/dynamic-balancing' },
  { label: 'Power Tool Repair', to: '/services/ac-dc-motor' },
];

export function Footer() {
  return (
    <footer className="relative bg-[#111111] text-gray-400 overflow-hidden">

      {/* === CTA BANNER === */}
      <div className="relative bg-[var(--color-primary)] py-10 md:py-14 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-8 -left-8 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-8 -right-8 w-52 h-52 bg-black/20 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white/70 font-bold uppercase tracking-[0.2em] text-xs mb-1">Dubai's Trusted Repair Experts</p>
            <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-white uppercase leading-tight tracking-tight">
              Quality Only Happens When<br className="hidden md:block" /> You Care Enough To Do Your Best.
            </h2>
          </div>
          <Link
            to={'/contact-us' as any}
            className="flex-shrink-0 inline-flex items-center gap-3 bg-white text-[var(--color-primary)] hover:bg-[#1A1A1A] hover:text-white font-heading font-extrabold uppercase tracking-widest text-sm px-8 py-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group"
          >
            GET A QUOTE
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* === DIVIDER LINE with orange glow === */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-40" />

      {/* === MAIN FOOTER BODY === */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* --- COLUMN 1: Brand --- */}
          <div className="lg:col-span-1">
            {/* Logo in white box */}
            <div className="inline-block bg-white p-4 mb-6 shadow-[0_4px_30px_rgba(242,101,34,0.25)] hover:shadow-[0_8px_40px_rgba(242,101,34,0.45)] transition-shadow duration-500">
              <img
                src="/logo.png"
                alt="ServiceCenter.ae Logo"
                className="h-20 w-auto object-contain"
              />
            </div>

            <p className="text-gray-400 leading-relaxed text-sm mb-6">
              Dubai's premier authorized service center for <span className="text-white font-semibold">AC/DC motors</span>, generators, water pumps, and precision electromechanical machinery repair.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { icon: <Zap className="w-3 h-3" />, label: 'ISO Certified' },
                { icon: <Wrench className="w-3 h-3" />, label: 'Expert Technicians' },
                { icon: <Settings className="w-3 h-3" />, label: 'All Brands' },
              ].map((item) => (
                <span key={item.label} className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold px-3 py-1.5 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors duration-300">
                  {item.icon}
                  {item.label}
                </span>
              ))}
            </div>

            {/* Working hours badge */}
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Clock className="w-4 h-4 text-[var(--color-primary)]" />
              <span>Mon – Sat &nbsp;|&nbsp; <strong className="text-gray-300">8:00 AM – 6:00 PM</strong></span>
            </div>
          </div>

          {/* --- COLUMN 2: Quick Links --- */}
          <div>
            <h4 className="text-white font-heading font-extrabold text-base uppercase tracking-[0.15em] mb-6 flex items-center gap-3">
              <span className="inline-block w-6 h-0.5 bg-[var(--color-primary)]" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to as any}
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-300"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-[var(--color-primary)] transition-colors duration-300 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- COLUMN 3: Services --- */}
          <div>
            <h4 className="text-white font-heading font-extrabold text-base uppercase tracking-[0.15em] mb-6 flex items-center gap-3">
              <span className="inline-block w-6 h-0.5 bg-[var(--color-primary)]" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to as any}
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-300"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-[var(--color-primary)] transition-colors duration-300 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- COLUMN 4: Contact Info --- */}
          <div>
            <h4 className="text-white font-heading font-extrabold text-base uppercase tracking-[0.15em] mb-6 flex items-center gap-3">
              <span className="inline-block w-6 h-0.5 bg-[var(--color-primary)]" />
              Contact Info
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 group">
                <span className="flex-shrink-0 mt-0.5 w-8 h-8 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)]/10 transition-all duration-300">
                  <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                </span>
                <span className="text-sm leading-relaxed text-gray-400">
                  Building W04, Shop 08,<br />
                  Al Warsan Street, Russia Cluster,<br />
                  Dubai International City, Dubai<br />
                  <span className="text-gray-500">PO Box 9924, Dubai – UAE</span>
                </span>
              </li>

              <li className="flex items-center gap-3 group">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)]/10 transition-all duration-300">
                  <Phone className="w-4 h-4 text-[var(--color-primary)]" />
                </span>
                <div className="text-sm">
                  <a href="tel:+97180002527" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors font-semibold block">
                    {dubaiBranch.phone}
                  </a>
                  <a href="tel:8002527" className="text-gray-500 hover:text-[var(--color-primary)] transition-colors text-xs">
                    Toll Free: 800 2527
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3 group">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)]/10 transition-all duration-300">
                  <Mail className="w-4 h-4 text-[var(--color-primary)]" />
                </span>
                <a
                  href={`mailto:${dubaiBranch.email}`}
                  className="text-sm text-gray-400 hover:text-[var(--color-primary)] transition-colors"
                >
                  {dubaiBranch.email}
                </a>
              </li>

              <li className="flex items-center gap-3 group">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)]/10 transition-all duration-300">
                  <Globe className="w-4 h-4 text-[var(--color-primary)]" />
                </span>
                <a
                  href="https://www.servicecenter.ae"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-400 hover:text-[var(--color-primary)] transition-colors"
                >
                  www.servicecenter.ae
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* === BOTTOM BAR === */}
      <div className="border-t border-white/5">
        <div className="container-custom py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <p>
            &copy; {new Date().getFullYear()}{' '}
            <span className="text-gray-400 font-semibold">ServiceCenter.ae</span>
            {' '}— All Rights Reserved. Powered by{' '}
            <span className="text-[var(--color-primary)] font-bold">Al Rowad Technical Services LLC</span>
          </p>
          <div className="flex items-center gap-6">
            <Link to={'/privacy-policy' as any} className="hover:text-[var(--color-primary)] transition-colors">
              Privacy Policy
            </Link>
            <span className="w-px h-3 bg-white/10" />
            <Link to={'/contact-us' as any} className="hover:text-[var(--color-primary)] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* === BACKGROUND DECORATIVE ELEMENTS === */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[var(--color-primary)] rounded-full opacity-[0.02] blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[var(--color-primary)] rounded-full opacity-[0.03] blur-3xl translate-x-1/4 translate-y-1/4" />
      </div>
    </footer>
  );
}
