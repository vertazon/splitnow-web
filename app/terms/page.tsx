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

export default function TermsPage() {
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
        <h1 className="text-4xl font-extrabold tracking-tight mb-2" style={{ color: '#F2F2F2' }}>Terms of Service</h1>
        <p className="text-sm mb-12" style={{ color: '#4A4A4A' }}>Last updated: May 2026</p>

        <Section title="1. Acceptance">
          <p>
            By using {APP_NAME}, you agree to these Terms of Service. If you do not agree, do not use the app.
            These terms may be updated from time to time — continued use constitutes acceptance of any changes.
          </p>
        </Section>

        <Section title="2. What {APP_NAME} is">
          <p>
            {APP_NAME} is a personal expense tracking and splitting tool. It helps you record shared expenses and
            calculate who owes what among friends and roommates.
          </p>
          <p>
            {APP_NAME} is <strong style={{ color: '#F2F2F2' }}>not</strong> a payment processor, bank, or financial institution.
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
            Notify us at <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#00D49A' }}>{CONTACT_EMAIL}</a> if you suspect
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
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#00D49A' }}>{CONTACT_EMAIL}</a>.
          </p>
        </Section>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t text-center" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        <div className="flex justify-center gap-6">
          <Link href="/" className="text-sm" style={{ color: '#4A4A4A' }}>Home</Link>
          <Link href="/privacy" className="text-sm" style={{ color: '#4A4A4A' }}>Privacy Policy</Link>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm" style={{ color: '#4A4A4A' }}>Contact</a>
        </div>
      </footer>
    </main>
  );
}
