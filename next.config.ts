import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX({
	extension: /\.(md|mdx)$/,
});

const nextConfig: NextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	reactCompiler: true,
	typedRoutes: true,
};

export default withMDX(nextConfig);
