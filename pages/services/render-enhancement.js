import WorkspaceShell from '../../components/WorkspaceShell';
import UploadProcessor from '../../components/UploadProcessor';

export default function RenderEnhancement() {
  return (
    <WorkspaceShell>
      <h1 style={{ fontSize: 24, marginBottom: 8 }}>Render Enhancement</h1>
      <p style={{ color: 'var(--muted)', marginTop: 0 }}>Add photoreal clarity while preserving geometry and materials.</p>
      <div style={{ marginTop: 14 }}>
        <UploadProcessor feature="render" />
      </div>
    </WorkspaceShell>
  );
}
