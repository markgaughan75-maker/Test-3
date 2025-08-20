import Link from 'next/link';
import PageLayout from '../components/PageLayout';
import { Wand2, Upload, Zap, CheckCircle2 } from 'lucide-react';
import BeforeAfter from '../components/BeforeAfter';

export default function Home() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="section hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="kicker">Built for AEC • AI visuals</span>
          <h1 style={{ fontSize: 48, marginTop: 14, marginBottom: 8 }}>
            Photoreal results from any render — <span style={{ color: 'var(--brand-2)' }}>in minutes</span>
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: 18, maxWidth: 760, margin: '10px auto 0' }}>
            Enhance CG renders, virtually stage interiors, and explore design options while preserving geometry and materials.
          </p>
          <div style={{ marginTop: 18, display: 'flex', gap: 12, justifyContent: 'center' }}>
            <Link className="btn primary" href="/signin">Start free</Link>
            <Link className="btn outline" href="/pricing">View pricing</Link>
          </div>
        </div>
      </section>

      {/* Feature switcher */}
      <section className="section">
        <div className="container grid grid-2" style={{ alignItems: 'center' }}>
          <div className="card padded">
            <h2 style={{ fontSize: 28, marginTop: 0 }}>Precision controls. No surprises.</h2>
            <p style={{ color: 'var(--muted)' }}>
              Keep geometry and materials intact while adding photoreal tone and clarity.
              Choose Low/Medium/High quality and optional ×2/×4 upscale.
            </p>
            <ul style={{ marginTop: 14, paddingLeft: 18 }}>
              {[
                'Preserve structure and materials',
                'Balanced tone, contrast & glare control',
                'Smart upscale to crisp detail'
              ].map((t) => (
                <li key={t} style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
                  <CheckCircle2 size={18} color="#0ea5e9" /> <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card padded">
            <BeforeAfter
              before="/placeholder/render-before.jpg"
              after="/placeholder/render-after.jpg"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section section-muted">
        <div className="container grid grid-3">
          {[
            { t: 'Sign in & upload', d: 'Start a new job from your dashboard. 1080p–4K supported.', Icon: Upload },
            { t: 'Enhance & upscale', d: 'Pick Low/Medium/High. ×2/×4 sharpness with material fidelity.', Icon: Wand2 },
            { t: 'Download & deliver', d: 'Client-ready output for decks, listings and approvals.', Icon: Zap }
          ].map((s) => (
            <div key={s.t} className="card padded">
              <div style={{ width: 40, height: 40, borderRadius: 12, background: '#eef2ff', color: '#4338ca',
                display: 'grid', placeItems: 'center', marginBottom: 10 }}>
                <s.Icon size={22} />
              </div>
              <div style={{ fontWeight: 700 }}>{s.t}</div>
              <div style={{ color: 'var(--muted)', fontSize: 14 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: 28, margin: 0 }}>Ready to try Lumely?</h3>
          <p style={{ color: 'var(--muted)' }}>Start free with 5 credits. No card required.</p>
          <div style={{ marginTop: 12 }}>
            <Link className="btn primary" href="/signin">Sign in to start</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
