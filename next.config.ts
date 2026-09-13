import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactCompiler: true,
	async redirects() {
		return [
			{
				destination: "/abrechnung",
				permanent: true,
				source: "/abrechnungssoftware",
			},
		];
	},
	typedRoutes: true,
};

export default nextConfig;
