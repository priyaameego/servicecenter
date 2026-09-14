import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  image: string;
  imageAlt?: string;
  link: string;
}

export function ServiceCard({ title, image, imageAlt, link }: ServiceCardProps) {
  return (
    <div className="group relative bg-white border border-gray-100 shadow-[var(--shadow-premium)] hover:shadow-[var(--shadow-premium-hover)] hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col h-full">
      {/* Image */}
      <div className="overflow-hidden relative h-56 md:h-64 bg-white">
        <img
          src={image}
          alt={imageAlt || title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain bg-white p-5 transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        {/* Hover orange edge */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--color-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-7 flex flex-col justify-between flex-grow border-t border-gray-100">
        <h3 className="text-sm md:text-base font-heading font-extrabold text-[#1A1A1A] tracking-wider uppercase mb-4 group-hover:text-[var(--color-primary)] transition-colors duration-300 leading-snug">
          {title}
        </h3>

        <Link
          to={link as any}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] hover:text-[#1A1A1A] transition-colors duration-300 mt-auto"
        >
          VIEW SERVICE
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
