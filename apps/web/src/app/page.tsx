import {
	Ambulance,
	ArrowRight,
	CheckCircle,
	Clock,
	HandCoins,
	HeartPulse,
	Send,
	ShieldCheck,
	Users,
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

export default function Home() {
	const services = [
		"Krankenfahrten zur ambulanten Behandlung (Arztbesuche)",
		"Krankenfahrten zur stationären Behandlung oder Verlegung",
		"Rollstuhl-, Tragestuhl und Liegendtransporte",
		"Dialysefahrten (Serienfahrten)",
		"Fahrten zur Chemo- und Strahlentherapie (Serienfahrten)",
		"Sammelfahrten",
		"Behinderten- und Schülertransporte",
	];

	const benefits = [
		{
			icon: Clock,
			title: "Zeitersparnis",
			description:
				"Konzentrieren Sie sich auf Ihr Kerngeschäft - wir übernehmen die Abrechnung.",
		},
		{
			icon: HandCoins,
			title: "Kostenersparnis",
			description:
				"Reduzieren Sie Personal- und Verwaltungskosten durch unsere effiziente Abwicklung.",
		},
		{
			icon: Zap,
			title: "Schnelle Auszahlung",
			description:
				"Verbessern Sie Ihre Liquidität durch individuelle Zahlungsziele.",
		},
		{
			icon: ShieldCheck,
			title: "Zuverlässig & Sicher",
			description:
				"Profitieren Sie von unserer jahrelangen Erfahrung und eigener Software-Entwicklung.",
		},
	];

	return (
		<div className="flex flex-col">
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-linear-to-br from-primary/5 via-background to-primary/10 py-16 md:py-24">
				<div className="container mx-auto max-w-6xl px-4">
					<div className="grid items-center gap-12 md:grid-cols-2">
						<div className="flex flex-col gap-6">
							<div className="flex items-center gap-2 text-primary">
								<Ambulance className="size-6" />
								<span className="font-medium text-sm uppercase tracking-wider">
									Abrechnungsservice
								</span>
							</div>
							<h1 className="font-bold text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
								Günstige Abrechnung von{" "}
								<span className="text-primary">Krankenfahrt-Belegen</span> mit
								allen Kostenträgern
							</h1>
							<p className="text-lg text-muted-foreground">
								Schnell, zuverlässig und sicher. Entscheiden Sie sich für mehr
								Unabhängigkeit.
							</p>
							<div className="flex flex-wrap gap-3">
								<Link href="/kontakt">
									<Button size="lg" className="gap-2">
										<Send className="size-4" />
										Unverbindliche Anfrage
									</Button>
								</Link>
								<Link href="/abrechnung">
									<Button variant="outline" size="lg" className="gap-2">
										Mehr erfahren
										<ArrowRight className="size-4" />
									</Button>
								</Link>
							</div>
						</div>
						<div className="relative hidden md:block">
							<div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
							<div className="relative grid grid-cols-2 gap-4">
								<Card>
									<CardContent className="flex flex-col items-center gap-2 py-6 text-center">
										<HeartPulse className="size-8 text-primary" />
										<span className="font-medium text-sm">
											Alle Kostenträger
										</span>
									</CardContent>
								</Card>
								<Card>
									<CardContent className="flex flex-col items-center gap-2 py-6 text-center">
										<Clock className="size-8 text-primary" />
										<span className="font-medium text-sm">
											Schnelle Abwicklung
										</span>
									</CardContent>
								</Card>
								<Card>
									<CardContent className="flex flex-col items-center gap-2 py-6 text-center">
										<ShieldCheck className="size-8 text-primary" />
										<span className="font-medium text-sm">
											Sichere Verarbeitung
										</span>
									</CardContent>
								</Card>
								<Card>
									<CardContent className="flex flex-col items-center gap-2 py-6 text-center">
										<Users className="size-8 text-primary" />
										<span className="font-medium text-sm">
											Persönlicher Service
										</span>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Experience Section */}
			<section className="border-y bg-muted/30 py-16 md:py-24">
				<div className="container mx-auto max-w-6xl px-4">
					<div className="grid items-center gap-12 md:grid-cols-2">
						<div>
							<h2 className="mb-4 font-bold text-2xl md:text-3xl">
								Abrechnung von Krankenfahrten
							</h2>
							<p className="mb-6 font-medium text-lg text-primary">
								Unsere Erfahrung - Ihr Vorteil
							</p>
							<div className="space-y-4 text-muted-foreground">
								<p>
									Sie haben viel zu tun, wenig Zeit und keine Lust, sich mit der
									Abrechnung von Krankenfahrten zu befassen?
								</p>
								<p className="font-medium text-foreground">
									Unser Service ist die Lösung. Das Kerngeschäft ist das
									Wichtigste!
								</p>
								<p>
									Dank unserer eigenen Software-Entwicklung und jahrelanger
									Erfahrung begleiten wir Sie bei allen Themen rund um Ihre
									Abrechnung.
								</p>
								<p>
									Wir ersparen Ihnen Personal- und Verwaltungskosten durch
									schnelle und unkomplizierte Abwicklung Ihrer Krankenfahrten.
								</p>
								<p>
									Verbessern Sie Ihre Liquidität durch individuelle
									Zahlungsziele und warten Sie nicht wochenlang auf ihr Geld.
								</p>
							</div>
						</div>
						<div className="grid gap-4 sm:grid-cols-2">
							{benefits.map((benefit) => (
								<Card key={benefit.title}>
									<CardHeader>
										<benefit.icon className="mb-2 size-8 text-primary" />
										<CardTitle>{benefit.title}</CardTitle>
										<CardDescription>{benefit.description}</CardDescription>
									</CardHeader>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto max-w-6xl px-4">
					<div className="mb-12 text-center">
						<h2 className="mb-4 font-bold text-2xl md:text-3xl">
							Die passende Lösung
						</h2>
						<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
							Schnelle, unkomplizierte und verlässliche Abrechnung von:
						</p>
					</div>
					<div className="mx-auto max-w-3xl">
						<Card>
							<CardContent className="py-6">
								<ul className="grid gap-3 sm:grid-cols-2">
									{services.map((service) => (
										<li key={service} className="flex items-start gap-3">
											<CheckCircle className="mt-0.5 size-5 shrink-0 text-primary" />
											<span className="text-sm">{service}</span>
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					</div>
					<div className="mt-12 text-center">
						<Card className="mx-auto inline-block bg-primary/5">
							<CardContent className="py-6">
								<p className="mb-4 font-medium text-lg">
									Wir sind Ihr spezialisierter Partner für die Abrechnung von
									Krankenfahrten mit allen Kostenträgern!
								</p>
								<p className="text-muted-foreground">
									Ob Krankenfahrten mit dem Taxi, Mietwagen, KTW oder BTW.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="border-t bg-primary py-16 text-primary-foreground md:py-24">
				<div className="container mx-auto max-w-4xl px-4 text-center">
					<h2 className="mb-4 font-bold text-2xl md:text-3xl">
						Bereit für mehr Unabhängigkeit?
					</h2>
					<p className="mb-8 text-lg text-primary-foreground/80">
						Wir freuen uns über Ihre unverbindliche Anfrage zum Thema
						Abrechnung.
					</p>
					<Link href="/kontakt">
						<Button
							variant="secondary"
							size="lg"
							className="gap-2 bg-background text-foreground hover:bg-background/90"
						>
							<Send className="size-4" />
							Jetzt Kontakt aufnehmen
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
