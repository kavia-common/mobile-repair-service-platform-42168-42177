import React, { useMemo, useState } from "react";
import { findRequestById, getTimelineForStatus } from "../services/mockData";
import StatusBadge from "../components/UI/StatusBadge";

// PUBLIC_INTERFACE
export default function TrackRequestPage() {
  /** Track a repair request by ID (mocked). */
  const [requestId, setRequestId] = useState("REQ-1043");
  const request = useMemo(() => findRequestById(requestId), [requestId]);
  const timeline = useMemo(() => getTimelineForStatus(request?.status || "Received"), [request]);

  return (
    <div className="card">
      <div className="sectionHeader">
        <div>
          <h2 className="h2">Track Request</h2>
          <p className="p">Enter your Request ID to see the latest status (mock data).</p>
        </div>
      </div>

      <div className="row">
        <div style={{ flex: 1, minWidth: 240 }}>
          <label className="label" htmlFor="requestId">
            Request ID
          </label>
          <input
            className="input"
            id="requestId"
            value={requestId}
            onChange={(e) => setRequestId(e.target.value)}
            placeholder="e.g., REQ-1042"
          />
        </div>

        <div style={{ minWidth: 200 }}>
          <label className="label">Status</label>
          <div style={{ paddingTop: 10 }}>
            <StatusBadge status={request?.status || "Not found"} />
          </div>
        </div>
      </div>

      <div className="spacer18" />

      {!request ? (
        <div className="muted">No request found for that ID (try REQ-1042, REQ-1043, REQ-1044).</div>
      ) : (
        <div>
          <table className="table" aria-label="Request details">
            <tbody>
              <tr>
                <th>Customer</th>
                <td>{request.customerName}</td>
              </tr>
              <tr>
                <th>Device</th>
                <td>{request.device}</td>
              </tr>
              <tr>
                <th>Issue</th>
                <td>{request.issue}</td>
              </tr>
              <tr>
                <th>Technician</th>
                <td>{request.technician}</td>
              </tr>
              <tr>
                <th>Scheduled</th>
                <td>{request.scheduledAt}</td>
              </tr>
              <tr>
                <th>Location</th>
                <td>{request.location}</td>
              </tr>
            </tbody>
          </table>

          <div className="spacer18" />

          <div className="card" style={{ background: "rgba(37, 99, 235, 0.04)" }}>
            <div className="sectionHeader">
              <div>
                <h3 className="h2" style={{ fontSize: 18 }}>
                  Progress
                </h3>
                <p className="p">A simple milestone timeline derived from status.</p>
              </div>
            </div>

            <div className="row" style={{ gap: 8 }}>
              {timeline.map((step) => (
                <span
                  key={step.label}
                  className={step.current ? "badge badgePrimary" : step.done ? "badge badgeAmber" : "badge"}
                >
                  {step.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
