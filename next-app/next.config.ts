import path from "path";
import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

const nextConfig: NextConfig = {
  transpilePackages: ["recharts"],
  turbopack: {
    root: path.join(__dirname),
  },
};

export default withContentlayer(nextConfig);
