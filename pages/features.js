import PageLayout from '../components/PageLayout';
import BeforeAfter from '../components/BeforeAfter';
import Link from 'next/link';
import { Layers, Images, Palette, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Features() {
  return (
    <PageLayout>
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="kicker">What’s inside Lumely</span>
          <h1 style={{ fontSize: 40, margin: '12px 0' }}>Features built for AEC visuals</h1>
          <p style={{ color: 'var(--muted)', maxWidth: 760, margin: '0 auto' }}>
            Enhance base renders, virtually stage interiors, and explore material options — fast and consistent.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-3">
          {[
            { Icon: Layers,  t: 'Render Enhancement', d: 'Photoreal clarity with geometry fidelity.' },
            { Icon: Images,  t: 'Virtual Staging',    d: 'Furnish unfurnished rooms in seconds.' },
            { Icon: Palette, t: 'Design Options',     d: 'Material & palette variations with AI prompt.' }
          ].map(({ Icon, t, d }) => (
            <div key={t} className="card padded">
              <div style={{ width: 40, height: 40, borderRadius: 12, background: '#ecfeff', color: '#0891b2',
                display: 'grid', placeItems: 'center', marginBottom: 10 }}>
                <Icon size={22} />
              </div>
              <div style={{ fontWeight: 700 }}>{t}</div>
              <div style={{ color: 'var(--muted)', fontSize: 14 }}>{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Three feature blocks with Before/After */}
      {[
        {
          title: 'Render Enhancement',
          before: '/placeholder/render-before.jpg',
          after: '/placeholder/render-after.jpg',
          points: [
            'Balanced tone, contrast & glare control',
            'Color consistency across a deck',
            'Optional ×2/×4 upscaling'
          ],
          href: '/signin',
          cta: 'Try it free'
        },
        {
          title: 'Virtual Staging',
          before: '/placeholder/staging-before.jpg',
          after: '/placeholder/staging-after.jpg',
          points: [
            'Bedroom, living, kitchen presets',
            'Declutter / remove items option',
            'Lighting variants (day/dusk)'
          ],
          href: '/signin',
          cta: 'Stage a room'
        },
        {
          title: 'Design Options',
          before: '/placeholder/design-before.jpg',
          after: '/placeholder/design-after.jpg',
          points: [
            'Material swaps (cabinets, floors, facades)',
            'Mood variants: neutral, warm, contemporary',
            'Prompt box for specific requests'
          ],
          href: '/signin',
          cta: 'Explore options'
        }
      ].map((blk) => (
        <section key={blk.title} className="section">
          <div className="container grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 28, marginTop: 0 }}>{blk.title}</h2>
              <ul style={{ marginTop: 14, paddingLeft: 18 }}>
                {blk.points.map((t) => (
                  <li key={t} style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
                    <CheckCircle2 size={18} color="#0ea5e9" /> <span>{t}</span>
                  </li>
                ))}
              </ul>
              <Link href={blk.href} className="btn dark" style={{ marginTop: 12, display: 'inline-flex', gap: 8 }}>
                {blk.cta} <ArrowRight size={16} />
              </Link>
            </div>
            <div className="card padded">
              <BeforeAfter before={blk.before} after={blk.after} />
            </div>
          </div>
        </section>
      ))}
    </PageLayout>
  );
}
