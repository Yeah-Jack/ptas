import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Azure Static Web Apps deploys the self-contained server from .next/standalone
	output: "standalone",
	reactCompiler: true,
	typedRoutes: true,
};

export default nextConfig;
