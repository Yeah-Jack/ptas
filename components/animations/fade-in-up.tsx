"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface FadeInUpProps {
	children: ReactNode;
	className?: string;
	delay?: number;
	viewport?: boolean;
}

export function FadeInUp({
	children,
	delay = 0,
	className,
	viewport = true,
}: FadeInUpProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={viewport ? { opacity: 1, y: 0 } : undefined}
			animate={!viewport ? { opacity: 1, y: 0 } : undefined}
			viewport={viewport ? { once: true, margin: "-100px" } : undefined}
			transition={{
				duration: 0.5,
				delay,
				ease: [0.21, 0.47, 0.32, 0.98],
			}}
			className={cn(className)}
		>
			{children}
		</motion.div>
	);
}
