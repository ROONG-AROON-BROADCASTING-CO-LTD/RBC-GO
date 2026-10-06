'use client';

import type { HTMLAttributes, ReactNode } from 'react';
import { motion, useAnimation, type Variants } from 'motion/react';

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

type IconPartsProps = {
  controls: ReturnType<typeof useAnimation>;
};

const drawVariants: Variants = {
  normal: { opacity: 1, pathLength: 1, pathOffset: 0 },
  animate: { opacity: [0, 1], pathLength: [0, 1], pathOffset: [1, 0] },
};

const lineVariants: Variants = {
  normal: { opacity: 1, pathLength: 1 },
  animate: { opacity: [0, 1], pathLength: [0, 1] },
};

function IconCanvas({
  children,
  className = '',
  size = 28,
  ...props
}: Omit<AnimatedWebsiteIconProps, 'name'> & { children: ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className={`icon animated-website-icon ${className}`}
      {...props}
    >
      <svg
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
    </span>
  );
}

// Each animation below is adapted from its corresponding MIT-licensed
// Lucide Animated registry component: https://lucide-animated.com/icons/llms.txt
function LeafParts({ controls }: IconPartsProps) {
  return (
    <motion.g
      animate={controls}
      style={{ transformOrigin: '12px 12px' }}
      transition={{ duration: 1.6, ease: 'easeInOut' }}
      variants={{
        normal: { rotate: 0, x: 0, y: 0 },
        animate: {
          rotate: [0, -8, 4, -3, 0],
          x: [0, 2, -2, 1, 0],
          y: [0, -4, -2, -1, 0],
        },
      }}
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </motion.g>
  );
}

function RouteParts({ controls }: IconPartsProps) {
  return (
    <>
      <motion.circle
        animate={controls}
        cx="6"
        cy="19"
        r="3"
        transition={{ duration: 0.3, delay: 0.1 }}
        variants={drawVariants}
      />
      <motion.path
        animate={controls}
        d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"
        transition={{ duration: 0.7, delay: 0.5 }}
        variants={drawVariants}
      />
      <motion.circle
        animate={controls}
        cx="18"
        cy="5"
        r="3"
        transition={{ duration: 0.3, delay: 0.1 }}
        variants={drawVariants}
      />
    </>
  );
}

function ScanParts({ controls }: IconPartsProps) {
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

function MenuParts({ controls }: IconPartsProps) {
  const variants: Variants = {
    normal: { opacity: 1, rotate: 0, y: 0 },
    animate: (line: number) => ({
      opacity: line === 2 ? 0 : 1,
      rotate: line === 1 ? 45 : line === 3 ? -45 : 0,
      y: line === 1 ? 6 : line === 3 ? -6 : 0,
      transition: { type: 'spring', stiffness: 260, damping: 20 },
    }),
  };

  return (
    <>
      {[6, 12, 18].map((y, index) => (
        <motion.line
          animate={controls}
          custom={index + 1}
          key={y}
          variants={variants}
          x1="4"
          x2="20"
          y1={y}
          y2={y}
        />
      ))}
    </>
  );
}

function CloseParts({ controls }: IconPartsProps) {
  return (
    <>
      <motion.path
        animate={controls}
        d="M18 6 6 18"
        transition={{ duration: 0.35 }}
        variants={lineVariants}
      />
      <motion.path
        animate={controls}
        d="m6 6 12 12"
        transition={{ duration: 0.35, delay: 0.2 }}
        variants={lineVariants}
      />
    </>
  );
}

function SearchParts({ controls }: IconPartsProps) {
  return (
    <motion.g
      animate={controls}
      transition={{ duration: 1, bounce: 0.3 }}
      variants={{
        normal: { x: 0, y: 0 },
        animate: { x: [0, 0, -3, 0], y: [0, -4, 0, 0] },
      }}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </motion.g>
  );
}

function ChevronParts({ controls }: IconPartsProps) {
  return (
    <motion.path
      animate={controls}
      d="m9 18 6-6-6-6"
      transition={{ times: [0, 0.4, 1], duration: 0.5 }}
      variants={{ normal: { x: 0 }, animate: { x: [0, 2, 0] } }}
    />
  );
}

function MotorcycleParts({ controls }: IconPartsProps) {
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

function BoltParts({ controls }: IconPartsProps) {
  return (
    <motion.path
      animate={controls}
      d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
      transition={{ duration: 0.6 }}
      variants={lineVariants}
    />
  );
}

function ChartParts({ controls }: IconPartsProps) {
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

function ReceiptParts({ controls }: IconPartsProps) {
  return (
    <>
      <motion.path
        animate={controls}
        d="M12 17V7"
        transition={{ delay: 0.5, duration: 0.4 }}
        variants={drawVariants}
      />
      <motion.path
        animate={controls}
        d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"
        transition={{ duration: 0.6 }}
        variants={lineVariants}
      />
      <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />
    </>
  );
}

function TagParts({ controls }: IconPartsProps) {
  return (
    <>
      <motion.path
        animate={controls}
        d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        style={{ transformOrigin: '12px 12px' }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 80, damping: 13 }}
        variants={{ normal: { rotate: 0 }, animate: { rotate: 180 } }}
      />
      <path d="m15 9-6 6M9 9h.01M15 15h.01" />
    </>
  );
}

function PeopleParts({ controls }: IconPartsProps) {
  const variants: Variants = {
    normal: { translateX: 0 },
    animate: {
      translateX: [-6, 0],
      transition: { delay: 0.1, type: 'spring', stiffness: 200, damping: 13 },
    },
  };
  return (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <motion.path
        animate={controls}
        d="M22 21v-2a4 4 0 0 0-3-3.87"
        variants={variants}
      />
      <motion.path
        animate={controls}
        d="M16 3.13a4 4 0 0 1 0 7.75"
        variants={variants}
      />
    </>
  );
}

function SparkleParts({ controls }: IconPartsProps) {
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

function ChatParts({ controls }: IconPartsProps) {
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

const iconParts: Record<
  AnimatedWebsiteIconName,
  (props: IconPartsProps) => ReactNode
> = {
  leaf: LeafParts,
  route: RouteParts,
  scan: ScanParts,
  menu: MenuParts,
  close: CloseParts,
  search: SearchParts,
  chevron: ChevronParts,
  motorcycle: MotorcycleParts,
  bolt: BoltParts,
  chart: ChartParts,
  receipt: ReceiptParts,
  tag: TagParts,
  people: PeopleParts,
  sparkle: SparkleParts,
  chat: ChatParts,
};

export function AnimatedWebsiteIcon({
  name,
  className,
  size,
  ...props
}: AnimatedWebsiteIconProps) {
  const controls = useAnimation();
  const IconParts = iconParts[name];

  return (
    <IconCanvas
      className={className}
      onMouseEnter={() => void controls.start('animate')}
      onMouseLeave={() => void controls.start('normal')}
      size={size}
      {...props}
    >
      <IconParts controls={controls} />
    </IconCanvas>
  );
}
