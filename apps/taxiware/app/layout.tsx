import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import { cn } from "@repo/ui/lib/utils";

const inter = Inter({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://taxiware.de"),
	openGraph: {
		locale: "de_DE",
		siteName: "Taxiware",
		title: "Taxiware",
		url: "https://taxiware.de",
	},
	title: {
		default: "Taxiware",
		template: "%s | Taxiware",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className={cn("h-full antialiased", inter.variable)} lang="de">
			<body className="flex min-h-full flex-col">
				<main className="flex-1">{children}</main>
			</body>
		</html>
	);
}
