import WorkspaceShell from '../../components/WorkspaceShell';
import UploadProcessor from '../../components/UploadProcessor';

export default function DesignOptions() {
  return (
    <WorkspaceShell>
      <h1 style={{ fontSize: 24, marginBottom: 8 }}>Design Options</h1>
      <p style={{ color: 'var(--muted)', marginTop: 0 }}>Explore materials, palettes and moods with an AI prompt.</p>
      <div style={{ marginTop: 14 }}>
        <UploadProcessor feature="design" showPrompt />
      </div>
    </WorkspaceShell>
  );
}
