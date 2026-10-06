import { motion } from 'motion/react';
import type { IconPartsProps } from './types';
export function SearchIcon({ controls }: IconPartsProps) {
  return (
    <motion.g
      animate={controls}
      transition={{ duration: 1, bounce: 0.3 }}
      variants={{
        normal: { x: 0, y: 0 },
        animate: { x: [0, 0, -3, 0], y: [0, -4, 0, 0] },
      }}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </motion.g>
  );
}
