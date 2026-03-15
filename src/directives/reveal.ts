import type { Directive } from 'vue';

const revealDirective: Directive<HTMLElement, string | undefined> = {
  mounted(element, binding) {
    const delay = binding.value ?? '0ms';
    element.style.setProperty('--reveal-delay', delay);
    element.classList.add('reveal-on-scroll');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    );

    observer.observe(element);
  },
};

export default revealDirective;
