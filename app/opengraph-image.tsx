import { ImageResponse } from 'next/og';

export const runtime     = 'edge';
export const alt         = 'SplitNow — Split expenses in 2 taps';
export const size        = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const acc = '#00D6A0';
  const bg  = '#1F1F1E';
  const t1  = '#F8F8F6';
  const t2  = '#C3C2B7';
  const t3  = '#97958C';

  // Load the real app icon; fall back to ₹ text if unavailable (e.g. dev)
  let iconSrc = '';
  try {
    const res = await fetch(
      'https://splitnow.vertazon.com/icon-192.png',
      { cache: 'force-cache' },
    );
    if (res.ok) {
      const buf   = await res.arrayBuffer();
      const bytes = new Uint8Array(buf);
      let bin = '';
      for (let i = 0; i < bytes.byteLength; i++) bin += String.fromCharCode(bytes[i]);
      iconSrc = `data:image/png;base64,${btoa(bin)}`;
    }
  } catch { /* use text fallback */ }

  const badges = ['India-first', 'Free forever', 'No bank needed', '2-tap logging'];

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: bg,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Top glow */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            left: 0,
            right: 0,
            width: 1200,
            height: 480,
            background:
              'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(0,214,160,0.18) 0%, transparent 65%)',
          }}
        />

        {/* Dot grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* App icon */}
        {iconSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={iconSrc}
            width={80}
            height={80}
            alt=""
            style={{ borderRadius: 20, marginBottom: 28 }}
          />
        ) : (
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 20,
              background: 'rgba(0,214,160,0.13)',
              border: '1.5px solid rgba(0,214,160,0.30)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 28,
              fontSize: 38,
              color: acc,
              fontWeight: 800,
            }}
          >
            ₹
          </div>
        )}

        {/* Wordmark */}
        <div
          style={{
            display: 'flex',
            fontSize: 88,
            fontWeight: 800,
            letterSpacing: '-4px',
            lineHeight: 1,
            marginBottom: 20,
          }}
        >
          <span style={{ color: t1 }}>Split</span>
          <span style={{ color: acc }}>Now</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            color: t2,
            letterSpacing: '-0.3px',
            marginBottom: 44,
          }}
        >
          The expense splitting app for roommates &amp; friend groups.
        </div>

        {/* Badge pills */}
        <div style={{ display: 'flex', gap: 12 }}>
          {badges.map(tag => (
            <div
              key={tag}
              style={{
                padding: '10px 22px',
                borderRadius: 100,
                border: '1px solid rgba(0,214,160,0.25)',
                background: 'rgba(0,214,160,0.08)',
                color: acc,
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Domain watermark */}
        <div
          style={{
            position: 'absolute',
            bottom: 36,
            right: 56,
            fontSize: 16,
            color: t3,
            fontWeight: 600,
            letterSpacing: '0.5px',
          }}
        >
          splitnow.vertazon.com
        </div>
      </div>
    ),
    { ...size },
  );
}
