import { motion } from 'motion/react';
import { drawVariants, type IconPartsProps } from './types';
export function RouteIcon({ controls }: IconPartsProps) {
  return (
    <>
      <motion.circle
        animate={controls}
        cx="6"
        cy="19"
        r="3"
        transition={{ duration: 0.3, delay: 0.1 }}
        variants={drawVariants}
      />
      <motion.path
        animate={controls}
        d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"
        transition={{ duration: 0.7, delay: 0.5 }}
        variants={drawVariants}
      />
      <motion.circle
        animate={controls}
        cx="18"
        cy="5"
        r="3"
        transition={{ duration: 0.3, delay: 0.1 }}
        variants={drawVariants}
      />
    </>
  );
}
