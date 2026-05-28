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
	// {
	// 	name: "Garrett Lewis",
	// 	company: "Taxi 24",
	// 	avatar: "https://randomuser.me/api/portraits/men/27.jpg",
	// 	content:
	// 		"Mit PTAS kann ich meine Abrechnungen ganz einfach im Blick behalten und in Echtzeit sehen, wie sie sich entwickeln.",
	// },
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
						<CarouselItem key={testimonial.company} className="sm:pl-6">
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
