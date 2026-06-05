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
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: "monthly",
		priority: route === "" ? 1 : 0.8,
	}));
}
