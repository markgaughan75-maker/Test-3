import styles from "../styles/pricing.module.scss";

export default function Pricing() {
  return (
    <div className={styles.pricingPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Simple, Flexible Pricing</h1>
        <p>
          Choose the plan that fits your needs. Upgrade, downgrade, or cancel at
          any time.
        </p>
      </section>

      {/* Pricing Plans */}
      <section className={styles.plans}>
        <div className={styles.planCard}>
          <h2>Starter</h2>
          <p className={styles.price}>Free</p>
          <ul>
            <li>✔ 10 image credits</li>
            <li>✔ Basic AI features</li>
            <li>✔ Community support</li>
          </ul>
          <button className={styles.cta}>Get Started</button>
        </div>

        <div className={`${styles.planCard} ${styles.popular}`}>
          <h2>Pro</h2>
          <p className={styles.price}>$19 / month</p>
          <ul>
            <li>✔ 500 image credits</li>
            <li>✔ Advanced AI features</li>
            <li>✔ Priority support</li>
          </ul>
          <button className={styles.cta}>Choose Pro</button>
        </div>

        <div className={styles.planCard}>
          <h2>Enterprise</h2>
          <p className={styles.price}>Custom</p>
          <ul>
            <li>✔ Unlimited credits</li>
            <li>✔ All AI features unlocked</li>
            <li>✔ Dedicated account manager</li>
          </ul>
          <button className={styles.cta}>Contact Sales</button>
        </div>
      </section>
    </div>
  );
}
