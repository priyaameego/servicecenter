import { useState, useEffect, useRef } from 'react';
import { Link } from '@tanstack/react-router';
import { Menu, X, Phone, Mail, Clock, Search, MoreHorizontal } from 'lucide-react';
import { dubaiBranch } from '../data/business';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  // Close more menu on click outside or ESC
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setIsMoreMenuOpen(false);
      }
    };
    
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMoreMenuOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SERVICES', path: '/services' },
    { name: 'ABOUT', path: '/about-us' },
    { name: 'FAQ’s', path: '/faq' },
    { name: 'QUALITY & STANDARDS', path: '/quality-standards' },
    { name: 'BLOG', path: '/blog' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-all duration-300">
      
      {/* 3D Drop Shadow Wrapper for Red Slanted Nav */}
      <div 
        className="hidden lg:block absolute bottom-0 right-0 h-[56px] w-[calc(100%-250px)] xl:w-[calc(100%-350px)] 2xl:w-[calc(100%-450px)] pointer-events-none z-0 filter drop-shadow-[-6px_0_12px_rgba(227,6,19,0.15)]"
      >
        <div 
          className="w-full h-full bg-gradient-to-r from-[var(--color-primary)] to-[#cc0511] pointer-events-auto"
          style={{ clipPath: 'polygon(2.5rem 0, 100% 0, 100% 100%, 0 100%)' }}
        >
          {/* Very subtle inner top highlight for premium metallic/depth feel */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20"></div>
        </div>
      </div>

      <div className="container-custom relative h-[80px] lg:h-[114px]">
        {/* Top Left: Logo */}
        <Link to="/" className="absolute left-4 top-1/2 -translate-y-1/2 lg:top-3 lg:-translate-y-0 z-20 group">
          <img 
            src="/logo.png" 
            alt="Service Center Logo" 
            className="h-16 md:h-20 lg:h-[85px] w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]" 
          />
        </Link>
        
        {/* Top Right: Contact Info (Desktop) */}
        <div className="hidden lg:flex justify-end pt-5 pr-4 w-full z-20">
          <div className="flex space-x-7 xl:space-x-10 text-[15px] font-semibold text-[#444]">
            <div className="flex items-center group">
              <Phone className="w-4 h-4 mr-2.5 text-[var(--color-primary)] stroke-[2] transition-transform duration-300 group-hover:scale-110" />
              <a href={`tel:${dubaiBranch.phone.replace(/\s+/g, '')}`} className="group-hover:text-[var(--color-primary)] transition-colors">
                {dubaiBranch.phone}
              </a>
            </div>
            <div className="flex items-center group">
              <Mail className="w-4 h-4 mr-2.5 text-[var(--color-primary)] stroke-[2] transition-transform duration-300 group-hover:scale-110" />
              <a href={`mailto:${dubaiBranch.email}`} className="group-hover:text-[var(--color-primary)] transition-colors">
                {dubaiBranch.email}
              </a>
            </div>
            <div className="flex items-center group">
              <Clock className="w-4 h-4 mr-2.5 text-[var(--color-primary)] stroke-[2] transition-transform duration-300 group-hover:scale-110" />
              <span>Monday to Saturday 8:00 to 6:00</span>
            </div>
          </div>
        </div>

        {/* Bottom Right: Nav (Desktop) */}
        <div className="hidden lg:flex absolute bottom-0 right-0 h-[56px] w-full justify-end items-center z-20 pr-6 pl-[280px] xl:pl-[380px] 2xl:pl-[480px]">
          <nav className="flex items-center space-x-5 xl:space-x-7 text-white font-heading font-bold text-sm xl:text-base tracking-widest h-full mr-auto">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group h-full flex items-center">
                <Link 
                  to={link.path as any} 
                  className="hover:text-white/90 transition-colors uppercase h-full flex items-center relative after:absolute after:bottom-[16px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </nav>
          
          <div className="flex items-center space-x-3 xl:space-x-5 text-white ml-4 relative" ref={moreMenuRef}>
            
            {/* Search Icon */}
            <button className="relative group p-1.5 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full" aria-label="Search">
              <Search className="w-4 h-4 xl:w-5 xl:h-5 transition-transform duration-300 group-hover:scale-110 relative z-10" />
              <span className="absolute inset-0 bg-white/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            </button>

            {/* Three Dot Menu Trigger */}
            <button 
              className="relative group p-1.5 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full" 
              aria-label="More options"
              onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
            >
              <MoreHorizontal className="w-5 h-5 xl:w-6 xl:h-6 transition-transform duration-300 group-hover:scale-110 relative z-10" />
              <span className="absolute inset-0 bg-white/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            </button>

            {/* Premium Three-Dot Dropdown */}
            <div 
              className={`absolute top-[120%] right-0 mt-2 w-56 bg-white/95 backdrop-blur-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] border border-gray-200/60 rounded-2xl p-2 origin-top-right transition-all duration-200 ease-out ${
                isMoreMenuOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
              }`}
            >
              <Link 
                to="/contact-us"
                className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-red-50 text-gray-700 hover:text-[var(--color-primary)] transition-all duration-200 group/item focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50"
                onClick={() => setIsMoreMenuOpen(false)}
              >
                <div className="bg-gray-100 group-hover/item:bg-red-100 p-2 rounded-lg transition-colors">
                  <Phone className="w-4 h-4 text-gray-600 group-hover/item:text-[var(--color-primary)]" />
                </div>
                <span className="font-heading font-bold text-[13px] uppercase tracking-wide">Contact Us</span>
              </Link>
            </div>

            {/* Desktop Hamburger Icon */}
            <button 
              className="relative group p-1.5 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full"
              aria-label="Open menu"
              onClick={() => setIsMobileMenuOpen(true)}
            >
               <Menu className="w-5 h-5 xl:w-6 xl:h-6 transition-transform duration-300 group-hover:scale-110 relative z-10" />
               <span className="absolute inset-0 bg-white/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle Button (< lg) */}
        <button 
          className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2 text-gray-800 hover:text-[var(--color-primary)] transition-colors z-50 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* ---------------- MOBILE MENU DRAWER ---------------- */}

      {/* Dark Overlay Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-400 ease-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Premium Sliding Drawer */}
      <div 
        className={`fixed top-0 right-0 w-[85%] max-w-[400px] h-[100dvh] bg-white z-[70] shadow-2xl transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-100/80 bg-gray-50/50">
          <span className="font-heading font-extrabold text-xl text-[#1A1A1A] tracking-tighter">
            MENU
          </span>
          <button 
            className="p-2 bg-white border border-gray-200 rounded-full text-gray-500 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-300 focus:outline-none shadow-sm"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-6">
          <nav className="flex flex-col space-y-2">
            {[...navLinks, { name: 'CONTACT', path: '/contact-us' }].map((link) => (
              <div key={link.name} className="flex flex-col">
                <div className="flex justify-between items-center group/moblink">
                  <Link 
                    to={link.path as any}
                    className="py-3 text-[15px] font-heading font-bold text-[#333] hover:text-[var(--color-primary)] transition-colors flex-grow relative"
                    activeProps={{ className: 'text-[var(--color-primary)] before:absolute before:left-[-24px] before:top-1/2 before:-translate-y-1/2 before:h-6 before:w-[3px] before:bg-[var(--color-primary)] before:rounded-r-full' }}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {link.name}
                  </Link>
                </div>
              </div>
            ))}
          </nav>
        </div>
        
        {/* Mobile Drawer Footer CTA */}
        <div className="p-6 bg-gray-50 border-t border-gray-100">
          <a 
            href={`tel:${dubaiBranch.phone.replace(/\s+/g, '')}`} 
            className="flex justify-center items-center bg-[var(--color-primary)] text-white font-heading font-bold px-6 py-4 rounded-xl text-sm hover:bg-[#cc0511] transition-all duration-300 uppercase w-full shadow-[0_4px_14px_0_rgba(227,6,19,0.39)] hover:shadow-[0_6px_20px_rgba(227,6,19,0.23)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="w-4 h-4 mr-2" /> CALL US
          </a>
        </div>
      </div>
    </header>
  );
}
