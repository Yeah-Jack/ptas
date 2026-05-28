import {
	Ambulance,
	// ArrowRight,
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
	Send,
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
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
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
			<section className="relative overflow-hidden bg-linear-to-br from-primary/5 via-background to-primary/10 py-16 md:py-24">
				<div className="container mx-auto max-w-6xl px-4">
					<div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
						<FadeInUp className="flex flex-col gap-4 md:gap-6">
							<div className="flex items-center gap-2 text-primary">
								<Ambulance className="size-5 md:size-6" />
								<span className="font-medium text-sm uppercase tracking-wider">
									Abrechnungsservice
								</span>
							</div>
							<h1 className="font-bold text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
								Günstige Abrechnung von{" "}
								<span className="text-primary">Krankenfahrt-Belegen</span> mit
								allen Kostenträgern
							</h1>
							<p className="max-w-lg text-lg text-muted-foreground">
								Schnell, zuverlässig und sicher. Entscheiden Sie sich für mehr
								Unabhängigkeit.
							</p>
							<div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
								<Link href="/kontakt">
									<Button
										size="lg"
										className="w-full gap-2 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md sm:w-auto"
									>
										<Send className="size-4" />
										Unverbindliche Anfrage
									</Button>
								</Link>
								{/* <Link href="/abrechnung">
									<Button
										variant="outline"
										size="lg"
										className="group w-full gap-2 transition-colors hover:bg-primary/5 sm:w-auto"
									>
										Mehr erfahren
										<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
									</Button>
								</Link> */}
							</div>
						</FadeInUp>
						<FadeInUp delay={0.1} className="relative mt-8 md:mt-0">
							<div className="absolute inset-0 hidden rounded-full bg-primary/10 blur-3xl md:block" />
							<div className="relative grid grid-cols-2 gap-3 md:gap-4">
								{promises.map((promise, idx) => (
									<FadeInUp key={promise.content} delay={idx * 0.1}>
										<Card className="border-primary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
											<CardContent className="flex flex-col items-center gap-3 px-3 py-5 text-center md:px-4 md:py-8">
												<div className="mb-1 rounded-full bg-primary/10 p-3">
													<promise.icon className="size-6 text-primary md:size-8" />
												</div>
												<HoverCard openDelay={0} closeDelay={100}>
													<HoverCardTrigger className="font-semibold text-xs transition-colors hover:text-primary md:text-sm">
														{promise.content}
													</HoverCardTrigger>
													<HoverCardContent className="text-sm shadow-xl">
														{promise.hover}
													</HoverCardContent>
												</HoverCard>
											</CardContent>
										</Card>
									</FadeInUp>
								))}
							</div>
						</FadeInUp>
					</div>
				</div>
			</section>

			{/* Partners Section */}
			<section className="border-b bg-background py-8 md:py-12">
				<FadeInUp
					delay={0.2}
					className="container mx-auto max-w-6xl px-4 text-center"
				>
					<p className="mb-6 font-medium text-muted-foreground text-sm uppercase tracking-widest">
						Unterstützt durch unsere Partner & Verbände
					</p>
					<div className="flex flex-wrap justify-center gap-4 md:gap-8">
						{partners.map((partner, idx) => (
							<FadeInUp
								key={partner.name}
								delay={idx * 0.2}
								className="flex items-center gap-2 rounded-full border bg-muted/30 px-4 py-2"
							>
								<Image
									src={partner.logo}
									alt={partner.name}
									width={160}
									height={40}
									className={`w-auto ${
										partner.name === "Sozialfactoring" ||
										partner.name === "GVN Fördermitglied"
											? "h-10 sm:h-12"
											: "h-6"
									} ${partner.name === "1159 Finance" ? "invert dark:invert-0" : "dark:brightness-0 dark:invert"}`}
								/>
							</FadeInUp>
						))}
					</div>
				</FadeInUp>
			</section>

			{/* Experience Section */}
			<section className="border-y bg-muted/30 py-12 md:py-16 lg:py-24">
				<div className="container mx-auto max-w-6xl px-4">
					<FadeInUp className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
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
					</FadeInUp>
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
