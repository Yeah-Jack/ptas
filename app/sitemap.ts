import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://ptas.de";

	const routes = [
		"",
		"/abrechnung",
		"/kontakt",
		"/leistungen",
		"/vorfinanzierung",
		"/impressum",
		"/datenschutz",
	];

	return routes.map((route) => ({
		changeFrequency: "monthly",
		lastModified: new Date(),
		priority: route === "" ? 1 : 0.8,
		url: `${baseUrl}${route}`,
	}));
}
