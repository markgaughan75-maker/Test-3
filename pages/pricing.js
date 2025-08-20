import React, { useState } from "react";

export default function Pricing() {
  const [period, setPeriod] = useState("monthly");

  const yearlyDiscount = 0.85; // 15% off yearly

  const plans = [
    {
      name: "Free",
      price: 0,
      credits: 5,
      features: [
        "5 credits to try",
        "Access to all 3 features",
        "Before/After viewer",
        "Email support",
      ],
      href: "/checkout?plan=free",
      button: "Start Free",
      highlight: false,
    },
    {
      name: "Starter",
      price: 20,
      credits: 50,
      features: [
        "50 credits / mo",
        "Low / Medium / High quality",
        "x2 / x4 upscaling",
        "Standard support",
      ],
      href: "/checkout?plan=starter",
      button: "Choose Plan",
      highlight: false,
    },
    {
      name: "Studio",
      price: 35,
      credits: 200,
      features: [
        "200 credits / mo",
        "Priority queue speed",
        "Batch uploads (up to 10)",
        "Priority support",
      ],
      href: "/checkout?plan=studio",
      button: "Choose Plan",
      highlight: true,
    },
    {
      name: "Pro",
      price: 60,
      credits: 600,
      features: [
        "600 credits / mo",
        "Fastest queue speed",
        "Team seats (up to 5)",
        "SLA support",
      ],
      href: "/checkout?plan=pro",
      button: "Choose Plan",
      highlight: false,
    },
  ];

  const comparison = [
    { feature: "Render Enhancement", plans: [true, true, true, true] },
    { feature: "Virtual Staging", plans: [true, true, true, true] },
    { feature: "Design Options (AI prompt)", plans: [true, true, true, true] },
    { feature: "x2 / x4 Upscaling", plans: [true, true, true, true] },
    { feature: "Priority queue speed", plans: [false, false, true, true] },
    { feature: "Batch uploads", plans: [false, false, true, true] },
    { feature: "Team seats", plans: [false, false, false, true] },
    { feature: "SLA support", plans: [false, false, false, true] },
  ];

  return (
    <main className="pricing-page container">
      {/* Heading */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Simple, flexible pricing</h1>
        <p className="text-lg text-gray-600">
          Use credits across all features. Upgrade, downgrade, or cancel any
          time.
        </p>

        {/* Toggle Monthly / Yearly */}
        <div className="toggle mt-6 flex justify-center gap-4">
          <button
            onClick={() => setPeriod("monthly")}
            className={`px-4 py-2 rounded ${
              period === "monthly" ? "bg-indigo-600 text-white" : "bg-gray-200"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setPeriod("yearly")}
            className={`px-4 py-2 rounded ${
              period === "yearly" ? "bg-indigo-600 text-white" : "bg-gray-200"
            }`}
          >
            Yearly <span className="ml-1 text-green-500">–15%</span>
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-500">Billed {period}</p>
      </section>

      {/* Plans */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`plan-card p-6 rounded-xl shadow-lg border ${
              plan.highlight ? "border-indigo-500 ring-2 ring-indigo-200" : ""
            }`}
          >
            <h2 className="text-xl font-bold mb-2">{plan.name}</h2>
            <p className="text-2xl font-bold mb-4">
              {plan.price === 0 ? (
                "€0"
              ) : (
                <>
                  €
                  {period === "monthly"
                    ? plan.price
                    : Math.round(plan.price * yearlyDiscount)}
                  <span className="text-base font-normal">
                    /{period === "monthly" ? "mo" : "mo (yearly)"}
                  </span>
                </>
              )}
            </p>
            <ul className="mb-6 text-sm text-gray-700">
              {plan.features.map((f, i) => (
                <li key={i} className="mb-2">
                  ✔ {f}
                </li>
              ))}
            </ul>
            <a
              href={`${plan.href}&period=${period}`}
              className={`w-full block text-center py-2 rounded ${
                plan.highlight
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-900 text-white"
              }`}
            >
              {plan.button}
            </a>
          </div>
        ))}
      </section>

      {/* Compare Table */}
      <section className="compare-table bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6">Compare plans</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">Feature</th>
              <th className="py-2 text-center">Free</th>
              <th className="py-2 text-center">Starter</th>
              <th className="py-2 text-center">Studio</th>
              <th className="py-2 text-center">Pro</th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((row, idx) => (
              <tr key={idx} className="border-b">
                <td className="py-2">{row.feature}</td>
                {row.plans.map((inc, i) => (
                  <td key={i} className="py-2 text-center">
                    {inc ? "✔" : "—"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
