import { CheckCircle } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
	title: "Vielen Dank",
	description:
		"Danke für Ihre Anfrage! Wir haben Ihre Nachricht erhalten und melden uns schnellstmöglich bei Ihnen - in der Regel innerhalb eines Werktages.",
	openGraph: {
		title: "Vielen Dank",
		description:
			"Danke für Ihre Anfrage! Wir haben Ihre Nachricht erhalten und melden uns schnellstmöglich bei Ihnen - in der Regel innerhalb eines Werktages.",
		url: "https://ptas.de/kontakt/danke",
	},
	robots: { index: false, follow: false },
};

export default function DankePage() {
	return (
		<>
			<Script id="gtag-conversion" strategy="afterInteractive">
				{`
					gtag('event', 'conversion', {'send_to': 'AW-10795425279/YDWdCOaRpcgcEP-71Jso'});
				`}
			</Script>

			<div className="flex flex-col items-center justify-center py-24">
				<Card className="mx-auto max-w-lg text-center">
					<CardHeader>
						<CheckCircle className="mx-auto mb-4 size-16 text-green-500" />
						<CardTitle className="text-2xl">
							Vielen Dank für Ihre Anfrage!
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-muted-foreground">
							Wir haben Ihre Nachricht erhalten und melden uns schnellstmöglich
							bei Ihnen - in der Regel innerhalb eines Werktages.
						</p>
						<Button asChild>
							<Link href="/">Zurück zur Startseite</Link>
						</Button>
					</CardContent>
				</Card>
			</div>
		</>
	);
}
