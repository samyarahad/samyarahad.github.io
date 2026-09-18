import type { NextConfig } from "next";

/**
 * Two build modes:
 * - Default (sandbox / server): output "standalone" for the running dev server.
 * - NEXT_STATIC_EXPORT=1: pure static export into ./out — used for GitHub Pages.
 *   A separate distDir keeps the export build from touching the dev server's .next.
 */
const isStaticExport = process.env.NEXT_STATIC_EXPORT === "1";

const nextConfig: NextConfig = isStaticExport
  ? {
      output: "export",
      distDir: "export-dist",
      images: { unoptimized: true },
      reactStrictMode: false,
      typescript: { ignoreBuildErrors: true },
    }
  : {
      output: "standalone",
      typescript: { ignoreBuildErrors: true },
      reactStrictMode: false,
    };

export default nextConfig;
