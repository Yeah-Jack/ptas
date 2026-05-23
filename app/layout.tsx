import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./global.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Providers from "@/components/providers";
import { cn } from "@/lib/utils";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
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
			className={cn(`${geistSans.variable} ${geistMono.variable} antialiased`)}
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
					<div className="grid min-h-svh grid-rows-[auto_1fr_auto]">
						<Header />
						<main>{children}</main>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
