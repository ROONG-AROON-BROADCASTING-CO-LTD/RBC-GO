import type { ReactNode } from 'react';
import type { AnimatedIconProps } from './types';

export function IconCanvas({
  children,
  className = '',
  size = 28,
  ...props
}: AnimatedIconProps & { children: ReactNode }) {
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
