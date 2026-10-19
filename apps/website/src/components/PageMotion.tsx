'use client';

import { useEffect } from 'react';
import { animate, hover, inView } from 'motion';

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
    const animations = new Set<ReturnType<typeof animate>>();
    const stopObserving = inView(
      nodes,
      (element) => {
        const index = nodes.indexOf(element as HTMLElement);
        const animation = animate(
          element,
          { opacity: [1, 1], y: [26, 0] },
          {
            type: 'tween',
            duration: 0.72,
            delay: (index % 4) * 0.07,
            ease: [0.16, 1, 0.3, 1],
          },
        );
        animations.add(animation);
        void animation.then(() => {
          animation.cancel();
          animations.delete(animation);
        });
      },
      { margin: '0px 0px -8% 0px', amount: 0.12 },
    );
    const stopHover = hover(
      '.button, .round-arrow, .icon-button',
      (element) => {
        const enter = animate(
          element,
          { scale: 1.035 },
          {
            type: 'spring',
            stiffness: 400,
            damping: 24,
          },
        );
        animations.add(enter);
        return () => {
          enter.cancel();
          animations.delete(enter);
          const exit = animate(
            element,
            { scale: 1 },
            {
              type: 'spring',
              stiffness: 400,
              damping: 24,
            },
          );
          animations.add(exit);
        };
      },
    );

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
      stopObserving();
      stopHover();
      animations.forEach((animation) => animation.cancel());
      hero?.removeEventListener('pointermove', updateHeroGlow);
      hero?.style.removeProperty('--hero-pointer-x');
      hero?.style.removeProperty('--hero-pointer-y');
    };
  }, []);

  return null;
}
