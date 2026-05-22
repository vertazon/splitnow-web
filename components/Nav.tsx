'use client';

import { useState } from 'react';
import { LogoLink } from '@/components/LogoLink';

const t1   = '#F8F8F6';
const tAcc = '#00D6A0';

const LINKS = [
  { href: '#features',     label: 'Features' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#faq',          label: 'FAQ' },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-8 py-4 md:py-5"
        style={{
          background: 'rgba(31,31,30,0.92)',
          borderBottom: '1px solid rgba(195,194,183,0.10)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {/* Logo */}
        <LogoLink imgSize={32} fontSize={18} />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map(l => (
            <a key={l.label} href={l.href}
              className="text-[15px] font-semibold link-underline"
              style={{ color: t1 }}>
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop: Coming soon badge */}
        <div className="hidden md:flex items-center gap-2">
          <span className="text-[13px] font-semibold" style={{ color: t1 }}>Coming soon</span>
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: tAcc }} />
        </div>

        {/* Mobile: hamburger button */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl transition-opacity hover:opacity-70"
          style={{ color: t1, background: 'rgba(248,248,246,0.08)' }}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 4.5H16M2 9H16M2 13.5H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="fixed inset-x-0 z-40 md:hidden"
          style={{
            top: 61,
            background: 'rgba(22,22,21,0.98)',
            borderBottom: '1px solid rgba(195,194,183,0.10)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <div className="flex flex-col px-6 py-4">
            {LINKS.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[16px] font-semibold py-4"
                style={{
                  color: t1,
                  borderBottom: i < LINKS.length - 1 ? '1px solid rgba(195,194,183,0.08)' : 'none',
                }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-4 pb-2">
              <span className="text-[14px] font-semibold" style={{ color: t1 }}>Coming soon</span>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: tAcc }} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
