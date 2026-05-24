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
	title: "PTAS - Personentransport-Abrechnungsservice",
	description:
		"Günstige Abrechnung von Krankenfahrt-Belegen mit allen Kostenträgern. Schnell, zuverlässig und sicher.",
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
