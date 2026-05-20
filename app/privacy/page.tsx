import Link from 'next/link';
import Image from 'next/image';
import { APP_NAME, CONTACT_EMAIL } from '@/lib/config';

// ─── Shared tokens (mirror page.tsx) ─────────────────────────────────────────
const t1  = '#F8F8F6';
const t2  = '#C3C2B7';
const t3  = '#97958C';
const t4  = '#97958C';
const tAcc = '#00D49A';

// ─── Reusable section block ───────────────────────────────────────────────────
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: t1, marginBottom: 12 }}>{title}</h2>
      <div style={{ fontSize: 16, lineHeight: 1.75, color: t2 }} className="space-y-4">
        {children}
      </div>
    </section>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-5"
      style={{
        background: 'rgba(31,31,30,0.92)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}>
      <Link href="/" className="flex items-center gap-3">
        <Image src="/icon.png" alt={APP_NAME} width={32} height={32} className="rounded-[10px]" />
        <span style={{ fontSize: 18, fontWeight: 800, color: t1 }}>{APP_NAME}</span>
      </Link>
      <Link href="/" style={{ fontSize: 15, color: t4 }} className="hover:text-white transition-colors">
        ← Back
      </Link>
    </nav>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-12 px-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <Image src="/icon.png" alt={APP_NAME} width={24} height={24} className="rounded-md opacity-60" />
          <span style={{ fontSize: 15, fontWeight: 700, color: t4 }}>{APP_NAME}</span>
        </div>
        <div className="flex items-center gap-8">
          {[
            { href: '/',       label: 'Home',           internal: true },
            { href: '/terms',  label: 'Terms',          internal: true },
            { href: `mailto:${CONTACT_EMAIL}`, label: 'Contact', internal: false },
          ].map(l => l.internal
            ? <Link key={l.label} href={l.href} className="transition-colors hover:text-white" style={{ fontSize: 15, color: t4 }}>{l.label}</Link>
            : <a   key={l.label} href={l.href} className="transition-colors hover:text-white" style={{ fontSize: 15, color: t4 }}>{l.label}</a>
          )}
        </div>
        <p style={{ fontSize: 14, color: t3 }}>
          © {new Date().getFullYear()} {APP_NAME}. Made in India 🇮🇳
        </p>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PrivacyPage() {
  return (
    <main style={{ background: '#1F1F1E', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Nav />

      <div className="max-w-2xl mx-auto px-6" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: t3, marginBottom: 16 }}>
          LEGAL
        </p>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-1px', color: t1, marginBottom: 8 }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: 15, color: t3, marginBottom: 56 }}>Last updated: May 2026</p>

        <Section title="1. Who we are">
          <p>
            {APP_NAME} is an India-first expense splitting app for roommates and friend groups.
            We are operated as a personal project. For any privacy-related questions, contact us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: tAcc }}>{CONTACT_EMAIL}</a>.
          </p>
        </Section>

        <Section title="2. What data we collect">
          <p>We collect only what is necessary to run the app:</p>
          <ul className="list-disc list-inside space-y-2 mt-2 ml-1">
            <li><span style={{ color: t1 }}>Email address</span> — used to authenticate you via OTP. Never shown publicly.</li>
            <li><span style={{ color: t1 }}>Display name</span> — the name you choose during profile setup, shown to your friends and group members.</li>
            <li><span style={{ color: t1 }}>UPI ID</span> — optional. You can add it so friends know where to send money. We do not process payments.</li>
            <li><span style={{ color: t1 }}>Expense data</span> — amounts, categories, dates, and notes you enter when logging expenses.</li>
            <li><span style={{ color: t1 }}>Group and friend data</span> — the groups you belong to and friends you connect with via invite codes.</li>
            <li><span style={{ color: t1 }}>Push notification token</span> — if you grant permission, used only to deliver activity notifications.</li>
          </ul>
          <p>We do <strong style={{ color: t1 }}>not</strong> collect location data, contacts, SMS content, or any data beyond what is listed above.</p>
        </Section>

        <Section title="3. How we use your data">
          <ul className="list-disc list-inside space-y-2 ml-1">
            <li>To authenticate you securely via email OTP</li>
            <li>To display your name and profile to friends and group members</li>
            <li>To calculate and display shared expense balances</li>
            <li>To send you push notifications about group activity (if permitted)</li>
          </ul>
          <p>We do not use your data for advertising, profiling, or any purpose beyond operating the app.</p>
        </Section>

        <Section title="4. Where your data is stored">
          <p>
            All data is stored on <strong style={{ color: t1 }}>Supabase</strong>, a cloud database platform.
            Data is encrypted in transit (TLS) and at rest. Supabase infrastructure is hosted on AWS.
          </p>
        </Section>

        <Section title="5. Data sharing">
          <p>
            We do <strong style={{ color: t1 }}>not sell, rent, or share</strong> your personal data with any third party for commercial purposes.
          </p>
          <p>
            Your display name and UPI ID (if provided) are visible to people in your groups and friends list — this is necessary for the app to function.
          </p>
        </Section>

        <Section title="6. Data retention">
          <p>
            Your data is retained for as long as your account exists. You can delete your account at any time from within the app
            (Account → Delete Account). Deletion is permanent and removes all your data from our systems within 30 days.
          </p>
        </Section>

        <Section title="7. Your rights">
          <p>You have the right to:</p>
          <ul className="list-disc list-inside space-y-2 mt-2 ml-1">
            <li>Access the data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your account and all associated data</li>
          </ul>
          <p>
            To exercise any of these rights, use the in-app delete feature or contact us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: tAcc }}>{CONTACT_EMAIL}</a>.
          </p>
        </Section>

        <Section title="8. Cookies & tracking">
          <p>
            The {APP_NAME} mobile app does not use cookies. This website uses no analytics or tracking tools.
          </p>
        </Section>

        <Section title="9. Children">
          <p>
            {APP_NAME} is not directed at children under 13. We do not knowingly collect data from anyone under 13.
          </p>
        </Section>

        <Section title="10. Changes to this policy">
          <p>
            We may update this policy as the app evolves. Material changes will be communicated in-app.
            The date at the top of this page reflects when it was last updated.
          </p>
        </Section>

        <Section title="11. Contact">
          <p>
            Questions about this policy? Email us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: tAcc }}>{CONTACT_EMAIL}</a>.
          </p>
        </Section>
      </div>

      <Footer />
    </main>
  );
}
