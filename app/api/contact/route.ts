import { NextResponse } from "next/server";

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
					From: { Email: "info@ptas.de", Name: "PTAS Website" },
					To: [{ Email: toEmail, Name: "PTAS Info" }],
					ReplyTo: { Email: email, Name: name },
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
