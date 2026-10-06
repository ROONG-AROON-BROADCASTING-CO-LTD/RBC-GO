import { motion } from 'motion/react';
import type { IconPartsProps } from './types';
export function ChevronIcon({ controls }: IconPartsProps) {
  return (
    <motion.path
      animate={controls}
      d="m9 18 6-6-6-6"
      transition={{ times: [0, 0.4, 1], duration: 0.5 }}
      variants={{ normal: { x: 0 }, animate: { x: [0, 2, 0] } }}
    />
  );
}
