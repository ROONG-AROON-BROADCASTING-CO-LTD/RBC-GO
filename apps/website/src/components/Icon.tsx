import {
  AnimatedWebsiteIcon,
  ArrowRightIcon,
  type AnimatedWebsiteIconName,
} from '@stackbuild/ui/icons';
export type IconKind = 'arrow' | AnimatedWebsiteIconName;

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

  return <AnimatedWebsiteIcon className={className} name={kind} />;
}
