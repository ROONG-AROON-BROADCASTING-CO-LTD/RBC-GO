'use client';
import { useEffect, useState } from 'react';
import { isMobilePhone } from './mobile-device';
export function MobileLoginLink({ href }: { href: string }) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const viewport = window.matchMedia(
      '(max-width: 767px) and (pointer: coarse)',
    );
    const nav = navigator as Navigator & {
      userAgentData?: { mobile?: boolean };
    };
    const update = () =>
      setMobile(
        viewport.matches &&
          isMobilePhone(nav.userAgent, nav.userAgentData?.mobile),
      );
    update();
    viewport.addEventListener('change', update);
    return () => viewport.removeEventListener('change', update);
  }, []);
  return mobile ? (
    <a className="mobile-login" href={href}>
      เข้าสู่ระบบ RBC GO
    </a>
  ) : null;
}
