import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal:not(.observed), .reveal-left:not(.observed), .reveal-group > *:not(.observed)');
      elements.forEach((el) => {
        el.classList.add('observed');
        observer.observe(el);
      });
    };

    // Initial check
    observeElements();

    // Setup MutationObserver to watch for newly added elements (SPA navigation/rendering)
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      // Clean up the .observed class so that StrictMode double-mount works properly
      document.querySelectorAll('.observed').forEach(el => el.classList.remove('observed'));
    };
  }, []);
}
