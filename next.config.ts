import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages: `next build` writes the site to `out/`.
  output: "export",
  // Emit /es/index.html so both /es and /es/ work on GitHub Pages.
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: {
    // Two root layouts (one per language) need a global 404 page.
    globalNotFound: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
