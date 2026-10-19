import {
  AnimatedWebsiteIcon,
  ArrowRightIcon,
  type AnimatedWebsiteIconName,
} from '@stackbuild/ui/icons';
export type IconKind = 'arrow' | AnimatedWebsiteIconName;

export function Icon({
  kind,
  className = '',
  animateOnHover,
  animationState,
  animationTrigger,
}: {
  kind: IconKind;
  className?: string;
  animateOnHover?: boolean;
  animationState?: 'animate' | 'normal';
  animationTrigger?: boolean | string | number;
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
    <AnimatedWebsiteIcon
      animateOnHover={animateOnHover}
      animationState={animationState}
      animationTrigger={animationTrigger}
      className={className}
      name={kind}
    />
  );
}
