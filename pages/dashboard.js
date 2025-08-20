import React from "react";

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>My Account</h2>
        <ul>
          <li><a href="/dashboard">Services</a></li>
          <li><a href="/subscription">Subscription</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
        <div className="credits">
          <p>Credits left: <strong>120</strong></p>
          <a href="/checkout?topup=50" className="btn-small">+ Top Up 50</a>
        </div>
      </aside>

      {/* Main */}
      <main className="main">
        <h1>Choose a Service</h1>
        <div className="service-grid">
          <a className="service-card" href="/services/render">✨ Render Enhancement</a>
          <a className="service-card" href="/services/staging">🏠 Virtual Staging</a>
          <a className="service-card" href="/services/design">🎨 Design Options</a>
        </div>
      </main>
    </div>
  );
}
