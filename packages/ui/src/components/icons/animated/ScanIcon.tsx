import { motion } from 'motion/react';
import { lineVariants, type IconPartsProps } from './types';
export function ScanIcon({ controls }: IconPartsProps) {
  return (
    <>
      <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
      {['M7 8h8', 'M7 12h10', 'M7 16h6'].map((d, index) => (
        <motion.path
          animate={controls}
          d={d}
          key={d}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          variants={lineVariants}
        />
      ))}
    </>
  );
}
