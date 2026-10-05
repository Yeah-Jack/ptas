import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import { cn } from "@repo/ui/lib/utils";
import Footer from "@/components/footer";
import Header from "@/components/header";

const inter = Inter({
	// Optical sizes keep large headlines tight, as in the design
	axes: ["opsz"],
	display: "swap",
	subsets: ["latin"],
	variable: "--font-inter",
});

const description =
	"TaxiWare erfasst Ihre Verordnungen, prüft jede Fahrt und übermittelt direkt an die Kostenträger. Gebaut für Taxi- und Mietwagenunternehmen, Fahrdienste und Krankentransporte.";
const title = "TaxiWare – Krankenfahrten selbst abrechnen nach § 302 SGB V";

export const metadata: Metadata = {
	description,
	metadataBase: new URL("https://taxiware.de"),
	openGraph: {
		description,
		locale: "de_DE",
		siteName: "TaxiWare",
		title,
		url: "https://taxiware.de",
	},
	title: {
		default: title,
		template: "%s | TaxiWare",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			className={cn(
				"h-full scroll-pt-20 antialiased motion-safe:scroll-smooth",
				inter.variable,
			)}
			data-scroll-behavior="smooth"
			lang="de"
		>
			<body className="flex min-h-full flex-col text-[1.125rem] leading-[1.6]">
				<Header />
				<main className="flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
