import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const basePath = isProd ? '/inspired' : '';
const assetPrefix = isProd ? '/inspired' : '';

const nextConfig: NextConfig = {
  basePath,
  assetPrefix,
  trailingSlash: true,
  images: {
    domains: ["images.unsplash.com"],
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;