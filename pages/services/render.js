import React, { useState } from "react";

export default function RenderService() {
  const [file, setFile] = useState(null);
  const [final, setFinal] = useState(null);

  const handleUpload = (e) => {
    const uploaded = e.target.files[0];
    setFile(URL.createObjectURL(uploaded));
    // mock processing
    setTimeout(() => {
      setFinal("/sample-output.jpg");
    }, 1500);
  };

  return (
    <div className="service-page">
      <h1>Render Enhancement</h1>
      <p>Upload your render and let our AI refine it.</p>

      <div className="upload-box">
        <input type="file" onChange={handleUpload} />
      </div>

      {file && !final && <p>Processing...</p>}
      {final && (
        <div className="result">
          <img src={final} alt="Final result" />
          <a href={final} download className="btn">Download</a>
        </div>
      )}
    </div>
  );
}
