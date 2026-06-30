"use client";

import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
	title: "Datenschutz | PTAS",
	description:
		"Datenschutzhinweise der PTAS Personentransport-Abrechnungsservice",
};

export default function DatenschutzPage() {
	return (
		<>
			<Script
				src="https://app.alfright.eu/hosted/dps/alfidcl.js"
				strategy="afterInteractive"
				alfidcl-script=""
			/>
			<div
				data-alfidcl-type="dps"
				data-alfidcl-tenant="alfright_schutzteam"
				data-alfidcl-lang="de-de"
				data-alfidcl-key="9c149affe36a46e692a8b0167410f4ae"
			/>
		</>
	);
}
