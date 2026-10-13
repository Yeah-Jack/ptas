import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Azure Static Web Apps deploys the self-contained server from .next/standalone
	output: "standalone",
	reactCompiler: true,
	async redirects() {
		return [
			{
				destination: "https://ptas.de/:path*",
				has: [{ type: "host", value: "www.ptas.de" }],
				permanent: true,
				source: "/:path*",
			},
			{
				destination: "/abrechnung",
				permanent: true,
				source: "/abrechnungssoftware",
			},
			{
				destination: "/vorfinanzierung",
				permanent: true,
				source: "/abrechnung/vorfinanzierung",
			},
		];
	},
	typedRoutes: true,
};

export default nextConfig;
