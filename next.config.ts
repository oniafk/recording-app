import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "img.clerk.com",
      // any other external hosts you want to allow
    ],
  },
};

export default nextConfig;
