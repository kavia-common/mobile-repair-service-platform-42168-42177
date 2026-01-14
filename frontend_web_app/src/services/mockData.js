export const mockServiceCatalog = [
  { id: "screen", name: "Screen Replacement", etaHours: 3, priceFrom: 129 },
  { id: "battery", name: "Battery Replacement", etaHours: 2, priceFrom: 79 },
  { id: "diagnostic", name: "Diagnostics", etaHours: 1, priceFrom: 39 },
  { id: "water", name: "Water Damage Treatment", etaHours: 24, priceFrom: 149 },
];

export const mockRequests = [
  {
    id: "REQ-1042",
    customerName: "Jordan Lee",
    device: "iPhone 13",
    issue: "Screen cracked",
    status: "Scheduled",
    scheduledAt: "2026-01-16 10:00",
    technician: "Ava (Tech)",
    location: "On-site",
  },
  {
    id: "REQ-1043",
    customerName: "Sam Patel",
    device: "Samsung S22",
    issue: "Battery drains fast",
    status: "In Progress",
    scheduledAt: "2026-01-14 14:30",
    technician: "Noah (Tech)",
    location: "Service Center",
  },
  {
    id: "REQ-1044",
    customerName: "Taylor Kim",
    device: "Pixel 7",
    issue: "Won't charge",
    status: "Awaiting Parts",
    scheduledAt: "2026-01-15 09:00",
    technician: "Ava (Tech)",
    location: "Service Center",
  },
];

export const mockInvoices = [
  { id: "INV-9001", requestId: "REQ-1042", amount: 189, status: "Unpaid", due: "2026-01-20" },
  { id: "INV-9002", requestId: "REQ-1043", amount: 99, status: "Paid", due: "2026-01-12" },
];

// PUBLIC_INTERFACE
export function findRequestById(requestId) {
  /** Finds a mock request by ID. */
  return mockRequests.find((r) => r.id.toLowerCase() === String(requestId).toLowerCase()) || null;
}

// PUBLIC_INTERFACE
export function getTimelineForStatus(status) {
  /** Returns a simple progress model for tracking UI based on status. */
  const steps = ["Received", "Scheduled", "In Progress", "Awaiting Parts", "Completed"];
  const normalized = String(status || "").trim();
  const idx = Math.max(0, steps.findIndex((s) => s === normalized));
  return steps.map((label, i) => ({ label, done: i <= idx, current: i === idx }));
}
