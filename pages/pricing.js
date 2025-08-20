import { useState } from "react";
import "../styles/pricing.scss";

export default function Pricing() {
  const [billing, setBilling] = useState("monthly"); // monthly | yearly

  // Plans data
  const plans = [
    {
      name: "Free",
      monthly: 0,
      yearly: 0,
      credits: "5 credits / month",
      features: ["Access to all 3 features", "Email support"],
      cta: "Start Free",
      highlight: false,
    },
    {
      name: "Starter",
      monthly: 20,
      yearly: 17,
      credits: "50 credits / month",
      features: [
        "Low / Medium / High quality",
        "x2 / x4 upscaling",
        "Standard support",
      ],
      cta: "Choose Plan",
      highlight: false,
    },
    {
      name: "Studio",
      monthly: 35,
      yearly: 30,
      credits: "200 credits / month",
      features: [
        "Priority queue speed",
        "Batch uploads (up to 10)",
        "Priority support",
      ],
      cta: "Choose Plan",
      highlight: true,
    },
    {
      name: "Pro",
      monthly: 60,
      yearly: 51,
      credits: "600 credits / month",
      features: [
        "Fastest queue speed",
        "Team seats (up to 5)",
        "SLA support",
      ],
      cta: "Choose Plan",
      highlight: false,
    },
  ];

  return (
    <div className="pricing-page">
      <h1>Simple, flexible pricing</h1>
      <p className="subhead">
        Use credits across all features. Upgrade, downgrade, or cancel any time.
      </p>

      {/* Toggle */}
      <div className="toggle">
        <button
          className={billing === "monthly" ? "active" : ""}
          onClick={() => setBilling("monthly")}
        >
          Monthly
        </button>
        <button
          className={billing === "yearly" ? "active" : ""}
          onClick={() => setBilling("yearly")}
        >
          Yearly -15%
        </button>
      </div>

      {/* Plans */}
      <div className="plans">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`plan-card ${plan.highlight ? "highlight" : ""}`}
          >
            <h2>
              {plan.name}{" "}
              {plan.highlight && (
                <span style={{ color: "#4f46e5" }}>(Most Popular)</span>
              )}
            </h2>
            <p className="price">
              €{billing === "monthly" ? plan.monthly : plan.yearly}
              <span>/mo</span>
            </p>
            <p>{plan.credits}</p>
            <ul>
              {plan.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
            <a
              href="#"
              className={`btn ${plan.highlight ? "primary" : "secondary"}`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>

      {/* Compare Table */}
      <div className="compare-table">
        <h2>Compare plans</h2>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Free</th>
              <th>Starter</th>
              <th>Studio</th>
              <th>Pro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Render Enhancement</td>
              <td>✔</td><td>✔</td><td>✔</td><td>✔</td>
            </tr>
            <tr>
              <td>Virtual Staging</td>
              <td>✔</td><td>✔</td><td>✔</td><td>✔</td>
            </tr>
            <tr>
              <td>Design Options (AI prompt)</td>
              <td>✔</td><td>✔</td><td>✔</td><td>✔</td>
            </tr>
            <tr>
              <td>x2 / x4 Upscaling</td>
              <td>✔</td><td>✔</td><td>✔</td><td>✔</td>
            </tr>
            <tr>
              <td>Priority queue speed</td>
              <td>—</td><td>—</td><td>✔</td><td>✔</td>
            </tr>
            <tr>
              <td>Batch uploads</td>
              <td>—</td><td>—</td><td>✔</td><td>✔</td>
            </tr>
            <tr>
              <td>Team seats</td>
              <td>—</td><td>—</td><td>—</td><td>✔</td>
            </tr>
            <tr>
              <td>SLA support</td>
              <td>—</td><td>—</td><td>—</td><td>✔</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
