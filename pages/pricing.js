// pages/pricing.js
import React from "react";

export default function Pricing() {
  return (
    <main className="container">
      <section className="pricing-intro">
        <h1>Pricing Plans</h1>
        <p>Choose the plan that works best for your workflow.</p>
      </section>

      <section className="pricing-grid">
        <div className="plan">
          <h2>Starter</h2>
          <p className="price">$19 <span>/mo</span></p>
          <ul>
            <li>✔ 50 credits</li>
            <li>✔ Basic rendering</li>
            <li>✔ Email support</li>
          </ul>
          <a href="/checkout?plan=starter" className="btn">Get Started</a>
        </div>

        <div className="plan featured">
          <h2>Pro</h2>
          <p className="price">$49 <span>/mo</span></p>
          <ul>
            <li>✔ 200 credits</li>
            <li>✔ All services (Enhance, Staging, Design)</li>
            <li>✔ Priority support</li>
          </ul>
          <a href="/checkout?plan=pro" className="btn">Choose Pro</a>
        </div>

        <div className="plan">
          <h2>Studio</h2>
          <p className="price">$99 <span>/mo</span></p>
          <ul>
            <li>✔ 500 credits</li>
            <li>✔ Unlimited team members</li>
            <li>✔ Dedicated account manager</li>
          </ul>
          <a href="/checkout?plan=studio" className="btn">Select Studio</a>
        </div>
      </section>
    </main>
  );
}
