import { NextResponse } from "next/server";

const escapeHtml = (value: string) =>
	value.replace(/[&<>"']/g, (char) => {
		switch (char) {
			case "&":
				return "&amp;";
			case "<":
				return "&lt;";
			case ">":
				return "&gt;";
			case '"':
				return "&quot;";
			case "'":
				return "&#39;";
			default:
				return char;
		}
	});

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const {
			name,
			email,
			unternehmen,
			adresse,
			plz,
			ort,
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

		const publicKey = process.env.MAILJET_APIKEY_PUBLIC;
		const privateKey = process.env.MAILJET_APIKEY_PRIVATE;
		const toEmail = process.env.MAILJET_TO_EMAIL;

		if (!publicKey || !privateKey || !toEmail) {
			console.error("Mailjet env vars missing.");
			return NextResponse.json(
				{ error: "Server-Konfigurationsfehler: E-Mail-Dienst nicht bereit." },
				{ status: 500 },
			);
		}

		const Mailjet = (await import("node-mailjet")).default;
		const mailjet = new Mailjet({ apiKey: publicKey, apiSecret: privateKey });

		const safeName = escapeHtml(String(name));
		const safeUnternehmen = unternehmen ? escapeHtml(String(unternehmen)) : "-";
		const safeAdresse = adresse ? escapeHtml(String(adresse)) : "-";
		const safePlz = plz ? escapeHtml(String(plz)) : "";
		const safeOrt = ort ? escapeHtml(String(ort)) : "";
		const safeEmail = escapeHtml(String(email));
		const safeTelefon = telefon ? escapeHtml(String(telefon)) : "-";
		const safeAbrechnungsvolumen = abrechnungsvolumen
			? escapeHtml(String(abrechnungsvolumen))
			: "-";
		const safeProblem = problem ? escapeHtml(String(problem)) : "-";
		const safeNachricht = nachricht
			? escapeHtml(String(nachricht)).replace(/\n/g, "<br>")
			: "-";

		const htmlContent = `
      <h3>Neue Kontaktanfrage über die Webseite</h3>
      <p><strong>Name/Ansprechpartner:</strong> ${safeName}</p>
      <p><strong>Unternehmen:</strong> ${safeUnternehmen}</p>
      <p><strong>Adresse:</strong> ${safeAdresse}, ${safePlz} ${safeOrt}</p>
      <p><strong>E-Mail:</strong> ${safeEmail}</p>
      <p><strong>Telefon:</strong> ${safeTelefon}</p>
      <br />
      <p><strong>Interesse an Abrechnung:</strong> ${abrechnungInteresse ? "Ja" : "Nein"}</p>
      <p><strong>Interesse an Vorfinanzierung:</strong> ${vorfinanzierungInteresse ? "Ja" : "Nein"}</p>
      <p><strong>Abrechnungsvolumen:</strong> ${safeAbrechnungsvolumen}</p>
      <p><strong>Aktuelles Problem:</strong> ${safeProblem}</p>
      <p><strong>Zusätzliche Nachricht:</strong></p>
      <p>${safeNachricht}</p>
    `;

		const request = await mailjet.post("send", { version: "v3.1" }).request({
			Messages: [
				{
					From: { Email: "info@ptas.de", Name: "PTAS Website" },
					HTMLPart: htmlContent,
					ReplyTo: { Email: email, Name: name },
					Subject: `Neue Kontaktanfrage von ${name}`,
					TextPart: `Neue Kontaktanfrage von ${name}. E-Mail: ${email}`,
					To: [{ Email: toEmail, Name: "PTAS Info" }],
				},
			],
		});

		return NextResponse.json({ data: request.body, success: true });
	} catch (error) {
		const err = error as { statusCode?: number; message?: string };
		console.error("Mailjet API Error:", err.statusCode, err.message);
		return NextResponse.json(
			{ error: "Beim Senden der E-Mail ist ein Fehler aufgetreten." },
			{ status: 500 },
		);
	}
}
