import WorkspaceShell from '../../components/WorkspaceShell';
import UploadProcessor from '../../components/UploadProcessor';

export default function VirtualStaging() {
  return (
    <WorkspaceShell>
      <h1 style={{ fontSize: 24, marginBottom: 8 }}>Virtual Staging</h1>
      <p style={{ color: 'var(--muted)', marginTop: 0 }}>Stage unfurnished rooms with curated styles — structure intact.</p>
      <div style={{ marginTop: 14 }}>
        <UploadProcessor feature="staging" />
      </div>
    </WorkspaceShell>
  );
}
