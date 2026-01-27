"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import { ModeToggle } from "./mode-toggle";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const links = [
		{ to: "/", label: "Home" },
		{ to: "/leistungen", label: "Leistungen" },
		{ to: "/abrechnung", label: "Abrechnung" },
		{ to: "/vorfinanzierung", label: "Vorfinanzierung" },
		{ to: "/abrechnungssoftware", label: "Software" },
		{ to: "/kontakt", label: "Kontakt" },
	] as const;

	return (
		<header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
			<div className="container mx-auto flex items-center justify-between px-4 py-3">
				{/* Logo */}
				<Link href="/" className="font-bold text-lg text-primary">
					PTAS
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden items-center gap-6 md:flex">
					{links.map(({ to, label }) => (
						<Link
							key={to}
							href={to}
							className="text-muted-foreground text-sm transition-colors hover:text-foreground"
						>
							{label}
						</Link>
					))}
				</nav>

				{/* Desktop Actions */}
				<div className="hidden items-center gap-2 md:flex">
					<ModeToggle />
				</div>

				{/* Mobile Menu Button */}
				<div className="flex items-center gap-2 md:hidden">
					<ModeToggle />
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setIsOpen(!isOpen)}
						aria-label="Toggle menu"
					>
						{isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
					</Button>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isOpen && (
				<nav className="border-t bg-background px-4 py-4 md:hidden">
					<div className="flex flex-col gap-3">
						{links.map(({ to, label }) => (
							<Link
								key={to}
								href={to}
								className="rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
								onClick={() => setIsOpen(false)}
							>
								{label}
							</Link>
						))}
					</div>
				</nav>
			)}
		</header>
	);
}
