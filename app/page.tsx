import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME, APP_TAGLINE, APP_DESCRIPTION } from '@/lib/config';

// ─── Shared style tokens ──────────────────────────────────────────────────────
// Text colors (lighter than before for eye comfort)
const t1  = '#F2F2F2';   // headings, primary
const t2  = '#B0B0B0';   // card body text  (was #555 — much more readable)
const t3  = '#777777';   // secondary labels, sub-text  (was #3a3a3a)
const t4  = '#555555';   // nav links, footer  (was #3a3a3a)
const tAcc = '#00D49A';  // accent green

// Card background
const cardBg = '#161616';
const cardBorder = 'rgba(255,255,255,0.07)';

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
      <p className="text-sm" style={{ color: t3 }}>Coming soon · Stay tuned</p>
    </div>
  );
}

// ─── Tab SVG icons ────────────────────────────────────────────────────────────

function IconHome({ active }: { active: boolean }) {
  const c = active ? tAcc : '#4A4A4A';
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill={c}>
      <path d="M3 12L12 3L21 12V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V12Z" />
    </svg>
  );
}
function IconGroups({ active }: { active: boolean }) {
  const c = active ? tAcc : '#4A4A4A';
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="7" r="3" fill={c} opacity="0.7" />
      <circle cx="15" cy="7" r="3" fill={c} />
      <path d="M3 19C3 15.69 5.69 13 9 13H15C18.31 13 21 15.69 21 19" stroke={c} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconAdd({ active }: { active: boolean }) {
  const c = active ? tAcc : '#4A4A4A';
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={c} strokeWidth="2" />
      <path d="M12 8V16M8 12H16" stroke={c} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconInsights({ active }: { active: boolean }) {
  const c = active ? tAcc : '#4A4A4A';
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="12" width="4" height="9" rx="1" fill={c} opacity="0.45" />
      <rect x="10" y="7" width="4" height="14" rx="1" fill={c} opacity="0.7" />
      <rect x="17" y="3" width="4" height="18" rx="1" fill={c} />
    </svg>
  );
}
function IconFriends({ active }: { active: boolean }) {
  const c = active ? tAcc : '#4A4A4A';
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
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
    <div className="phone-glow relative mx-auto" style={{ width: 264, height: 548 }}>
      <div
        className="absolute inset-0 rounded-[46px] border-[7px]"
        style={{
          borderColor: '#222',
          background: 'linear-gradient(160deg, #2a2a2a 0%, #1a1a1a 100%)',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08)',
        }}
      >
        <div className="absolute top-3 left-1/2 -translate-x-1/2 rounded-full flex items-center justify-center gap-1.5"
          style={{ width: 84, height: 24, background: '#000' }}>
          <div className="w-2 h-2 rounded-full" style={{ background: '#1a1a1a', border: '1px solid #333' }} />
          <div className="w-1 h-1 rounded-full" style={{ background: '#222' }} />
        </div>
        <div className="absolute inset-[2px] rounded-[40px] overflow-hidden" style={{ background: '#0D0D0D' }}>
          <div className="flex justify-between items-center px-5 pt-8 pb-1.5">
            <span className="text-[11px] font-bold" style={{ color: t1 }}>9:41</span>
            <div className="flex items-center gap-1.5">
              {[3, 4.5, 6, 7.5].map(h => (
                <div key={h} style={{ width: 3, height: h, background: h > 5 ? t1 : 'rgba(255,255,255,0.4)', borderRadius: 1 }} />
              ))}
              <svg width="13" height="10" viewBox="0 0 16 12" fill="none" style={{ marginLeft: 2 }}>
                <path d="M8 10L8 10.01" stroke={t1} strokeWidth="2.5" strokeLinecap="round" />
                <path d="M5.5 7.5C6.33 6.67 7.17 6.5 8 6.5C8.83 6.5 9.67 6.67 10.5 7.5" stroke={t1} strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <path d="M2.5 5C4.17 3.33 6 2.5 8 2.5C10 2.5 11.83 3.33 13.5 5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              </svg>
              <div className="flex items-center gap-0.5 ml-1">
                <div style={{ width: 19, height: 10, borderRadius: 3, border: '1.5px solid rgba(255,255,255,0.5)', padding: '1.5px 2px' }}>
                  <div style={{ width: '70%', height: '100%', borderRadius: 1.5, background: tAcc }} />
                </div>
                <div style={{ width: 2, height: 5, background: 'rgba(255,255,255,0.35)', borderRadius: 1 }} />
              </div>
            </div>
          </div>
          <div className="px-4 mt-1.5 flex justify-between items-center">
            <div>
              <p className="text-[9px] font-semibold tracking-[2px] uppercase" style={{ color: '#3a3a3a' }}>MAY 2026</p>
              <p className="text-[15px] font-extrabold mt-0.5" style={{ color: t1 }}>Hey Aryan 👋</p>
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold"
              style={{ background: 'rgba(0,212,154,0.15)', color: tAcc, border: '1.5px solid rgba(0,212,154,0.25)' }}>
              AR
            </div>
          </div>
          <div className="mx-3.5 mt-2.5 rounded-[18px] p-3.5 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #161616 100%)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="absolute top-0 left-6 right-6 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,154,0.3), transparent)' }} />
            <p className="text-[8px] font-bold tracking-[2px] uppercase" style={{ color: '#4A4A4A' }}>NET BALANCE</p>
            <p className="text-[28px] font-extrabold leading-tight mt-0.5" style={{ color: tAcc, letterSpacing: '-1.5px' }}>+₹1,200</p>
            <div className="flex justify-between items-center mt-1">
              <p className="text-[9px]" style={{ color: '#555' }}>from 2 people</p>
              <span className="text-[7.5px] font-bold px-2 py-0.5 rounded-full"
                style={{ background: 'rgba(0,212,154,0.12)', color: tAcc }}>All settled ✓</span>
            </div>
          </div>
          <div className="mx-3.5 mt-3">
            <div className="flex justify-between items-center mb-1.5">
              <p className="text-[8px] font-bold tracking-[2px] uppercase" style={{ color: '#3a3a3a' }}>BALANCES</p>
              <p className="text-[8px] font-semibold" style={{ color: tAcc }}>See all →</p>
            </div>
            {[
              { initials: 'RJ', name: 'Raj',   amount: '+₹640', color: tAcc,     bg: 'rgba(0,212,154,0.12)',   tc: tAcc },
              { initials: 'PR', name: 'Priya', amount: '+₹560', color: '#5B9FFF', bg: 'rgba(91,159,255,0.12)', tc: '#5B9FFF' },
            ].map(b => (
              <div key={b.name} className="flex items-center justify-between py-1.5"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold"
                    style={{ background: b.bg, color: b.tc }}>{b.initials}</div>
                  <span className="text-[10.5px] font-semibold" style={{ color: '#E0E0E0' }}>{b.name}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold" style={{ color: b.color }}>{b.amount}</span>
                  <span className="text-[7px] font-bold px-1.5 py-0.5 rounded-full"
                    style={{ background: 'rgba(0,212,154,0.10)', color: tAcc }}>Settle</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-3.5 mt-3">
            <p className="text-[8px] font-bold tracking-[2px] uppercase mb-1.5" style={{ color: '#3a3a3a' }}>RECENT</p>
            {[
              { emoji: '🍛', label: 'Food',       sub: 'Yesterday · Raj, Priya', amount: '₹420', tag: 'shared',   tagColor: '#888' },
              { emoji: '☕', label: 'Chai/Coffee', sub: 'Today',                  amount: '₹80',  tag: 'personal', tagColor: '#4A4A4A' },
            ].map(e => (
              <div key={e.label} className="flex items-center justify-between py-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl flex items-center justify-center"
                    style={{ background: '#1C1C1C', fontSize: 14 }}>{e.emoji}</div>
                  <div>
                    <p className="text-[10px] font-semibold leading-none mb-0.5" style={{ color: '#E0E0E0' }}>{e.label}</p>
                    <p className="text-[7.5px] leading-none" style={{ color: '#3a3a3a' }}>{e.sub}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold leading-none mb-0.5" style={{ color: '#E0E0E0' }}>{e.amount}</p>
                  <p className="text-[7.5px]" style={{ color: e.tagColor }}>{e.tag}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 inset-x-0 flex justify-around items-center pt-2 pb-3 border-t"
            style={{ background: 'rgba(9,9,9,0.98)', borderColor: 'rgba(255,255,255,0.06)' }}>
            {tabs.map(({ label, Icon, active }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <Icon active={active} />
                <span className="text-[6px] font-bold tracking-wider"
                  style={{ color: active ? tAcc : '#3a3a3a' }}>{label}</span>
                {active && <div className="w-1 h-0.5 rounded-full" style={{ background: tAcc }} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-5"
      style={{
        background: 'rgba(13,13,13,0.85)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}>
      <div className="flex items-center gap-3">
        <Image src="/icon.png" alt={APP_NAME} width={32} height={32} className="rounded-[10px]" />
        <span className="text-[18px] font-extrabold tracking-tight" style={{ color: t1 }}>{APP_NAME}</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        {[
          { href: '#features',     label: 'Features' },
          { href: '#how-it-works', label: 'How it works' },
          { href: '#faq',          label: 'FAQ' },
        ].map(l => (
          <a key={l.label} href={l.href}
            className="text-[15px] font-semibold transition-colors hover:text-white"
            style={{ color: t4 }}>
            {l.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[13px] font-semibold" style={{ color: t3 }}>Coming soon</span>
        <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: tAcc }} />
      </div>
    </nav>
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
        <span style={{ color: t1 }}>Split expenses.{' '}</span>
        <br className="hidden md:block" />
        <span className="text-gradient">Not friendships.</span>
      </h1>

      <p className="max-w-lg mb-10 leading-relaxed"
        style={{ fontSize: 18, color: '#999', position: 'relative', zIndex: 1 }}>
        {APP_DESCRIPTION}
      </p>

      {/* Feature tags */}
      <div className="flex flex-wrap justify-center gap-2 mb-10" style={{ position: 'relative', zIndex: 1 }}>
        {['2-tap logging', 'Real-time balances', 'Personal + shared', 'No bank linkage', 'Free to use'].map(tag => (
          <span key={tag} className="font-semibold px-4 py-2 rounded-full border"
            style={{ fontSize: 13, background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.09)', color: '#666' }}>
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
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#AAAAAA', marginBottom: 24, flex: 1 }}>&ldquo;{t.quote}&rdquo;</p>
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
  const items = [
    {
      q: 'Is SplitNow free?',
      a: 'Yes, completely free. No subscription, no premium tier, no hidden charges. We believe expense tracking should be accessible to everyone.',
    },
    {
      q: 'Do I need to link my bank account or UPI?',
      a: "No. SplitNow is a tracking tool, not a payment app. We record who paid and who owes what. Actual money transfers happen separately between friends however you prefer — cash, UPI, whatever works.",
    },
    {
      q: 'Can I track personal expenses too — not just shared ones?',
      a: 'Yes. Log personal spends like subscriptions, solo travel, or daily chai alongside group expenses. Get a complete picture of your spending in one place.',
    },
    {
      q: 'What happens if I add an expense by mistake?',
      a: 'You can edit or delete any expense you added. Group members get notified of changes so everyone stays in sync.',
    },
    {
      q: 'How do friends join my group?',
      a: "Share your unique 8-character invite code with them. They sign up with their email, enter the code, and they're in. Takes under 2 minutes.",
    },
    {
      q: 'Is my data safe?',
      a: 'Your data is stored on Supabase (enterprise-grade PostgreSQL infrastructure). We never sell your data to third parties. You can delete your account and all your data at any time from within the app.',
    },
  ];

  return (
    <section id="faq" className="py-28 px-6 max-w-2xl mx-auto w-full">
      <div className="text-center mb-16">
        <p style={eyebrow}>FAQ</p>
        <h2 className="font-extrabold tracking-tight" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: t1 }}>
          Common questions
        </h2>
      </div>
      <div className="flex flex-col gap-3">
        {items.map((item, i) => (
          <details key={i} className="group rounded-[18px] border overflow-hidden"
            style={{ background: cardBg, borderColor: cardBorder }}>
            <summary className="flex items-center justify-between px-7 py-5 cursor-pointer select-none list-none"
              style={{ color: t1 }}>
              <span style={{ fontSize: 16, fontWeight: 700, paddingRight: 16 }}>{item.q}</span>
              <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold transition-transform group-open:rotate-45"
                style={{ background: 'rgba(255,255,255,0.05)', color: t3, fontSize: 20, lineHeight: 1 }}>+</span>
            </summary>
            <div className="px-7 pb-6">
              <p style={{ fontSize: 15, lineHeight: 1.7, color: t2, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 18 }}>{item.a}</p>
            </div>
          </details>
        ))}
      </div>
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
                  style={{ background: '#1C1C1C', fontSize: 18 }}>{item.icon}</div>
                <span style={{ fontSize: 15, fontWeight: 600, color: '#C0C0C0' }}>{item.label}</span>
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
    <footer className="py-12 px-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <Image src="/icon.png" alt={APP_NAME} width={24} height={24} className="rounded-md opacity-60" />
          <span style={{ fontSize: 14, fontWeight: 700, color: t4 }}>{APP_NAME}</span>
        </div>
        <div className="flex items-center gap-8">
          {[
            { href: '/privacy', label: 'Privacy Policy', internal: true },
            { href: '/terms',   label: 'Terms',          internal: true },
            { href: 'mailto:hello@splitnow.in', label: 'Contact', internal: false },
          ].map(l => l.internal
            ? <Link key={l.label} href={l.href} className="transition-colors hover:text-white" style={{ fontSize: 14, color: t4 }}>{l.label}</Link>
            : <a key={l.label} href={l.href} className="transition-colors hover:text-white" style={{ fontSize: 14, color: t4 }}>{l.label}</a>
          )}
        </div>
        <p style={{ fontSize: 13, color: '#444' }}>
          © {new Date().getFullYear()} {APP_NAME}. Made in India 🇮🇳
        </p>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main style={{ background: '#0D0D0D', minHeight: '100vh' }}>
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
