import Link from 'next/link';
import Image from 'next/image';
import { APP_NAME, CONTACT_EMAIL } from '@/lib/config';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-bold mb-3" style={{ color: '#F2F2F2' }}>{title}</h2>
      <div className="text-sm leading-relaxed space-y-3" style={{ color: '#888' }}>
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main style={{ background: '#0D0D0D', minHeight: '100vh' }}>
      {/* Nav */}
      <nav
        className="flex items-center justify-between px-6 py-4 border-b"
        style={{ borderColor: 'rgba(255,255,255,0.07)' }}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/icon.png" alt={APP_NAME} width={28} height={28} className="rounded-lg" />
          <span className="text-[16px] font-extrabold" style={{ color: '#F2F2F2' }}>{APP_NAME}</span>
        </Link>
        <Link href="/" className="text-sm" style={{ color: '#888' }}>← Back</Link>
      </nav>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        <p className="text-xs font-bold tracking-[3px] uppercase mb-4" style={{ color: '#888' }}>LEGAL</p>
        <h1 className="text-4xl font-extrabold tracking-tight mb-2" style={{ color: '#F2F2F2' }}>Privacy Policy</h1>
        <p className="text-sm mb-12" style={{ color: '#4A4A4A' }}>Last updated: May 2026</p>

        <Section title="1. Who we are">
          <p>
            {APP_NAME} is an India-first expense splitting app for roommates and friend groups.
            We are operated as a personal project. For any privacy-related questions, contact us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#00D49A' }}>{CONTACT_EMAIL}</a>.
          </p>
        </Section>

        <Section title="2. What data we collect">
          <p>We collect only what is necessary to run the app:</p>
          <ul className="list-disc list-inside space-y-2 mt-2 ml-1">
            <li><span style={{ color: '#F2F2F2' }}>Email address</span> — used to authenticate you via OTP. Never shown publicly.</li>
            <li><span style={{ color: '#F2F2F2' }}>Display name</span> — the name you choose during profile setup, shown to your friends and group members.</li>
            <li><span style={{ color: '#F2F2F2' }}>UPI ID</span> — optional. You can add it to your profile so friends know where to send money. We do not process payments.</li>
            <li><span style={{ color: '#F2F2F2' }}>Expense data</span> — amounts, categories, dates, and notes you enter when logging shared expenses.</li>
            <li><span style={{ color: '#F2F2F2' }}>Group and friend data</span> — the groups you belong to and the friends you connect with via invite codes.</li>
            <li><span style={{ color: '#F2F2F2' }}>Push notification token</span> — if you grant permission, used only to send you activity notifications from the app.</li>
          </ul>
          <p className="mt-3">We do <strong style={{ color: '#F2F2F2' }}>not</strong> collect location data, contacts, SMS content, or any data beyond what is listed above.</p>
        </Section>

        <Section title="3. How we use your data">
          <ul className="list-disc list-inside space-y-2 ml-1">
            <li>To authenticate you securely via email OTP</li>
            <li>To display your name and profile to friends and group members</li>
            <li>To calculate and display shared expense balances</li>
            <li>To send you push notifications about activity in your groups (if permitted)</li>
          </ul>
          <p className="mt-3">We do not use your data for advertising, profiling, or any purpose beyond operating the app.</p>
        </Section>

        <Section title="4. Where your data is stored">
          <p>
            All data is stored on <strong style={{ color: '#F2F2F2' }}>Supabase</strong>, a cloud database platform.
            Data is encrypted in transit (TLS) and at rest. Supabase infrastructure is hosted on AWS.
          </p>
        </Section>

        <Section title="5. Data sharing">
          <p>
            We do <strong style={{ color: '#F2F2F2' }}>not sell, rent, or share</strong> your personal data with any third party for commercial purposes.
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
          <p className="mt-3">
            To exercise any of these rights, use the in-app delete feature or contact us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#00D49A' }}>{CONTACT_EMAIL}</a>.
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
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#00D49A' }}>{CONTACT_EMAIL}</a>.
          </p>
        </Section>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t text-center" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        <div className="flex justify-center gap-6">
          <Link href="/" className="text-sm" style={{ color: '#4A4A4A' }}>Home</Link>
          <Link href="/terms" className="text-sm" style={{ color: '#4A4A4A' }}>Terms</Link>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm" style={{ color: '#4A4A4A' }}>Contact</a>
        </div>
      </footer>
    </main>
  );
}
