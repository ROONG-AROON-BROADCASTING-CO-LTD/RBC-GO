import { motion } from 'motion/react';
import type { IconPartsProps } from './types';
export function LeafIcon({ controls }: IconPartsProps) {
  return (
    <motion.g
      animate={controls}
      style={{ transformOrigin: '12px 12px' }}
      transition={{ duration: 1.6, ease: 'easeInOut' }}
      variants={{
        normal: { rotate: 0, x: 0, y: 0 },
        animate: {
          rotate: [0, -8, 4, -3, 0],
          x: [0, 2, -2, 1, 0],
          y: [0, -4, -2, -1, 0],
        },
      }}
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </motion.g>
  );
}
