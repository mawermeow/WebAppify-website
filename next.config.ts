import type { NextConfig } from "next";

const basePath = process.env.PAGES_BASE_PATH || "";
const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(basePath ? { basePath } : {}),
};
export default config;
