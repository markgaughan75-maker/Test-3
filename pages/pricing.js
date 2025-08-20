.pricing-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;

  h1 {
    font-size: 2.75rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    color: #111827;
  }

  p.subhead {
    font-size: 1.125rem;
    color: #6b7280;
    margin-bottom: 2.5rem;
  }

  /* Toggle buttons (Monthly / Yearly) */
  .toggle {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;

    button {
      background: #f3f4f6;
      border: none;
      padding: 0.5rem 1.25rem;
      border-radius: 9999px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;

      &.active {
        background: #4f46e5;
        color: white;
      }
    }
  }

  /* Plan cards container */
  .plans {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  /* Each card */
  .plan-card {
    background: #fff;
    border-radius: 1rem;
    border: 1px solid #e5e7eb;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.06);
    }

    h2 {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    p.price {
      font-size: 2rem;
      font-weight: 800;
      margin: 0.5rem 0 1rem;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 1rem 0 2rem;
      text-align: left;
      width: 100%;

      li {
        margin-bottom: 0.5rem;
        font-size: 0.95rem;
        color: #374151;

        &::before {
          content: "✔";
          margin-right: 8px;
          color: #10b981;
        }
      }
    }

    .btn {
      display: block;
      width: 100%;
      text-align: center;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      font-weight: 600;
      text-decoration: none;
      transition: background 0.2s;

      &.primary {
        background: #4f46e5;
        color: white;

        &:hover {
          background: #4338ca;
        }
      }

      &.secondary {
        background: #111827;
        color: white;

        &:hover {
          background: black;
        }
      }
    }
  }

  /* Compare table */
  .compare-table {
    background: #f9fafb;
    border-radius: 1rem;
    padding: 2rem;
    overflow-x: auto;

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
    }

    table {
      width: 100%;
      border-collapse: collapse;

      th {
        text-align: center;
        font-size: 0.9rem;
        font-weight: 600;
        color: #374151;
        padding: 0.75rem;
      }

      td {
        text-align: center;
        font-size: 0.9rem;
        padding: 0.75rem;
        color: #111827;
      }

      tr {
        border-bottom: 1px solid #e5e7eb;

        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
}
