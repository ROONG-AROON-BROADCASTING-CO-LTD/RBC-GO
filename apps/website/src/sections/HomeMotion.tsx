'use client';

import { useEffect } from 'react';

export function HomeMotion() {
  useEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | undefined;

    async function setup() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      if (disposed) return;
      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils
          .toArray<HTMLElement>('.page-home [data-home-reveal]')
          .forEach((element) => {
            // Keep server-rendered content visible until its first viewport entry.
            ScrollTrigger.create({
              trigger: element,
              start: 'top 92%',
              once: true,
              onEnter: () => {
                gsap.fromTo(
                  element,
                  { y: 38, opacity: 0.35 },
                  {
                    y: 0,
                    opacity: 1,
                    duration: 0.85,
                    ease: 'power3.out',
                    clearProps: 'transform,opacity',
                  },
                );
              },
            });
          });
        const hero = document.querySelector('.home-hero-content');
        if (hero)
          gsap.to(hero, {
            y: -45,
            ease: 'none',
            scrollTrigger: {
              trigger: '.home-hero',
              start: 'top top',
              end: 'bottom top',
              scrub: 0.7,
            },
          });
      });
      cleanup = () => media.revert();
    }

    void setup();
    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return null;
}
