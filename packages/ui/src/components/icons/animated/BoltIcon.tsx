import { motion } from 'motion/react';
import { lineVariants, type IconPartsProps } from './types';
export function BoltIcon({ controls }: IconPartsProps) {
  return (
    <motion.path
      animate={controls}
      d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
      transition={{ duration: 0.6 }}
      variants={lineVariants}
    />
  );
}
