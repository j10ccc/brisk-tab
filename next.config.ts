import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.CRX_BUILD === "1" ? "export" : undefined
};

export default nextConfig;
