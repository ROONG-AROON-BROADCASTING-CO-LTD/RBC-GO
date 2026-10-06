import { motion } from 'motion/react';
import { drawVariants, lineVariants, type IconPartsProps } from './types';
export function ReceiptIcon({ controls }: IconPartsProps) {
  return (
    <>
      <motion.path
        animate={controls}
        d="M12 17V7"
        transition={{ delay: 0.5, duration: 0.4 }}
        variants={drawVariants}
      />
      <motion.path
        animate={controls}
        d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"
        transition={{ duration: 0.6 }}
        variants={lineVariants}
      />
      <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />
    </>
  );
}
