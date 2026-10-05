import { Badge } from "@repo/ui/components/badge";
import { cn } from "@repo/ui/lib/utils";
import type * as React from "react";

const tones = {
	error: "bg-err-50 text-err",
	info: "bg-cobalt-50 text-cobalt-700",
	success: "bg-ok-50 text-ok",
} as const;

export function StatusBadge({
	className,
	tone = "info",
	...props
}: Omit<React.ComponentProps<typeof Badge>, "variant"> & {
	tone?: keyof typeof tones;
}) {
	return (
		<Badge
			className={cn(
				"h-auto gap-1.5 border-0 px-2.5 py-1 font-semibold text-[0.8rem] leading-[1.4]",
				tones[tone],
				className,
			)}
			{...props}
		/>
	);
}
