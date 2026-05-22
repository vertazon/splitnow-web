import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME, APP_TAGLINE, APP_DESCRIPTION, CONTACT_EMAIL } from '@/lib/config';
import { Nav } from '@/components/Nav';
import { FaqAccordion } from '@/components/FaqAccordion';
import { LogoLink } from '@/components/LogoLink';

// ─── Shared style tokens ──────────────────────────────────────────────────────
const t1  = '#F8F8F6';   // headings, primary
const t2  = '#C3C2B7';   // card body copy, descriptions
const t3  = '#97958C';   // non-interactive labels, eyebrows, dates
const t4  = '#B0AEA6';   // interactive links — nav, footer
const tAcc = '#00D6A0';  // accent green (slightly warmer)

// Card background
const cardBg = '#2D2D2C';
const cardBorder = 'rgba(195,194,183,0.10)';

// Section label style (the UPPERCASE eyebrow above headings)
const eyebrow: React.CSSProperties = {
  color: t3,
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '3px',
  textTransform: 'uppercase',
  marginBottom: 16,
};

// ─── Download badges ──────────────────────────────────────────────────────────

function DownloadBadges() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-wrap justify-center gap-3">
        {/* App Store */}
        <div
          className="flex items-center gap-2.5 px-5 py-3 rounded-2xl border cursor-not-allowed select-none"
          style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.10)' }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="rgba(255,255,255,0.35)" />
          </svg>
          <div>
            <div className="text-[11px] leading-none mb-0.5" style={{ color: t3 }}>Download on the</div>
            <div className="text-[15px] font-bold leading-none" style={{ color: t4 }}>App Store</div>
          </div>
        </div>

        {/* Play Store */}
        <div
          className="flex items-center gap-2.5 px-5 py-3 rounded-2xl border cursor-not-allowed select-none"
          style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.10)' }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M3.18 23.76c.3.16.65.19.98.09l12.09-7.02-2.75-2.76-10.32 9.69zM.5 1.1C.19 1.42 0 1.92 0 2.58v18.84c0 .66.19 1.16.5 1.48l.08.08 10.56-10.56v-.25L.58 1.02.5 1.1zM20.33 10.46l-2.83-1.64-3.08 3.09 3.08 3.09 2.85-1.65c.81-.47.81-1.23-.02-1.89zM4.16.24L16.25 7.26l-2.75 2.76L3.18.33c.33-.1.68-.07.98.09-.01-.01 0-.17 0-.18z" fill="rgba(255,255,255,0.35)" />
          </svg>
          <div>
            <div className="text-[11px] leading-none mb-0.5" style={{ color: t3 }}>Get it on</div>
            <div className="text-[15px] font-bold leading-none" style={{ color: t4 }}>Google Play</div>
          </div>
        </div>
      </div>
      <p className="text-sm" style={{ color: t4 }}>Coming soon · Stay tuned</p>
    </div>
  );
}

// ─── Tab SVG icons ────────────────────────────────────────────────────────────

function IconHome({ active }: { active: boolean }) {
  const c = active ? tAcc : '#484848';
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={c}>
      <path d="M3 12L12 3L21 12V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V12Z" />
    </svg>
  );
}
function IconGroups({ active }: { active: boolean }) {
  const c = active ? tAcc : '#484848';
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="7" r="3" fill={c} opacity="0.65" />
      <circle cx="15" cy="7" r="3" fill={c} />
      <path d="M3 19C3 15.69 5.69 13 9 13H15C18.31 13 21 15.69 21 19" stroke={c} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconAdd({ active }: { active: boolean }) {
  const c = active ? tAcc : '#484848';
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={c} strokeWidth="2" />
      <path d="M12 8V16M8 12H16" stroke={c} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconInsights({ active }: { active: boolean }) {
  const c = active ? tAcc : '#484848';
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="12" width="4" height="9" rx="1" fill={c} opacity="0.4" />
      <rect x="10" y="7" width="4" height="14" rx="1" fill={c} opacity="0.7" />
      <rect x="17" y="3" width="4" height="18" rx="1" fill={c} />
    </svg>
  );
}
function IconFriends({ active }: { active: boolean }) {
  const c = active ? tAcc : '#484848';
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="10" cy="7" r="3" fill={c} />
      <path d="M4 19C4 15.69 6.69 13 10 13C11.55 13 12.96 13.6 14.03 14.57" stroke={c} strokeWidth="2" strokeLinecap="round" />
      <path d="M18 14V20M15 17H21" stroke={c} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// ─── Phone mockup ─────────────────────────────────────────────────────────────

function PhoneMockup() {
  const tabs = [
    { label: 'HOME',     Icon: IconHome,     active: true },
    { label: 'GROUPS',   Icon: IconGroups,   active: false },
    { label: 'ADD',      Icon: IconAdd,      active: false },
    { label: 'INSIGHTS', Icon: IconInsights, active: false },
    { label: 'FRIENDS',  Icon: IconFriends,  active: false },
  ];

  return (
    <div className="phone-glow relative mx-auto" style={{ width: 296, height: 632 }}>
      {/* Phone shell — visible frame with depth */}
      <div
        className="absolute inset-0 rounded-[46px] border-[7px]"
        style={{
          borderColor: '#313130',
          background: 'linear-gradient(145deg, #3a3a39 0%, #1e1e1d 55%, #2a2a29 100%)',
          boxShadow:
            'inset 0 1px 0 rgba(255,255,255,0.16), inset -1px 0 0 rgba(0,0,0,0.4), 0 24px 60px rgba(0,0,0,0.8)',
        }}
      >
        {/* Side button (right) */}
        <div className="absolute rounded-r-sm"
          style={{ top: 110, right: -10, width: 4, height: 48, background: '#2a2a29', boxShadow: 'inset -1px 0 0 rgba(255,255,255,0.08)' }} />
        {/* Volume buttons (left) */}
        <div className="absolute rounded-l-sm"
          style={{ top: 84, left: -10, width: 4, height: 32, background: '#2a2a29' }} />
        <div className="absolute rounded-l-sm"
          style={{ top: 124, left: -10, width: 4, height: 32, background: '#2a2a29' }} />

        {/* Dynamic island */}
        <div
          className="absolute left-1/2 -translate-x-1/2 rounded-full"
          style={{ top: 11, width: 88, height: 28, background: '#000', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.8)' }}
        />

        {/* Screen — text-left resets the hero section's text-center */}
        <div
          className="absolute rounded-[40px] overflow-hidden"
          style={{ inset: 2, background: '#0D0D0D', textAlign: 'left' }}
        >
          {/* ── Status bar ── */}
          <div className="flex justify-between items-center px-5" style={{ paddingTop: 16, paddingBottom: 4 }}>
            <span style={{ fontSize: 12.5, fontWeight: 700, color: t1, letterSpacing: '-0.2px' }}>9:41</span>
            <div className="flex items-center gap-[7px]">
              {/* Signal bars — ascending, items-end aligned */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2 }}>
                {[{ h: 4 }, { h: 6.5 }, { h: 9 }, { h: 12 }].map(({ h }, i) => (
                  <div key={i} style={{ width: 3.5, height: h, borderRadius: 1, background: i < 3 ? t1 : 'rgba(255,255,255,0.2)' }} />
                ))}
              </div>
              {/* WiFi */}
              <svg width="15" height="11" viewBox="0 0 18 13" fill="none">
                <circle cx="9" cy="12" r="1.4" fill={t1} />
                <path d="M5.5 8.5C6.5 7.5 7.7 7 9 7s2.5.5 3.5 1.5" stroke={t1} strokeWidth="1.7" strokeLinecap="round" />
                <path d="M2.2 5.5C4.2 3.5 6.4 2.5 9 2.5s4.8 1 6.8 3" stroke="rgba(255,255,255,0.32)" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
              {/* Battery */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: 22, height: 11, borderRadius: 3, border: '1.5px solid rgba(255,255,255,0.45)', padding: '1.5px 2px', display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '72%', height: '100%', borderRadius: 1.5, background: tAcc }} />
                </div>
                <div style={{ width: 2, height: 5, borderRadius: 1, background: 'rgba(255,255,255,0.35)', marginLeft: 1.5 }} />
              </div>
            </div>
          </div>

          {/* ── Greeting + Avatar ── */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 16px 0' }}>
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '2.5px', color: '#3a3a3a', textTransform: 'uppercase' }}>MAY 2026</p>
              <p style={{ fontSize: 18, fontWeight: 800, color: t1, marginTop: 3, letterSpacing: '-0.4px' }}>Hey Aryan 👋</p>
            </div>
            <div style={{ width: 36, height: 36, borderRadius: 18, background: 'rgba(0,212,154,0.15)', border: '1.5px solid rgba(0,212,154,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11.5, fontWeight: 800, color: tAcc, flexShrink: 0 }}>
              AR
            </div>
          </div>

          {/* ── Balance card ── */}
          <div style={{ margin: '12px 14px 0', borderRadius: 18, padding: '14px 16px 13px', background: 'linear-gradient(140deg, #222221 0%, #1b1b1a 100%)', border: '1px solid rgba(255,255,255,0.09)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent 5%, rgba(0,212,154,0.45) 50%, transparent 95%)' }} />
            <p style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: '2.5px', color: '#484848', textTransform: 'uppercase' }}>NET BALANCE</p>
            <p style={{ fontSize: 34, fontWeight: 800, color: tAcc, letterSpacing: '-2px', lineHeight: 1.05, marginTop: 5 }}>+₹1,200</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 9 }}>
              <p style={{ fontSize: 10, color: '#545454' }}>from 2 people</p>
              <div style={{ background: 'rgba(0,212,154,0.12)', border: '1px solid rgba(0,212,154,0.2)', borderRadius: 20, padding: '4px 10px', display: 'inline-flex', alignItems: 'center' }}>
                <span style={{ fontSize: 8.5, fontWeight: 700, color: tAcc }}>All settled ✓</span>
              </div>
            </div>
          </div>

          {/* ── Balances section ── */}
          <div style={{ margin: '14px 14px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <p style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: '2.5px', color: '#383838', textTransform: 'uppercase' }}>BALANCES</p>
              <p style={{ fontSize: 9.5, fontWeight: 600, color: tAcc }}>See all →</p>
            </div>
            {[
              { initials: 'RJ', name: 'Raj',   amount: '+₹640', c: tAcc,      bg: 'rgba(0,212,154,0.14)' },
              { initials: 'PR', name: 'Priya', amount: '+₹560', c: '#5B9FFF', bg: 'rgba(91,159,255,0.14)' },
            ].map((b, i) => (
              <div key={b.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 8, paddingBottom: 8, borderBottom: i === 0 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 30, height: 30, borderRadius: 15, background: b.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: b.c, flexShrink: 0 }}>
                    {b.initials}
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#E8E8E6' }}>{b.name}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: b.c }}>{b.amount}</span>
                  <div style={{ background: 'rgba(0,212,154,0.09)', border: '1px solid rgba(0,212,154,0.22)', borderRadius: 20, padding: '4px 10px', display: 'inline-flex', alignItems: 'center' }}>
                    <span style={{ fontSize: 9, fontWeight: 700, color: tAcc }}>Settle</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Recent section ── */}
          <div style={{ margin: '14px 14px 0' }}>
            <p style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: '2.5px', color: '#383838', textTransform: 'uppercase', marginBottom: 8 }}>RECENT</p>
            {[
              { emoji: '🍛', label: 'Food',       sub: 'Yesterday · Raj, Priya', amount: '₹420', tag: 'shared',   tc: '#606060' },
              { emoji: '☕', label: 'Chai/Coffee', sub: 'Today',                  amount: '₹80',  tag: 'personal', tc: '#484848' },
            ].map((e) => (
              <div key={e.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 8, paddingBottom: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 11, background: '#1e1e1d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, flexShrink: 0 }}>
                    {e.emoji}
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ fontSize: 12, fontWeight: 600, color: '#E5E5E3', lineHeight: 1.3 }}>{e.label}</p>
                    <p style={{ fontSize: 9.5, color: '#454545', lineHeight: 1.3, marginTop: 1 }}>{e.sub}</p>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#D0D0CE', lineHeight: 1.3 }}>{e.amount}</p>
                  <p style={{ fontSize: 9.5, color: e.tc, lineHeight: 1.3, marginTop: 1 }}>{e.tag}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Tab bar ── */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingTop: 10, paddingBottom: 18, background: 'rgba(9,9,9,0.98)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            {tabs.map(({ label, Icon, active }) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <Icon active={active} />
                <span style={{ fontSize: 7.5, fontWeight: 700, letterSpacing: '0.4px', color: active ? tAcc : '#3a3a3a' }}>{label}</span>
                {active && <div style={{ width: 4, height: 2.5, borderRadius: 2, background: tAcc }} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative pt-40 pb-12 px-6 flex flex-col items-center text-center overflow-hidden">
      <div className="hero-glow" style={{ zIndex: 0 }} />
      <div className="dot-grid" style={{ zIndex: 0 }} />

      {/* Badge */}
      <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 text-[13px] font-semibold"
        style={{
          background: 'rgba(0,212,154,0.08)',
          color: tAcc,
          border: '1px solid rgba(0,212,154,0.2)',
          boxShadow: '0 0 20px rgba(0,212,154,0.06)',
          zIndex: 1,
        }}>
        <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: tAcc }} />
        India-first · For roommates &amp; friend groups
      </div>

      {/* Headline */}
      <h1 className="font-extrabold tracking-tight leading-[1.04] mb-7 max-w-3xl"
        style={{ fontSize: 'clamp(48px, 7vw, 80px)', position: 'relative', zIndex: 1 }}>
        <span style={{ color: '#FFFFFF' }}>Split expenses.{' '}</span>
        <br className="hidden md:block" />
        <span className="text-gradient">Not friendships.</span>
      </h1>

      <p className="max-w-lg mb-10 leading-relaxed"
        style={{ fontSize: 18, color: t2, position: 'relative', zIndex: 1 }}>
        {APP_DESCRIPTION}
      </p>

      {/* Feature tags */}
      <div className="flex flex-wrap justify-center gap-2 mb-10" style={{ position: 'relative', zIndex: 1 }}>
        {['2-tap logging', 'Real-time balances', 'Personal + shared', 'No bank linkage', 'Free to use'].map(tag => (
          <span key={tag} className="hero-tag font-semibold px-4 py-2 rounded-full border"
            style={{ fontSize: 13, background: 'rgba(195,194,183,0.04)', borderColor: 'rgba(195,194,183,0.12)', color: t3 }}>
            {tag}
          </span>
        ))}
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <DownloadBadges />
      </div>

      {/* Phone mockup */}
      <div className="relative mt-24 mb-6">
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-20 rounded-full blur-2xl pointer-events-none"
          style={{ background: 'rgba(0,212,154,0.15)' }} />
        <PhoneMockup />
      </div>
    </section>
  );
}

// ─── Stats strip ──────────────────────────────────────────────────────────────

function Stats() {
  const stats = [
    { value: '2',    label: 'taps to add an expense' },
    { value: '<2s',  label: 'average log time' },
    { value: '₹0',   label: 'to get started' },
    { value: '100%', label: 'free, always' },
  ];
  return (
    <section className="px-6 py-10 max-w-4xl mx-auto w-full">
      <div className="flex flex-wrap gap-4 justify-center">
        {stats.map(s => (
          <div key={s.label} className="stat-card">
            <p style={{ fontSize: 30, fontWeight: 800, color: tAcc, letterSpacing: '-0.5px', marginBottom: 6 }}>{s.value}</p>
            <p style={{ fontSize: 14, color: t3 }}>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Before / After comparison ────────────────────────────────────────────────

function Comparison() {
  const before = [
    'Screenshot the bill, message the group chat',
    'Someone does the math wrong (again)',
    '"Bhai kitna tha?" every other day',
    'Awkward reminders that nobody sends',
    'The debt just… lingers forever',
  ];
  const after = [
    'Open app, amount pre-filled, tap add ✓',
    'Balances update instantly for everyone',
    'Everyone sees exactly what they owe',
    'Settle in one tap — no awkwardness',
    'Group finances always up to date',
  ];

  return (
    <section className="py-28 px-6 max-w-5xl mx-auto w-full">
      <div className="text-center mb-16">
        <p style={eyebrow}>THE DIFFERENCE</p>
        <h2 className="font-extrabold tracking-tight" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: t1 }}>
          The old way vs.{' '}
          <span className="text-gradient">the {APP_NAME} way</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Before */}
        <div className="card-hi p-8 rounded-[22px] border" style={{ background: cardBg, borderColor: cardBorder }}>
          <div className="flex items-center gap-3 mb-7">
            <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,89,89,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>😩</div>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#FF5959', marginBottom: 2 }}>BEFORE</p>
              <p style={{ fontSize: 15, fontWeight: 700, color: t1 }}>The group chat method</p>
            </div>
          </div>
          <div className="space-y-4">
            {before.map(item => (
              <div key={item} className="flex items-start gap-3">
                <div className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: 'rgba(255,89,89,0.12)', color: '#FF5959', fontSize: 11, fontWeight: 700 }}>✕</div>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: t2 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* After */}
        <div className="card-hi card-hi-accent p-8 rounded-[22px] border"
          style={{ background: 'rgba(0,212,154,0.04)', borderColor: 'rgba(0,212,154,0.2)', boxShadow: '0 0 40px rgba(0,212,154,0.05)' }}>
          <div className="flex items-center gap-3 mb-7">
            <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(0,212,154,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>⚡</div>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: tAcc, marginBottom: 2 }}>AFTER</p>
              <p style={{ fontSize: 15, fontWeight: 700, color: t1 }}>The {APP_NAME} way</p>
            </div>
          </div>
          <div className="space-y-4">
            {after.map(item => (
              <div key={item} className="flex items-start gap-3">
                <div className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: 'rgba(0,212,154,0.15)', color: tAcc, fontSize: 11, fontWeight: 700 }}>✓</div>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: t2 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────

function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Add in 2 taps',
      body: 'Amount pre-filled. Category remembered. People already selected from last time. Your job is to confirm, not fill in.',
      highlight: true,
    },
    {
      icon: '👤',
      title: 'Personal expenses too',
      body: 'Not everything is shared. Log solo expenses — groceries, subscriptions, travel — alongside group ones. One app, full picture.',
      highlight: false,
    },
    {
      icon: '🤝',
      title: 'Fair splits',
      body: 'Equal, by amount, or by percentage. One tap to switch. Real-time math so nobody over-pays.',
      highlight: false,
    },
    {
      icon: '🔔',
      title: 'Real-time activity',
      body: 'Push notifications the moment someone adds an expense or settles up. No more "did you log that?" texts.',
      highlight: false,
    },
    {
      icon: '👥',
      title: 'Groups & friends',
      body: 'Multiple groups — flat, Goa trip, office. Add friends with an 8-character invite code. Simple and private.',
      highlight: false,
    },
    {
      icon: '✅',
      title: 'One-tap settle',
      body: 'See exactly who owes what. Settle one person or everyone at once. Your balance goes to zero in a single tap.',
      highlight: false,
    },
  ];

  return (
    <section id="features" className="py-28 px-6 max-w-5xl mx-auto w-full">
      <div className="text-center mb-16">
        <p style={eyebrow}>FEATURES</p>
        <h2 className="font-extrabold tracking-tight" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: t1 }}>
          Everything you need.{' '}
          <span className="text-gradient">Nothing you don&apos;t.</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map(f => (
          <div
            key={f.title}
            className={`card-hover p-7 rounded-[22px] border ${f.highlight ? 'card-hi card-hi-accent' : 'card-hi'}`}
            style={{
              background: f.highlight ? 'rgba(0,212,154,0.05)' : cardBg,
              borderColor: f.highlight ? 'rgba(0,212,154,0.22)' : cardBorder,
              ...(f.highlight ? { boxShadow: '0 0 32px rgba(0,212,154,0.06)' } : {}),
            }}
          >
            <div style={{
              width: 48, height: 48, flexShrink: 0,
              borderRadius: 14,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 22, marginBottom: 18,
              background: f.highlight ? 'rgba(0,212,154,0.15)' : '#1C1C1C',
            }}>
              {f.icon}
            </div>
            <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, color: f.highlight ? tAcc : t1 }}>
              {f.title}
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: t2 }}>{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Use cases ────────────────────────────────────────────────────────────────

function UseCases() {
  const cases = [
    {
      emoji: '🏠',
      title: 'Flatmates',
      desc: 'Rent, electricity, Wi-Fi, groceries — split monthly costs without the monthly argument. Everyone always knows the score.',
      tags: ['Rent & utilities', 'Monthly bills', 'Groceries'],
      color: '#5B9FFF',
      colorDim: 'rgba(91,159,255,0.12)',
    },
    {
      emoji: '✈️',
      title: 'Group trips',
      desc: 'Goa, Manali, or a weekend drive — log hotel, petrol, food as you go. Settle once at the end. Zero memory needed.',
      tags: ['Hotels & stays', 'Fuel & travel', 'Food & drinks'],
      color: '#A87CFF',
      colorDim: 'rgba(168,124,255,0.12)',
    },
    {
      emoji: '👫',
      title: 'Couples',
      desc: 'Shared subscriptions, date nights, household shopping — keep finances transparent without it feeling like accounting class.',
      tags: ['Date nights', 'Subscriptions', 'Household'],
      color: '#FF9A3C',
      colorDim: 'rgba(255,154,60,0.12)',
    },
    {
      emoji: '🎉',
      title: 'Friend groups',
      desc: 'Birthday dinners, cricket matches, movie outings — whoever pays, everyone splits fairly. No IOU notes. No forgetting.',
      tags: ['Dinners', 'Events', 'Chai runs'],
      color: tAcc,
      colorDim: 'rgba(0,212,154,0.12)',
    },
  ];

  return (
    <section className="py-28 px-6 max-w-5xl mx-auto w-full">
      <div className="text-center mb-16">
        <p style={eyebrow}>USE CASES</p>
        <h2 className="font-extrabold tracking-tight" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: t1 }}>
          Built for every kind of&nbsp;<span className="text-gradient">Indian group</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {cases.map(c => (
          <div key={c.title} className="card-hi card-hover p-8 rounded-[22px] border"
            style={{ background: cardBg, borderColor: cardBorder }}>
            <div className="flex items-center gap-4 mb-5">
              <div style={{ width: 48, height: 48, borderRadius: 14, background: c.colorDim, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>
                {c.emoji}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: t1 }}>{c.title}</h3>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: t2, marginBottom: 20 }}>{c.desc}</p>
            <div className="flex flex-wrap gap-2">
              {c.tags.map(tag => (
                <span key={tag} style={{ fontSize: 13, fontWeight: 600, padding: '5px 14px', borderRadius: 20, background: c.colorDim, color: c.color }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── How it works ─────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    {
      n: '01',
      title: 'Sign up with your email',
      body: 'Enter your email, get a 6-digit OTP. No passwords, no long forms. Done in under a minute.',
    },
    {
      n: '02',
      title: 'Create a group or add friends',
      body: 'Share your 8-character invite code with flatmates or friends. They join instantly, no app store hoops.',
    },
    {
      n: '03',
      title: 'Log expenses as they happen',
      body: 'Amount, category, people — all pre-filled from last time. Tap add. Balance updates for the whole group instantly.',
    },
    {
      n: '04',
      title: 'Settle up in one tap',
      body: 'See exactly who owes what. Mark it settled. Done — no spreadsheets, no awkward follow-ups, no memory required.',
    },
  ];

  return (
    <section id="how-it-works" className="py-28 px-6 max-w-2xl mx-auto w-full">
      <div className="text-center mb-16">
        <p style={eyebrow}>HOW IT WORKS</p>
        <h2 className="font-extrabold tracking-tight" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: t1 }}>
          Up and running in 4 steps.
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        {steps.map((s, i) => (
          <div key={s.n} className="card-hi card-hover flex items-start gap-6 p-7 rounded-[22px] border"
            style={{ background: cardBg, borderColor: cardBorder }}>
            <div className="shrink-0 w-12 h-12 rounded-[14px] flex items-center justify-center font-extrabold"
              style={{
                fontSize: 15,
                background: i === 0 ? 'rgba(0,212,154,0.12)' : '#1C1C1C',
                color: i === 0 ? tAcc : '#444',
              }}>
              {s.n}
            </div>
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6, color: t1 }}>{s.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: t2 }}>{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function Testimonials() {
  const testimonials = [
    {
      quote: "Finally an app that doesn't make me feel like I'm filing a tax return just to split chai.",
      name: 'Rohit M.',
      role: 'Flatmate of 3 years, Pune',
      initials: 'RM',
      color: '#5B9FFF',
      colorDim: 'rgba(91,159,255,0.12)',
    },
    {
      quote: "We used to have a whole WhatsApp thread just for expenses. Now it's two taps and done. Game changer.",
      name: 'Sneha K.',
      role: 'Travels with friends every quarter',
      initials: 'SK',
      color: '#A87CFF',
      colorDim: 'rgba(168,124,255,0.12)',
    },
    {
      quote: "I track my personal spends too now — not just group stuff. One app for everything. Love it.",
      name: 'Arjun D.',
      role: 'Working professional, Bangalore',
      initials: 'AD',
      color: tAcc,
      colorDim: 'rgba(0,212,154,0.12)',
    },
  ];

  return (
    <section className="py-28 px-6 max-w-5xl mx-auto w-full">
      <div className="text-center mb-16">
        <p style={eyebrow}>EARLY USERS</p>
        <h2 className="font-extrabold tracking-tight" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: t1 }}>
          People who stopped dreading the&nbsp;<span className="text-gradient">money talk</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map(t => (
          <div key={t.name} className="card-hi card-hover p-8 rounded-[22px] border flex flex-col"
            style={{ background: cardBg, borderColor: cardBorder }}>
            <div className="flex gap-1 mb-6">
              {Array(5).fill(0).map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={tAcc}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: t2, marginBottom: 24, flex: 1 }}>&ldquo;{t.quote}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0"
                style={{ background: t.colorDim, color: t.color, fontSize: 12 }}>
                {t.initials}
              </div>
              <div>
                <p style={{ fontSize: 15, fontWeight: 700, color: t1 }}>{t.name}</p>
                <p style={{ fontSize: 13, color: t3 }}>{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function FAQ() {
  return (
    <section id="faq" className="py-28 px-6 max-w-2xl mx-auto w-full">
      <div className="text-center mb-16">
        <p style={eyebrow}>FAQ</p>
        <h2 className="font-extrabold tracking-tight" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: t1 }}>
          Common questions
        </h2>
      </div>
      <FaqAccordion />
    </section>
  );
}

// ─── Made in India ────────────────────────────────────────────────────────────

function MadeInIndia() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto w-full">
      <div className="rounded-[24px] overflow-hidden border" style={{ borderColor: cardBorder }}>
        <div className="flex h-1">
          <div className="flex-1" style={{ background: '#FF9933' }} />
          <div className="flex-1" style={{ background: '#ffffff22' }} />
          <div className="flex-1" style={{ background: '#138808' }} />
        </div>
        <div className="p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10"
          style={{ background: cardBg }}>
          <div className="text-center md:text-left">
            <p style={{ ...eyebrow, marginBottom: 12 }}>ORIGIN</p>
            <h2 className="font-extrabold tracking-tight mb-3" style={{ fontSize: 'clamp(22px, 3vw, 32px)', color: t1 }}>
              Made in India 🇮🇳
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: t2, maxWidth: 380 }}>
              By Indians. For Indians. Built around how we actually split bills — chai runs, shared flats, group trips, and everything in between.
            </p>
          </div>
          <div className="flex flex-col gap-5 shrink-0">
            {[
              { icon: '🇮🇳', label: 'Designed in India' },
              { icon: '⚙️', label: 'Built for Indian habits' },
              { icon: '💚', label: 'Rupees at the centre, always' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: '#313130', fontSize: 18 }}>{item.icon}</div>
                <span style={{ fontSize: 15, fontWeight: 600, color: t2 }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA strip ────────────────────────────────────────────────────────────────

function CtaStrip() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-xl mx-auto text-center rounded-[28px] p-12 md:p-16 cta-glow"
        style={{ background: 'linear-gradient(160deg, rgba(0,212,154,0.07) 0%, rgba(0,212,154,0.02) 100%)', border: '1px solid rgba(0,212,154,0.15)' }}>
        <Image src="/icon.png" alt={APP_NAME} width={64} height={64} className="rounded-[18px] mx-auto mb-6" />
        <h2 className="font-extrabold tracking-tight mb-4" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: t1 }}>
          {APP_TAGLINE}.
        </h2>
        <p style={{ fontSize: 16, color: t3, marginBottom: 32 }}>
          Available soon on iOS and Android. Free, forever.
        </p>
        <DownloadBadges />
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-12 px-6 border-t" style={{ borderColor: 'rgba(195,194,183,0.10)' }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <LogoLink imgSize={32} fontSize={20} gap="gap-2.5" />
        <div className="flex items-center gap-8">
          {[
            { href: '/privacy', label: 'Privacy Policy', internal: true },
            { href: '/terms',   label: 'Terms',          internal: true },
            { href: `mailto:${CONTACT_EMAIL}`, label: 'Contact', internal: false },
          ].map(l => l.internal
            ? <Link key={l.label} href={l.href} className="link-underline" style={{ fontSize: 15, color: t1 }}>{l.label}</Link>
            : <a key={l.label} href={l.href} className="link-underline" style={{ fontSize: 15, color: t1 }}>{l.label}</a>
          )}
        </div>
        <p style={{ fontSize: 14, color: t1 }}>
          © {new Date().getFullYear()} {APP_NAME}. Made in India 🇮🇳
        </p>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main style={{ background: '#1F1F1E', minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <Stats />
      <Comparison />
      <Features />
      <UseCases />
      <HowItWorks />
      <Testimonials />
      <MadeInIndia />
      <FAQ />
      <CtaStrip />
      <Footer />
    </main>
  );
}
