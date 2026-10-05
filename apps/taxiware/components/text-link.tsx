import { cn } from "@repo/ui/lib/utils";
import type { Route } from "next";
import Link from "next/link";

export function TextLink<T extends string>({
	children,
	className,
	href,
}: {
	children: React.ReactNode;
	className?: string;
	href: Route<T>;
}) {
	return (
		<Link
			className={cn(
				"inline-flex items-center gap-1.5 font-semibold text-cobalt underline underline-offset-3 transition-colors hover:text-cobalt-700",
				className,
			)}
			href={href}
		>
			{children}
		</Link>
	);
}
