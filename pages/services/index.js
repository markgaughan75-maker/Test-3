import WorkspaceShell from '../../components/WorkspaceShell';
import Link from 'next/link';

export default function ServicesHome() {
  const cards = [
    { href: '/services/render-enhancement', t: 'Render Enhancement', d: 'Photoreal clarity with geometry/material fidelity.' },
    { href: '/services/virtual-staging', t: 'Virtual Staging', d: 'Furnish unfurnished rooms with curated styles.' },
    { href: '/services/design-options', t: 'Design Options', d: 'Explore palettes & materials via AI prompt.' }
  ];

  return (
    <WorkspaceShell>
      <h1 style={{ fontSize: 24, margin: '6px 0 12px' }}>Choose a feature</h1>
      <div className="grid grid-3">
        {cards.map(c => (
          <Link key={c.href} href={c.href} className="card padded">
            <div style={{ fontWeight: 700 }}>{c.t}</div>
            <div style={{ color: 'var(--muted)', fontSize: 14 }}>{c.d}</div>
          </Link>
        ))}
      </div>
    </WorkspaceShell>
  );
}
