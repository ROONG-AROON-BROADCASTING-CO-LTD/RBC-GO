import { motion } from 'motion/react';
import { lineVariants, type IconPartsProps } from './types';
export function ChartIcon({ controls }: IconPartsProps) {
  return (
    <>
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      {['M8 17v-3', 'M13 17V9', 'M18 17V5'].map((d, index) => (
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
