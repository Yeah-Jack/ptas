import {
	ArrowRight,
	Building,
	Building2,
	Calculator,
	CheckCircle,
	Clock,
	HandCoins,
	HeartPulse,
	Laptop,
	Network,
	PhoneCall,
	Receipt,
	ShieldCheck,
	Users,
	Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FadeInUp } from "@/components/animations/fade-in-up";
import CTA from "@/components/cta";
import Testimonial from "@/components/testimonial";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
] as const;

const promises = [
	{
		icon: HeartPulse,
		content: "Alle Kostenträger",
		hover: "Wir bearbeiten Abrechnungen für alle Kostenträger.",
	},
	{
		icon: Clock,
		content: "Schnelle Abwicklung",
		hover: "Wir garantieren eine schnelle und unkomplizierte Abwicklung.",
	},
	{
		icon: ShieldCheck,
		content: "Sichere Verarbeitung",
		hover: "Wir stellen sicher, dass Ihre Daten geschützt sind.",
	},
	{
		icon: Users,
		content: "Persönlicher Service",
		hover: "Wir bieten individuelle Betreuung und Unterstützung.",
	},
];

const services = [
	"Krankenfahrten zur ambulanten Behandlung (Arztbesuche)",
	"Krankenfahrten zur stationären Behandlung oder Verlegung",
	"Rollstuhl-, Tragestuhl und Liegendtransporte",
	"Dialysefahrten (Serienfahrten)",
	"Fahrten zur Chemo- und Strahlentherapie (Serienfahrten)",
	"Sammelfahrten",
	"Behinderten- und Schülertransporte",
] as const;

const vehicles = [
	"Taxis und Mietwagen",
	"Krankentransportwagen (KTW)",
	"Behindertentransportwagen (BTW)",
	"Spezialfahrzeuge (Liegendtransporte)",
	"Tragestuhltransporte",
	"Rollstuhlfahrzeuge",
] as const;

const serviceFeatures = [
	"Prüfung aller Verordnungen",
	"Direkte Kommunikation mit Kassen",
	"Rückläuferbearbeitung",
	"Kostenlose Software-Nutzung",
	"Optionale Vorfinanzierung",
	"Persönlicher Ansprechpartner",
] as const;

const partners = [
	{ name: "1159 Finance", logo: "/1159-Finance.svg" },
	{ name: "Sozialfactoring", logo: "/Sozial-Factoring.svg" },
	// { name: "Bridgetec", icon: Handshake },
	{ name: "GVN Fördermitglied", logo: "/GVN.png" },
	// { name: "Bayern-Deal (T&M)", icon: BadgeCheck },
	// { name: "VSPV Mitglied", icon: BadgeCheck },
] as const;

const genossenschaftenFeatures = [
	"Transparente Umlagen & Gebührenberechnung",
	"Sichere Mitgliedsbeitrag-Verwaltung",
	"Zentrale Online-Einsicht für jeden Unternehmer",
] as const;

const workflowSteps = [
	{
		icon: PhoneCall,
		title: "1. Fahrtvermittlung",
		description: "Auftrag wird in der Zentrale erfasst und disponiert.",
	},
	{
		icon: Network,
		title: "2. Automatische Zuordnung",
		description:
			"Fahrt wird automatisch dem ausführenden Unternehmer zugeordnet.",
	},
	{
		icon: Calculator,
		title: "3. Gebührenberechnung",
		description:
			"Umlagen, Mitgliedsbeiträge und Vermittlungsgebühren werden regelbasiert ermittelt.",
	},
	{
		icon: Receipt,
		title: "4. Abrechnungserstellung",
		description:
			"Transparente, periodische Erstellung der Unternehmerabrechnung.",
	},
	{
		icon: Laptop,
		title: "5. Portal-Zugang",
		description: "24/7 Online-Einsicht für Unternehmer und Zentrale.",
	},
] as const;

export default function Home() {
	return (
		<div className="flex flex-col">
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-background pt-16 pb-8 md:pt-24 md:pb-12 lg:pt-32">
				{/* Background gradient */}
				<div className="pointer-events-none absolute top-0 left-1/2 h-100 w-200 -translate-x-1/2 -translate-y-12 rounded-full bg-primary/20 blur-[100px]" />

				<div className="container relative mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
					<FadeInUp className="flex flex-col items-center gap-6 md:gap-8">
						{/* Top Badge */}
						<div className="inline-flex cursor-default items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-primary text-sm transition-colors hover:bg-primary/10">
							<ShieldCheck className="mr-2 size-4" />
							<span className="font-semibold">Der Top Abrechnungsservice</span>
							<span className="mx-2 hidden h-4 w-px bg-primary/20 md:block" />
							<span className="hidden text-muted-foreground md:block">
								für Taxi- & Krankentransporte
							</span>
						</div>

						{/* Headline */}
						<h1 className="max-w-4xl font-bold text-4xl leading-[1.1] tracking-tight md:text-5xl lg:text-7xl">
							Fahren Sie Ihre Patienten. <br className="hidden md:block" />
							<span className="bg-linear-to-r from-primary to-primary/80 bg-clip-text text-primary">
								Wir machen die Abrechnung.
							</span>
						</h1>

						{/* Subheadline */}
						<p className="max-w-2xl text-lg text-muted-foreground leading-relaxed md:text-xl">
							Die bequeme, schnelle und sichere Abrechnung von Krankenfahrten.
							Konzentrieren Sie sich auf Ihr Kerngeschäft - wir kümmern uns um
							den Rest.
						</p>

						{/* CTA & Social Proof */}
						<div className="flex w-full flex-col items-center justify-center gap-4 pt-4 sm:flex-row sm:gap-6">
							<Link href="/kontakt" className="w-full sm:w-auto">
								<Button
									size="lg"
									className="h-14 w-full px-8 font-semibold text-base shadow-lg transition-all hover:scale-105"
								>
									Jetzt unverbindlich anfragen
									<ArrowRight className="ml-2 size-5" />
								</Button>
							</Link>
						</div>

						{/* Ratings */}
						<div className="mt-2 flex flex-col items-center gap-2">
							<div className="flex items-center gap-1 text-yellow-400">
								{[1, 2, 3, 4, 5].map((starId) => (
									<svg
										key={`star-${starId}`}
										aria-hidden="true"
										className="size-5 fill-current"
										viewBox="0 0 24 24"
									>
										<path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
									</svg>
								))}
							</div>
							<p className="font-medium text-muted-foreground text-sm">
								Vertraut von{" "}
								<strong className="font-semibold text-foreground">
									hunderten
								</strong>{" "}
								Unternehmen deutschlandweit
							</p>
						</div>
					</FadeInUp>
				</div>
			</section>

			{/* Partners / Social Proof Section */}
			<section className="relative z-10 bg-background pt-8 pb-16 md:pb-24">
				<FadeInUp
					delay={0.2}
					className="container mx-auto max-w-6xl px-4 text-center"
				>
					<p className="mb-8 hidden font-medium text-muted-foreground text-sm uppercase tracking-widest md:block">
						Offizielle Partner & Schnittstellen
					</p>
					<div className="flex flex-wrap items-center justify-center gap-8 opacity-70 transition-all hover:opacity-100 md:gap-12">
						{partners.map((partner, _idx) => (
							<Image
								key={partner.name}
								src={partner.logo}
								alt={partner.name}
								width={180}
								height={50}
								className={`w-auto object-contain transition-transform hover:scale-105 ${
									partner.name === "Sozialfactoring" ||
									partner.name === "GVN Fördermitglied"
										? "h-12 md:h-14"
										: "h-8 md:h-10"
								} ${partner.name === "1159 Finance" ? "invert dark:invert-0" : "dark:brightness-0 dark:invert"}`}
							/>
						))}
					</div>
				</FadeInUp>
			</section>

			{/* Feature / UI Mockup Replacement */}
			<section className="relative z-20 -mt-8 border-b pb-16 md:-mt-12 md:pb-24">
				<FadeInUp delay={0.3} className="container mx-auto max-w-5xl px-4">
					<div className="rounded-2xl border bg-background/40 p-2 shadow-2xl ring-1 ring-primary/5 backdrop-blur-xl md:p-4">
						<div className="overflow-hidden rounded-xl border bg-card shadow-sm">
							{/* Mac-like Window Chrome */}
							<div className="flex items-center border-b bg-muted/40 px-4 py-3">
								<div className="flex gap-1.5">
									<div className="size-3 rounded-full bg-red-500/20 ring-1 ring-red-500/50" />
									<div className="size-3 rounded-full bg-yellow-500/20 ring-1 ring-yellow-500/50" />
									<div className="size-3 rounded-full bg-green-500/20 ring-1 ring-green-500/50" />
								</div>
								<div className="mx-auto flex h-6 w-full max-w-50 items-center justify-center rounded-md bg-background px-3 font-medium text-[10px] text-muted-foreground shadow-sm ring-1 ring-border">
									PTAS Portal
								</div>
							</div>

							{/* Content area showcasing the 4 promises */}
							<div className="bg-muted/10 p-4 md:p-8">
								<div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
									{promises.map((promise, _idx) => (
										<Card
											key={promise.content}
											className="border-primary/10 bg-background shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
										>
											<CardContent className="flex flex-col items-center gap-3 p-5 text-center md:p-6">
												<div className="rounded-full bg-primary/10 p-3 ring-1 ring-primary/20">
													<promise.icon className="size-6 text-primary" />
												</div>
												<h3 className="font-semibold text-sm md:text-base">
													{promise.content}
												</h3>
												<p className="text-muted-foreground text-xs leading-relaxed">
													{promise.hover}
												</p>
											</CardContent>
										</Card>
									))}
								</div>
							</div>
						</div>
					</div>
				</FadeInUp>
			</section>

			{/* Experience Section */}
			<section className="border-y bg-muted/30 py-12 md:py-16 lg:py-24">
				<div className="container mx-auto max-w-6xl px-4">
					<div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
						<FadeInUp>
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
						</FadeInUp>
						<div className="grid gap-4 sm:grid-cols-2">
							{benefits.map((benefit, idx) => (
								<FadeInUp key={benefit.title} delay={0.1 * idx}>
									<Card className="h-full border-transparent bg-background/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-background hover:shadow-md">
										<CardHeader>
											<div className="mb-4 w-fit rounded-xl bg-primary/10 p-3 shadow-inner">
												<benefit.icon className="size-6 text-primary" />
											</div>
											<CardTitle>{benefit.title}</CardTitle>
											<CardDescription>{benefit.description}</CardDescription>
										</CardHeader>
									</Card>
								</FadeInUp>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Testimonial Section */}
			<section className="py-8 sm:py-16 lg:py-24">
				<div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-11 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
					<h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">
						Mehr als 100 Unternehmen nutzen PTAS für ihre Abrechnung.
					</h2>
					<Testimonial />
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
					<FadeInUp className="mx-auto max-w-3xl">
						<Tabs defaultValue="fahrten" className="w-full">
							<TabsList className="mb-6 grid w-full grid-cols-3 bg-primary/5">
								<TabsTrigger value="fahrten">Fahrten</TabsTrigger>
								<TabsTrigger value="fahrzeuge">Fahrzeuge</TabsTrigger>
								<TabsTrigger value="service">Unser Service</TabsTrigger>
							</TabsList>

							<TabsContent value="fahrten">
								<Card className="overflow-hidden border-primary/10 shadow-sm">
									<CardContent className="py-6">
										<ul className="grid gap-3 sm:grid-cols-2">
											{services.map((service) => (
												<li
													key={service}
													className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-primary/5"
												>
													<CheckCircle className="mt-0.5 size-5 shrink-0 text-primary transition-transform group-hover:scale-110 group-hover:text-primary/80" />
													<span className="font-medium text-sm transition-colors group-hover:text-primary">
														{service}
													</span>
												</li>
											))}
										</ul>
									</CardContent>
								</Card>
							</TabsContent>

							<TabsContent value="fahrzeuge">
								<Card className="overflow-hidden border-primary/10 shadow-sm">
									<CardContent className="py-6">
										<ul className="grid gap-3 sm:grid-cols-2">
											{vehicles.map((item) => (
												<li
													key={item}
													className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-primary/5"
												>
													<CheckCircle className="mt-0.5 size-5 shrink-0 text-primary transition-transform group-hover:scale-110 group-hover:text-primary/80" />
													<span className="font-medium text-sm transition-colors group-hover:text-primary">
														{item}
													</span>
												</li>
											))}
										</ul>
									</CardContent>
								</Card>
							</TabsContent>

							<TabsContent value="service">
								<Card className="overflow-hidden border-primary/10 shadow-sm">
									<CardContent className="py-6">
										<ul className="grid gap-3 sm:grid-cols-2">
											{serviceFeatures.map((item) => (
												<li
													key={item}
													className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-primary/5"
												>
													<CheckCircle className="mt-0.5 size-5 shrink-0 text-primary transition-transform group-hover:scale-110 group-hover:text-primary/80" />
													<span className="font-medium text-sm transition-colors group-hover:text-primary">
														{item}
													</span>
												</li>
											))}
										</ul>
									</CardContent>
								</Card>
							</TabsContent>
						</Tabs>
					</FadeInUp>
					<FadeInUp delay={0.2} className="mt-12 text-center">
						<Card className="mx-auto inline-block border-primary/20 bg-linear-to-br from-primary/10 to-transparent shadow-sm">
							<CardContent className="px-6 py-8 md:px-12">
								<p className="mb-4 font-semibold text-foreground text-lg md:text-xl">
									Wir sind Ihr spezialisierter Partner für die Abrechnung von
									Krankenfahrten mit allen Kostenträgern!
								</p>
								<p className="md:font-extralight md:text-lg">
									Ob Krankenfahrten mit dem Taxi, Mietwagen, KTW oder BTW.
								</p>
							</CardContent>
						</Card>
					</FadeInUp>
				</div>
			</section>

			{/* Genossenschaften & Workflow Section */}
			<section className="border-y bg-muted/30 py-16 md:py-24">
				<div className="container mx-auto max-w-6xl px-4">
					{/* Genossenschaften Value Prop */}
					<div className="mb-16 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
						<FadeInUp>
							<div className="mb-4 flex items-center gap-2 text-primary">
								<Building className="size-5" />
								<span className="w-fit font-medium text-sm uppercase tracking-widest">
									Für Genossenschaften
								</span>
							</div>
							<h2 className="mb-4 font-bold text-2xl md:text-3xl lg:text-4xl">
								Unternehmerabrechnung für Taxigenossenschaften und Funkzentralen
							</h2>
							<p className="mb-6 text-lg text-muted-foreground">
								Wir übernehmen die komplette und komplexe Abrechnung zwischen
								Funkzentrale und Unternehmern. Verabschieden Sie sich von
								unübersichtlichen Tabellen und manuellen Prozessen.
							</p>
							<ul className="mb-8 space-y-3">
								{genossenschaftenFeatures.map((feature) => (
									<li key={feature} className="flex items-start gap-3">
										<CheckCircle className="mt-1 size-5 text-primary" />
										<span className="text-foreground">{feature}</span>
									</li>
								))}
							</ul>
						</FadeInUp>
						<FadeInUp delay={0.2}>
							<Card className="border-primary/10 bg-background/50 shadow-lg">
								<CardHeader>
									<CardTitle className="flex items-center gap-3">
										<Building2 className="size-6 text-primary" />
										So funktioniert es
									</CardTitle>
									<CardDescription>
										Unser 5-Schritte-Workflow für eine effiziente
										Unternehmerabrechnung
									</CardDescription>
								</CardHeader>
								<CardContent className="pt-6">
									<div className="space-y-6">
										{workflowSteps.map((step) => (
											<div key={step.title} className="flex gap-4">
												<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
													<step.icon className="size-5" />
												</div>
												<div>
													<h4 className="font-semibold">{step.title}</h4>
													<p className="text-muted-foreground text-sm">
														{step.description}
													</p>
												</div>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</FadeInUp>
					</div>
				</div>
			</section>

			<CTA />
		</div>
	);
}
