'use client';

import { motion, useReducedMotion, type HTMLMotionProps } from 'motion/react';

export const rentalEase = [0.16, 1, 0.3, 1] as const;

export function RentalReveal({
  children,
  ...props
}: HTMLMotionProps<'section'>) {
  const reduced = useReducedMotion();
  return (
    <motion.section
      {...props}
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.65, ease: rentalEase }}
    >
      {children}
    </motion.section>
  );
}
