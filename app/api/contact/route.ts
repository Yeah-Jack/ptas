import { NextResponse } from "next/server";
import Mailjet from "node-mailjet";

const mailjet = new Mailjet({
	apiKey: process.env.MAILJET_APIKEY_PUBLIC || "",
	apiSecret: process.env.MAILJET_APIKEY_PRIVATE || "",
});

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const {
			name,
			unternehmen,
			adresse,
			plz,
			ort,
			email,
			telefon,
			abrechnungInteresse,
			vorfinanzierungInteresse,
			abrechnungsvolumen,
			problem,
			nachricht,
		} = body;

		if (!name || !email) {
			return NextResponse.json(
				{ error: "Name und E-Mail sind erforderlich." },
				{ status: 400 },
			);
		}

		if (
			!process.env.MAILJET_APIKEY_PUBLIC ||
			!process.env.MAILJET_APIKEY_PRIVATE
		) {
			console.error("Mailjet API key missing in environment variables.");
			return NextResponse.json(
				{ error: "Server-Konfigurationsfehler: E-Mail-Dienst nicht bereit." },
				{ status: 500 },
			);
		}

		const htmlContent = `
      <h3>Neue Kontaktanfrage über die Webseite</h3>
      <p><strong>Name/Ansprechpartner:</strong> ${name}</p>
      <p><strong>Unternehmen:</strong> ${unternehmen || "-"}</p>
      <p><strong>Adresse:</strong> ${adresse || "-"}, ${plz || ""} ${ort || ""}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${telefon || "-"}</p>
      <br />
      <p><strong>Interesse an Abrechnung:</strong> ${abrechnungInteresse ? "Ja" : "Nein"}</p>
      <p><strong>Interesse an Vorfinanzierung:</strong> ${vorfinanzierungInteresse ? "Ja" : "Nein"}</p>
      <p><strong>Abrechnungsvolumen:</strong> ${abrechnungsvolumen || "-"}</p>
      <p><strong>Aktuelles Problem:</strong> ${problem || "-"}</p>
      <p><strong>Zusätzliche Nachricht:</strong></p>
      <p>${nachricht ? nachricht.replace(/\n/g, "<br>") : "-"}</p>
    `;

		const request = await mailjet.post("send", { version: "v3.1" }).request({
			Messages: [
				{
					From: {
						Email: "info@ptas.de",
						Name: "PTAS Website",
					},
					To: [
						{
							Email: process.env.MAILJET_TO_EMAIL,
							Name: "PTAS Info",
						},
					],
					ReplyTo: {
						Email: email,
						Name: name,
					},
					Subject: `Neue Kontaktanfrage von ${name}`,
					HTMLPart: htmlContent,
					TextPart: `Neue Kontaktanfrage von ${name}. E-Mail: ${email}`,
				},
			],
		});

		return NextResponse.json({ success: true, data: request.body });
	} catch (error) {
		const err = error as { statusCode?: number; message?: string };
		console.error("Mailjet API Error:", err.statusCode, err.message);
		return NextResponse.json(
			{ error: "Beim Senden der E-Mail ist ein Fehler aufgetreten." },
			{ status: 500 },
		);
	}
}
