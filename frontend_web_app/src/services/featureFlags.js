/**
 * Feature flags are driven by REACT_APP_FEATURE_FLAGS.
 *
 * Supported formats:
 * - CSV: "billing,dashboardV2"
 * - JSON: {"billing":true,"dashboardV2":false}
 */

const raw = (process.env.REACT_APP_FEATURE_FLAGS || "").trim();

function parseFlags(value) {
  if (!value) return {};
  if (value.startsWith("{")) {
    try {
      const parsed = JSON.parse(value);
      return typeof parsed === "object" && parsed ? parsed : {};
    } catch {
      return {};
    }
  }
  // CSV
  const flags = {};
  value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .forEach((name) => {
      flags[name] = true;
    });
  return flags;
}

const FLAGS = parseFlags(raw);

// PUBLIC_INTERFACE
export function isFeatureEnabled(flagName) {
  /** Returns true if a feature flag is enabled via REACT_APP_FEATURE_FLAGS. */
  return Boolean(FLAGS[flagName]);
}

// PUBLIC_INTERFACE
export function getAllFeatureFlags() {
  /** Returns the raw parsed feature flags map. */
  return { ...FLAGS };
}
