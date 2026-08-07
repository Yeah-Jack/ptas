import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./global.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Providers from "@/components/providers";
import { cn } from "@/lib/utils";

const inter = Inter({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	description:
		"Professionelle Abrechnung für Kranken-, Rollstuhl- und Tragestuhltransporte. Konzentrieren Sie sich auf Ihr Geschäft, wir übernehmen die Abrechnung.",
	metadataBase: new URL("https://ptas.de"),
	openGraph: {
		description:
			"Professionelle Abrechnung für Kranken-, Rollstuhl- und Tragestuhltransporte. Konzentrieren Sie sich auf Ihr Geschäft, wir übernehmen die Abrechnung.",
		images: [{ url: "https://ptas.de/icon.svg" }],
		locale: "de_DE",
		siteName: "PTAS",
		title: "PTAS - Personentransport-Abrechnungsservice",
		url: "https://ptas.de",
	},
	title: {
		default: "PTAS - Personentransport-Abrechnungsservice",
		template: "%s | PTAS",
	},
	verification: {
		other: {
			"google-site-verification1":
				"1_vlqN3fe8Vc-p5S7-6uipmCMNS4WUWXLS8KFvMOd9E",
			"msvalidate.01": "D9D3718C0124D4601CF8474A8E8BF3E8",
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			className={cn("h-full antialiased", inter.variable)}
			lang="de"
			suppressHydrationWarning
		>
			<body>
				<Script
					src="https://cloud.ccm19.de/app.js?apiKey=295cd4d0334f21415c578a0a1683af21ebe840cccf666d7f&amp;domain=6a3151492f75bfecf00d9be2"
					strategy="beforeInteractive"
				/>
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=AW-10795425279"
					strategy="afterInteractive"
				/>
				<Script id="google-ads-tag" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'AW-10795425279');
					`}
				</Script>
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
