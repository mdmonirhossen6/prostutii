'use client';

interface BoardMarqueeProps {
  lang: 'bn' | 'en';
}

const boards = [
  { bn: 'ঢাকা বোর্ড', en: 'Dhaka Board' },
  { bn: 'রাজশাহী বোর্ড', en: 'Rajshahi Board' },
  { bn: 'কুমিল্লা বোর্ড', en: 'Cumilla Board' },
  { bn: 'যশোর বোর্ড', en: 'Jashore Board' },
  { bn: 'চট্টগ্রাম বোর্ড', en: 'Chattogram Board' },
  { bn: 'বরিশাল বোর্ড', en: 'Barishal Board' },
  { bn: 'সিলেট বোর্ড', en: 'Sylhet Board' },
  { bn: 'দিনাজপুর বোর্ড', en: 'Dinajpur Board' },
  { bn: 'ময়মনসিংহ বোর্ড', en: 'Mymensingh Board' },
  { bn: 'মাদ্রাসা বোর্ড', en: 'Madrasah Board' },
  { bn: 'কারিগরি বোর্ড', en: 'Technical Board' },
];

export default function BoardMarquee({ lang }: BoardMarqueeProps) {
  const duplicatedBoards = [...boards, ...boards];

  return (
    <section
      aria-label={lang === 'bn' ? 'সকল বোর্ডের শিক্ষার্থীদের জন্য' : 'For students of all boards'}
      style={{
        padding: '24px 0',
        background: 'transparent',
        borderTop: '1px solid var(--color-overlay-5)',
        borderBottom: '1px solid var(--color-overlay-5)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, var(--color-surface-base) 0%, transparent 15%, transparent 85%, var(--color-surface-base) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div className="marquee-container">
        <div className="marquee-track">
          {duplicatedBoards.map((board, idx) => (
            <div key={idx} className="marquee-item">
              <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-text-secondary)', letterSpacing: '0.5px' }}>
                {lang === 'bn' ? board.bn : board.en}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          display: flex;
          overflow: hidden;
          user-select: none;
        }

        .marquee-track {
          display: flex;
          gap: 40px;
          animation: scroll 30s linear infinite;
          width: max-content;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .marquee-item {
          display: flex;
          align-items: center;
          white-space: nowrap;
          padding: 8px 16px;
          background: var(--color-overlay-3);
          border: 1px solid var(--color-overlay-5);
          border-radius: 100px;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        
        .marquee-item:hover {
          background: var(--color-overlay-5);
          border-color: var(--color-overlay-10);
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 20px));
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
          }
          .marquee-container {
            overflow: visible;
          }
        }
      `}</style>
    </section>
  );
}
