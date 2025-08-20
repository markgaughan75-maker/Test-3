import { useState } from 'react';
import PageLayout from '../components/PageLayout';

export default function Register() {
  const [name, setName] = useState('');
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
            <h1 style={{ fontSize: 34, margin: 0 }}>Create your account</h1>
            <p style={{ color: 'var(--muted)' }}>Start with 5 free credits. No card required.</p>
          </div>

          <div className="card padded">
            <form onSubmit={onSubmit} className="grid" style={{ gap: 12 }}>
              <label className="label">Name</label>
              <input className="input" value={name} onChange={(e)=>setName(e.target.value)} required placeholder="Jane Doe" />
              <label className="label">Email</label>
              <input className="input" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder="you@company.com" />
              <label className="label">Password</label>
              <input className="input" type="password" value={pw} onChange={(e)=>setPw(e.target.value)} required placeholder="••••••••" />
              <button className="btn primary" disabled={loading}>{loading ? 'Creating…' : 'Create account'}</button>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
