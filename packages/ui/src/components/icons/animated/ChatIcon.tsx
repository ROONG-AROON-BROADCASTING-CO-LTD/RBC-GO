import { motion } from 'motion/react';
import type { IconPartsProps } from './types';
export function ChatIcon({ controls }: IconPartsProps) {
  return (
    <motion.path
      animate={controls}
      d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
      style={{ transformOrigin: '12px 12px' }}
      variants={{
        normal: { rotate: 0, scale: 1 },
        animate: {
          rotate: [0, -7, 7, 0],
          scale: 1.05,
          transition: {
            rotate: { duration: 0.5, ease: 'easeInOut' },
            scale: { type: 'spring', stiffness: 400, damping: 10 },
          },
        },
      }}
    />
  );
}
