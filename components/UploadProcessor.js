import { useEffect, useRef, useState } from 'react';

export default function UploadProcessor({ feature, showPrompt }) {
  const [src, setSrc] = useState(null);
  const [result, setResult] = useState(null);
  const [quality, setQuality] = useState('medium');
  const [upscale, setUpscale] = useState(2);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const sampleAfter =
    feature === 'render'
      ? '/placeholder/render-after.jpg'
      : feature === 'staging'
      ? '/placeholder/staging-after.jpg'
      : '/placeholder/design-after.jpg';

  function onFile(e) {
    const f = e.target.files?.[0];
    if (!f) return;
    const url = URL.createObjectURL(f);
    setSrc(url); setResult(null);
  }

  function process() {
    if (!src) return;
    setLoading(true);
    setTimeout(() => {
      setResult(sampleAfter);
      setLoading(false);
      const cost = quality === 'low' ? 1 : quality === 'medium' ? 2 : 4;
      const v = parseInt(localStorage.getItem('lumely_credits') || '0', 10);
      localStorage.setItem('lumely_credits', String(Math.max(0, v - cost)));
      window.dispatchEvent(new Event('storage'));
    }, 900);
  }

  function download() {
    if (!result) return;
    const a = document.createElement('a');
    a.href = result;
    a.download = `lumely-${feature}-${Date.now()}.jpg`;
    a.click();
  }

  useEffect(() => () => { if (src) URL.revokeObjectURL(src); }, [src]);

  return (
    <div className="grid grid-2" style={{ gap: 18 }}>
      {/* left controls - small */}
      <div className="card padded">
        <div className="label">Upload image</div>
        <div
          className="card"
          onClick={() => inputRef.current?.click()}
          style={{ padding: 16, borderStyle: 'dashed', cursor: 'pointer', textAlign: 'center' }}
        >
          <div style={{ fontSize: 13, color: 'var(--muted)' }}>Drop or click to upload</div>
          <input ref={inputRef} type="file" accept="image/*" onChange={onFile} style={{ display: 'none' }} />
        </div>
        {src && <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6 }}>Selected file ready</div>}

        <div style={{ height: 1, background: 'var(--border)', margin: '14px 0' }} />

        <div>
          <label className="label">Quality</label>
          <select className="select" value={quality} onChange={(e)=>setQuality(e.target.value)}>
            <option value="low">Low (1 credit)</option>
            <option value="medium">Medium (2 credits)</option>
            <option value="high">High (4 credits)</option>
          </select>
        </div>
        <div style={{ marginTop: 10 }}>
          <label className="label">Upscale</label>
          <select className="select" value={upscale} onChange={(e)=>setUpscale(parseInt(e.target.value,10))}>
            <option value={1}>None</option>
            <option value={2}>×2</option>
            <option value={4}>×4</option>
          </select>
        </div>

        {showPrompt && (
          <div style={{ marginTop: 10 }}>
            <label className="label">AI prompt (optional)</label>
            <textarea className="textarea" rows={4} value={prompt} onChange={(e)=>setPrompt(e.target.value)}
              placeholder="e.g., warm walnut floors, matte black fixtures, neutral palette" />
          </div>
        )}

        <button className="btn primary" onClick={process} disabled={!src || loading} style={{ marginTop: 12 }}>
          {loading ? 'Processing…' : 'Process'}
        </button>
        <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 8 }}>
          Low=1 credit · Medium=2 credits · High=4 credits. Upscale covered in the credit cost.
        </p>
      </div>

      {/* right - big result */}
      <div className="grid" style={{ gap: 12 }}>
        <div className="card" style={{ padding: 10 }}>
          <div style={{ aspectRatio: '16/10', background: '#f1f5f9', borderRadius: 10,
            display: 'grid', placeItems: 'center', overflow: 'hidden' }}>
            {result ? (
              <img src={result} alt="Result" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            ) : src ? (
              <img src={src} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: .85 }} />
            ) : (
              <span style={{ color: 'var(--muted)', fontSize: 14 }}>Result preview appears here</span>
            )}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button className="btn outline" onClick={()=>{ setSrc(null); setResult(null); }}>
            Upload new
          </button>
          <button className="btn dark" onClick={download} disabled={!result}>
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
