"use client";

import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export type TestimonialItem = {
	name: string;
	role: string;
	avatar: string;
	company: string;
	content: string;
};

const testimonials: TestimonialItem[] = [
	{
		name: "Clarence Rogers",
		role: "CEO & Co Founder",
		company: "Easy Taxi",
		avatar: "https://randomuser.me/api/portraits/men/3.jpg",
		content:
			"Ich nutze PTAS nun schon seit einem Jahr und es hat die Verwaltung meiner Finanzen so viel einfacher und schneller gemacht.",
	},
	{
		name: "Garrett Lewis",
		role: "Product manager",
		company: "Taxi 24",
		avatar: "https://randomuser.me/api/portraits/men/27.jpg",
		content:
			"Mit PTAS kann ich meine Abrechnungen ganz einfach im Blick behalten und in Echtzeit sehen, wie sie sich entwickeln.",
	},
	{
		name: "Steven Schmidt",
		role: "Lead Designer",
		company: "Cabify",
		avatar: "https://randomuser.me/api/portraits/lego/0.jpg",
		content:
			"Die UI ist wunderschön gestaltet und lässt sich unglaublich einfach anpassen. Das hat unseren Abrechnungs-Workflow grundlegend verändert.",
	},
	{
		name: "Lydia Griffith",
		role: "Frontend Developer",
		company: "Bolt",
		avatar: "https://randomuser.me/api/portraits/women/69.jpg",
		content:
			"PTAS hat uns unzählige Stunden Abrechnungszeit eingespart. Die Webseite ist umfassend und gut dokumentiert.",
	},
] as const;

export default function Testimonial() {
	return (
		<section className="py-8 sm:py-16 lg:py-24">
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
				className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-11 px-4 sm:px-6 md:grid-cols-2 lg:px-8"
			>
				<h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">
					Mehr als 100 Unternehmen nutzen PTAS für ihre Abrechnung.
				</h2>
				<div className="relative px-8 sm:px-12">
					<CarouselPrevious
						variant="default"
						className="absolute top-1/2 -left-4 z-10 size-9 -translate-y-1/2 disabled:bg-primary/10 disabled:text-primary disabled:opacity-100"
					/>

					<CarouselContent className="sm:-ml-6">
						{testimonials.map((testimonial) => (
							<CarouselItem key={testimonial.company} className="sm:pl-6">
								<div className="flex flex-col gap-10">
									<div className="space-y-2">
										<p className="h-14 text-8xl">&ldquo;</p>
										<p className="font-medium text-muted-foreground text-xl sm:text-2xl lg:text-3xl">
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
											<h4 className="font-medium text-lg">
												{testimonial.name}
											</h4>
											<p className="text-muted-foreground">
												{testimonial.role} bei {testimonial.company}
											</p>
										</div>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>

					<CarouselNext
						variant="default"
						className="absolute top-1/2 -right-4 z-10 size-9 -translate-y-1/2 disabled:bg-primary/10 disabled:text-primary disabled:opacity-100"
					/>
				</div>
			</Carousel>
		</section>
	);
}
