"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
			animate={!viewport ? { opacity: 1, y: 0 } : undefined}
			className={cn(className)}
			initial={{ opacity: 0, y: 20 }}
			transition={{
				delay,
				duration: 0.5,
				ease: [0.21, 0.47, 0.32, 0.98],
			}}
			viewport={viewport ? { margin: "-100px", once: true } : undefined}
			whileInView={viewport ? { opacity: 1, y: 0 } : undefined}
		>
			{children}
		</motion.div>
	);
}
