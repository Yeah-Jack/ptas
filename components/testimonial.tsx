"use client";

import Autoplay from "embla-carousel-autoplay";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";

export interface TestimonialItem {
	company: string;
	content: string;
	name: string;
}

const testimonials: TestimonialItem[] = [
	{
		company: "Taxi & Mietwagengenossenschaft Magdeburg",
		content:
			"Wir möchten die hervorragende Zusammenarbeit mit der Firma PTAS ausdrücklich empfehlen. Durch ihre Zuverlässigkeit, ihre Innovationskraft und ihr professionelles Vorgehen im Personentransport-Abrechnungsservice haben sie unsere Abrechnungen maßgeblich vorangebracht. Wir sind überzeugt, dass die Firma PTAS auch in der Zukunft ein wertvoller Partner für jedes Unternehmen sein wird. Wir als Taxigenossenschaft fühlen uns auf ganzer Linie in unseren Belangen bestens unterstützt!",
		name: "Kerstin B.",
	},
	{
		company: "Taxi Landskron",
		content:
			"Ich mache schon seit einiger Zeit meine Krankentransport Abrechnungen mit der Fa. Daniel Software GmbH und muss sagen, dass ich von dieser Dienstleistung mehr wie begeistert bin.\n Ein Top Team, alle super nett und zuverlässig, dazu auch natürlich mega professionell.\n\n Transportscheine werden sorgfältig, ordentlich und zu meiner vollsten Zufriedenheit bearbeitet.\n Besser kann's nicht einmal Chuck Norris.\n Liebe Grüße gehen raus an Herrn Daniel und Herrn Bartels.",
		name: "",
	},
	{
		company: "",
		content:
			"Ich arbeite seit über einem Jahr mit der Daniel Software GmbH zusammen und bin absolut begeistert. Es gab nie ein Problem; das Team ist stets freundlich und hilfsbereit. Die Kommunikation läuft reibungslos, und ich fühle mich immer gut betreut. Alles in allem kann ich diese Firma uneingeschränkt weiterempfehlen!",
		name: "Rayan A.",
	},
	{
		company: "",
		content:
			"Wir sind jetzt seit fast einem ¾ Jahr dabei und ich kann nur sagen, dass ich sehr froh bin bei Daniel Software gelandet zu sein.\n Die Mitarbeiter haben immer ein offenes Ohr und kümmern sich sofort um meine Anliegen. Daumen hoch.",
		name: "Ina M.",
	},
	{
		company: "Bergischer Fahrten Service",
		content:
			"Seit dem ersten Kontakt vor 5 Monaten und der darauf folgenden Zusammenarbeit, wissen wir die Zusammenarbeit sehr zu schätzen. Schnelligkeit, Erreichbarkeit und Freundlichkeit sind die herausstechenden Punkte im Kontext mit der Dienstleistung. Gerne weiter so.",
		name: "Annette B.",
	},
	{
		company: "Taxi & Mietwagen Güvercin",
		content:
			"Ein super organisiertes Team! Wir arbeiten jetzt seit ein paar Monaten mit der Abrechnungsfirma zusammen und hatten bisher echt keine Probleme!",
		name: "Ali M.",
	},
	{
		company: "",
		content:
			"Ich rechne seit ca. 2 Jahren über Daniel Software ab. Bisher wurde alles schnell und korrekt abgerechnet. Toll!",
		name: "Martin M.",
	},
	{
		company: "",
		content:
			"Ich bin sehr zufrieden mit dem Abrechnungsservice. Wenige Kürzungen und immer jemand den man erreicht.",
		name: "Foued B.",
	},
] as const;

export default function Testimonial() {
	return (
		<Carousel
			opts={{
				align: "start",
				loop: true,
			}}
			plugins={[
				Autoplay({
					delay: 12000, // 12 seconds
				}),
			]}
		>
			<div className="relative px-8 sm:px-12">
				<CarouselContent className="sm:-ml-6">
					{testimonials.map((testimonial) => (
						<CarouselItem className="sm:pl-6" key={testimonial.content}>
							<div className="flex flex-col gap-10">
								<div className="space-y-2">
									<p className="h-14 text-8xl">&ldquo;</p>
									<p className="whitespace-pre-line font-medium text-muted-foreground text-xl sm:text-2xl">
										{testimonial.content}
									</p>
								</div>
								<div className="flex items-center gap-2">
									<div className="flex-1">
										<h4 className="font-medium text-lg">{testimonial.name}</h4>
										<p className="text-muted-foreground">
											{testimonial.company}
										</p>
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious
					className="-left-4 z-10 size-9 -translate-y-1/2 disabled:bg-primary/10 disabled:text-primary disabled:opacity-100"
					variant="default"
				/>
				<CarouselNext
					className="-right-4 z-10 size-9 -translate-y-1/2 disabled:bg-primary/10 disabled:text-primary disabled:opacity-100"
					variant="default"
				/>
			</div>
		</Carousel>
	);
}
