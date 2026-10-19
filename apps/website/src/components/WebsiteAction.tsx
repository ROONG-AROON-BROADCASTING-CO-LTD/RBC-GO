'use client';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { useRef } from 'react';
import { ArrowRightIcon } from '@stackbuild/ui/icons';
import { motion } from 'motion/react';

const MotionLink = motion.create(Link);

type ArrowHandle = { startAnimation: () => void; stopAnimation: () => void };
export function WebsiteAction({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
}) {
  const arrowRef = useRef<ArrowHandle>(null);
  return (
    <MotionLink
      whileHover={{ scale: 1.035 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 24 }}
      className={`button ${dark ? 'dark' : 'lime'}`}
      href={href}
      onMouseEnter={() => arrowRef.current?.startAnimation()}
      onMouseLeave={() => arrowRef.current?.stopAnimation()}
    >
      {children}
      <ArrowRightIcon
        ref={arrowRef}
        aria-hidden="true"
        className="icon animated-arrow"
      />
    </MotionLink>
  );
}
