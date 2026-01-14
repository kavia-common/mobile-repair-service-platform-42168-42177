import React from "react";
import { NavLink } from "react-router-dom";
import { getSupabaseStatus } from "../../services/supabaseClient";
import { getAllFeatureFlags } from "../../services/featureFlags";

// PUBLIC_INTERFACE
export default function AppLayout({ children }) {
  /** Shared application layout: top navigation, container, footer. */
  const sb = getSupabaseStatus();
  const flags = getAllFeatureFlags();

  const linkClassName = ({ isActive }) => (isActive ? "navLink navLinkActive" : "navLink");

  return (
    <div className="appShell">
      <header className="topNav">
        <div className="topNavInner">
          <NavLink to="/" className="brand" aria-label="Mobile Repair Service Platform - Home">
            <div className="brandMark">MR</div>
            <div>
              Mobile Repair
              <div className="small muted" style={{ fontWeight: 700 }}>
                Ocean Professional
              </div>
            </div>
          </NavLink>

          <nav className="navLinks" aria-label="Primary navigation">
            <NavLink to="/" className={linkClassName} end>
              Home
            </NavLink>
            <NavLink to="/book" className={linkClassName}>
              Book Service
            </NavLink>
            <NavLink to="/track" className={linkClassName}>
              Track Request
            </NavLink>
            <NavLink to="/dashboard" className={linkClassName}>
              Dashboard
            </NavLink>
            <NavLink to="/billing" className={linkClassName}>
              Billing
            </NavLink>
          </nav>

          <div className="navRight">
            <span className={sb.configured ? "badge badgePrimary" : "badge"} title="Supabase connection status">
              {sb.configured ? "Supabase: Ready" : "Supabase: Not configured"}
            </span>
            <span className="badge badgeAmber" title="Feature flags loaded from REACT_APP_FEATURE_FLAGS">
              Flags: {Object.keys(flags).length}
            </span>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container">{children}</div>
      </main>

      <footer className="footer">
        <div className="footerInner">
          <div>© {new Date().getFullYear()} Mobile Repair Service Platform</div>
          <div className="small">
            Env: <span className="codePill">{process.env.REACT_APP_NODE_ENV || "unknown"}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
