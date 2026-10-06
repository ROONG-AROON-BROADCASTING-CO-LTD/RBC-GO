import { motion, type Variants } from 'motion/react';
import type { IconPartsProps } from './types';
const sparkle: Variants = {
  normal: { fill: 'none', y: 0 },
  animate: {
    fill: 'currentColor',
    y: [0, -1, 0, 0],
    transition: { duration: 1, bounce: 0.3 },
  },
};
const star: Variants = {
  normal: { opacity: 1, x: 0, y: 0 },
  animate: {
    opacity: [0, 1, 0, 0, 0, 0, 1],
    transition: {
      duration: 2,
      type: 'spring',
      stiffness: 70,
      damping: 10,
      mass: 0.4,
    },
  },
};
export function SparkleIcon({ controls }: IconPartsProps) {
  return (
    <>
      <motion.path
        animate={controls}
        d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
        variants={sparkle}
      />
      <motion.path animate={controls} d="M20 3v4" variants={star} />
      <motion.path animate={controls} d="M22 5h-4" variants={star} />
      <motion.path animate={controls} d="M4 17v2" variants={star} />
      <motion.path animate={controls} d="M5 18H3" variants={star} />
    </>
  );
}
