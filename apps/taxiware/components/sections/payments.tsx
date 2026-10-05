import { cn } from "@repo/ui/lib/utils";
import { Eyebrow, SectionTitle } from "@/components/section-heading";
import { formatEuro } from "@/lib/format";

// Sample data for the payment overview
const payments: {
	amount: number;
	bar: string;
	label: string;
	text?: string;
}[] = [
	{ amount: 4812.4, bar: "bg-ok", label: "Bezahlt", text: "text-ok" },
	{ amount: 1106.2, bar: "bg-cobalt", label: "Offen" },
	{ amount: 246.8, bar: "bg-err", label: "Abgesetzt", text: "text-err" },
];

export default function Payments() {
	return (
		<section className="mx-auto grid max-w-300 items-center gap-10 px-4 pt-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:pt-24">
			<div className="grid gap-4 lg:order-last">
				<Eyebrow>Zahlungseingang im Blick</Eyebrow>
				<SectionTitle>Sie wissen, wo Ihr Geld steht</SectionTitle>
				<p className="max-w-[52ch] text-muted-foreground">
					Sie sehen jederzeit, welche Fahrten bezahlt, offen oder abgesetzt
					sind.
				</p>
			</div>

			<div className="grid gap-4.5 rounded-xl border bg-card p-5 sm:p-6">
				<p className="font-bold text-base">Zahlungseingang · August 2026</p>
				<div
					aria-hidden="true"
					className="flex h-3.5 gap-0.75 overflow-hidden rounded-full"
				>
					{payments.map(({ amount, bar, label }) => (
						<div className={bar} key={label} style={{ flexGrow: amount }} />
					))}
				</div>
				<dl className="grid grid-cols-3 gap-3 tabular-nums">
					{payments.map(({ amount, label, text }) => (
						<div className="grid gap-0.5" key={label}>
							<dt className="text-muted-foreground">{label}</dt>
							<dd className={cn("font-bold text-lg sm:text-[1.375rem]", text)}>
								{formatEuro(amount)}
							</dd>
						</div>
					))}
				</dl>
			</div>
		</section>
	);
}
