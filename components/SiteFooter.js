export default function SiteFooter() {
  return (
    <footer className="section section-sm">
      <div className="container" style={{ borderTop: '1px solid var(--border)', paddingTop: 18 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>© {new Date().getFullYear()} Lumely.</div>
          <div style={{ opacity: .7, fontSize: 14 }}>Built for AEC • Verified View–friendly • Ireland</div>
        </div>
      </div>
    </footer>
  );
}
