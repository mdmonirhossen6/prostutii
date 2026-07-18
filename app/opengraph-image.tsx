import { ImageResponse } from 'next/og';

export const alt = "Prostuti — Bangladesh's #1 Exam Prep Platform";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          background:
            'radial-gradient(circle at 20% 20%, #1a2e5e 0%, #0b1120 55%), linear-gradient(135deg, #0b1120 0%, #111827 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-120px',
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,217,160,0.35) 0%, rgba(0,217,160,0) 70%)',
            display: 'flex',
          }}
        />

        {/* Brand badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #00d9a0 0%, #4d6bff 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 800,
              color: '#0b1120',
            }}
          >
            P
          </div>
          <div style={{ fontSize: '34px', fontWeight: 700, letterSpacing: '-0.5px' }}>
            Prostuti
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: '76px',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-2px',
            marginBottom: '24px',
            maxWidth: '1000px',
          }}
        >
          Bangladesh&apos;s #1 Exam Prep Platform
        </div>

        {/* Subheadline */}
        <div
          style={{
            fontSize: '30px',
            color: '#9ca3af',
            lineHeight: 1.4,
            maxWidth: '900px',
            display: 'flex',
          }}
        >
          HSC, SSC &amp; Admission prep with 200,000+ questions, model tests, and AI study plans.
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            gap: '40px',
            marginTop: '48px',
          }}
        >
          {[
            { value: '2L+', label: 'Questions' },
            { value: '4', label: 'Exam Programs' },
            { value: 'AI', label: 'Study Plans' },
          ].map((stat) => (
            <div key={stat.label} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '44px', fontWeight: 800, color: '#00d9a0' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '20px', color: '#9ca3af' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Footer URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            left: '80px',
            fontSize: '24px',
            color: '#6b7280',
            display: 'flex',
          }}
        >
          prostuti.bd
        </div>
      </div>
    ),
    { ...size }
  );
}
