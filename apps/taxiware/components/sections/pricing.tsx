import { cn } from "@repo/ui/lib/utils";
import Link from "next/link";
import { BrandButton } from "@/components/brand-button";
import { SectionTitle } from "@/components/section-heading";
import { Sign } from "@/components/sign";
import { ctaHref } from "@/lib/links";

// Package names and prices are still open in the design
const packages = [
	{ name: "Paket 1", recommended: false },
	{ name: "Paket 2", recommended: true },
	{ name: "Paket 3", recommended: false },
] as const;

export default function Pricing() {
	return (
		<section
			className="mx-auto grid max-w-300 gap-6 px-4 pt-14 sm:px-6 lg:pt-24"
			id="preise"
		>
			<div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
				<SectionTitle>Preise</SectionTitle>
				<p className="text-muted-foreground">
					Alle Preise zzgl. MwSt. · Monatlich kündbar
				</p>
			</div>

			<ul className="grid rounded-xl border bg-card lg:grid-cols-3">
				{packages.map(({ name, recommended }) => (
					<li
						className={cn(
							"grid content-start gap-3.5 p-6 sm:p-7",
							recommended && "border-y bg-cobalt-50 lg:border-x lg:border-y-0",
						)}
						key={name}
					>
						<div className="flex items-center gap-2.5">
							<h3 className="font-semibold text-[1.375rem]">{name}</h3>
							{recommended ? <Sign>Empfohlen</Sign> : null}
						</div>
						<p className="font-bold text-[2.25rem] tracking-[-0.02em]">
							– €
							<span className="font-normal text-muted-foreground">
								{" "}
								/ Monat
							</span>
						</p>
						<BrandButton asChild variant={recommended ? "primary" : "tertiary"}>
							<Link href={ctaHref}>
								{recommended ? "Jetzt ausprobieren" : "Mehr erfahren"}
							</Link>
						</BrandButton>
					</li>
				))}
			</ul>
		</section>
	);
}
