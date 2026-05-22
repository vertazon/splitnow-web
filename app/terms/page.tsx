import type { Metadata } from 'next';
import Link from 'next/link';
import { APP_NAME, CONTACT_EMAIL } from '@/lib/config';
import { LogoLink } from '@/components/LogoLink';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms and conditions for using ${APP_NAME}.`,
};

// ─── Shared tokens (mirror page.tsx) ─────────────────────────────────────────
const t1  = '#F8F8F6';
const t2  = '#C3C2B7';
const t3  = '#97958C';
const t4  = '#B0AEA6';
const tAcc = '#00D6A0';

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
        borderBottom: '1px solid rgba(195,194,183,0.10)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}>
      <LogoLink imgSize={32} fontSize={18} />
      <Link href="/" style={{ fontSize: 15, color: t1 }} className="link-underline">
        ← Back
      </Link>
    </nav>
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
            { href: '/',        label: 'Home',    internal: true },
            { href: '/privacy', label: 'Privacy', internal: true },
            { href: `mailto:${CONTACT_EMAIL}`, label: 'Contact', internal: false },
          ].map(l => l.internal
            ? <Link key={l.label} href={l.href} className="link-underline" style={{ fontSize: 15, color: t1 }}>{l.label}</Link>
            : <a   key={l.label} href={l.href} className="link-underline" style={{ fontSize: 15, color: t1 }}>{l.label}</a>
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
export default function TermsPage() {
  return (
    <main style={{ background: '#1F1F1E', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Nav />

      <div className="max-w-2xl mx-auto px-6" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: t3, marginBottom: 16 }}>
          LEGAL
        </p>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-1px', color: t1, marginBottom: 8 }}>
          Terms of Service
        </h1>
        <p style={{ fontSize: 15, color: t3, marginBottom: 56 }}>Last updated: May 2026</p>

        <Section title="1. Acceptance">
          <p>
            By using {APP_NAME}, you agree to these Terms of Service. If you do not agree, do not use the app.
            These terms may be updated from time to time — continued use constitutes acceptance of any changes.
          </p>
        </Section>

        <Section title={`2. What ${APP_NAME} is`}>
          <p>
            {APP_NAME} is a personal expense tracking and splitting tool. It helps you record shared expenses and
            calculate who owes what among friends and roommates.
          </p>
          <p>
            {APP_NAME} is <strong style={{ color: t1 }}>not</strong> a payment processor, bank, or financial institution.
            We do not move money. Settlements are recorded manually in the app — actual transfers happen outside
            the app (e.g. via UPI, cash).
          </p>
        </Section>

        <Section title="3. Eligibility">
          <p>
            You must be at least 13 years old to use {APP_NAME}. By using the app you confirm you meet this requirement.
          </p>
        </Section>

        <Section title="4. Your account">
          <p>
            You are responsible for maintaining the security of your account. Your email OTP is private — do not share it with anyone.
            Notify us at <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: tAcc }}>{CONTACT_EMAIL}</a> if you suspect
            unauthorised access.
          </p>
        </Section>

        <Section title="5. Your content">
          <p>
            Expense titles, notes, amounts, and other data you enter are yours. By entering them, you grant us a
            limited licence to store and display them to members of your groups as necessary to operate the service.
          </p>
          <p>
            You are responsible for the accuracy of what you enter. Do not use {APP_NAME} to record fraudulent,
            illegal, or misleading transactions.
          </p>
        </Section>

        <Section title="6. Acceptable use">
          <p>You agree not to:</p>
          <ul className="list-disc list-inside space-y-2 mt-2 ml-1">
            <li>Use the app for any unlawful purpose</li>
            <li>Attempt to reverse-engineer, hack, or disrupt the service</li>
            <li>Create false accounts or impersonate others</li>
            <li>Use the app to harass or harm other users</li>
          </ul>
        </Section>

        <Section title="7. No financial advice">
          <p>
            {APP_NAME} provides expense tracking tools only. Nothing in the app constitutes financial, legal,
            or tax advice. We are not a regulated financial service.
          </p>
        </Section>

        <Section title="8. Availability">
          <p>
            We aim for high availability but do not guarantee uninterrupted access. We may update, suspend, or
            discontinue the service at any time with reasonable notice.
          </p>
        </Section>

        <Section title="9. Limitation of liability">
          <p>
            {APP_NAME} is provided &quot;as is&quot; without warranties of any kind. To the maximum extent permitted by law,
            we are not liable for any indirect, incidental, or consequential damages arising from your use of the app,
            including any disputes between users over expense amounts or settlements.
          </p>
        </Section>

        <Section title="10. Account deletion">
          <p>
            You can delete your account at any time from within the app (Account → Delete Account).
            Upon deletion, your data is permanently removed from our systems within 30 days.
          </p>
        </Section>

        <Section title="11. Governing law">
          <p>
            These terms are governed by the laws of India. Any disputes shall be subject to the exclusive
            jurisdiction of courts in India.
          </p>
        </Section>

        <Section title="12. Contact">
          <p>
            Questions about these terms? Email us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: tAcc }}>{CONTACT_EMAIL}</a>.
          </p>
        </Section>
      </div>

      <Footer />
    </main>
  );
}
