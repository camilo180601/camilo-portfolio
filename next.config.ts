import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep browser QA builds separate from an already-running development server.
  distDir:
    process.env.NODE_ENV === "development" ? ".next" : ".next-production",
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
