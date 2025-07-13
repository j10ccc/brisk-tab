import type { NextConfig } from "next";
import { webpack } from "next/dist/compiled/webpack/webpack";

const nextConfig: NextConfig = {
  output: process.env.CRX_BUILD === "1" ? "export" : undefined,
  distDir: process.env.CRX_BUILD === "1" ? process.env.CRX_DIST : undefined,
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.CRX_BUILD": JSON.stringify(process.env.CRX_BUILD)
      })
    );

    return config;
  }
};

export default nextConfig;
