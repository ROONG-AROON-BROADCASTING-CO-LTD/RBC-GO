'use client';
import { motion } from 'motion/react';
import { IconFrame, type JourneyIconProps } from './IconFrame';
const lineAnimation = {
  normal: { pathLength: 1, opacity: 1 },
  animate: (index: number) => ({
    pathLength: [1, 0, 1],
    opacity: [1, 0, 1],
    transition: { duration: 0.6, delay: index * 0.08 },
  }),
};
export function ScanTextIcon({
  active = false,
  size,
  ...props
}: JourneyIconProps) {
  return (
    <IconFrame size={size} {...props}>
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      {['M7 8h8', 'M7 12h10', 'M7 16h6'].map((d, index) => (
        <motion.path
          animate={active ? 'animate' : 'normal'}
          custom={index}
          d={d}
          initial="normal"
          key={d}
          variants={lineAnimation}
        />
      ))}
    </IconFrame>
  );
}
