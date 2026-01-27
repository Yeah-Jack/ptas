import {
	ArrowRight,
	Banknote,
	Calendar,
	CheckCircle,
	Clock,
	Eye,
	HandCoins,
	Handshake,
	Send,
	ShieldCheck,
	Zap,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function VorfinanzierungPage() {
	const benefits = [
		{
			icon: Clock,
			title: "24 Stunden",
			description:
				"Wenn Sie möchten, ist das Geld innerhalb von 24 Stunden auf Ihrem Bankkonto.",
		},
		{
			icon: HandCoins,
			title: "Flexible Tarife",
			description:
				"Verschiedene Tarife und Zahlungsziele. Ganz nach Ihren Vorstellungen!",
		},
		{
			icon: ShieldCheck,
			title: "Liquidität gesichert",
			description:
				"Ihre Liquidität und die rechtzeitige Bezahlung der Mitarbeiter ist gesichert.",
		},
		{
			icon: Handshake,
			title: "Erfahrener Partner",
			description:
				"Setzen Sie auf einen Finanzierungspartner mit langjähriger Erfahrung und den nötigen Ressourcen!",
		},
	];

	const steps = [
		{
			number: "1",
			title: "Anmeldung",
			description:
				"Wenn Sie die Vorfinanzierung für Krankenfahrten wünschen, melden wir Sie dafür an.",
		},
		{
			number: "2",
			title: "Datenübertragung",
			description:
				"Wir übertragen zusätzlich noch Informationen aus den Abrechnungen an die SozialFactoring.",
		},
		{
			number: "3",
			title: "Auszahlung",
			description:
				"Je nach vereinbartem Zahlungsziel erhalten Sie das Geld ausgezahlt.",
		},
		{
			number: "4",
			title: "Rechnungsabschluss",
			description:
				"Der laufende Rechnungsabschluss erfolgt dann nach 60 Tagen.",
		},
	];

	return (
		<div className="flex flex-col">
			{/* Hero Section */}
			<section className="border-b bg-linear-to-br from-primary/5 via-background to-primary/10 py-16 md:py-24">
				<div className="container mx-auto max-w-6xl px-4">
					<div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
						<div className="flex flex-col gap-4 md:gap-6">
							<div className="flex items-center gap-2 text-primary">
								<Banknote className="size-6" />
								<span className="font-medium text-sm uppercase tracking-wider">
									Vorfinanzierung
								</span>
							</div>
							<h1 className="font-bold text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
								Vorfinanzierung für{" "}
								<span className="text-primary">Krankenfahrten</span>
							</h1>
							<p className="text-lg text-muted-foreground">
								In der Regel dauert es ca. 6 Wochen, bis die Kostenträger Ihre
								Krankenfahrten bezahlen. Haben Sie Ihr Geld schneller auf dem
								Konto - gegen einen geringen Aufpreis.
							</p>
							<p className="font-medium text-foreground">
								Unsere Vorfinanzierung für Krankenfahrten ist einfacher als
								gedacht!
							</p>
							<div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
								<Link href="/kontakt">
									<Button size="lg" className="w-full gap-2 sm:w-auto">
										<Send className="size-4" />
										Jetzt anfragen
									</Button>
								</Link>
								<Link href="/abrechnung">
									<Button
										variant="outline"
										size="lg"
										className="w-full gap-2 sm:w-auto"
									>
										Zur Abrechnung
										<ArrowRight className="size-4" />
									</Button>
								</Link>
							</div>
						</div>
						<div className="relative mt-6 lg:mt-0">
							<div className="absolute inset-0 hidden rounded-full bg-primary/10 blur-3xl lg:block" />
							<Card className="relative border-primary/20 bg-primary/5">
								<CardContent className="py-8">
									<div className="mb-6 flex items-center justify-center">
										<div className="flex size-20 items-center justify-center rounded-full bg-primary/10">
											<Zap className="size-10 text-primary" />
										</div>
									</div>
									<div className="space-y-4 text-center">
										<p className="font-bold text-4xl text-primary">24h</p>
										<p className="text-lg text-muted-foreground">
											Schnelle Auszahlung auf Ihr Bankkonto
										</p>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto max-w-6xl px-4">
					<div className="mb-12 text-center">
						<h2 className="mb-4 font-bold text-2xl md:text-3xl">
							Schneller Zahlungseingang - Ihre Vorteile
						</h2>
						<p className="mx-auto max-w-2xl text-muted-foreground">
							Wir arbeiten mit der SozialFactoring GmbH zusammen.
						</p>
					</div>

					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{benefits.map((benefit) => (
							<Card key={benefit.title}>
								<CardHeader className="text-center">
									<benefit.icon className="mx-auto mb-2 size-10 text-primary" />
									<CardTitle>{benefit.title}</CardTitle>
									<CardDescription>{benefit.description}</CardDescription>
								</CardHeader>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* How it works Section */}
			<section className="border-y bg-muted/30 py-16 md:py-24">
				<div className="container mx-auto max-w-6xl px-4">
					<div className="mb-12 text-center">
						<h2 className="mb-4 font-bold text-2xl md:text-3xl">
							Ganz einfach!
						</h2>
						<p className="mx-auto max-w-2xl text-muted-foreground">
							So funktioniert die Vorfinanzierung für Krankenfahrten
						</p>
					</div>

					<div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
						{steps.map((step, index) => (
							<div key={step.title} className="relative">
								{index < steps.length - 1 && (
									<div className="absolute top-8 right-0 hidden h-0.5 w-full translate-x-1/2 bg-border lg:block" />
								)}
								<Card className="relative h-full">
									<CardHeader>
										<div className="mb-2 flex size-12 items-center justify-center rounded-full bg-primary font-bold text-lg text-primary-foreground">
											{step.number}
										</div>
										<CardTitle>{step.title}</CardTitle>
										<CardDescription>{step.description}</CardDescription>
									</CardHeader>
								</Card>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Portal Section */}
			<section className="py-12 md:py-16 lg:py-24">
				<div className="container mx-auto max-w-6xl px-4">
					<div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
						<div>
							<div className="mb-4 flex items-center gap-2 text-primary">
								<Eye className="size-5" />
								<span className="font-medium text-sm uppercase tracking-wider">
									Übersicht behalten
								</span>
							</div>
							<h2 className="mb-6 font-bold text-2xl md:text-3xl">Portal</h2>
							<div className="space-y-4 text-muted-foreground">
								<p>
									Über unser Web-Portal und das der SozialFactoring behalten Sie
									den Überblick über den Status Ihrer vorfinanzierten
									Außenstände.
								</p>
								<p>
									Die Information umfasst eine Übersicht der erfolgten und zu
									erwartenden Auszahlungen an Sie, sowie die zu erwartenden
									Geldeingänge von den Kassen.
								</p>
							</div>
						</div>
						<Card className="bg-primary/5">
							<CardContent className="py-6">
								<ul className="space-y-4">
									<li className="flex items-start gap-3">
										<CheckCircle className="mt-0.5 size-5 shrink-0 text-primary" />
										<span>Status Ihrer vorfinanzierten Außenstände</span>
									</li>
									<li className="flex items-start gap-3">
										<CheckCircle className="mt-0.5 size-5 shrink-0 text-primary" />
										<span>Übersicht erfolgter Auszahlungen</span>
									</li>
									<li className="flex items-start gap-3">
										<CheckCircle className="mt-0.5 size-5 shrink-0 text-primary" />
										<span>Zu erwartende Auszahlungen</span>
									</li>
									<li className="flex items-start gap-3">
										<CheckCircle className="mt-0.5 size-5 shrink-0 text-primary" />
										<span>Erwartete Geldeingänge von den Kassen</span>
									</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Flexibility Section */}
			<section className="border-t bg-muted/30 py-16 md:py-24">
				<div className="container mx-auto max-w-4xl px-4 text-center">
					<div className="mb-6 flex justify-center">
						<Calendar className="size-12 text-primary" />
					</div>
					<h2 className="mb-4 font-bold text-2xl md:text-3xl">
						Flexibel bleiben
					</h2>
					<p className="mb-8 text-lg text-muted-foreground">
						Sie können sich von der Vorfinanzierung für Krankenfahrten mit einer
						Frist von 3 Monaten auch wieder abmelden, wenn Sie das wünschen.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<Link href="/leistungen">
							<Button variant="outline" className="gap-2">
								Leistungs-Pakete ansehen
								<ArrowRight className="size-4" />
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-primary py-16 text-primary-foreground md:py-24">
				<div className="container mx-auto max-w-4xl px-4 text-center">
					<h2 className="mb-4 font-bold text-2xl md:text-3xl">
						Interessiert an schnelleren Zahlungseingängen?
					</h2>
					<p className="mb-8 text-lg text-primary-foreground/80">
						Kontaktieren Sie uns für eine unverbindliche Beratung zur
						Vorfinanzierung.
					</p>
					<Link href="/kontakt">
						<Button
							variant="secondary"
							size="lg"
							className="gap-2 bg-background text-foreground hover:bg-background/90"
						>
							<Send className="size-4" />
							Unverbindliche Anfrage
						</Button>
					</Link>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t py-8">
				<div className="container mx-auto max-w-6xl px-4">
					<div className="flex flex-col items-center justify-between gap-4 text-center text-muted-foreground text-sm sm:flex-row sm:text-left">
						<p>© 2026 Personentransport-Abrechnungsservice</p>
						<div className="flex gap-6">
							<a href="/impressum" className="hover:text-foreground">
								Impressum
							</a>
							<a href="/datenschutz" className="hover:text-foreground">
								Datenschutz
							</a>
							<a href="/kontakt" className="hover:text-foreground">
								Kontakt
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
