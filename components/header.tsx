"use client";

import { Menu, Send, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

const links = [
	{ label: "Startseite", to: "/" },
	{ label: "Leistungen", to: "/leistungen" },
	{ label: "Abrechnung", to: "/abrechnung" },
	{ label: "Vorfinanzierung", to: "/vorfinanzierung" },
	{ label: "Kontakt", to: "/kontakt" },
] as const;

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
			<div className="container mx-auto flex items-center justify-between px-4 py-3">
				{/* Logo */}
				<Link
					className="transition-opacity hover:opacity-80 active:scale-95"
					href="/"
				>
					<Image
						alt="PTAS Logo"
						height={64}
						loading="eager"
						src={"/icon.svg"}
						unoptimized
						width={128}
					/>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden items-center gap-1 md:flex lg:gap-2">
					{links.map(({ to, label }) => (
						<Link
							className="rounded-full px-3 py-1.5 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary active:scale-95"
							href={to}
							key={to}
						>
							{label}
						</Link>
					))}
				</nav>

				{/* Desktop Actions */}
				<div className="hidden items-center gap-2 md:flex">
					<Link className="hidden lg:flex" href="/kontakt">
						<Button
							className="w-full gap-2 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md sm:w-auto"
							size="lg"
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
						aria-label="Toggle menu"
						onClick={() => setIsOpen(!isOpen)}
						size="icon"
						variant="ghost"
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
								className="group rounded-lg px-4 py-2 font-medium text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
								href={to}
								key={to}
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
