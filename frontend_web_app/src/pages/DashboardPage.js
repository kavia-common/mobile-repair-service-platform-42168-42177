import React, { useMemo } from "react";
import StatusBadge from "../components/UI/StatusBadge";
import { mockRequests } from "../services/mockData";

// PUBLIC_INTERFACE
export default function DashboardPage() {
  /** Service center dashboard (mocked). */
  const requests = useMemo(() => mockRequests, []);

  return (
    <div>
      <div className="sectionHeader">
        <div>
          <h2 className="h2">Technician / Service Center Dashboard</h2>
          <p className="p">Manage incoming service requests, job status, and assignments (mock data).</p>
        </div>
        <div className="row">
          <button className="btn btnSecondary" type="button">
            + Add Technician (placeholder)
          </button>
          <button className="btn" type="button">
            Parts Inventory (placeholder)
          </button>
        </div>
      </div>

      <div className="fieldGrid">
        <div className="card">
          <h3 className="h2" style={{ fontSize: 18 }}>
            Requests Queue
          </h3>
          <p className="p">Latest requests and their assignment status.</p>

          <div className="spacer12" />

          <table className="table" aria-label="Requests queue table">
            <thead>
              <tr>
                <th>Request</th>
                <th>Customer</th>
                <th>Device</th>
                <th>Status</th>
                <th>Technician</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((r) => (
                <tr key={r.id}>
                  <td>
                    <span className="codePill">{r.id}</span>
                  </td>
                  <td>{r.customerName}</td>
                  <td>{r.device}</td>
                  <td>
                    <StatusBadge status={r.status} />
                  </td>
                  <td>{r.technician}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <h3 className="h2" style={{ fontSize: 18 }}>
            Operations
          </h3>
          <p className="p">Quick actions and notes for the shift.</p>

          <div className="spacer12" />

          <ul className="muted" style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
            <li>Assign technicians based on proximity and workload (placeholder).</li>
            <li>Push customer updates via SMS/email (placeholder).</li>
            <li>Mark jobs as awaiting parts and add ETA notes (placeholder).</li>
            <li>Generate invoices on completion (see Billing page).</li>
          </ul>

          <div className="spacer18" />

          <div className="row">
            <button className="btn btnPrimary" type="button">
              Start Daily Dispatch (placeholder)
            </button>
            <button className="btn" type="button">
              Export Report (placeholder)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
