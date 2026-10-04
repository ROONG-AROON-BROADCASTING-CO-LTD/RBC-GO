'use client';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { Icon } from './Icon';
export function WebsiteAction({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <Link className={`button ${dark ? 'dark' : 'lime'}`} href={href}>
      {children}
      <Icon kind="arrow" />
    </Link>
  );
}
