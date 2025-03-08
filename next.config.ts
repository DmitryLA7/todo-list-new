import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { remotePatterns: [{ port: 'http', hostname: 'localhost' }] }
};

export default nextConfig;
