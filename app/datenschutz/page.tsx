import fs from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import { FadeInUp } from "@/components/animations/fade-in-up";

export const metadata: Metadata = {
	description:
		"Datenschutzhinweise der PTAS Personentransport-Abrechnungsservice",
	openGraph: {
		description:
			"Datenschutzhinweise der PTAS Personentransport-Abrechnungsservice",
		title: "Datenschutz",
		url: "https://ptas.de/datenschutz",
	},
	title: "Datenschutz",
};

export default async function DatenschutzPage() {
	const html = await fs.readFile(
		path.join(process.cwd(), "content", "legal", "datenschutz.html"),
		"utf-8",
	);

	return (
		<section className="py-8 md:py-16">
			<div className="container mx-auto px-4">
				<FadeInUp>
					{/** biome-ignore lint/security/noDangerouslySetInnerHtml: False positive */}
					<div dangerouslySetInnerHTML={{ __html: html }} />
				</FadeInUp>
			</div>
		</section>
	);
}
