import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://ptas.vercel.app";

	const routes = [
		"",
		"/abrechnung",
		"/kontakt",
		"/leistungen",
		"/vorfinanzierung",
	];

	return routes.map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: "monthly",
		priority: route === "" ? 1 : 0.8,
	}));
}
