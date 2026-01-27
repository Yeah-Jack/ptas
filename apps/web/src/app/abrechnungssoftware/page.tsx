import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Cloud,
  Euro,
  FileText,
  Headphones,
  Laptop,
  Lock,
  Monitor,
  Package,
  Printer,
  Send,
  Settings,
  Shield,
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

export default function AbrechnungssoftwarePage() {
  const features = [
    {
      icon: FileText,
      title: "Rechnungsfahrten",
      description:
        "Alle Leistungen für Ihre Kunden, Patienten bzw. deren Krankenkassen. Tarife, Strecken und Berechnungsarten individuell definierbar.",
    },
    {
      icon: Calendar,
      title: "Dauer- und wiederkehrende Fahrten",
      description:
        "Mit minimalem Aufwand bearbeiten und abrechnen. Praktische Kalenderfunktion für z.B. Dialysefahrten.",
    },
    {
      icon: Lock,
      title: "Datenträgeraustausch",
      description:
        "Verschlüsselte Übermittlung nach §302 SGB an die Abrechnungsstellen der Kassen.",
    },
    {
      icon: Settings,
      title: "Flexible Abrechnung",
      description:
        "Abrechnungsmethode pro Kostenträger einstellbar. Private Kostenträger per Standard-Rechnung.",
    },
  ];

  const requirements = [
    {
      icon: Laptop,
      text: "Rechner/Laptop/Notebook mit Windows 10 und guter Internetverbindung",
    },
    {
      icon: Printer,
      text: "Drucker (für Rechnungen, Listen etc.)",
    },
    {
      icon: Cloud,
      text: "Daten werden in einem Rechenzentrum innerhalb Deutschlands gehostet - datenschutzkonform",
    },
  ];

  const pricingDetails = [
    "Erster Arbeitsplatz: € 63,- zzgl. MwSt. pro Monat",
    "Jeder weitere Arbeitsplatz: € 15,- zzgl. MwSt. pro Monat",
    "Einrichtung: einmalig € 150,- plus € 30,- pro zusätzlichem Arbeitsplatz",
    "Individuelle Formulare (z.B. mit Firmenlogo): € 60,- pro Formular",
    "DTA-Zertifikat: ca. € 60,- (extern, Erneuerung alle 3 Jahre)",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-linear-to-br from-primary/5 via-background to-primary/10 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 text-primary">
                <Monitor className="size-6" />
                <span className="font-medium text-sm uppercase tracking-wider">
                  Software
                </span>
              </div>
              <h1 className="font-bold text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
                Abrechnungssoftware für{" "}
                <span className="text-primary">Krankenfahrten</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Taxiware ist eine ausgereifte Software, die gemeinsam mit
                Unternehmen aus der Branche entwickelt wurde.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/kontakt">
                  <Button size="lg" className="gap-2">
                    <Send className="size-4" />
                    Anfrage senden
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
              <Card className="relative border-primary/20 bg-primary/5">
                <CardContent className="py-8">
                  <div className="mb-6 flex items-center justify-center">
                    <div className="flex size-20 items-center justify-center rounded-full bg-primary/10">
                      <Package className="size-10 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2 text-center">
                    <p className="font-bold text-3xl text-primary">Taxiware</p>
                    <p className="text-muted-foreground">
                      Funktionalität und Ergonomie
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What is Taxiware Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 font-bold text-2xl md:text-3xl">
                Was ist Taxiware?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Taxiware ist eine ausgereifte Software, die gemeinsam mit
                  Unternehmen aus der Branche entwickelt wurde.
                </p>
                <p>
                  Taxiware ermöglicht die Abrechnung von Krankenfahrten per
                  Datenträgeraustausch (und auch papiergebunden).
                </p>
                <p className="font-medium text-foreground">
                  Funktionalität und Ergonomie zeichnen Taxiware besonders aus.
                </p>
                <p>
                  Taxiware ist für Krankenfahrdienste und für Einzel- und
                  Mehrwagenunternehmer die Krankenfahrten durchführen,
                  gleichermaßen geeignet.
                </p>
                <p>
                  Durch einen modularen Aufbau ist Taxiware individuell für jede
                  Unternehmensgröße einsetzbar.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <Card>
                <CardContent className="flex items-center gap-4 py-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Zap className="size-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Datenträgeraustausch</p>
                    <p className="text-muted-foreground text-sm">
                      Elektronische Abrechnung nach §302 SGB
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4 py-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <FileText className="size-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Papiergebundene Abrechnung</p>
                    <p className="text-muted-foreground text-sm">
                      Auch klassische Rechnungen möglich
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4 py-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Settings className="size-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Modularer Aufbau</p>
                    <p className="text-muted-foreground text-sm">
                      Individuell für jede Unternehmensgröße
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="border-y bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-2xl md:text-3xl">
              Voraussetzungen
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Sie benötigen folgende Mindestausstattung:
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {requirements.map((req) => (
              <Card key={req.text}>
                <CardHeader className="text-center">
                  <req.icon className="mx-auto mb-2 size-10 text-primary" />
                  <CardDescription className="text-sm">
                    {req.text}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-2xl rounded-lg border bg-background p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Shield className="size-5 text-primary" />
              <p className="text-sm">
                Die Daten werden durch einen Cloudanbieter in einem
                Rechenzentrum innerhalb Deutschlands gehostet. So werden die
                Daten Ihrer Kunden datenschutzkonform verarbeitet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Headphones className="mx-auto mb-4 size-12 text-primary" />
            <h2 className="mb-6 font-bold text-2xl md:text-3xl">Service</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Das Thema Service ist für uns ganz wichtig! Sie erreichen uns
                telefonisch zu Bürozeiten, wenn Sie Fragen zum Programm haben.
              </p>
              <p>
                Sollte es Ihnen einmal "zu technisch" werden, können wir Ihnen
                durch{" "}
                <span className="font-medium text-foreground">
                  Fernwartung mit TeamViewer
                </span>{" "}
                helfen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-y bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-2xl md:text-3xl">
              Was kann Taxiware?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <feature.icon className="mb-2 size-8 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="size-5 text-primary" />
                  Weitere Funktionen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3 sm:grid-cols-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm">
                      Individuell gestaltete Rechnungsformate
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm">
                      Listenformate nach Ihren Vorstellungen
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm">
                      Direkte Übergabe an Finanzbuchhaltung
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm">
                      Zuordnung der Annahmestellen nach IK
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm">
                      Verschlüsselung nach ITSG-Vorgaben
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm">
                      Regelmäßige Updates inklusive
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <Euro className="mx-auto mb-4 size-12 text-primary" />
            <h2 className="mb-4 font-bold text-2xl md:text-3xl">
              Günstiger Mietpreis für unbegrenztes Abrechnungs-Volumen
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Erhältlich über einen Nutzungs- und Wartungsvertrag
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Card className="overflow-hidden">
              <CardHeader className="bg-primary text-center text-primary-foreground">
                <CardTitle className="text-3xl">€ 63,-</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  zzgl. MwSt. pro Monat / erster Arbeitsplatz
                </CardDescription>
              </CardHeader>
              <CardContent className="py-6">
                <ul className="space-y-3">
                  {pricingDetails.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 size-5 shrink-0 text-primary" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-lg border bg-muted/50 p-4">
                  <p className="text-muted-foreground text-sm">
                    Die Software kann nur während der Vertragslaufzeit genutzt
                    werden. Regelmäßige Neuerungen erhalten Sie durch unseren
                    Update-Service.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 font-bold text-2xl md:text-3xl">
            Haben Sie noch Fragen zum Produkt?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/80">
            Oder individuelle Problemstellungen? Zögern Sie nicht, schicken Sie
            uns eine unverbindliche Anfrage.
          </p>
          <Link href="/kontakt">
            <Button
              variant="secondary"
              size="lg"
              className="gap-2 bg-background text-foreground hover:bg-background/90"
            >
              <Send className="size-4" />
              Anfrage senden
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
