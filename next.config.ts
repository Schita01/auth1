import type { NextConfig } from "next";

const ghPages = process.env.GITHUB_PAGES === "true";
const repoBase = "/auth1";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: ghPages ? repoBase : undefined,
  assetPrefix: ghPages ? `${repoBase}/` : undefined,
  images: { unoptimized: true },
  turbopack: { root: __dirname },
  experimental: { globalNotFound: true },
};

export default nextConfig;
