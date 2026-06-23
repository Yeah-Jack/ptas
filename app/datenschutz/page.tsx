import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Datenschutz | PTAS",
	description:
		"Datenschutzhinweise der PTAS Personentransport-Abrechnungsservice",
};

export default function DatenschutzPage() {
	return (
		<iframe
			src="https://app.alfright.eu/ext/dps/alfright_schutzteam/9c149affe36a46e692a8b0167410f4ae?lang=de-de&headercolor=%23131F64&headerfont=Arial&headersize=21px&subheadersize=18px&fontcolor=%23333333&textfont=Arial&textsize=14px&background=%23ffffff&linkcolor=%23337ab7"
			width="100%"
			height={5000}
			style={{ border: 0 }}
			loading="lazy"
			title="Datenschutzhinweise"
		/>
	);
}
