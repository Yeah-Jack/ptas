"use client";

import { useForm } from "@tanstack/react-form";
import { Clock, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";
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
import { Textarea } from "@/components/ui/textarea";

type FormData = {
	name: string;
	unternehmen: string;
	adresse: string;
	plz: string;
	ort: string;
	email: string;
	telefon: string;
	abrechnungInteresse: boolean;
	vorfinanzierungInteresse: boolean;
	abrechnungsvolumen: string;
	problem: string;
	nachricht: string;
};

export default function KontaktPage() {
	const defaultValues: FormData = {
		name: "",
		unternehmen: "",
		adresse: "",
		plz: "",
		ort: "",
		email: "",
		telefon: "",
		abrechnungInteresse: false,
		vorfinanzierungInteresse: false,
		abrechnungsvolumen: "",
		problem: "",
		nachricht: "",
	};

	const form = useForm({
		defaultValues,
		onSubmit: async ({ value, formApi }) => {
			const promise = fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(value),
			}).then(async (res) => {
				if (!res.ok) {
					const error = await res.json();
					throw new Error(error.error || "Fehler beim Senden");
				}
				return res.json();
			});

			toast.promise(promise, {
				loading: "Nachricht wird gesendet...",
				success: "Nachricht erfolgreich gesendet!",
				error: (err) => err.message || "Es ist ein Fehler aufgetreten.",
			});

			try {
				await promise;
				formApi.reset();
			} catch (_) {}
		},
	});

	return (
		<div className="flex flex-col">
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
										href="tel:+4961929391752"
										className="text-foreground hover:text-primary"
									>
										+49 6192 9391 752
									</a>
								</CardDescription>
							</CardHeader>
						</Card>
						<Card>
							<CardHeader className="text-center">
								<Clock className="mx-auto mb-2 size-10 text-primary" />
								<CardTitle>Bürozeiten</CardTitle>
								<CardDescription>Mo-Fr 09-16 Uhr</CardDescription>
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
							<form
								onSubmit={(e) => {
									e.preventDefault();
									e.stopPropagation();
									form.handleSubmit();
								}}
								className="space-y-6"
							>
								<div className="grid gap-4 md:grid-cols-2">
									<form.Field
										name="name"
										validators={{
											onChange: ({ value }) =>
												!value ? "Name ist erforderlich" : undefined,
										}}
									>
										{(field) => (
											<div className="space-y-2">
												<Label htmlFor={field.name}>
													Name/Ansprechpartner{" "}
													<span className="text-destructive">*</span>
												</Label>
												<Input
													id={field.name}
													name={field.name}
													placeholder="Name oder Ansprechpartner..."
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) => field.handleChange(e.target.value)}
												/>
												{field.state.meta.errors ? (
													<p className="text-[0.8rem] text-destructive">
														{field.state.meta.errors.join(", ")}
													</p>
												) : null}
											</div>
										)}
									</form.Field>

									<form.Field name="unternehmen">
										{(field) => (
											<div className="space-y-2">
												<Label htmlFor={field.name}>Unternehmen</Label>
												<Input
													id={field.name}
													name={field.name}
													placeholder="Unternehmen..."
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) => field.handleChange(e.target.value)}
												/>
											</div>
										)}
									</form.Field>
								</div>

								<form.Field name="adresse">
									{(field) => (
										<div className="space-y-2">
											<Label htmlFor={field.name}>Adresse</Label>
											<Input
												id={field.name}
												name={field.name}
												placeholder="Adresse..."
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
											/>
										</div>
									)}
								</form.Field>

								<div className="grid gap-4 md:grid-cols-2">
									<form.Field name="plz">
										{(field) => (
											<div className="space-y-2">
												<Label htmlFor={field.name}>PLZ</Label>
												<Input
													id={field.name}
													name={field.name}
													placeholder="PLZ..."
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) => field.handleChange(e.target.value)}
												/>
											</div>
										)}
									</form.Field>

									<form.Field name="ort">
										{(field) => (
											<div className="space-y-2">
												<Label htmlFor={field.name}>Ort</Label>
												<Input
													id={field.name}
													name={field.name}
													placeholder="Ort..."
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) => field.handleChange(e.target.value)}
												/>
											</div>
										)}
									</form.Field>
								</div>

								<div className="grid gap-4 md:grid-cols-2">
									<form.Field
										name="email"
										validators={{
											onChange: ({ value }) =>
												!value
													? "E-Mail ist erforderlich"
													: !/^\S+@\S+\.\S+$/.test(value)
														? "Ungültige E-Mail-Adresse"
														: undefined,
										}}
									>
										{(field) => (
											<div className="space-y-2">
												<Label htmlFor={field.name}>
													E-Mail-Adresse{" "}
													<span className="text-destructive">*</span>
												</Label>
												<Input
													id={field.name}
													name={field.name}
													type="email"
													placeholder="E-Mail-Adresse..."
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) => field.handleChange(e.target.value)}
												/>
												{field.state.meta.errors ? (
													<p className="text-[0.8rem] text-destructive">
														{field.state.meta.errors.join(", ")}
													</p>
												) : null}
											</div>
										)}
									</form.Field>

									<form.Field name="telefon">
										{(field) => (
											<div className="space-y-2">
												<Label htmlFor={field.name}>Telefon</Label>
												<Input
													id={field.name}
													name={field.name}
													type="tel"
													placeholder="Telefon..."
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) => field.handleChange(e.target.value)}
												/>
											</div>
										)}
									</form.Field>
								</div>

								<div className="space-y-3">
									<Label>Anfrage/Interesse für:</Label>
									<div className="flex flex-wrap gap-6">
										<form.Field name="abrechnungInteresse">
											{(field) => (
												<div className="flex items-center gap-2">
													<Checkbox
														id={field.name}
														checked={field.state.value}
														onCheckedChange={(checked) =>
															field.handleChange(checked === true)
														}
													/>
													<Label
														htmlFor={field.name}
														className="cursor-pointer font-normal"
													>
														Abrechnung
													</Label>
												</div>
											)}
										</form.Field>
										<form.Field name="vorfinanzierungInteresse">
											{(field) => (
												<div className="flex items-center gap-2">
													<Checkbox
														id={field.name}
														checked={field.state.value}
														onCheckedChange={(checked) =>
															field.handleChange(checked === true)
														}
													/>
													<Label
														htmlFor={field.name}
														className="cursor-pointer font-normal"
													>
														Abrechnung mit Vorfinanzierung
													</Label>
												</div>
											)}
										</form.Field>
									</div>
								</div>

								<form.Field name="abrechnungsvolumen">
									{(field) => (
										<div className="space-y-2">
											<Label htmlFor={field.name}>
												Abrechnungsvolumen pro Monat
											</Label>
											<Input
												id={field.name}
												name={field.name}
												placeholder="z.B. 50.000 €"
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
											/>
										</div>
									)}
								</form.Field>

								<form.Field name="problem">
									{(field) => (
										<div className="space-y-2">
											<Label htmlFor={field.name}>
												Was ist Ihr größtes Problem?
											</Label>
											<Textarea
												id={field.name}
												name={field.name}
												placeholder="Beschreiben Sie Ihre größte Herausforderung..."
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
												rows={3}
											/>
										</div>
									)}
								</form.Field>

								<form.Field name="nachricht">
									{(field) => (
										<div className="space-y-2">
											<Label htmlFor={field.name}>Nachricht</Label>
											<Textarea
												id={field.name}
												name={field.name}
												placeholder="Schreiben Sie uns eine Nachricht..."
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
												rows={5}
											/>
										</div>
									)}
								</form.Field>

								<p className="text-muted-foreground text-xs">
									<span className="text-destructive">*</span> Erforderliche
									Angaben
								</p>

								<form.Subscribe
									selector={(state) => [state.canSubmit, state.isSubmitting]}
								>
									{([canSubmit, isSubmitting]) => (
										<Button
											type="submit"
											size="lg"
											className="w-full gap-2"
											disabled={!canSubmit || isSubmitting}
										>
											<Send className="size-4" />
											{isSubmitting ? "Senden..." : "Nachricht senden"}
										</Button>
									)}
								</form.Subscribe>
							</form>
						</CardContent>
					</Card>
				</div>
			</section>
		</div>
	);
}
