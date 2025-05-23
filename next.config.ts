import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/inspired",
  assetPrefix: "/inspired",
  trailingSlash: true, // Often helps with GitHub Pages
  images: {
    domains: ["images.unsplash.com"],
    unoptimized: true,
  },
};

export default nextConfig;
