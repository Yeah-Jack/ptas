"use client";

import { Send } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CTAProps {
	heading?: string;
	description?: string;
	buttonText?: string;
}

export default function CTA({
	heading = "Überschrift",
	description = "Beschreibung",
	buttonText = "CTA",
}: CTAProps) {
	return (
		<section className="border-t bg-primary py-16 text-primary-foreground md:py-24">
			<div className="container mx-auto max-w-4xl px-4 text-center">
				<h2 className="mb-4 font-bold text-2xl md:text-3xl">{heading}</h2>
				<p className="mb-8 text-lg text-primary-foreground/80">{description}</p>
				<Link href="/kontakt">
					<Button
						variant="secondary"
						size="lg"
						className="gap-2 bg-background text-foreground hover:bg-background/90"
					>
						<Send className="size-4" />
						{buttonText}
					</Button>
				</Link>
			</div>
		</section>
	);
}
