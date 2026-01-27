import {
	ArrowRight,
	Banknote,
	CheckCircle,
	Clock,
	FileCheck,
	FileText,
	Headphones,
	Package,
	Scale,
	Send,
	Users,
} from "lucide-react";
import Link from "next/link";
import CTA from "@/components/cta";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function AbrechnungPage() {
	return (
		<div className="flex flex-col">
			{/* Hero Section */}
			<section className="border-b bg-linear-to-br from-primary/5 via-background to-primary/10 py-16 md:py-24">
				<div className="container mx-auto max-w-6xl px-4">
					<div className="mx-auto max-w-3xl text-center">
						<h1 className="mb-6 font-bold text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
							Abrechnung von Krankentransporten -{" "}
							<span className="text-primary">leicht gemacht</span>
						</h1>
						<p className="text-lg text-muted-foreground">
							Es gibt für Unternehmer und Selbständige Tätigkeiten, die "voran
							bringen"... und andere, die Arbeitskraft und Zeit "fressen". Zu
							den "Anderen" gehört sicher das Thema Abrechnung von
							Krankentransporten. Verständlich, wenn Unternehmer das von ihrer
							Agenda weg haben wollen.
						</p>
					</div>
				</div>
			</section>

			{/* Delegation vs DIY Section */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto max-w-6xl px-4">
					<div className="mb-12 text-center">
						<p className="text-lg text-muted-foreground">
							Die naheliegenden Lösungen: Delegieren oder selber machen?
						</p>
					</div>

					<div className="grid gap-6 md:gap-8 lg:grid-cols-2">
						{/* Delegieren Card */}
						<Card className="relative overflow-hidden border-primary/20 bg-primary/5">
							<div className="absolute top-0 right-0 h-32 w-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-2xl" />
							<CardHeader>
								<div className="mb-2 flex items-center gap-2">
									<Users className="size-6 text-primary" />
									<CardTitle className="text-2xl">Delegieren!</CardTitle>
								</div>
								<CardDescription className="text-base">
									Was bedeutet eigentlich, wirklich zu delegieren?
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="font-medium text-lg text-primary">
									Die Aufgabe jemandem mit Kompetenz zuzuweisen!
								</p>
								<p className="text-muted-foreground">
									Und hier kommen wir ins Spiel. Sprechen Sie mit uns und lassen
									Sie sich beraten. Die Abrechnung von Krankentransporten durch
									PTAS ist preiswert und hat viele Vorteile!
								</p>
								<p className="text-muted-foreground">
									Danach können Sie Ihre Zeit in Aktivitäten investieren, die
									Sie wirklich voranbringen -{" "}
									<span className="font-medium text-foreground">
										Konzentrieren Sie sich auf die Durchführung Ihrer
										Krankentransporte!
									</span>
								</p>
								<Link href="/kontakt">
									<Button className="mt-4 gap-2">
										<Send className="size-4" />
										Jetzt beraten lassen
									</Button>
								</Link>
							</CardContent>
						</Card>

						{/* Selber machen Card */}
						<Card className="relative overflow-hidden">
							<CardHeader>
								<div className="mb-2 flex items-center gap-2">
									<Clock className="size-6 text-muted-foreground" />
									<CardTitle className="text-2xl">Selber machen?</CardTitle>
								</div>
								<CardDescription className="text-base">
									Lange nachsitzen - nach Feierabend oder am Wochenende?
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-muted-foreground">
									Wenn Sie als kleines Unternehmen bereits Ihre gesamte
									Kapazität für Fahrten benötigen, kann die zusätzliche
									Abrechnung zur Belastung werden. Fehler, Verzögerungen und
									Liquiditätsengpässe sind häufig die Folge.
								</p>
								<div className="rounded-lg border bg-muted/50 p-4">
									<p className="font-medium text-foreground">
										PTAS übernimmt für Sie die komplette Abrechnung mit allen
										Kostenträgern - schnell, zuverlässig und effizient. So haben
										Sie den Kopf frei für Ihr Kerngeschäft!
									</p>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Success Section */}
			<section className="border-y bg-muted/30 py-12 md:py-16 lg:py-24">
				<div className="container mx-auto max-w-6xl px-4">
					<div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
						<div>
							<h2 className="mb-6 font-bold text-2xl md:text-3xl">
								Die Abrechnung Ihrer Krankentransporte entscheidet mit über den
								Erfolg
							</h2>
							<div className="space-y-4 text-muted-foreground">
								<p>
									PTAS übernimmt die zeitaufwändige Kommunikation mit den
									Krankenkassen und die Rückläufer-Bearbeitung. Dadurch
									entfallen hohe Personal- und Verwaltungskosten.
								</p>
								<p>
									Natürlich gibt es noch weitere Vorteile. Wenn Sie für einen
									geringen Aufpreis die Vorfinanzierung buchen, bedeutet die
									schnelle und termingerechte Auszahlung erhebliche finanzielle
									Planungssicherheit.
								</p>
								<p className="font-medium text-foreground">
									Nutzen Sie das schnell erhaltene Geld für Ihr Geschäft,
									anstatt wochenlang auf Zahlungseingänge zu warten.
								</p>
							</div>
						</div>
						<div className="grid gap-4">
							<Card>
								<CardContent className="flex items-center gap-4 py-4">
									<div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
										<Scale className="size-6 text-primary" />
									</div>
									<div>
										<p className="font-medium">Keine Personalkosten</p>
										<p className="text-muted-foreground text-sm">
											Kommunikation mit Krankenkassen übernehmen wir
										</p>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="flex items-center gap-4 py-4">
									<div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
										<FileCheck className="size-6 text-primary" />
									</div>
									<div>
										<p className="font-medium">Rückläufer-Bearbeitung</p>
										<p className="text-muted-foreground text-sm">
											Wir kümmern uns um alle Rückfragen
										</p>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="flex items-center gap-4 py-4">
									<div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
										<Banknote className="size-6 text-primary" />
									</div>
									<div>
										<p className="font-medium">Planungssicherheit</p>
										<p className="text-muted-foreground text-sm">
											Schnelle Auszahlung durch Vorfinanzierung
										</p>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Contracts Section */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto max-w-6xl px-4">
					<div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
						<div>
							<h2 className="mb-6 font-bold text-2xl md:text-3xl">
								Verträge und Codieren
							</h2>
							<div className="space-y-4 text-muted-foreground">
								<p>
									Sie übermitteln uns beim Start der Zusammenarbeit und bei
									Veränderungen Ihre Vereinbarungen mit den Kostenträgern. Wir
									codieren Ihre Positionen.{" "}
									<span className="font-medium text-primary">
										Das ist bei uns inklusive.
									</span>
								</p>
								<p>
									Wir hinterlegen auch Einzelverträge und sonstige individuelle
									Vereinbarungen.
								</p>
								<p>
									Die Entfernungsangaben können Sie mitliefern, müssen es aber
									nicht. Wir verwenden die angegebenen Adressdaten zur
									Kilometer-Ermittlung.
								</p>
							</div>
						</div>
						<Card className="bg-primary/5">
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<CheckCircle className="size-5 text-primary" />
									Inklusive Leistungen
								</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-3">
									<li className="flex items-start gap-3">
										<CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
										<span className="text-sm">
											Codierung Ihrer Positionen nach Ihren Verträgen
										</span>
									</li>
									<li className="flex items-start gap-3">
										<CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
										<span className="text-sm">
											Hinterlegung von Einzelverträgen
										</span>
									</li>
									<li className="flex items-start gap-3">
										<CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
										<span className="text-sm">
											Individuelle Vereinbarungen berücksichtigt
										</span>
									</li>
									<li className="flex items-start gap-3">
										<CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
										<span className="text-sm">
											Automatische Kilometer-Ermittlung
										</span>
									</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* More than Billing Section */}
			<section className="border-y bg-muted/30 py-16 md:py-24">
				<div className="container mx-auto max-w-6xl px-4">
					<div className="mb-12 text-center">
						<h2 className="mb-4 font-bold text-2xl md:text-3xl">
							Wir machen mehr als nur Abrechnung
						</h2>
						<p className="mx-auto max-w-2xl text-muted-foreground">
							Die Abrechnung Ihrer Belege übernehmen wir rundum zuverlässig für
							Sie. Mit Hotline und persönlichem Ansprechpartner. Wir sind
							spezialisiert auf die Abrechnung von Krankentransporten.
						</p>
					</div>

					<div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
						<Card>
							<CardHeader className="text-center">
								<Headphones className="mx-auto mb-2 size-10 text-primary" />
								<CardTitle>Persönlicher Support</CardTitle>
								<CardDescription>
									Hotline und persönlicher Ansprechpartner für alle Ihre Fragen
								</CardDescription>
							</CardHeader>
						</Card>
						<Card>
							<CardHeader className="text-center">
								<FileText className="mx-auto mb-2 size-10 text-primary" />
								<CardTitle>Digitale Belegerfassung</CardTitle>
								<CardDescription>
									Beratung zur Anschaffung eines geeigneten Dokumenten-Scanners
									für digitale Anlieferung
								</CardDescription>
							</CardHeader>
						</Card>
						<Card>
							<CardHeader className="text-center">
								<Banknote className="mx-auto mb-2 size-10 text-primary" />
								<CardTitle>Vorfinanzierung</CardTitle>
								<CardDescription>
									Für pünktlichen Geldeingang nutzen Sie unsere Vorfinanzierung
									für Krankentransporte
								</CardDescription>
							</CardHeader>
						</Card>
					</div>

					<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 md:mt-12">
						<Link href="/vorfinanzierung">
							<Button variant="outline" className="gap-2">
								<Banknote className="size-4" />
								Vorfinanzierung
								<ArrowRight className="size-4" />
							</Button>
						</Link>
						<Link href="/leistungen">
							<Button variant="outline" className="gap-2">
								<Package className="size-4" />
								Leistungs-Pakete
								<ArrowRight className="size-4" />
							</Button>
						</Link>
					</div>
				</div>
			</section>

			<CTA
				heading="Umfassender Service ist bei uns Standard"
				description="Wir bieten verschiedene Leistungs-Pakete für die Abrechnung von Krankentransporten - ohne Aufpreis!"
				buttonText="Unverbindliche Anfrage"
			/>
		</div>
	);
}
