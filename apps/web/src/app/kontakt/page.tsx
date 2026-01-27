"use client";

import { Clock, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function KontaktPage() {
	const [formData, setFormData] = useState({
		name: "",
		unternehmen: "",
		adresse: "",
		plz: "",
		ort: "",
		email: "",
		telefon: "",
		abrechnungInteresse: false,
		vorfinanzierungInteresse: false,
		nachricht: "",
	});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleCheckboxChange = (name: string, checked: boolean) => {
		setFormData((prev) => ({ ...prev, [name]: checked }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		console.log("Form submitted:", formData);
	};

	return (
		<div className="flex flex-col">
			{/* Hero Section */}
			<section className="border-b bg-linear-to-br from-primary/5 via-background to-primary/10 py-16 md:py-24">
				<div className="container mx-auto max-w-6xl px-4">
					<div className="mx-auto max-w-3xl text-center">
						<div className="mb-4 flex items-center justify-center gap-2 text-primary">
							<Mail className="size-6" />
							<span className="font-medium text-sm uppercase tracking-wider">
								Kontakt
							</span>
						</div>
						<h1 className="mb-6 font-bold text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
							Wir sind <span className="text-primary">erreichbar</span>
						</h1>
						<p className="text-lg text-muted-foreground">
							Bei Fragen zu unserem Produkt-Angebot wenden Sie sich gerne an
							uns. Über folgende Kanäle erreichen Sie uns:
						</p>
					</div>
				</div>
			</section>

			{/* Contact Info Section */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto max-w-6xl px-4">
					<div className="mb-12 grid gap-6 md:grid-cols-3">
						<Card>
							<CardHeader className="text-center">
								<Mail className="mx-auto mb-2 size-10 text-primary" />
								<CardTitle>E-Mail</CardTitle>
								<CardDescription>
									<a
										href="mailto:info@ptas.de"
										className="text-foreground hover:text-primary"
									>
										info@ptas.de
									</a>
								</CardDescription>
							</CardHeader>
						</Card>
						<Card>
							<CardHeader className="text-center">
								<Phone className="mx-auto mb-2 size-10 text-primary" />
								<CardTitle>Telefon</CardTitle>
								<CardDescription>
									<a
										href="tel:+4961929999002"
										className="text-foreground hover:text-primary"
									>
										(06192) 9999 002
									</a>
								</CardDescription>
							</CardHeader>
						</Card>
						<Card>
							<CardHeader className="text-center">
								<Clock className="mx-auto mb-2 size-10 text-primary" />
								<CardTitle>Bürozeiten</CardTitle>
								<CardDescription>Mo-Fr 09-18 Uhr</CardDescription>
							</CardHeader>
						</Card>
					</div>

					{/* Contact Form */}
					<Card className="mx-auto max-w-3xl">
						<CardHeader>
							<CardTitle className="text-xl">Kontaktformular</CardTitle>
							<CardDescription>
								Füllen Sie das Formular aus und wir melden uns bei Ihnen.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid gap-4 md:grid-cols-2">
									{/* Name */}
									<div className="space-y-2">
										<Label htmlFor="name">
											Name/Ansprechpartner{" "}
											<span className="text-destructive">*</span>
										</Label>
										<Input
											id="name"
											name="name"
											placeholder="Name oder Ansprechpartner..."
											value={formData.name}
											onChange={handleInputChange}
											required
										/>
									</div>

									{/* Unternehmen */}
									<div className="space-y-2">
										<Label htmlFor="unternehmen">Unternehmen</Label>
										<Input
											id="unternehmen"
											name="unternehmen"
											placeholder="Unternehmen..."
											value={formData.unternehmen}
											onChange={handleInputChange}
										/>
									</div>
								</div>

								{/* Adresse */}
								<div className="space-y-2">
									<Label htmlFor="adresse">Adresse</Label>
									<Input
										id="adresse"
										name="adresse"
										placeholder="Adresse..."
										value={formData.adresse}
										onChange={handleInputChange}
									/>
								</div>

								<div className="grid gap-4 md:grid-cols-2">
									{/* PLZ */}
									<div className="space-y-2">
										<Label htmlFor="plz">PLZ</Label>
										<Input
											id="plz"
											name="plz"
											placeholder="PLZ..."
											value={formData.plz}
											onChange={handleInputChange}
										/>
									</div>

									{/* Ort */}
									<div className="space-y-2">
										<Label htmlFor="ort">Ort</Label>
										<Input
											id="ort"
											name="ort"
											placeholder="Ort..."
											value={formData.ort}
											onChange={handleInputChange}
										/>
									</div>
								</div>

								<div className="grid gap-4 md:grid-cols-2">
									{/* E-Mail */}
									<div className="space-y-2">
										<Label htmlFor="email">
											E-Mail-Adresse <span className="text-destructive">*</span>
										</Label>
										<Input
											id="email"
											name="email"
											type="email"
											placeholder="E-Mail-Adresse..."
											value={formData.email}
											onChange={handleInputChange}
											required
										/>
									</div>

									{/* Telefon */}
									<div className="space-y-2">
										<Label htmlFor="telefon">Telefon</Label>
										<Input
											id="telefon"
											name="telefon"
											type="tel"
											placeholder="Telefon..."
											value={formData.telefon}
											onChange={handleInputChange}
										/>
									</div>
								</div>

								{/* Interesse */}
								<div className="space-y-3">
									<Label>Anfrage/Interesse für:</Label>
									<div className="flex flex-wrap gap-6">
										<div className="flex items-center gap-2">
											<Checkbox
												id="abrechnungInteresse"
												checked={formData.abrechnungInteresse}
												onCheckedChange={(checked) =>
													handleCheckboxChange(
														"abrechnungInteresse",
														checked === true,
													)
												}
											/>
											<Label
												htmlFor="abrechnungInteresse"
												className="cursor-pointer font-normal"
											>
												Abrechnung
											</Label>
										</div>
										<div className="flex items-center gap-2">
											<Checkbox
												id="vorfinanzierungInteresse"
												checked={formData.vorfinanzierungInteresse}
												onCheckedChange={(checked) =>
													handleCheckboxChange(
														"vorfinanzierungInteresse",
														checked === true,
													)
												}
											/>
											<Label
												htmlFor="vorfinanzierungInteresse"
												className="cursor-pointer font-normal"
											>
												Abrechnung mit Vorfinanzierung
											</Label>
										</div>
									</div>
								</div>

								{/* Nachricht */}
								<div className="space-y-2">
									<Label htmlFor="nachricht">Nachricht</Label>
									<textarea
										id="nachricht"
										name="nachricht"
										placeholder="Schreiben Sie uns eine Nachricht..."
										value={formData.nachricht}
										onChange={handleInputChange}
										rows={5}
										className="w-full min-w-0 rounded-none border border-input bg-transparent px-2.5 py-2 text-xs outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 dark:bg-input/30"
									/>
								</div>

								{/* Required Note */}
								<p className="text-muted-foreground text-xs">
									<span className="text-destructive">*</span> Erforderliche
									Angaben
								</p>

								{/* Submit Button */}
								<Button type="submit" size="lg" className="w-full gap-2">
									<Send className="size-4" />
									Nachricht senden
								</Button>
							</form>
						</CardContent>
					</Card>
				</div>
			</section>
		</div>
	);
}
