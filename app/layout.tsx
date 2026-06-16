import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./global.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Providers from "@/components/providers";
import { cn } from "@/lib/utils";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://ptas.de"),
	title: {
		default: "PTAS - Personentransport-Abrechnungsservice",
		template: "%s | PTAS",
	},
	description:
		"Professionelle Abrechnung für Kranken-, Rollstuhl- und Tragestuhltransporte. Konzentrieren Sie sich auf Ihr Geschäft, wir übernehmen die Abrechnung.",
	openGraph: {
		title: "PTAS - Personentransport-Abrechnungsservice",
		description:
			"Professionelle Abrechnung für Kranken-, Rollstuhl- und Tragestuhltransporte. Konzentrieren Sie sich auf Ihr Geschäft, wir übernehmen die Abrechnung.",
		url: "https://ptas.de",
		siteName: "PTAS",
		images: [{ url: "https://ptas.de/icon.svg" }],
		locale: "de_DE",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="de"
			suppressHydrationWarning
			className={cn("h-full antialiased", inter.variable)}
		>
			<head>
				<Script
					strategy="beforeInteractive"
					src="https://cloud.ccm19.de/app.js?apiKey=295cd4d0334f21415c578a0a1683af21ebe840cccf666d7f&amp;domain=6a3151492f75bfecf00d9be2"
				/>
				<Script
					strategy="afterInteractive"
					src="https://www.googletagmanager.com/gtag/js?id=AW-10795425279"
				/>
				<Script id="google-ads-tag" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'AW-10795425279');
					`}
				</Script>
			</head>
			<body>
				<Providers>
					<div className="flex min-h-full flex-col">
						<Header />
						<main>{children}</main>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
