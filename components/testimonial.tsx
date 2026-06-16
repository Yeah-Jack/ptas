"use client";

import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";

export type TestimonialItem = {
	name: string;
	avatar: string;
	company: string;
	content: string;
};

const testimonials: TestimonialItem[] = [
	{
		name: "Kerstin Barsch",
		company: "Taxi & Mietwagengenossenschaft Magdeburg",
		avatar: "",
		content:
			"Wir möchten die hervorragende Zusammenarbeit mit der Firma PTAS ausdrücklich empfehlen. Durch ihre Zuverlässigkeit, ihre Innovationskraft und ihr professionelles Vorgehen im Personentransport-Abrechnungsservice haben sie unsere Abrechnungen maßgeblich vorangebracht. Wir sind überzeugt, dass die Firma PTAS auch in der Zukunft ein wertvoller Partner für jedes Unternehmen sein wird. Wir als Taxigenossenschaft fühlen uns auf ganzer Linie in unseren Belangen bestens unterstützt!",
	},
	{
		name: "",
		company: "Taxi Landskron",
		avatar: "",
		content:
			"Ich mache schon seit einiger Zeit meine Krankentransport Abrechnungen mit der Fa. Daniel Software GmbH und muss sagen, dass ich von dieser Dienstleistung mehr wie begeistert bin.\n Ein Top Team, alle super nett und zuverlässig, dazu auch natürlich mega professionell.\n\n Transportscheine werden sorgfältig, ordentlich und zu meiner vollsten Zufriedenheit bearbeitet.\n Besser kann's nicht einmal Chuck Norris.\n Liebe Grüße gehen raus an Herrn Daniel und Herrn Bartels.",
	},
	{
		name: "Rayan A.",
		company: "",
		avatar: "",
		content:
			"Ich arbeite seit über einem Jahr mit der Daniel Software GmbH zusammen und bin absolut begeistert. Es gab nie ein Problem; das Team ist stets freundlich und hilfsbereit. Die Kommunikation läuft reibungslos, und ich fühle mich immer gut betreut. Alles in allem kann ich diese Firma uneingeschränkt weiterempfehlen!.",
	},
	{
		name: "Ina M.",
		company: "",
		avatar: "",
		content:
			"Wir sind jetzt seit fast einem 3/4 Jahr dabei und ich kann nur sagen, dass ich sehr froh bin bei Daniel Software gelandet zu sein.\n Die Mitarbeiter haben immer ein offenes Ohr und kümmern sich sofort um meine Anliegen. Daumen hoch.",
	},
	{
		name: "Annette B.",
		company: "Bergischer Fahrten Service",
		avatar: "",
		content:
			"Seit dem ersten Kontakt vor 5 Monaten und der darauf folgenden Zusammenarbeit, wissen wir die Zusammenarbeit sehr zu schätzen. Schnelligkeit, Erreichbarkeit und Freundlichkeit sind die herausstechenden Punkte im Kontext mit der Dienstleistung. Gerne weiter so.",
	},
	{
		name: "Ali M.",
		company: "Taxi & Mietwagen Güvercin",
		avatar: "",
		content:
			"Ein super organisiertes Team! Wir arbeiten jetzt seit ein paar Monaten mit der Abrechnungsfirma zusammen und hatten bisher echt keine Probleme!!",
	},
	{
		name: "Martin M.",
		company: "",
		avatar: "",
		content:
			"Ich rechne seit ca 2 Jahren über Daniel Software ab. Bisher wurde alles schnell und korrekt abgerechnet. Toll!",
	},
	{
		name: "Foued B.",
		company: "",
		avatar: "",
		content:
			"Ich bin sehr zufrieden mit dem Abrechnungsservice. Wenige Kürzungen und immer jemand den man erreicht.",
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
					delay: 5000,
				}),
			]}
		>
			<div className="relative px-8 sm:px-12">
				<CarouselContent className="sm:-ml-6">
					{testimonials.map((testimonial) => (
						<CarouselItem key={testimonial.content} className="sm:pl-6">
							<div className="flex flex-col gap-10">
								<div className="space-y-2">
									<p className="h-14 text-8xl">&ldquo;</p>
									<p className="whitespace-pre-line font-medium text-muted-foreground text-xl sm:text-2xl">
										{testimonial.content}
									</p>
								</div>
								<div className="flex items-center gap-2">
									<Avatar className="size-12 rounded-full">
										<AvatarImage
											src={testimonial.avatar}
											alt={testimonial.name}
										/>
										<AvatarFallback className="rounded-full text-sm">
											{testimonial.name
												.split(" ", 2)
												.map((n) => n[0])
												.join("")}
										</AvatarFallback>
									</Avatar>
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
					variant="default"
					className="-left-4 z-10 size-9 -translate-y-1/2 disabled:bg-primary/10 disabled:text-primary disabled:opacity-100"
				/>
				<CarouselNext
					variant="default"
					className="-right-4 z-10 size-9 -translate-y-1/2 disabled:bg-primary/10 disabled:text-primary disabled:opacity-100"
				/>
			</div>
		</Carousel>
	);
}
