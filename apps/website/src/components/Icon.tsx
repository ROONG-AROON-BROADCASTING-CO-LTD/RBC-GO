import type { CSSProperties } from 'react';
import { ArrowRightIcon } from '@stackbuild/ui/icons';
export type IconKind =
  | 'leaf'
  | 'wallet'
  | 'route'
  | 'scan'
  | 'arrow'
  | 'northeast'
  | 'menu'
  | 'close'
  | 'search'
  | 'chevron'
  | 'bike'
  | 'scooter'
  | 'bolt'
  | 'chart'
  | 'receipt'
  | 'tag'
  | 'people'
  | 'sparkle'
  | 'chat';
/** Static assets exported from the installed Material Icons library; no new dependency. */
export function Icon({
  kind,
  className = '',
}: {
  kind: IconKind;
  className?: string;
}) {
  if (kind === 'arrow') {
    return (
      <ArrowRightIcon
        aria-hidden="true"
        className={`icon animated-arrow ${className}`}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`icon ${className}`}
      style={{ '--icon-url': `url('/icons/${kind}.svg')` } as CSSProperties}
    />
  );
}
