import { cn } from "@repo/ui/lib/utils";

/** The dashed yellow route, the brand's decorative motif (hero and steps only) */
export function RouteLine({ className }: { className?: string }) {
	return (
		<svg
			aria-hidden="true"
			className={cn("pointer-events-none absolute", className)}
			fill="none"
			viewBox="0 0 300 200"
		>
			<path
				className="stroke-taxi"
				d="M10 195 C 90 150, 140 190, 200 110 S 280 40, 295 10"
				opacity="0.9"
				strokeDasharray="16 12"
				strokeLinecap="round"
				strokeWidth="7"
			/>
		</svg>
	);
}
