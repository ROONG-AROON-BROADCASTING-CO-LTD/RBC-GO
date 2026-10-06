import type { HTMLAttributes, ReactNode } from 'react';
import type { Variants } from 'motion/react';

export type AnimatedIconName =
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

export type AnimatedIconProps = HTMLAttributes<HTMLSpanElement> & {
  size?: number;
};

export type IconPartsProps = {
  controls: ReturnType<typeof import('motion/react').useAnimation>;
};
export type IconParts = (props: IconPartsProps) => ReactNode;

export const drawVariants: Variants = {
  normal: { opacity: 1, pathLength: 1, pathOffset: 0 },
  animate: { opacity: [0, 1], pathLength: [0, 1], pathOffset: [1, 0] },
};

export const lineVariants: Variants = {
  normal: { opacity: 1, pathLength: 1 },
  animate: { opacity: [0, 1], pathLength: [0, 1] },
};
