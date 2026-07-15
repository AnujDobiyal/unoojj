import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "sketchreps.unoojj.me",
      },
    ]
  },
};

export default nextConfig;
