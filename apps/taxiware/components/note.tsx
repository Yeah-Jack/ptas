import { cn } from "@repo/ui/lib/utils";
import type * as React from "react";

const tones = {
	err: "bg-err-50 text-err",
	info: "bg-cobalt-50",
	ok: "bg-ok-50",
} as const;

export function Note({
	className,
	tone = "info",
	...props
}: React.ComponentProps<"div"> & { tone?: keyof typeof tones }) {
	return (
		<div
			className={cn(
				"rounded-[10px] px-4 py-3.5 leading-[1.55]",
				tones[tone],
				className,
			)}
			{...props}
		/>
	);
}
