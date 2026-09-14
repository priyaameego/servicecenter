import { Link } from '@tanstack/react-router';

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface PageHeroProps {
  title: string;
  image?: string;
  breadcrumbs: BreadcrumbItem[];
  height?: 'sm' | 'md' | 'lg';
}

const heightMap = {
  sm: 'h-[240px] md:h-[300px]',
  md: 'h-[300px] md:h-[380px]',
  lg: 'h-[340px] md:h-[440px]',
};

export function PageHero({ title, image, breadcrumbs, height = 'md' }: PageHeroProps) {
  return (
    <section className={`premium-inner-hero ${heightMap[height]}`}>
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-40 brightness-110 scale-105"
            loading="eager"
            decoding="async"
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-[3] text-center px-4 animate-fade-in-up">
        {/* Eyebrow accent line */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="w-8 h-px bg-[var(--color-primary)]" />
          <span className="text-[var(--color-primary)] font-bold uppercase tracking-[0.25em] text-[10px]">
            ServiceCenter.ae
          </span>
          <span className="w-8 h-px bg-[var(--color-primary)]" />
        </div>

        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-white uppercase tracking-tight leading-tight drop-shadow-lg mb-5">
          {title}
        </h1>

        {/* Premium Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="premium-breadcrumb justify-center">
            {breadcrumbs.map((crumb, i) => (
              <li key={i} className="flex items-center gap-2">
                {i > 0 && <span className="premium-breadcrumb-sep" />}
                {crumb.to ? (
                  <Link to={crumb.to as any} className="hover:text-white transition-colors duration-300">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
