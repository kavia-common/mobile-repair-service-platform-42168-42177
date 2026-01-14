import React, { useMemo, useState } from "react";
import { mockServiceCatalog } from "../services/mockData";

// PUBLIC_INTERFACE
export default function BookServicePage() {
  /** Customer booking page (mocked until backend is available). */
  const services = useMemo(() => mockServiceCatalog, []);
  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    device: "",
    serviceId: services[0]?.id || "",
    notes: "",
    location: "On-site",
  });
  const [submitted, setSubmitted] = useState(null);

  function updateField(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    // Mock request creation
    const newRequestId = `REQ-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmitted({
      requestId: newRequestId,
      status: "Received",
      ...form,
    });
  }

  return (
    <div className="card">
      <div className="sectionHeader">
        <div>
          <h2 className="h2">Book a Service</h2>
          <p className="p">Submit your device issue and we’ll schedule a technician (mock flow for now).</p>
        </div>
      </div>

      {submitted ? (
        <div>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div>
              <div className="badge badgePrimary">Request Created</div>
              <div className="spacer12" />
              <div>
                Request ID: <span className="codePill">{submitted.requestId}</span>
              </div>
              <div className="muted small">Use this ID on the Track Request page.</div>
            </div>
            <button className="btn btnSecondary" onClick={() => setSubmitted(null)}>
              Create another
            </button>
          </div>

          <div className="spacer18" />

          <table className="table" aria-label="Booking summary">
            <tbody>
              <tr>
                <th>Customer</th>
                <td>{submitted.customerName || "-"}</td>
              </tr>
              <tr>
                <th>Device</th>
                <td>{submitted.device || "-"}</td>
              </tr>
              <tr>
                <th>Service</th>
                <td>{services.find((s) => s.id === submitted.serviceId)?.name || "-"}</td>
              </tr>
              <tr>
                <th>Location</th>
                <td>{submitted.location}</td>
              </tr>
              <tr>
                <th>Notes</th>
                <td>{submitted.notes || "-"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <form onSubmit={onSubmit}>
          <div className="fieldGrid">
            <div>
              <label className="label" htmlFor="customerName">
                Full name
              </label>
              <input
                className="input"
                id="customerName"
                name="customerName"
                value={form.customerName}
                onChange={updateField}
                placeholder="e.g., Jordan Lee"
                required
              />
            </div>

            <div>
              <label className="label" htmlFor="phone">
                Phone number
              </label>
              <input
                className="input"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={updateField}
                placeholder="e.g., +1 555 0100"
                required
              />
            </div>

            <div>
              <label className="label" htmlFor="device">
                Device model
              </label>
              <input
                className="input"
                id="device"
                name="device"
                value={form.device}
                onChange={updateField}
                placeholder="e.g., iPhone 13 / Pixel 7"
                required
              />
            </div>

            <div>
              <label className="label" htmlFor="serviceId">
                Service type
              </label>
              <select className="select" id="serviceId" name="serviceId" value={form.serviceId} onChange={updateField}>
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} (from ${s.priceFrom})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="label" htmlFor="location">
                Service location
              </label>
              <select className="select" id="location" name="location" value={form.location} onChange={updateField}>
                <option value="On-site">On-site</option>
                <option value="Service Center">Service Center</option>
              </select>
            </div>

            <div>
              <label className="label" htmlFor="notes">
                Notes (optional)
              </label>
              <input
                className="input"
                id="notes"
                name="notes"
                value={form.notes}
                onChange={updateField}
                placeholder="Describe the issue, preferred times, etc."
              />
            </div>
          </div>

          <div className="spacer18" />

          <div className="row" style={{ justifyContent: "flex-end" }}>
            <button className="btn btnPrimary" type="submit">
              Submit booking
            </button>
          </div>

          <div className="spacer12" />
          <div className="muted small">
            Backend APIs not connected yet. This will generate a mock Request ID for tracking.
          </div>
        </form>
      )}
    </div>
  );
}
