import { Ambulance, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
	const navigationLinks = [
		{ to: "/", label: "Home" },
		{ to: "/leistungen", label: "Leistungen" },
		{ to: "/abrechnung", label: "Abrechnung" },
		{ to: "/vorfinanzierung", label: "Vorfinanzierung" },
		{ to: "/abrechnungssoftware", label: "Software" },
		{ to: "/kontakt", label: "Kontakt" },
	] as const;

	const legalLinks: { to: string; label: string }[] = [
		{ to: "/impressum", label: "Impressum" },
		{ to: "/datenschutz", label: "Datenschutz" },
		{ to: "/agb", label: "AGB" },
	];

	return (
		<footer className="border-t bg-muted/30">
			<div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{/* Brand */}
					<div className="flex flex-col gap-4">
						<Link
							href="/"
							className="flex items-center gap-2 font-bold text-lg text-primary"
						>
							<Ambulance className="size-5" />
							PTAS
						</Link>
						<p className="text-muted-foreground text-sm leading-relaxed">
							Personentransport-Abrechnungsservice - Ihr Partner für die
							zuverlässige Abrechnung von Krankenfahrt-Belegen mit allen
							Kostenträgern.
						</p>
					</div>

					{/* Navigation */}
					<div className="flex flex-col gap-4">
						<h3 className="font-semibold text-sm uppercase tracking-wider">
							Navigation
						</h3>
						<nav className="flex flex-col gap-2">
							{navigationLinks.map(({ to, label }) => (
								<Link
									key={to}
									href={to}
									className="text-muted-foreground text-sm transition-colors hover:text-foreground"
								>
									{label}
								</Link>
							))}
						</nav>
					</div>

					{/* Legal */}
					<div className="flex flex-col gap-4">
						<h3 className="font-semibold text-sm uppercase tracking-wider">
							Rechtliches
						</h3>
						<nav className="flex flex-col gap-2">
							{legalLinks.map(({ to, label }) => (
								<a
									key={to}
									href={to}
									className="text-muted-foreground text-sm transition-colors hover:text-foreground"
								>
									{label}
								</a>
							))}
						</nav>
					</div>

					{/* Contact */}
					<div className="flex flex-col gap-4">
						<h3 className="font-semibold text-sm uppercase tracking-wider">
							Kontakt
						</h3>
						<div className="flex flex-col gap-3 text-muted-foreground text-sm">
							<a
								href="https://www.google.com/maps/place/Am+Holzweg+26,+65830+Kriftel,+Germany"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 transition-colors hover:text-foreground"
							>
								<MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
								<span>
									Am Holzweg 26
									<br />
									65830 Kriftel
								</span>
							</a>
							<a
								href="tel:+4961929999002"
								className="flex items-center gap-2 transition-colors hover:text-foreground"
							>
								<Phone className="size-4 shrink-0 text-primary" />
								(06192) 9999 002
							</a>
							<a
								href="mailto:info@ptas.de"
								className="flex items-center gap-2 transition-colors hover:text-foreground"
							>
								<Mail className="size-4 shrink-0 text-primary" />
								info@ptas.de
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t bg-background/50">
				<div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-4 text-center text-muted-foreground text-xs sm:flex-row sm:text-left">
					<p>
						© {new Date().getFullYear()} Personentransport-Abrechnungsservice.
						Alle Rechte vorbehalten.
					</p>
					<p>
						Mit <span className="text-primary">♥</span> entwickelt in
						Deutschland
					</p>
				</div>
			</div>
		</footer>
	);
}
