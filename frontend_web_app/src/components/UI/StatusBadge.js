import React from "react";

function getBadgeClass(status) {
  const s = String(status || "").toLowerCase();
  if (s.includes("paid") || s.includes("completed")) return "badge badgePrimary";
  if (s.includes("await") || s.includes("scheduled")) return "badge badgeAmber";
  if (s.includes("cancel") || s.includes("fail") || s.includes("overdue")) return "badge badgeDanger";
  return "badge";
}

// PUBLIC_INTERFACE
export default function StatusBadge({ status }) {
  /** Displays a colored badge for a status value. */
  return <span className={getBadgeClass(status)}>{status || "Unknown"}</span>;
}
