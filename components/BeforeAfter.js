import { useState } from 'react';

export default function BeforeAfter({ before, after }) {
  const [pos, setPos] = useState(55);
  return (
    <div
      className="ba"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const x = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
        setPos(x * 100);
      }}
      onTouchMove={(e) => {
        const t = e.touches[0];
        const r = e.currentTarget.getBoundingClientRect();
        const x = Math.min(1, Math.max(0, (t.clientX - r.left) / r.width));
        setPos(x * 100);
      }}
      style={{ aspectRatio: '16/10', background: '#f1f5f9' }}
    >
      <img src={after} alt="after" />
      <div className="clip" style={{ width: `${pos}%` }}>
        <img src={before} alt="before" />
      </div>
      <div className="divider" style={{ left: `${pos}%` }} />
    </div>
  );
}
