import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container inner">
        <Link href="/" className="brand">
          <span className="brand-badge" />
          <span>Lumely</span>
        </Link>
        <nav className="nav">
          <Link href="/features">Features</Link>
          <Link href="/examples">Examples</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/signin" className="btn primary">Sign in</Link>
        </nav>
      </div>
    </header>
  );
}
