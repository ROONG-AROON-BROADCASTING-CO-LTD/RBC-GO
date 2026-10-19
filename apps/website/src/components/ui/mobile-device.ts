export function isMobilePhone(
  userAgent: string,
  mobileHint?: boolean,
): boolean {
  if (/iPad|Tablet|Android(?!.*Mobile)/i.test(userAgent)) return false;
  return (
    mobileHint === true ||
    /iPhone|iPod|Android.*Mobile|Windows Phone/i.test(userAgent)
  );
}
