'use client';
import { motion } from 'motion/react';
import { IconFrame, type JourneyIconProps } from './IconFrame';
const draw = {
  normal: { pathLength: 1, opacity: 1, pathOffset: 0 },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    pathOffset: [1, 0],
    transition: { duration: 0.7, delay: 0.1 },
  },
};
export function RouteIcon({
  active = false,
  size,
  ...props
}: JourneyIconProps) {
  return (
    <IconFrame size={size} {...props}>
      <motion.circle
        animate={active ? 'animate' : 'normal'}
        cx="6"
        cy="19"
        initial="normal"
        r="3"
        variants={draw}
      />
      <motion.path
        animate={active ? 'animate' : 'normal'}
        d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"
        initial="normal"
        variants={draw}
      />
      <motion.circle
        animate={active ? 'animate' : 'normal'}
        cx="18"
        cy="5"
        initial="normal"
        r="3"
        variants={draw}
      />
    </IconFrame>
  );
}
