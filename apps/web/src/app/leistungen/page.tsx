import {
  ArrowRight,
  CheckCircle,
  Clock,
  FileText,
  HandCoins,
  Headphones,
  Package,
  PiggyBank,
  Send,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LeistungenPage() {
  const processSteps = [
    {
      icon: FileText,
      title: "Belege zusenden",
      description: "Sie schicken uns Ihre Verordnungen zu.",
    },
    {
      icon: Shield,
      title: "Prüfung & Erfassung",
      description:
        "Nach Prüfung und Erfassung der Belege fakturieren wir die Forderungen an die Kostenträger.",
    },
    {
      icon: Zap,
      title: "Datenträgeraustausch",
      description:
        "Per Datenträgeraustausch nach §302 SGB - schnelle Bearbeitung, keine Rechnungskürzungen.",
    },
    {
      icon: PiggyBank,
      title: "Auszahlung",
      description:
        "Auszahlung über unseren Factoring-Partner oder direkt von den Kostenträgern.",
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Zeitersparnis",
      description:
        "Wir ersparen wertvolle Zeit, da wir die komplette Abwicklung übernehmen.",
    },
    {
      icon: HandCoins,
      title: "Kostenersparnis",
      description:
        "Hohe Verwaltungs- und Personalkosten können damit gespart werden.",
    },
    {
      icon: Package,
      title: "Keine Vorbereitung",
      description:
        "Es ist keine Vorbereitung oder Aufbereitung der Unterlagen erforderlich.",
    },
    {
      icon: Zap,
      title: "Zügige Auszahlung",
      description:
        "Wir gewährleisten einen unkomplizierten Ablauf und zügige Auszahlung Ihres Guthabens.",
    },
  ];

  const abrechnungFeatures = [
    "Sie schicken uns Ihre Belege",
    "Wir rechnen für Sie ab",
    "Sie erhalten Ihr Geld wie gewohnt auf Ihr Konto",
  ];

  const vorfinanzierungFeatures = [
    "Sie schicken uns Ihre Belege",
    "Wir rechnen für Sie ab",
    "Sie erhalten Ihr Geld nach vereinbarter Zeit auf Ihr Konto",
    "Individuelle Zahlungsziele",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-linear-to-br from-primary/5 via-background to-primary/10 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-primary">
              <Package className="size-6" />
              <span className="font-medium text-sm uppercase tracking-wider">
                Unsere Leistungen
              </span>
            </div>
            <h1 className="mb-6 font-bold text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Abrechnung von Krankenfahrten zu{" "}
              <span className="text-primary">geringen Kosten</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Wir übernehmen den kompletten Bearbeitungs-Ablauf für Ihre
              Transportscheine. Von der Erfassung der Krankenfahrten bis hin zur
              Rechnungsstellung.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-2xl md:text-3xl">
              Unser Ablauf
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Sie schicken uns Ihre Verordnungen zu. Nach Prüfung und Erfassung
              der Belege fakturieren wir die Forderungen an die Kostenträger per
              Datenträgeraustausch nach §302 SGB.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="absolute top-8 right-0 hidden h-0.5 w-full translate-x-1/2 bg-border md:block" />
                )}
                <Card className="relative h-full">
                  <CardHeader className="text-center">
                    <step.icon className="mx-auto mb-2 size-10 text-primary" />
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="border-y bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 font-bold text-2xl md:text-3xl">
                Was wir für Sie übernehmen
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Dadurch gewährleisten wir eine schnelle Bearbeitung und
                  vermeiden Rechnungskürzungen. Die Belege Ihrer Krankenfahrten
                  werden vor der Erfassung von uns digital archiviert.
                </p>
                <p>
                  Je nach Vereinbarung erhalten Sie eine Auszahlung auf Ihre
                  Forderungen von unserem Factoring-Partner oder Ihr Geld
                  weiterhin direkt von den Kostenträgern.
                </p>
                <p>
                  Wir führen die aufwändige Rückläuferbearbeitung und das
                  Mahnwesen für Sie durch.{" "}
                  <span className="font-medium text-primary">
                    Ohne versteckte Kosten
                  </span>{" "}
                  - es wird nur die vereinbarte Gebühr fällig.
                </p>
                <p>
                  Für die Buchhaltung bzw. Steuerberater bereiten wir die
                  Unterlagen entsprechend auf. Unsere Gebühren sind
                  selbstverständlich als Betriebsausgaben absetzbar.
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
                      Komplette Erfassung Ihrer Krankenfahrten
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm">
                      Digitale Archivierung der Belege
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm">
                      Fakturierung per Datenträgeraustausch §302 SGB
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm">Rückläuferbearbeitung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm">Mahnwesen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm">
                      Aufbereitung für Buchhaltung/Steuerberater
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-2xl md:text-3xl">
              Ihre Vorteile
            </h2>
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

      {/* Contact CTA */}
      <section className="border-y bg-muted/30 py-12">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <Headphones className="size-8 text-primary" />
            <p className="text-lg">
              Haben Sie Fragen?{" "}
              <span className="font-medium">Melden Sie sich bei uns!</span>
            </p>
            <Link href="/kontakt">
              <Button className="ml-4 gap-2">
                <Send className="size-4" />
                Kontakt
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-2xl md:text-3xl">
              Unsere Leistungs-Pakete
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Wählen Sie Ihr passendes Angebot. Eines unserer Leistungs-Pakete
              ist sicher das Richtige für Ihren Betrieb!
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {/* Abrechnung Package */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">Abrechnung</CardTitle>
                <CardDescription className="text-base">
                  Sie erhalten schnell ein Angebot von uns!
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {abrechnungFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 size-5 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/abrechnung" className="w-full">
                  <Button variant="outline" className="w-full gap-2">
                    Mehr erfahren
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Abrechnung mit Vorfinanzierung Package */}
            <Card className="relative flex flex-col overflow-hidden border-primary/30 bg-primary/5">
              <div className="absolute top-0 right-0 rounded-bl-lg bg-primary px-3 py-1 font-medium text-primary-foreground text-xs">
                Top-Kombination!
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="text-2xl">
                  Abrechnung mit Vorfinanzierung
                </CardTitle>
                <CardDescription className="text-base">
                  Testen Sie uns!
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {vorfinanzierungFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 size-5 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/vorfinanzierung" className="w-full">
                  <Button className="w-full gap-2">
                    Mehr erfahren
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          {/* Legal Notice */}
          <div className="mx-auto mt-12 max-w-3xl rounded-lg border bg-muted/30 p-6 text-center text-muted-foreground text-sm">
            <p>
              Unsere Angebote richten sich nur an Unternehmer (§14 BGB), also an
              natürliche oder juristische Personen oder rechtsfähige
              Personengesellschaften, die bei Abschluss eines Rechtsgeschäfts in
              Ausübung ihrer gewerblichen oder selbständigen beruflichen
              Tätigkeit handeln. Wir schließen keine Verträge mit Verbrauchern
              (§13 BGB).
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 font-bold text-2xl md:text-3xl">
            Bereit für eine unkomplizierte Abrechnung?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/80">
            Kontaktieren Sie uns für ein individuelles Angebot.
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
