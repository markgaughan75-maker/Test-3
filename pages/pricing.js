import React from "react";

export default function Pricing() {
  return (
    <main className="container pricing-page">
      <h1>Pricing Plans</h1>
      <p className="intro">Flexible plans for freelancers, studios, and enterprises.</p>

      <div className="pricing-grid">
        <div className="plan">
          <h2>Starter</h2>
          <p className="price">$19 / month</p>
          <ul>
            <li>✔ 50 credits</li>
            <li>✔ Render enhancement</li>
            <li>✔ Email support</li>
          </ul>
          <a href="/checkout?plan=starter&period=monthly" className="btn">Get Starter</a>
        </div>

        <div className="plan featured">
          <h2>Pro</h2>
          <p className="price">$49 / month</p>
          <ul>
            <li>✔ 200 credits</li>
            <li>✔ All services (Enhance, Staging, Design)</li>
            <li>✔ Priority email support</li>
          </ul>
          <a href="/checkout?plan=pro&period=monthly" className="btn">Choose Pro</a>
        </div>

        <div className="plan">
          <h2>Studio</h2>
          <p className="price">$99 / month</p>
          <ul>
            <li>✔ 500 credits</li>
            <li>✔ Unlimited team members</li>
            <li>✔ Dedicated account manager</li>
          </ul>
          <a href="/checkout?plan=studio&period=monthly" className="btn">Select Studio</a>
        </div>
      </div>

      <p className="note">Need more? <a href="/contact">Contact us</a> for enterprise solutions.</p>
    </main>
  );
}
