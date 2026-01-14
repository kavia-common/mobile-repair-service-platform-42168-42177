import React, { useMemo } from "react";
import StatusBadge from "../components/UI/StatusBadge";
import { mockInvoices } from "../services/mockData";
import { isFeatureEnabled } from "../services/featureFlags";

// PUBLIC_INTERFACE
export default function BillingPage() {
  /** Billing and invoices page (mocked). */
  const invoices = useMemo(() => mockInvoices, []);
  const billingEnabled = isFeatureEnabled("billing");

  return (
    <div className="card">
      <div className="sectionHeader">
        <div>
          <h2 className="h2">Billing & Invoices</h2>
          <p className="p">Track invoice status and payments (mock data until backend/payment integration exists).</p>
        </div>
        <div className="row">
          <span className={billingEnabled ? "badge badgePrimary" : "badge badgeAmber"}>
            Feature flag “billing”: {billingEnabled ? "enabled" : "disabled"}
          </span>
          <button className="btn btnSecondary" type="button">
            + Create Invoice (placeholder)
          </button>
        </div>
      </div>

      {!billingEnabled ? (
        <div className="muted small" style={{ marginBottom: 12 }}>
          Enable billing UI via <span className="codePill">REACT_APP_FEATURE_FLAGS=billing</span> (or JSON form).
        </div>
      ) : null}

      <table className="table" aria-label="Invoices table">
        <thead>
          <tr>
            <th>Invoice</th>
            <th>Request</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Due</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv) => (
            <tr key={inv.id}>
              <td>
                <span className="codePill">{inv.id}</span>
              </td>
              <td>
                <span className="codePill">{inv.requestId}</span>
              </td>
              <td>${inv.amount}</td>
              <td>
                <StatusBadge status={inv.status} />
              </td>
              <td>{inv.due}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="spacer18" />

      <div className="row" style={{ justifyContent: "flex-end" }}>
        <button className="btn btnPrimary" type="button" disabled={!billingEnabled} aria-disabled={!billingEnabled}>
          Collect Payment (placeholder)
        </button>
      </div>
    </div>
  );
}
