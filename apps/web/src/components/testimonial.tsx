"use client";

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
		name: "Kathryn Mullins",
		role: "CEO & Co Founder",
		company: "Zendesk",
		avatar:
			"https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png?width=40&height=40&format=auto",
		content:
			"I've been using PTAS for a year now and it's made managing my finances so much easier and quick.",
	},
	{
		name: "Garrett Lewis",
		role: "Product manager",
		company: "Orbit",
		avatar:
			"https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png?width=40&height=40&format=auto",
		content:
			"With PTAS, I can easily track my investments and see how they're performing in real-time.",
	},
	{
		name: "Steven Schmidt",
		role: "Lead Designer",
		company: "Figma",
		avatar:
			"https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png?width=40&height=40&format=auto",
		content:
			"The UI components are beautifully designed and incredibly easy to customize. It's transformed our design workflow.",
	},
	{
		name: "Lydia Griffith",
		role: "Frontend Developer",
		company: "Vercel",
		avatar:
			"https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png?width=40&height=40&format=auto",
		content:
			"PTAS has saved us countless hours in development. The component library is comprehensive and well-documented.",
	},
];

const Testimonial = () => {
	return (
		<section className="py-8 sm:py-16 lg:py-24">
			<Carousel
				className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-11 px-4 sm:px-6 md:grid-cols-2 lg:px-8"
				opts={{
					align: "start",
					slidesToScroll: 1,
				}}
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
												{testimonial.role} at {testimonial.company}
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
};

export default Testimonial;
