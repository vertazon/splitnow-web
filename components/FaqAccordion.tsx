'use client';

import { useState } from 'react';

const t1    = '#F8F8F6';
const t2    = '#C3C2B7';
const t3    = '#97958C';
const tAcc  = '#00D6A0';
const cardBg     = '#2D2D2C';
const cardBorder = 'rgba(195,194,183,0.10)';

const FAQ_ITEMS = [
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

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="faq-item rounded-[18px] border"
            style={{
              background: cardBg,
              borderColor: isOpen ? 'rgba(0,212,154,0.22)' : cardBorder,
              transition: 'border-color 0.22s ease, box-shadow 0.22s ease',
              boxShadow: isOpen ? '0 0 0 1px rgba(0,212,154,0.06)' : 'none',
            }}
          >
            {/* Toggle button */}
            <button
              className="w-full flex items-center justify-between px-7 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span style={{ fontSize: 16, fontWeight: 700, color: t1, paddingRight: 20, lineHeight: 1.4 }}>
                {item.q}
              </span>

              {/* Icon — SVG + rotates 45° to become × */}
              <span
                className="shrink-0 flex items-center justify-center rounded-full"
                style={{
                  width: 28,
                  height: 28,
                  background: isOpen ? 'rgba(0,212,154,0.12)' : 'rgba(255,255,255,0.05)',
                  color: isOpen ? tAcc : t3,
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.24s ease, background 0.22s ease, color 0.22s ease',
                  flexShrink: 0,
                }}
              >
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M5.5 0.5V10.5M0.5 5.5H10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
            </button>

            {/* Animated body — grid-template-rows: 0fr → 1fr */}
            <div
              style={{
                display: 'grid',
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                transition: 'grid-template-rows 0.28s ease',
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <div className="px-7 pb-6">
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: t2,
                      borderTop: '1px solid rgba(195,194,183,0.10)',
                      paddingTop: 18,
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
