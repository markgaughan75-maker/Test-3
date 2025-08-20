import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import Link from 'next/link';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [loading, setLoading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      window.location.href = '/services';
    }, 600);
  }

  return (
    <PageLayout>
      <section className="section">
        <div className="container" style={{ maxWidth: 560 }}>
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <h1 style={{ fontSize: 34, margin: 0 }}>Welcome back</h1>
            <p style={{ color: 'var(--muted)' }}>Sign in to access your workspace.</p>
          </div>

          <div className="card padded">
            <div className="grid" style={{ gap: 10 }}>
              <button className="btn outline">Continue with Google</button>
              <button className="btn outline">Continue with Apple</button>
              <button className="btn outline">Continue with Microsoft</button>
            </div>

            <div style={{ margin: '18px 0', height: 1, background: 'var(--border)' }} />

            <form onSubmit={onSubmit} className="grid" style={{ gap: 12 }}>
              <label className="label">Email</label>
              <input className="input" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder="you@company.com" />
              <label className="label">Password</label>
              <input className="input" type="password" value={pw} onChange={(e)=>setPw(e.target.value)} required placeholder="••••••••" />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
                <a href="/reset" style={{ color: 'var(--muted)' }}>Forgot password?</a>
                <span style={{ color: 'var(--muted)' }}>New here? <Link href="/register" style={{ color: 'var(--brand)' }}>Register now</Link></span>
              </div>
              <button className="btn primary" disabled={loading}>{loading ? 'Signing in…' : 'Sign in'}</button>
              <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--muted)' }}>
                Want more credits? <Link href="/pricing" style={{ color: 'var(--brand)' }}>Subscribe now</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
