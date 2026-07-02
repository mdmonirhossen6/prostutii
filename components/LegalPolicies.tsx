'use client';

export default function LegalPolicies() {
  return (
    <section id="legal" aria-labelledby="legal-heading" style={{ padding: 'var(--space-8) 0', background: 'var(--color-surface-bg)' }}>
      <div className="container-page">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          
          {/* Privacy Policy */}
          <div>
            <h2 id="privacy" style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '20px' }}>
              Privacy Policy
            </h2>
            <div style={{ background: '#1c2230', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', padding: '32px' }}>
              
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '8px' }}>1. Data Collection</h3>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '12px' }}>
                  We collect basic profile details to customize your interactions and provide a personalized learning experience.
                </p>
                <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ fontSize: '13px', color: 'var(--color-text-secondary)', display: 'flex', gap: '8px' }}>
                    <span style={{ color: 'var(--color-text-inverse)' }}>•</span> Identity details: Name and email address used during registration.
                  </li>
                  <li style={{ fontSize: '13px', color: 'var(--color-text-secondary)', display: 'flex', gap: '8px' }}>
                    <span style={{ color: 'var(--color-text-inverse)' }}>•</span> System identifiers: Device ID to support reliable account sync across your devices.
                  </li>
                </ul>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '8px' }}>2. Usage & Data Processing</h3>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '12px' }}>
                  Your data is strictly utilized to operate internal application features. We do not sell your personal data to third parties.
                </p>
                <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ fontSize: '13px', color: 'var(--color-text-secondary)', display: 'flex', gap: '8px' }}>
                    <span style={{ color: 'var(--color-text-inverse)' }}>•</span> Progress Tracking: Maintaining your coursework history and achievements.
                  </li>
                  <li style={{ fontSize: '13px', color: 'var(--color-text-secondary)', display: 'flex', gap: '8px' }}>
                    <span style={{ color: 'var(--color-text-inverse)' }}>•</span> Gamification: Managing secure placements on regional leaderboards.
                  </li>
                  <li style={{ fontSize: '13px', color: 'var(--color-text-secondary)', display: 'flex', gap: '8px' }}>
                    <span style={{ color: 'var(--color-text-inverse)' }}>•</span> Account Security: Ensuring system integrity and preventing duplicate abuse.
                  </li>
                </ul>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '8px' }}>3. Data Security</h3>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  We implement industry-standard practices to help keep your personal information secure, utilizing high-grade encryption systems during transit and at rest via Firebase security environments.
                </p>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '8px' }}>4. Third-Party Services</h3>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '12px' }}>
                  To support scalable application performance, safe media distribution, and efficient computing, our application infrastructure relies on several security-focused external partners:
                </p>
                <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ fontSize: '13px', color: 'var(--color-text-secondary)', display: 'flex', gap: '8px' }}>
                    <span style={{ color: 'var(--color-text-inverse)' }}>•</span> Cloudflare R2 for asset caching and secure, optimized distribution.
                  </li>
                  <li style={{ fontSize: '13px', color: 'var(--color-text-secondary)', display: 'flex', gap: '8px' }}>
                    <span style={{ color: 'var(--color-text-inverse)' }}>•</span> Supabase and Firebase for database management and secure user authentication.
                  </li>
                  <li style={{ fontSize: '13px', color: 'var(--color-text-secondary)', display: 'flex', gap: '8px' }}>
                    <span style={{ color: 'var(--color-text-inverse)' }}>•</span> Select AI APIs to provide real-time interactive training feedback.
                  </li>
                </ul>
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '4px' }}>Have questions?</h3>
                <p style={{ fontSize: '13px', color: 'var(--color-text-inverse)' }}>
                  If you need clarification regarding any of these terms, please connect with our support team at <a href="mailto:prostutibdapp@gmail.com" style={{ color: '#4d6bff', textDecoration: 'none' }}>prostutibdapp@gmail.com</a>.
                </p>
              </div>

            </div>
          </div>

          {/* Refund Policy */}
          <div>
            <h2 id="refund" style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '20px' }}>
              Refund Policy
            </h2>
            <div style={{ background: '#1c2230', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', padding: '32px', height: '100%' }}>
              
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '8px' }}>1. Premium Access Terms</h3>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  All transactions involving premium features, individual courses, or subscription services are considered final. Payment charges are generally non-refundable once your premium access is initialized.
                </p>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '8px' }}>2. Activation Verification Issues</h3>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '12px' }}>
                  If a processed payment fails to unlock your premium account status automatically, please contact support so we can manually activate your plan:
                </p>
                <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ fontSize: '13px', color: 'var(--color-text-secondary)', display: 'flex', gap: '8px' }}>
                    <span style={{ color: 'var(--color-text-inverse)' }}>•</span> Provide your email address and transaction ID from your receipt.
                  </li>
                  <li style={{ fontSize: '13px', color: 'var(--color-text-secondary)', display: 'flex', gap: '8px' }}>
                    <span style={{ color: 'var(--color-text-inverse)' }}>•</span> Contact our support desk directly via our verified WhatsApp or Telegram channels.
                  </li>
                </ul>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '8px' }}>3. Trial Availability</h3>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  We highly recommend that users take advantage of our free features or trial tiers prior to making any financial commitments. This ensures our app and material meet your learning expectations.
                </p>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '8px' }}>4. Exceptional Adjustments</h3>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '12px' }}>
                  While policies remain strict, exceptions may be reviewed by administration under specialized circumstances:
                </p>
                <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ fontSize: '13px', color: 'var(--color-text-secondary)', display: 'flex', gap: '8px' }}>
                    <span style={{ color: 'var(--color-text-inverse)' }}>•</span> Double-billing errors resulting from localized payment provider issues.
                  </li>
                  <li style={{ fontSize: '13px', color: 'var(--color-text-secondary)', display: 'flex', gap: '8px' }}>
                    <span style={{ color: 'var(--color-text-inverse)' }}>•</span> Extended technical system outages that actively restrict access immediately post-purchase.
                  </li>
                </ul>
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', marginTop: 'auto' }}>
                <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '4px' }}>Have questions?</h3>
                <p style={{ fontSize: '13px', color: 'var(--color-text-inverse)' }}>
                  If you need clarification regarding any of these terms, please connect with our support team at <a href="mailto:prostutibdapp@gmail.com" style={{ color: '#4d6bff', textDecoration: 'none' }}>prostutibdapp@gmail.com</a>.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
