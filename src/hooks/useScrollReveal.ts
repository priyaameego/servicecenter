import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver that adds `.visible` to every
 * element that has a `.reveal` or `.reveal-left` class.
 * Must be mounted once at the root level.
 */
export function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal, .reveal-left');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));

    // Re-scan after route changes (TanStack Router renders async)
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.visible), .reveal-left:not(.visible)')
        .forEach((el) => observer.observe(el));
    }, 400);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  });
}
