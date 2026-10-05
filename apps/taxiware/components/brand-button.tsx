import { Button } from "@repo/ui/components/button";
import { cn } from "@repo/ui/lib/utils";
import type * as React from "react";

const variants = {
	// Ghost button on cobalt or graphite surfaces
	onBlue:
		"border-on-cobalt-border bg-transparent text-white hover:bg-white/8 focus-visible:border-on-cobalt-border",
	// Taxi yellow is the action color: one primary button per section
	primary:
		"border-transparent bg-taxi text-ink hover:bg-taxi-600 focus-visible:border-transparent",
	secondary:
		"border-transparent bg-cobalt text-white hover:bg-cobalt-700 focus-visible:border-transparent",
	tertiary:
		"border-cobalt bg-transparent text-cobalt hover:bg-cobalt-50 focus-visible:border-cobalt",
} as const;

export function BrandButton({
	block = false,
	className,
	variant = "primary",
	...props
}: Omit<React.ComponentProps<typeof Button>, "size" | "variant"> & {
	block?: boolean;
	variant?: keyof typeof variants;
}) {
	return (
		<Button
			className={cn(
				"h-auto min-h-12 gap-2 rounded-lg border-2 px-5.5 py-3.5 font-semibold text-base leading-none transition-colors duration-150 focus-visible:outline-3 focus-visible:outline-ring focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:ring-0",
				variants[variant],
				block && "w-full",
				className,
			)}
			{...props}
		/>
	);
}
