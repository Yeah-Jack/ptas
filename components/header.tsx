"use client";

import { Menu, Send, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import icon from "@/app/icon.svg";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

const links = [
	{ to: "/", label: "Startseite" },
	{ to: "/leistungen", label: "Leistungen" },
	{ to: "/abrechnung", label: "Abrechnung" },
	{ to: "/vorfinanzierung", label: "Vorfinanzierung" },
	{ to: "/kontakt", label: "Kontakt" },
] as const;

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
			<div className="container mx-auto flex items-center justify-between px-4 py-3">
				{/* Logo */}
				<Link
					href="/"
					className="transition-opacity hover:opacity-80 active:scale-95"
				>
					<Image src={icon} width={128} alt="PTAS Logo" />
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden items-center gap-1 md:flex lg:gap-2">
					{links.map(({ to, label }) => (
						<Link
							key={to}
							href={to}
							className="rounded-full px-3 py-1.5 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary active:scale-95"
						>
							{label}
						</Link>
					))}
				</nav>

				{/* Desktop Actions */}
				<div className="hidden items-center gap-2 md:flex">
					<Link href="/kontakt" className="hidden lg:flex">
						<Button
							size="lg"
							className="w-full gap-2 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md sm:w-auto"
						>
							<Send className="size-4" />
							Unverbindliche Anfrage
						</Button>
					</Link>
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
			{isOpen ? (
				<nav className="border-t bg-background px-4 py-4 md:hidden">
					<div className="flex flex-col gap-2">
						{links.map(({ to, label }) => (
							<Link
								key={to}
								href={to}
								className="group rounded-lg px-4 py-2 font-medium text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
								onClick={() => setIsOpen(false)}
							>
								<span className="inline-block transition-transform group-hover:translate-x-1">
									{label}
								</span>
							</Link>
						))}
					</div>
				</nav>
			) : null}
		</header>
	);
}
