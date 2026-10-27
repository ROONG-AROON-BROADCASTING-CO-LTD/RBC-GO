import type { ReactNode } from 'react';
export type SymbolName =
  | 'search'
  | 'pin'
  | 'car'
  | 'bike'
  | 'boat'
  | 'plane'
  | 'sun'
  | 'bag'
  | 'grid'
  | 'arrow'
  | 'menu'
  | 'close';
export function Symbol({ name }: { name: SymbolName }) {
  const paths: Record<SymbolName, ReactNode> = {
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="7" />
        <path d="m16 16 5 5" />
      </>
    ),
    pin: (
      <>
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    car: (
      <>
        <path d="m4 10 2-6h12l2 6M3 10h18v8H3zM6 18v3m12-3v3M6 14h2m8 0h2" />
      </>
    ),
    bike: (
      <>
        <circle cx="6" cy="17" r="4" />
        <circle cx="18" cy="17" r="4" />
        <path d="m6 17 4-10 5 10M8 7h5m2-4h3l2 14M8 12h10" />
      </>
    ),
    boat: (
      <>
        <path d="m3 14 3 7h12l3-7-9-3-9 3Zm4-1V7h10v6M12 7V2M2 22l4-1 6 1 6-1 4 1" />
      </>
    ),
    plane: (
      <path d="m22 9-8 3-1 8-2 1-1-8-7 3-2-2 9-6V3a2 2 0 0 1 4 0v5l7-1Z" />
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 1v3m0 16v3M1 12h3m16 0h3M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2" />
      </>
    ),
    bag: (
      <>
        <rect x="4" y="7" width="16" height="13" rx="2" />
        <path d="M9 7V3h6v4M4 12h16M9 11v3m6-3v3" />
      </>
    ),
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
    arrow: <path d="m9 5 7 7-7 7" />,
    menu: <path d="M5 6h14M5 12h14M5 18h14" />,
    close: <path d="m5 5 14 14M19 5 5 19" />,
  };
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
