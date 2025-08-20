import Link from 'next/link';
import { useEffect, useState } from 'react';

function useCredits() {
  const [credits, setCredits] = useState(0);
  useEffect(() => {
    const v = localStorage.getItem('lumely_credits');
    if (v === null) localStorage.setItem('lumely_credits', '55');
    setCredits(parseInt(localStorage.getItem('lumely_credits') || '55', 10));
    const onStorage = () => setCredits(parseInt(localStorage.getItem('lumely_credits') || '0', 10));
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);
  return { credits, setCredits };
}

export default function WorkspaceShell({ children }) {
  const { credits } = useCredits();

  return (
    <div className="workspace">
      <aside className="sidebar">
        <div style={{ fontWeight: 800, display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span className="brand-badge" /> Lumely
        </div>

        <div className="group-title">Workspace</div>
        <nav>
          <Link href="/services">Overview</Link>
          <Link href="/services/render-enhancement">Render Enhancement</Link>
          <Link href="/services/virtual-staging">Virtual Staging</Link>
          <Link href="/services/design-options">Design Options</Link>
        </nav>

        <div className="group-title">Account</div>
        <nav>
          <Link href="/account/subscription">Subscription</Link>
          <Link href="/account/settings">Settings</Link>
        </nav>
      </aside>

      <div className="mainpane">
        <div className="creditsbar">
          <div style={{ fontSize: 14 }}>Credits: <strong>{credits}</strong></div>
          <Link href="/checkout?topup=50" className="btn primary">Top up 50</Link>
        </div>
        <div className="container" style={{ paddingTop: 18, paddingBottom: 24 }}>{children}</div>
      </div>
    </div>
  );
}
