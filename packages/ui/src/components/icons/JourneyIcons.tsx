'use client';

import type { HTMLAttributes, ReactNode } from 'react';
import { motion } from 'motion/react';

type JourneyIconProps = HTMLAttributes<HTMLDivElement> & { size?: number };

function IconFrame({
  children,
  className,
  size = 28,
  ...props
}: JourneyIconProps & { children: ReactNode }) {
  return (
    <div className={className} {...props}>
      <svg
        aria-hidden="true"
        fill="none"
        height={size}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </svg>
    </div>
  );
}

// Motion paths are adapted from lucide-animated.com registry icons:
// wallet, scan-text and route.
export function WalletIcon({ size, ...props }: JourneyIconProps) {
  return (
    <IconFrame size={size} {...props}>
      <motion.g
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
        whileHover="animate"
      >
        <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
        <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
      </motion.g>
    </IconFrame>
  );
}

export function ScanTextIcon({ size, ...props }: JourneyIconProps) {
  const lineAnimation = {
    normal: { pathLength: 1, opacity: 1 },
    animate: (index: number) => ({
      pathLength: [1, 0, 1],
      opacity: [1, 0, 1],
      transition: { duration: 0.6, delay: index * 0.08 },
    }),
  };

  return (
    <IconFrame size={size} {...props}>
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      {['M7 8h8', 'M7 12h10', 'M7 16h6'].map((d, index) => (
        <motion.path
          key={d}
          custom={index}
          d={d}
          initial="normal"
          variants={lineAnimation}
          whileHover="animate"
        />
      ))}
    </IconFrame>
  );
}

export function RouteIcon({ size, ...props }: JourneyIconProps) {
  const draw = {
    normal: { pathLength: 1, opacity: 1, pathOffset: 0 },
    animate: {
      pathLength: [0, 1],
      opacity: [0, 1],
      pathOffset: [1, 0],
      transition: { duration: 0.7, delay: 0.1 },
    },
  };

  return (
    <IconFrame size={size} {...props}>
      <motion.circle
        cx="6"
        cy="19"
        initial="normal"
        r="3"
        variants={draw}
        whileHover="animate"
      />
      <motion.path
        d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"
        initial="normal"
        variants={draw}
        whileHover="animate"
      />
      <motion.circle
        cx="18"
        cy="5"
        initial="normal"
        r="3"
        variants={draw}
        whileHover="animate"
      />
    </IconFrame>
  );
}
