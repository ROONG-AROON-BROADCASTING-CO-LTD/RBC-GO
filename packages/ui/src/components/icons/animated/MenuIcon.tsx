import { motion, type Variants } from 'motion/react';
import type { IconPartsProps } from './types';
const variants: Variants = {
  normal: { opacity: 1, rotate: 0, y: 0 },
  animate: (line: number) => ({
    opacity: line === 2 ? 0 : 1,
    rotate: line === 1 ? 45 : line === 3 ? -45 : 0,
    y: line === 1 ? 6 : line === 3 ? -6 : 0,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  }),
};
export function MenuIcon({ controls }: IconPartsProps) {
  return (
    <>
      {[6, 12, 18].map((y, index) => (
        <motion.line
          animate={controls}
          custom={index + 1}
          key={y}
          variants={variants}
          x1="4"
          x2="20"
          y1={y}
          y2={y}
        />
      ))}
    </>
  );
}
