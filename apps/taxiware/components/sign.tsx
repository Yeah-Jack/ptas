import { Badge } from "@repo/ui/components/badge";
import { cn } from "@repo/ui/lib/utils";
import type * as React from "react";

/** Yellow label shaped like a taxi roof sign ("Empfohlen", "Aus der Praxis") */
export function Sign({
	className,
	...props
}: Omit<React.ComponentProps<typeof Badge>, "variant">) {
	return (
		<Badge
			className={cn(
				"h-auto gap-1.5 rounded-[8px_8px_3px_3px] border-0 bg-taxi px-3 py-1 font-bold text-[0.78rem] text-ink uppercase leading-[1.4] tracking-[0.06em]",
				className,
			)}
			{...props}
		/>
	);
}
