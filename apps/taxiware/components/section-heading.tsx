import { cn } from "@repo/ui/lib/utils";
import type * as React from "react";

export function Eyebrow({ className, ...props }: React.ComponentProps<"p">) {
	return (
		<p
			className={cn(
				"font-semibold text-cobalt text-xs uppercase leading-[1.4] tracking-[0.09em] sm:text-[0.8125rem]",
				className,
			)}
			{...props}
		/>
	);
}

export function SectionTitle({
	className,
	...props
}: React.ComponentProps<"h2">) {
	return (
		<h2
			className={cn(
				"text-balance font-bold text-[1.75rem] leading-[1.15] tracking-[-0.02em] sm:text-[2.25rem]",
				className,
			)}
			{...props}
		/>
	);
}
