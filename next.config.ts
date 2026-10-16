import path from "node:path";
import type { NextConfig } from "next";

// WebMCP origin trial tokens (one per browser, tied to the live domain).
// Set them in the host's environment once the domain is registered for the trial.
const originTrialTokens = [process.env.CHROME_ORIGIN_TRIAL_TOKEN, process.env.EDGE_ORIGIN_TRIAL_TOKEN]
  .map((token) => token?.trim())
  .filter((token): token is string => Boolean(token));

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    root: path.join(__dirname),
  },
  async headers() {
    if (originTrialTokens.length === 0) return [];
    return [
      {
        source: "/:path*",
        headers: [{ key: "Origin-Trial", value: originTrialTokens.join(", ") }],
      },
    ];
  },
};

export default nextConfig;
