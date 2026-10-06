import { motion } from 'motion/react';
import { lineVariants, type IconPartsProps } from './types';
export function CloseIcon({ controls }: IconPartsProps) {
  return (
    <>
      <motion.path
        animate={controls}
        d="M18 6 6 18"
        transition={{ duration: 0.35 }}
        variants={lineVariants}
      />
      <motion.path
        animate={controls}
        d="m6 6 12 12"
        transition={{ duration: 0.35, delay: 0.2 }}
        variants={lineVariants}
      />
    </>
  );
}
