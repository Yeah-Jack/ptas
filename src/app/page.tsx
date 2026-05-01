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

export default function Home() {
	return (
		<div className="flex flex-col">
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-linear-to-br from-primary/5 via-background to-primary/10 py-16 md:py-24">
				<div className="container mx-auto max-w-6xl px-4">
					<div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
						<div className="flex flex-col gap-4 md:gap-6">
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
							<p className="text-lg text-muted-foreground">
								Schnell, zuverlässig und sicher. Entscheiden Sie sich für mehr
								Unabhängigkeit.
							</p>
							<div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
								<Link href="/kontakt">
									<Button size="lg" className="w-full gap-2 sm:w-auto">
										<Send className="size-4" />
										Unverbindliche Anfrage
									</Button>
								</Link>
								<Link href="/abrechnung">
									<Button
										variant="outline"
										size="lg"
										className="w-full gap-2 sm:w-auto"
									>
										Mehr erfahren
										<ArrowRight className="size-4" />
									</Button>
								</Link>
							</div>
						</div>
						<div className="relative mt-8 md:mt-0">
							<div className="absolute inset-0 hidden rounded-full bg-primary/10 blur-3xl md:block" />
							<div className="relative grid grid-cols-2 gap-3 md:gap-4">
								{promises.map((promise) => (
									<Card key={promise.content}>
										<CardContent className="flex flex-col items-center gap-2 px-3 py-4 text-center md:px-4 md:py-6">
											<promise.icon className="size-6 text-primary md:size-8" />
											<HoverCard openDelay={0} closeDelay={100}>
												<HoverCardTrigger className="font-medium text-xs underline decoration-dotted underline-offset-4 md:text-sm">
													{promise.content}
												</HoverCardTrigger>
												<HoverCardContent>{promise.hover}</HoverCardContent>
											</HoverCard>
										</CardContent>
									</Card>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Experience Section */}
			<section className="border-y bg-muted/30 py-12 md:py-16 lg:py-24">
				<div className="container mx-auto max-w-6xl px-4">
					<div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
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

			<CTA />
		</div>
	);
}
