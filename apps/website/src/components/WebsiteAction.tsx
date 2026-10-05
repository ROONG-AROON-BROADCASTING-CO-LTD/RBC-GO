'use client';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { useRef } from 'react';
import { ArrowRightIcon } from '@stackbuild/ui/icons';

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
    <Link
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
    </Link>
  );
}
