import "../styles/pricing.scss";

export default function Pricing() {
  return (
    <div className="pricing-page">
      <h1>Simple, flexible pricing</h1>
      <p className="subhead">
        Use credits across all features. Upgrade, downgrade, or cancel any time.
      </p>

      {/* Toggle buttons */}
      <div className="toggle">
        <button className="active">Monthly</button>
        <button>Yearly -15%</button>
      </div>

      {/* Plans */}
      <div className="plans">
        <div className="plan-card">
          <h2>Free</h2>
          <p className="price">€0/mo</p>
          <ul>
            <li>5 credits / month</li>
            <li>Access to all 3 features</li>
            <li>Email support</li>
          </ul>
          <a href="#" className="btn secondary">Start Free</a>
        </div>

        <div className="plan-card">
          <h2>Starter</h2>
          <p className="price">€20/mo</p>
          <ul>
            <li>50 credits / month</li>
            <li>Standard support</li>
            <li>x2 / x4 upscaling</li>
          </ul>
          <a href="#" className="btn secondary">Choose Plan</a>
        </div>

        <div className="plan-card">
          <h2>Studio <span style={{color: "#4f46e5"}}>(Most Popular)</span></h2>
          <p className="price">€35/mo</p>
          <ul>
            <li>200 credits / month</li>
            <li>Batch uploads (up to 10)</li>
            <li>Priority support</li>
          </ul>
          <a href="#" className="btn primary">Choose Plan</a>
        </div>

        <div className="plan-card">
          <h2>Pro</h2>
          <p className="price">€60/mo</p>
          <ul>
            <li>600 credits / month</li>
            <li>Team seats (up to 5)</li>
            <li>SLA support</li>
          </ul>
          <a href="#" className="btn secondary">Choose Plan</a>
        </div>
      </div>

      {/* Compare table */}
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
