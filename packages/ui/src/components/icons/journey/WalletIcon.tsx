'use client';
import { motion } from 'motion/react';
import { IconFrame, type JourneyIconProps } from './IconFrame';
export function WalletIcon({
  active = false,
  size,
  ...props
}: JourneyIconProps) {
  return (
    <IconFrame size={size} {...props}>
      <motion.g
        animate={active ? 'animate' : 'normal'}
        initial="normal"
        style={{ transformOrigin: '12px 12px' }}
        variants={{
          normal: { y: 0, rotate: 0 },
          animate: {
            y: [0, -3, 0],
            rotate: [0, -4, 0],
            transition: {
              duration: 0.55,
              ease: 'easeInOut',
              times: [0, 0.45, 1],
            },
          },
        }}
      >
        <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
        <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
      </motion.g>
    </IconFrame>
  );
}
