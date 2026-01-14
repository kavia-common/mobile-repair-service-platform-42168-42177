import React from "react";
import { Link } from "react-router-dom";
import { isFeatureEnabled } from "../services/featureFlags";

// PUBLIC_INTERFACE
export default function HomePage() {
  /** Landing page for customers and service centers. */
  const billingEnabled = isFeatureEnabled("billing");

  return (
    <div>
      <div className="hero">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <div>
            <h1 className="h1">Book mobile repairs in minutes.</h1>
            <p className="p">
              Request a technician, track status updates, and manage invoices—all in a clean Ocean Professional dashboard.
            </p>
          </div>
          <div className="row">
            <Link className="btn btnPrimary" to="/book">
              Book Service
            </Link>
            <Link className="btn" to="/track">
              Track Request
            </Link>
          </div>
        </div>

        <div className="kpis" aria-label="Platform highlights">
          <div className="kpi">
            <div className="kpiValue">Same-day</div>
            <div className="kpiLabel">appointments (where available)</div>
          </div>
          <div className="kpi">
            <div className="kpiValue">Live</div>
            <div className="kpiLabel">status tracking & updates</div>
          </div>
          <div className="kpi">
            <div className="kpiValue">{billingEnabled ? "Billing" : "Mock"}</div>
            <div className="kpiLabel">invoices & payments module</div>
          </div>
        </div>
      </div>

      <div className="spacer18" />

      <div className="fieldGrid">
        <div className="card">
          <div className="sectionHeader">
            <div>
              <h2 className="h2">For Customers</h2>
              <p className="p">Create a request, pick a time slot, and keep tabs on the repair.</p>
            </div>
          </div>
          <div className="row">
            <Link className="btn btnSecondary" to="/book">
              New booking
            </Link>
            <Link className="btn" to="/track">
              Track existing
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="sectionHeader">
            <div>
              <h2 className="h2">For Service Centers</h2>
              <p className="p">Manage technicians, jobs, parts, and billing—all in one place.</p>
            </div>
          </div>
          <div className="row">
            <Link className="btn btnSecondary" to="/dashboard">
              Open dashboard
            </Link>
            <Link className="btn" to="/billing">
              Billing & invoices
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
