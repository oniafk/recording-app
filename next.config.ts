import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "img.clerk.com",
      // any other external hosts you want to allow
    ],
  },
};

export default nextConfig;
