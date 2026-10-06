'use client';

import { useAnimation } from 'motion/react';
import { useEffect } from 'react';
import { BoltIcon } from './animated/BoltIcon';
import { ChartIcon } from './animated/ChartIcon';
import { ChatIcon } from './animated/ChatIcon';
import { ChevronIcon } from './animated/ChevronIcon';
import { CloseIcon } from './animated/CloseIcon';
import { IconCanvas } from './animated/IconCanvas';
import { LeafIcon } from './animated/LeafIcon';
import { MenuIcon } from './animated/MenuIcon';
import { MotorcycleIcon } from './animated/MotorcycleIcon';
import { PeopleIcon } from './animated/PeopleIcon';
import { ReceiptIcon } from './animated/ReceiptIcon';
import { RouteIcon } from './animated/RouteIcon';
import { ScanIcon } from './animated/ScanIcon';
import { SearchIcon } from './animated/SearchIcon';
import { SparkleIcon } from './animated/SparkleIcon';
import { TagIcon } from './animated/TagIcon';
import type {
  AnimatedIconName,
  AnimatedIconProps,
  IconParts,
} from './animated/types';

export type AnimatedWebsiteIconName = AnimatedIconName;

const iconParts: Record<AnimatedWebsiteIconName, IconParts> = {
  leaf: LeafIcon,
  route: RouteIcon,
  scan: ScanIcon,
  menu: MenuIcon,
  close: CloseIcon,
  search: SearchIcon,
  chevron: ChevronIcon,
  motorcycle: MotorcycleIcon,
  bolt: BoltIcon,
  chart: ChartIcon,
  receipt: ReceiptIcon,
  tag: TagIcon,
  people: PeopleIcon,
  sparkle: SparkleIcon,
  chat: ChatIcon,
};

type AnimatedWebsiteIconProps = AnimatedIconProps & {
  name: AnimatedWebsiteIconName;
  animateOnHover?: boolean;
  animationState?: 'animate' | 'normal';
  animationTrigger?: boolean | string | number;
};

// Each icon owns its SVG and animation in ./animated; this component only
// selects it and applies the shared hover interaction.
export function AnimatedWebsiteIcon({
  name,
  className,
  size,
  animateOnHover = true,
  animationState = 'animate',
  animationTrigger,
  ...props
}: AnimatedWebsiteIconProps) {
  const controls = useAnimation();
  const IconParts = iconParts[name];

  useEffect(() => {
    if (animationTrigger !== undefined) void controls.start(animationState);
  }, [animationState, animationTrigger, controls]);

  return (
    <IconCanvas
      className={className}
      onMouseEnter={
        animateOnHover ? () => void controls.start('animate') : undefined
      }
      onMouseLeave={
        animateOnHover ? () => void controls.start('normal') : undefined
      }
      size={size}
      {...props}
    >
      <IconParts controls={controls} />
    </IconCanvas>
  );
}
