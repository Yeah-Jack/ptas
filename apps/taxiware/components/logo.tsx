import { cn } from "@repo/ui/lib/utils";

const palettes = {
	color: { check: "stroke-white", rect: "fill-cobalt", text: "text-ink" },
	white: { check: "stroke-cobalt", rect: "fill-white", text: "text-white" },
} as const;

/**
 * Brand mark (taxi sign with check) plus the "TaxiWare" wordmark.
 * The size comes from `--logo-size`, e.g. `className="[--logo-size:2rem]"`.
 */
export function Logo({
	className,
	variant = "color",
	wordmark = true,
}: {
	className?: string;
	variant?: keyof typeof palettes;
	wordmark?: boolean;
}) {
	const palette = palettes[variant];

	return (
		<span
			className={cn(
				"inline-flex items-center gap-[calc(var(--logo-size)*0.25)] leading-none [--logo-size:2.5rem]",
				className,
			)}
		>
			<svg
				aria-hidden="true"
				className="size-(--logo-size) shrink-0"
				viewBox="0 0 48 48"
			>
				<rect
					className={palette.rect}
					height="28"
					rx="8"
					width="42"
					x="3"
					y="11"
				/>
				<path
					className="fill-taxi"
					d="M15 11 V8 a4 4 0 0 1 4-4 h10 a4 4 0 0 1 4 4 V11 z"
				/>
				<path
					className={palette.check}
					d="M15 25.5l6 6 12-12"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="4"
				/>
			</svg>
			{wordmark ? (
				<span
					className={cn(
						"whitespace-nowrap text-[length:calc(var(--logo-size)*0.62)] tracking-[-0.02em]",
						palette.text,
					)}
				>
					<span className="font-bold">Taxi</span>
					<span className="font-medium">Ware</span>
				</span>
			) : null}
		</span>
	);
}
