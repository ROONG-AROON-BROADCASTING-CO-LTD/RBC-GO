import { motion } from 'motion/react';
import type { IconPartsProps } from './types';
export function TagIcon({ controls }: IconPartsProps) {
  return (
    <>
      <motion.path
        animate={controls}
        d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        style={{ transformOrigin: '12px 12px' }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 80, damping: 13 }}
        variants={{ normal: { rotate: 0 }, animate: { rotate: 180 } }}
      />
      <path d="m15 9-6 6M9 9h.01M15 15h.01" />
    </>
  );
}
