import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "build",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: { unoptimized: true },
};

export default nextConfig;
