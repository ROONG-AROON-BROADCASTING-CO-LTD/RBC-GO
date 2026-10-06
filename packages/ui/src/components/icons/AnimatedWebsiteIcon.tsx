'use client';

import type { HTMLAttributes, ReactNode } from 'react';
import { motion, useAnimation } from 'motion/react';

export type AnimatedWebsiteIconName =
  | 'leaf'
  | 'route'
  | 'scan'
  | 'menu'
  | 'close'
  | 'search'
  | 'chevron'
  | 'motorcycle'
  | 'bolt'
  | 'chart'
  | 'receipt'
  | 'tag'
  | 'people'
  | 'sparkle'
  | 'chat';

type AnimatedWebsiteIconProps = HTMLAttributes<HTMLSpanElement> & {
  name: AnimatedWebsiteIconName;
  size?: number;
};

type IconDefinition = {
  children: ReactNode;
  hover: Record<string, unknown>;
};

// Shapes and hover timing are adapted from the MIT-licensed Lucide Animated
// registry: https://lucide-animated.com/icons/llms.txt
const iconDefinitions: Record<AnimatedWebsiteIconName, IconDefinition> = {
  leaf: {
    children: (
      <>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </>
    ),
    hover: {
      rotate: [0, -8, 4, -3, 0],
      x: [0, 2, -2, 1, 0],
      y: [0, -4, -2, -1, 0],
    },
  },
  route: {
    children: (
      <>
        <circle cx="6" cy="19" r="3" />
        <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
        <circle cx="18" cy="5" r="3" />
      </>
    ),
    hover: { pathLength: [0, 1], opacity: [0, 1] },
  },
  scan: {
    children: (
      <>
        <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
        <path d="M7 8h8M7 12h10M7 16h6" />
      </>
    ),
    hover: { scale: [1, 1.1, 1], opacity: [1, 0.7, 1] },
  },
  menu: {
    children: (
      <>
        <path d="M4 6h16M4 12h16M4 18h16" />
      </>
    ),
    hover: { rotate: [0, 4, -4, 0], scale: [1, 0.92, 1] },
  },
  close: {
    children: <path d="M18 6 6 18M6 6l12 12" />,
    hover: { rotate: [0, 90], scale: [1, 0.9, 1] },
  },
  search: {
    children: (
      <>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </>
    ),
    hover: { x: [0, 0, -3, 0], y: [0, -4, 0, 0] },
  },
  chevron: {
    children: <path d="m9 18 6-6-6-6" />,
    hover: { x: [0, 3, 0] },
  },
  motorcycle: {
    children: (
      <>
        <path d="M9 17H5l-2 4M15 17h4l2 4M7 17l2-4h6l2 4M10 5h4l2 5H8l2-5Z" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="m13 5 2-2" />
      </>
    ),
    hover: { x: [0, 2, -2, 0], y: [0, -2, 0] },
  },
  bolt: {
    children: <path d="m13 2-9 12h8l-1 8 9-12h-8l1-8Z" />,
    hover: { scale: [1, 1.18, 0.96, 1], rotate: [0, -6, 4, 0] },
  },
  chart: {
    children: (
      <>
        <path d="M3 3v18h18" />
        <path d="M7 16v-5M12 16V7M17 16v-9" />
      </>
    ),
    hover: { scaleY: [1, 0.55, 1.12, 1], transformOrigin: '12px 19px' },
  },
  receipt: {
    children: (
      <>
        <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z" />
        <path d="M8 7h8M8 11h8M8 15h5" />
      </>
    ),
    hover: { y: [0, -2, 0], rotate: [0, -3, 0] },
  },
  tag: {
    children: (
      <>
        <path d="M20 12 12 20 3 11V4h7l10 8Z" />
        <circle cx="7.5" cy="7.5" r=".5" />
      </>
    ),
    hover: { rotate: [0, -8, 4, 0], y: [0, -2, 0] },
  },
  people: {
    children: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    hover: { scale: [1, 1.08, 1], y: [0, -2, 0] },
  },
  sparkle: {
    children: (
      <path d="m12 3-1.9 5.1L5 10l5.1 1.9L12 17l1.9-5.1L19 10l-5.1-1.9L12 3ZM19 16l-.9 2.1L16 19l2.1.9L19 22l.9-2.1L22 19l-2.1-.9L19 16ZM5 2l-.7 1.3L3 4l1.3.7L5 6l.7-1.3L7 4l-1.3-.7L5 2Z" />
    ),
    hover: { rotate: [0, 18, 0], scale: [1, 1.14, 1] },
  },
  chat: {
    children: (
      <>
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.4Z" />
        <path d="M8 12h.01M12 12h.01M16 12h.01" />
      </>
    ),
    hover: { scale: [1, 1.08, 1], y: [0, -2, 0] },
  },
};

export function AnimatedWebsiteIcon({
  name,
  className = '',
  size = 28,
  ...props
}: AnimatedWebsiteIconProps) {
  const controls = useAnimation();
  const icon = iconDefinitions[name];

  return (
    <span
      aria-hidden="true"
      className={`icon animated-website-icon ${className}`}
      onMouseEnter={() => void controls.start('animate')}
      onMouseLeave={() => void controls.start('normal')}
      {...props}
    >
      <motion.svg
        animate={controls}
        fill="none"
        height={size}
        initial="normal"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        transition={{ duration: 0.48, ease: 'easeInOut' }}
        variants={{ normal: {}, animate: icon.hover }}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {icon.children}
      </motion.svg>
    </span>
  );
}
