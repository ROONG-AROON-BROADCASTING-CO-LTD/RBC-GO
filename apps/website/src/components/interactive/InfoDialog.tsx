'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useRef } from 'react';
import type { Locale } from '../../data/navigation';
import { websiteCopy } from '../../data/website';
import { Icon } from '../ui/Icon';
export function InfoDialog({
  locale,
  kind,
  children,
}: {
  locale: Locale;
  kind: 'support' | 'policy';
  children: React.ReactNode;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const c = websiteCopy(locale);
  const title = kind === 'support' ? c.supportTitle : c.policyTitle;
  return (
    <>
      <button onClick={() => dialog.current?.showModal()}>{children}</button>
      <motion.dialog
        initial={false}
        animate={{ scale: 1, opacity: 1 }}
        ref={dialog}
        className="info-dialog"
        aria-label={title}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="icon-button dialog-close"
          onClick={() => dialog.current?.close()}
          aria-label={locale === 'en' ? 'Close' : 'ปิด'}
        >
          <Icon kind="close" />
        </button>
        <span className="eyebrow">RBC GO</span>
        <h2>{title}</h2>
        <p>{kind === 'support' ? c.supportCopy : c.policyCopy}</p>
        <Link
          className="button lime"
          href="/how-it-works"
          onClick={() => dialog.current?.close()}
        >
          {c.guide}
          <Icon kind="arrow" />
        </Link>
      </motion.dialog>
    </>
  );
}
