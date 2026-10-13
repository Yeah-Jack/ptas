import type { Metadata } from "next";

export const metadata: Metadata = {
	alternates: { canonical: "/kontakt" },
	description: "Kontaktieren Sie PTAS für die Abrechnung Ihrer Krankenfahrten.",
	openGraph: {
		description:
			"Kontaktieren Sie PTAS für die Abrechnung Ihrer Krankenfahrten.",
		title: "Kontakt",
		url: "https://ptas.de/kontakt",
	},
	title: "Kontakt",
};

export default function KontaktLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
