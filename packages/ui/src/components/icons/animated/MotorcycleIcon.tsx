import { motion } from 'motion/react';
import type { IconPartsProps } from './types';
export function MotorcycleIcon({ controls }: IconPartsProps) {
  return (
    <>
      <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16M2 21h13M3 7h11" />
      <motion.path
        animate={controls}
        d="m9 11-2 3h3l-2 3"
        variants={{
          normal: { opacity: 1 },
          animate: {
            opacity: [1, 0.4, 1],
            transition: {
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            },
          },
        }}
      />
    </>
  );
}
