import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH || ""

const nextConfig: NextConfig = {
  basePath,
  assetPrefix,
  trailingSlash: true,
  output: 'export',     
  images: {
    domains: ["images.unsplash.com"],
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
