import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ai-factory-preview",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
