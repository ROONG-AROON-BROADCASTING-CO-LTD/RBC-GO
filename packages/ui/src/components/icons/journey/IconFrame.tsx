import type { HTMLAttributes, ReactNode } from 'react';

export type JourneyIconProps = HTMLAttributes<HTMLDivElement> & {
  active?: boolean;
  size?: number;
};

export function IconFrame({
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
