import React from "react";
import { Link } from "react-router-dom";

// PUBLIC_INTERFACE
export default function NotFoundPage() {
  /** 404 page for unknown routes. */
  return (
    <div className="card">
      <h2 className="h2">Page not found</h2>
      <p className="p">The page you are looking for doesn’t exist.</p>
      <div className="spacer18" />
      <Link className="btn btnPrimary" to="/">
        Go to Home
      </Link>
    </div>
  );
}
