'use client';

import { useEffect } from 'react';

const revealSelectors = [
  '.home-hero-content',
  '.fleet-intro',
  '.about-copy',
  '.page-intro',
  '.section-heading',
  '.vehicle-components-heading',
  '.vehicle-components-image',
  '.vehicle-components-list > li',
  '.vehicle-care-heading',
  '.vehicle-care-list > article',
  '.journey-columns > article',
  '.pricing-list > article',
  '.rate-notice',
  '.about-benefits > article',
  '.about-proof-heading',
  '.about-proof-list > article',
  '.manufacturing-gallery-heading',
  '.manufacturing-gallery-grid > figure',
  '.help-content > .search',
  '.help-content > h2',
  '.faq-list > .faq-item',
  '.help-callout',
  '.safety-note',
  '.closing-cta',
  '.footer-main',
  '.footer-bottom',
].join(', ');

export function PageMotion() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) return;

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelectors),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('motion-enter');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8%', threshold: 0.12 },
    );

    nodes.forEach((node, index) => {
      node.classList.add('motion-target');
      node.style.setProperty('--motion-delay', `${(index % 4) * 70}ms`);
      observer.observe(node);
    });

    const hero = document.querySelector<HTMLElement>('.home-hero');
    const updateHeroGlow = (event: PointerEvent) => {
      if (!hero) return;
      const bounds = hero.getBoundingClientRect();
      hero.style.setProperty(
        '--hero-pointer-x',
        `${event.clientX - bounds.left}px`,
      );
      hero.style.setProperty(
        '--hero-pointer-y',
        `${event.clientY - bounds.top}px`,
      );
    };

    hero?.addEventListener('pointermove', updateHeroGlow, { passive: true });

    return () => {
      observer.disconnect();
      hero?.removeEventListener('pointermove', updateHeroGlow);
      nodes.forEach((node) => {
        node.classList.remove('motion-target', 'motion-enter');
        node.style.removeProperty('--motion-delay');
      });
      hero?.style.removeProperty('--hero-pointer-x');
      hero?.style.removeProperty('--hero-pointer-y');
    };
  }, []);

  return null;
}
