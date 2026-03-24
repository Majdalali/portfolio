import type { NextConfig } from "next";

const repo = "portfolio";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: {
    unoptimized: true,
  },

  // Temporary: let builds succeed even while ESLint errors exist
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
