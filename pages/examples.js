import PageLayout from '../components/PageLayout';
import { useState } from 'react';

const CATS = ['render', 'staging', 'design'];

const data = {
  render: [
    { before: '/examples/render/before-1.jpg', after: '/examples/render/after-1.jpg', caption: 'Daylight tone + clarity' },
    { before: '/examples/render/before-2.jpg', after: '/examples/render/after-2.jpg', caption: 'Glare control + sky balance' },
    { before: '/examples/render/before-3.jpg', after: '/examples/render/after-3.jpg', caption: 'Facade realism' },
    { before: '/examples/render/before-4.jpg', after: '/examples/render/after-4.jpg', caption: 'Contrast + material pop' }
  ],
  staging: [
    { before: '/examples/staging/before-1.jpg', after: '/examples/staging/after-1.jpg', caption: 'Scandi bedroom' },
    { before: '/examples/staging/before-2.jpg', after: '/examples/staging/after-2.jpg', caption: 'Contemporary living' },
    { before: '/examples/staging/before-3.jpg', after: '/examples/staging/after-3.jpg', caption: 'Warm dining mood' },
    { before: '/examples/staging/before-4.jpg', after: '/examples/staging/after-4.jpg', caption: 'Loft workspace' }
  ],
  design: [
    { before: '/examples/design/before-1.jpg', after: '/examples/design/after-1.jpg', caption: 'Cabinet & worktop swap' },
    { before: '/examples/design/before-2.jpg', after: '/examples/design/after-2.jpg', caption: 'Floor + wall palette' },
    { before: '/examples/design/before-3.jpg', after: '/examples/design/after-3.jpg', caption: 'Exterior material study' },
    { before: '/examples/design/before-4.jpg', after: '/examples/design/after-4.jpg', caption: 'Lighting temperature' }
  ]
};

function Pair({ ex }) {
  return (
    <figure className="card" style={{ overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ position: 'relative' }}>
          <img src={ex.before} alt="before" />
          <div style={{ position: 'absolute', left: 8, top: 8, fontSize: 11, color: '#fff', background: 'rgba(0,0,0,.45)', padding: '2px 6px', borderRadius: 6 }}>Before</div>
        </div>
        <div style={{ position: 'relative' }}>
          <img src={ex.after} alt="after" />
          <div style={{ position: 'absolute', left: 8, top: 8, fontSize: 11, color: '#fff', background: 'rgba(0,0,0,.45)', padding: '2px 6px', borderRadius: 6 }}>After</div>
        </div>
      </div>
      {ex.caption && <figcaption style={{ padding: 12, fontSize: 13, color: 'var(--muted)' }}>{ex.caption}</figcaption>}
    </figure>
  );
}

export default function Examples() {
  const [cat, setCat] = useState('render');

  return (
    <PageLayout>
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="kicker">Real outputs</span>
          <h1 style={{ fontSize: 40, margin: '12px 0' }}>Before & after examples</h1>
          <p style={{ color: 'var(--muted)', maxWidth: 760, margin: '0 auto' }}>
            Explore how Lumely enhances base renders, stages interiors and explores options while preserving geometry.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Tabs */}
          <div className="card padded" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className="btn"
                style={{
                  borderColor: cat === c ? 'transparent' : 'var(--border)',
                  background: cat === c ? '#0f172a' : '#fff', color: cat === c ? '#fff' : 'var(--ink)'
                }}
              >
                {c === 'render' ? 'Render Enhancement' : c === 'staging' ? 'Virtual Staging' : 'Design Options'}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-2" style={{ marginTop: 18 }}>
            {data[cat].map((ex, i) => <Pair key={i} ex={ex} />)}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
