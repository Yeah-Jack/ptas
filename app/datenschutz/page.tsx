import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Datenschutz | PTAS",
	description:
		"Datenschutzhinweise der PTAS Personentransport-Abrechnungsservice",
};

export default function DatenschutzPage() {
	return (
		<main className="container mx-auto max-w-4xl px-4 py-16 sm:py-24">
			<h1 className="mb-8 font-bold text-3xl text-primary tracking-tight sm:text-4xl">
				Datenschutzhinweise gemäß Art. 13 DSGVO
			</h1>

			<section className="prose prose-slate dark:prose-invert max-w-none">
				<h2 className="mt-10 mb-4 font-semibold text-2xl">
					Name und Anschrift des Verantwortlichen
				</h2>
				<p className="mb-4 text-muted-foreground">
					Verantwortliche Stelle im Sinne der Datenschutz-Grundverordnung
					(DSGVO) und anderer datenschutzrechtlicher Bestimmungen ist:
				</p>
				<p className="mb-4 font-medium text-muted-foreground">
					Daniel Software GmbH
					<br />
					Im Brand 1A
					<br />
					65719 Hofheim am Taunus
					<br />
					Deutschland
				</p>
				<p className="mb-4 text-muted-foreground">
					Telefon: +49 6192 9999 002
					<br />
					E-Mail: mail@daniel.de
				</p>

				<h2 className="mt-10 mb-4 font-semibold text-2xl">
					Name und Anschrift des Datenschutzbeauftragten
				</h2>
				<p className="mb-4 text-muted-foreground">
					Der Datenschutzbeauftragte des Verantwortlichen ist:
				</p>
				<p className="mb-4 font-medium text-muted-foreground">
					dsgvoschutzteam.com - Lukmann Consulting GmbH
					<br />
					Packerstraße 131a
					<br />
					A-8561 Söding
				</p>
				<p className="mb-4 text-muted-foreground">
					Telefon: +49 7223 95 666 77
					<br />
					E-Mail: service@dsgvoschutzteam.com
				</p>

				<h2 className="mt-10 mb-4 font-semibold text-2xl">
					Allgemeines zur Datenverarbeitung
				</h2>

				<h3 className="mt-8 mb-4 font-semibold text-xl">
					Rechtsgrundlage für die Verarbeitung personenbezogener Daten
				</h3>
				<p className="mb-4 text-muted-foreground">
					Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen
					unserer Datenverarbeitungen mit. Sofern die Rechtsgrundlage im
					Datenschutzhinweis nicht genau genannt wird, gilt Folgendes:
					<br />
					Die Rechtsgrundlage für die Einholung von Einwilligungen ist Art. 6
					Abs. 1 lit. a i.V.m. Art. 7 DSGVO. Die Rechtsgrundlage für die
					Verarbeitung zur Erfüllung unserer Leistungen und Durchführung
					vertraglicher Maßnahmen sowie zur Beantwortung von Anfragen ist Art. 6
					Abs. 1 lit. b DSGVO. Die Rechtsgrundlage für die Verarbeitung zur
					Erfüllung unserer rechtlichen Verpflichtungen ist Art. 6 Abs. 1 lit. c
					DSGVO. Ist die Verarbeitung Ihrer Daten zur Wahrung eines berechtigten
					Interesses unseres Unternehmens oder eines Dritten erforderlich und
					überwiegen die Interessen, Grundrechte und Grundfreiheiten des
					Betroffenen das erstgenannte Interesse nicht, so dient Art. 6 Abs. 1
					lit. f DSGVO als Rechtsgrundlage für die Verarbeitung. Für den Fall,
					dass lebenswichtige Interessen der betroffenen Person oder einer
					anderen natürlichen Person eine Verarbeitung personenbezogener Daten
					erforderlich machen, dient Art. 6 Abs. 1 lit. d DSGVO als
					Rechtsgrundlage.
				</p>

				<h3 className="mt-8 mb-4 font-semibold text-xl">
					Datenlöschung und Speicherdauer
				</h3>
				<p className="mb-4 text-muted-foreground">
					Wir halten uns an die Grundsätze der Datenminimierung gem. Art. 5 Abs.
					1 lit. c DSGVO und Speicherbegrenzung gem. Art. 5 Abs. 1 lit. e DSGVO.
					Wir speichern Ihre personenbezogenen Daten nur so lange, wie dies zur
					Erreichung der hier genannten Zwecke erforderlich ist oder wie es die
					vom Gesetzgeber vorgesehenen Aufbewahrungsfristen vorsehen. Nach
					Wegfall des jeweiligen Zwecks bzw. nach Ablauf dieser
					Aufbewahrungsfristen, werden die entsprechenden Daten schnellstmöglich
					gelöscht.
				</p>

				<h3 className="mt-8 mb-4 font-semibold text-xl">Externe Links</h3>
				<p className="mb-4 text-muted-foreground">
					Diese Webseite kann Links zu Webseiten Dritter bzw. zu anderen
					Webseiten in unserer Verantwortung enthalten. Folgen Sie einem Link zu
					einer der Webseiten außerhalb unserer Verantwortung, beachten Sie
					bitte, dass diese Webseiten über ihre eigenen Datenschutzinformationen
					verfügen. Für diese fremden Webseiten und deren Datenschutzhinweise
					übernehmen wir keine Verantwortung oder Haftung. Überprüfen Sie daher
					vor Nutzung dieser Webseiten, ob Sie mit den dortigen
					Datenschutzerklärungen einverstanden sind.
				</p>
				<p className="mb-4 text-muted-foreground">
					Externe Links erkennen Sie entweder daran, dass sie farblich etwas
					abgesetzt vom restlichen Text oder unterstrichen dargestellt werden.
					Ihr Cursor zeigt Ihnen externe Links an, wenn Sie diesen über einen
					solchen Link bewegen. Erst wenn Sie auf einen externen Link klicken,
					werden Ihre personenbezogenen Daten zum Ziel des Links übertragen.
					Dabei erhält der Betreiber der anderen Webseite insbesondere Ihre
					IP-Adresse, den Zeitpunkt, zu dem Sie den Link angeklickt haben, die
					Seite, auf der Sie den Link angeklickt haben, sowie weitere
					Informationen, die Sie in den Datenschutzhinweisen des jeweiligen
					Anbieters finden.
				</p>
				<p className="mb-4 text-muted-foreground">
					Bitte beachten Sie auch, dass einzelne Links zu einer
					Datenübermittlung außerhalb des europäischen Wirtschaftsraums führen
					können. Hierdurch könnten ausländische Behörden Zugriff auf Ihre Daten
					erhalten. Möglicherweise stehen Ihnen keine Rechtsbehelfe gegen diese
					Datenzugriffe zu. Wenn Sie nicht möchten, dass Ihre personenbezogenen
					Daten zum Linkziel übertragen werden oder gar unerwünscht dem Zugriff
					ausländischer Behörden ausgesetzt werden, klicken Sie bitte keine
					Links an.
				</p>

				<h2 className="mt-10 mb-4 font-semibold text-2xl">
					Rechte der betroffenen Person
				</h2>
				<p className="mb-4 text-muted-foreground">
					Als Betroffener im Sinne der DSGVO haben Sie die Möglichkeit
					verschiedene Rechte geltend zu machen. Die sich aus der DSGVO
					ergebenden Betroffenenrechte sind das Auskunftsrecht (Artikel 15), das
					Recht auf Berichtigung (Artikel 16), das Recht auf Löschung (Artikel
					17), das Recht auf Einschränkung der Verarbeitung (Artikel 18), das
					Widerspruchsrecht (Artikel 21), das Recht auf Beschwerde bei einer
					Aufsichtsbehörde und das Recht auf Datenübertragbarkeit (Artikel 20).
				</p>

				<h3 className="mt-8 mb-4 font-semibold text-xl">Widerrufsrecht:</h3>
				<p className="mb-4 text-muted-foreground">
					Einige Datenverarbeitungen können nur mit Ihrer ausdrücklichen
					Einwilligung erfolgen. Sie haben jederzeit die Möglichkeit Ihre
					erteilte Einwilligung zu widerrufen. Die Rechtmäßigkeit der
					Datenverarbeitung bis zum Widerruf wird durch diesen allerdings nicht
					berührt.
				</p>

				<h3 className="mt-8 mb-4 font-semibold text-xl">Widerspruchsrecht:</h3>
				<p className="mb-4 text-muted-foreground">
					Beruht die Verarbeitung auf Art. 6 Absatz 1 lit. e oder f DSGVO,
					können Sie als Betroffener, aus Gründen, die sich aus Ihrer besonderen
					Situation ergeben, jederzeit gegen die Verarbeitung der Sie
					betreffenden personenbezogenen Daten widersprechen. Dieses Recht steht
					Ihnen auch bei auf diese Bestimmungen gestütztem Profiling iSd Art. 4
					Z 4 DSGVO zu. Sofern wir kein Berechtigtes Interesse für die
					Verarbeitung nachweisen können, welche Ihre Interessen, Rechte und
					Freiheiten überwiegen oder eine Verarbeitung, der Geltendmachung,
					Ausübung oder Verteidigung von Rechtsansprüchen dient, werden wir die
					Verarbeitung ihrer Daten nach erfolgten Widerspruch unterlassen.
				</p>
				<p className="mb-4 text-muted-foreground">
					Dient die Verarbeitung von personenbezogenen Daten der Betreibung von
					Direktwerbung, so haben Sie auch das Recht, jederzeit Widerspruch zu
					erheben. Dasselbe gilt für Profiling, welches mit Direktwerbung in
					Verbindung steht. Auch hier werden wir personenbezogene Daten nicht
					mehr verarbeiten, sobald Sie Widerspruch erheben.
				</p>

				<h3 className="mt-8 mb-4 font-semibold text-xl">
					Recht auf Beschwerde bei einer Aufsichtsbehörde:
				</h3>
				<p className="mb-4 text-muted-foreground">
					Wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden
					personenbezogenen Daten gegen die DSGVO verstößt, steht Ihnen
					unbeschadet eines anderweitigen verwaltungsrechtlichen oder
					gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer
					Aufsichtsbehörde, insbesondere in dem Mitgliedsstaat Ihres
					Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen
					Verstoßes, zu.
				</p>

				<h3 className="mt-8 mb-4 font-semibold text-xl">
					Recht auf Datenübertragbarkeit:
				</h3>
				<p className="mb-4 text-muted-foreground">
					Werden Ihre Daten aufgrund einer Einwilligung oder Erfüllung eines
					Vertrages automatisiert verarbeitet, haben Sie das Recht, diese Daten
					in einem strukturierten, gängigen und maschinenlesbaren Format zu
					erhalten. Außerdem haben Sie das Recht, die Übertragung und
					Bereitstellung der Daten an einen anderen Verantwortlichen zu fordern,
					soweit dies technisch umsetzbar ist.
				</p>

				<h3 className="mt-8 mb-4 font-semibold text-xl">
					Recht auf Auskunft, Berichtigung und Löschung:
				</h3>
				<p className="mb-4 text-muted-foreground">
					Sie haben das Recht, Auskunft über Ihre verarbeiteten
					personenbezogenen Daten bezüglich des Zwecks der Datenverarbeitung,
					der Kategorien, der Empfänger sowie der Dauer der Speicherung zu
					erhalten. Bei Fragen zu diesem Thema oder auch zu anderen Themen
					bezüglich personenbezogener Daten können Sie sich selbstverständlich
					über die im Impressum angegebenen Kontaktmöglichkeiten an uns wenden.
				</p>

				<h3 className="mt-8 mb-4 font-semibold text-xl">
					Recht auf Einschränkung der Verarbeitung:
				</h3>
				<p className="mb-4 text-muted-foreground">
					Sie können jederzeit die Einschränkung der Verarbeitung Ihrer
					personenbezogenen Daten geltend machen. Dazu müssen Sie eine der
					folgenden Voraussetzungen erfüllen:
				</p>
				<ul className="mb-4 list-inside list-disc space-y-2 pl-4 text-muted-foreground">
					<li>
						Sie bestreiten die Richtigkeit der personenbezogenen Daten. Für die
						Dauer der Überprüfung der Richtigkeit haben Sie das Recht, eine
						Einschränkung der Verarbeitung zu verlangen.
					</li>
					<li>
						Erfolgt eine Verarbeitung unrechtmäßig, so können Sie alternativ zur
						Löschung die Einschränkung der Nutzung der Daten beantragen.
					</li>
					<li>
						Sollten wir Ihre personenbezogenen Daten für die Zwecke der
						Verarbeitung nicht mehr benötigen, Sie aber die Daten für die
						Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
						benötigen, können Sie alternativ zur Löschung, die Einschränkung der
						Verarbeitung beantragen.
					</li>
					<li>
						Legen Sie Widerspruch gegen die Verarbeitung gemäß Art. 21 Abs. 1
						DSGVO ein, wird eine Abwägung zwischen Ihren und unseren Interessen
						durchgeführt. Bis diese Abwägung erfolgt ist, haben Sie das Recht,
						die Einschränkung der Verarbeitung zu beantragen.
					</li>
				</ul>
				<p className="mb-4 text-muted-foreground">
					Eine Einschränkung der Verarbeitung hat zur Folge, dass die
					personenbezogenen Daten, abgesehen von der Speicherung, nur mit Ihrer
					Einwilligung oder zur Geltendmachung, zur Ausübung bzw. Verteidigung
					von Rechtsansprüchen oder zum Schutz der Rechte einer anderen
					natürlichen oder juristischen Person oder aus Gründen eines wichtigen
					öffentlichen Interesses der Union oder eines Mitgliedstaates
					verarbeitet werden dürfen.
				</p>

				<h2 className="mt-10 mb-4 font-semibold text-2xl">
					Bereitstellung der Webseite (Webhoster)
				</h2>
				<p className="mb-4 text-muted-foreground">
					Unsere Webseite wird gehostet bei:
					<br />
					<br />
					<strong>Microsoft Ireland Operations Ltd.</strong>
					<br />
					One Microsoft Place, South County Business Park, Leopardstown, Dublin
					18, D18 P521
					<br />
					Irland
				</p>
				<p className="mb-4 text-muted-foreground">
					Der Serverstandort ist Niederlande.
				</p>
				<p className="mb-4 text-muted-foreground">
					Wenn Sie unsere Webseite aufrufen, erheben und speichern wir
					automatisch Informationen in sogenannten Server-Logfiles. Diese
					Informationen übermittelt Ihr Browser automatisch an unseren Server
					bzw. an den Server unseres Hostingunternehmens.
				</p>
				<p className="mb-2 text-muted-foreground">Dies sind:</p>
				<ul className="mb-4 list-inside list-disc space-y-2 pl-4 text-muted-foreground">
					<li>IP-Adresse des Endgerätes des Webseitenbesuchers</li>
					<li>Verwendetes Gerät</li>
					<li>Hostname des zugreifenden Rechners</li>
					<li>Betriebssystem des Besuchers</li>
					<li>Browsertyp und Version</li>
					<li>Name der abgerufenen Datei</li>
					<li>Zeitpunkt der Serveranfrage</li>
					<li>Menge der Daten</li>
					<li>Information, ob der Abruf der Daten erfolgreich war</li>
				</ul>
				<p className="mb-4 text-muted-foreground">
					Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.
				</p>
				<p className="mb-4 text-muted-foreground">
					Statt diese Webseite auf einem eigenen Server zu betreiben, können wir
					sie auch auf dem Server eines externen Dienstleisters
					(Hostingunternehmen) betreiben lassen, den wir in diesem Fall weiter
					oben genannt haben. Die von dieser Webseite erfassten
					personenbezogenen Daten werden dann auf den Servern des
					Hostingunternehmens gespeichert. Ergänzend zu den oben genannten Daten
					speichert der Webhoster für uns z.B. auch Kontaktanfragen,
					Kontaktdaten, Namen, Webseitezugriffsdaten, Meta- und
					Kommunikationsdaten, Vertragsdaten und sonstige Daten, die über eine
					Website generiert werden.
				</p>
				<p className="mb-4 text-muted-foreground">
					Rechtsgrundlage für die Verarbeitung dieser Daten ist Art. 6 Abs. 1
					lit. f DSGVO. Unser berechtigtes Interesse ist die technisch
					fehlerfreie Darstellung und Optimierung dieser Webseite. Sofern die
					Webseite aufgerufen wird, um mit uns in Vertragsverhandlungen zu gehen
					oder einen Vertrag abzuschließen, dient als weitere Rechtsgrundlage
					(Art. 6 Abs. 1 lit. b DSGVO). Für den Fall, dass wir ein
					Hostingunternehmen beauftragt haben, besteht ein Vertrag über
					Auftragsverarbeitung mit diesem Dienstleister.
				</p>

				<h2 className="mt-10 mb-4 font-semibold text-2xl">
					Einsatz von Local Storage Items, Session Storage Items und Cookies
				</h2>
				<p className="mb-4 text-muted-foreground">
					Unsere Webseite verwendet Local Storage Items, Session Storage Items
					und/oder Cookies. Beim Local Storage handelt es sich um einen
					Mechanismus, welcher die Speicherung von Daten innerhalb des Browsers
					auf Ihrem Endgerät ermöglicht. Diese Daten beinhalten meist
					Benutzerpräferenzen, wie beispielsweise den „Tag-“ oder „Nachtmodus“
					einer Webseite, und bleiben so lange erhalten, bis Sie die Daten
					manuell löschen. Session Storage ist dem Local Storage sehr ähnlich,
					wohingegen die Speicherdauer nur während der aktuellen Sitzung, also
					bis zum Schließen des aktuellen Tabs andauert. Danach werden die
					Session Storage Items von Ihrem Endgerät gelöscht. Bei Cookies handelt
					es sich um Informationen, welche ein Webserver (Server, der Webinhalte
					bereitstellt) auf Ihrem Endgerät hinterlegt, um dieses Endgerät
					identifizieren zu können. Sie werden entweder vorübergehend für die
					Dauer einer Sitzung (Session-Cookies) und nach Ende Ihres Besuchs
					einer Webseite gelöscht oder dauerhaft (permanente Cookies) auf Ihrem
					Endgerät gespeichert, bis Sie diese selbst löschen oder eine
					automatische Löschung durch Ihren Webbrowser erfolgt.
				</p>
				<p className="mb-4 text-muted-foreground">
					Diese Objekte können auch von Drittunternehmen auf Ihrem Endgerät
					gespeichert werden, wenn Sie unsere Seite betreten
					(Third-Party-Requests). Dadurch wird es uns als Betreiber und Ihnen
					als Besucher dieser Webseite ermöglicht, bestimmte Dienstleistungen
					von Dritten, die auf dieser Webseite installiert sind, in Anspruch zu
					nehmen. Beispiele dafür sind etwa die Abwicklung von
					Zahlungsdienstleistungen oder die Anzeige von Videos.
				</p>
				<p className="mb-4 text-muted-foreground">
					Diese Mechanismen haben vielfältige Einsatzmöglichkeiten. Sie können
					die Funktionsfähigkeit einer Webseite verbessern, Warenkorbfunktionen
					steuern, die Sicherheit und den Komfort der Webseitennutzung erhöhen
					sowie Analysen bezüglich Besucherströmen und -verhalten durchführen.
					In Abhängigkeit von den einzelnen Funktionen sind diese
					datenschutzrechtlich einzuordnen. Sind sie notwendig für den Betrieb
					der Webseite und zur Bereitstellung bestimmter Funktionen gedacht
					(Warenkorbfunktion) oder dienen zur Optimierung der Webseite (z.B.
					Cookies zur Messung des Besucherverhaltens), dann erfolgt ihr Einsatz
					auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Webseitenbetreiber
					haben wir ein berechtigtes Interesse an der Speicherung von Local
					Storage Items, Session Storage Items und Cookies zur technisch
					fehlerfreien und optimierten Bereitstellung unserer Dienste. In allen
					anderen Fällen erfolgt die Speicherung von Local Storage Items,
					Session Storage Items und Cookies nur nach Ihrer ausdrücklichen
					Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
				</p>
				<p className="mb-4 text-muted-foreground">
					Soweit Local Storage Item, Session Storage oder Cookies von
					Drittunternehmen oder zu Analysezwecken eingesetzt werden, informieren
					wir Sie hierüber im Rahmen dieses Datenschutzhinweises gesondert. Ihre
					erforderliche Einwilligung wird abgefragt und kann jederzeit
					widerrufen werden.
				</p>

				<h2 className="mt-10 mb-4 font-semibold text-2xl">
					Einsatz von externen Diensten
				</h2>
				<p className="mb-4 text-muted-foreground">
					Auf unserer Webseite sind externe Dienste im Einsatz. Externe Dienste
					sind Dienste von Drittanbietern, die auf unserer Webseite eingesetzt
					werden. Dies kann aus unterschiedlichen Gründen erfolgen,
					beispielsweise für das Einbetten von Videos oder zur Sicherheit der
					Webseite. Bei der Benutzung dieser Dienste werden personenbezogene
					Daten auch an die jeweiligen Anbieter dieser externen Dienste
					weitergegeben. Wenn wir kein berechtigtes Interesse am Einsatz dieser
					Dienste haben, holen wir vor der Verwendung Ihre jederzeit
					widerrufbare Einwilligung als Besucher unserer Webseite ein (Art. 6
					Abs. 1 lit. a DSGVO).
				</p>

				<h2 className="mt-10 mb-4 font-semibold text-2xl">Hosting</h2>
				<p className="mb-4 text-muted-foreground">
					Unter Hosting versteht man ist das Bereitstellen von Webspace und den
					darauf befindlichen Dateien bei einem Webhoster.
				</p>
				<p className="mb-4 text-muted-foreground">
					Dabei kommt es zur Übertragung und Speicherung personenbezogener Daten
					auf den Servern des Webhosters. Insbesondere werden die IP-Adressen,
					Meta- und Kommunikationsdaten der Nutzer sowie Daten über die
					Webseitenzugriffe verarbeitet. Wenn ein Webseitenbesucher die Seite
					aufruft, wird eine Verbindung zu den Servern des Webhosters
					hergestellt. Hierbei kommt es zu einer Verarbeitung personenbezogener
					Daten des Webseitenbesuchers.
				</p>
				<p className="mb-4 text-muted-foreground">
					Wir stützen diese Verarbeitung auf ein berechtigtes Interesse (Art. 6
					Abs. 1 lit. f DSGVO).
				</p>
				<p className="mb-4 text-muted-foreground">
					Unser berechtigtes Interesse besteht darin, unsere Webseite darstellen
					und im Internet zur Verfügung stellen zu können.
				</p>

				<h2 className="mt-10 mb-4 font-semibold text-2xl">Microsoft-Azure</h2>
				<p className="mb-4 text-muted-foreground">
					Wir nutzen auf unserer Webseite den Dienst Microsoft-Azure. Anbieter
					des Dienstes ist die Microsoft Ireland Operations Limited, One
					Microsoft Place, South County Business Park, Leopardstown, Dublin 18,
					D18 P521, Irland.
				</p>
				<p className="mb-4 text-muted-foreground">
					Da dieser Dienst lokal am Webserver gehostet wird, findet keine
					Datenübertragung an Dritte statt.
				</p>

				<h2 className="mt-10 mb-4 font-semibold text-2xl">Search Engine</h2>
				<p className="mb-4 text-muted-foreground">
					Damit Inhalte auf unserer Webseite leichter gefunden werden können,
					wurde eine Search Engine von einem Drittanbieter eingebaut. Durch den
					Einbau der Search Engine auf der Webseite kommt es zu einer
					Übermittlung technischer Daten wie der IP-Adresse an den
					Drittanbieter.
				</p>
				<p className="mb-4 text-muted-foreground">
					Zu einer Verarbeitung kommt es nur, wenn Sie in diese
					Datenverarbeitung (über unser Einwilligungsbanner auf der Webseite)
					einwilligen. Die Rechtsgrundlage für diese Verarbeitung ist die
					Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ohne Ihre Einwilligung
					erfolgt die Datenverarbeitung in der oben beschriebenen Weise nicht.
					Wenn Sie Ihre Einwilligung (z.B. über das Einwilligungsbanner oder
					andere auf dieser Website vorgesehene Möglichkeiten) widerrufen,
					beenden wir diese Datenverarbeitung. Die Rechtmäßigkeit der bis zum
					Widerruf erfolgten Verarbeitung bleibt davon unberührt.
				</p>

				<h2 className="mt-10 mb-4 font-semibold text-2xl">Google</h2>
				<p className="mb-4 text-muted-foreground">
					Wir nutzen auf unserer Webseite den Dienst Google. Anbieter des
					Dienstes ist die Google Ireland Limited, Gordon House, Barrow Street,
					Dublin 4, Irland.
				</p>
				<p className="mb-4 text-muted-foreground">
					Durch die Nutzung des Dienstes kann es zu einer Datenübertragung in
					ein Drittland kommen (USA). Der Anbieter ist gemäß EU-U.S. Data
					Privacy Framework zertifiziert und bietet daher ein angemessenes
					Datenschutzniveau.
				</p>
				<p className="mb-4 text-muted-foreground">
					Weitere Informationen sind in den Datenschutzinformationen des
					Anbieters unter folgender URL zu finden:{" "}
					<a
						href="https://business.safety.google/privacy"
						className="text-primary hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						https://business.safety.google/privacy
					</a>
					.
				</p>

				<h2 className="mt-10 mb-4 font-semibold text-2xl">Werbung</h2>
				<p className="mb-4 text-muted-foreground">
					Auf unserer Webseite sind Tools im Einsatz, die das Schalten von
					Werbung und das Auswerten des Erfolgs von geschalteten Anzeigen
					erleichtern oder ermöglichen. Hierzu werden personenbezogene Daten
					verarbeitet, insbesondere die IP-Adresse, Zugriffszeiten sowie die
					Geräteinformationen.
				</p>
				<p className="mb-4 text-muted-foreground">
					Zu einer Verarbeitung kommt es nur, wenn Sie in diese
					Datenverarbeitung (über unser Einwilligungsbanner auf der Webseite)
					einwilligen. Die Rechtsgrundlage für diese Verarbeitung ist die
					Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ohne Ihre Einwilligung
					erfolgt die Datenverarbeitung in der oben beschriebenen Weise nicht.
					Wenn Sie Ihre Einwilligung (z.B. über das Einwilligungsbanner oder
					andere auf dieser Website vorgesehene Möglichkeiten) widerrufen,
					beenden wir diese Datenverarbeitung. Die Rechtmäßigkeit der bis zum
					Widerruf erfolgten Verarbeitung bleibt davon unberührt.
				</p>

				<h2 className="mt-10 mb-4 font-semibold text-2xl">Google Ads</h2>
				<p className="mb-4 text-muted-foreground">
					Wir nutzen auf unserer Webseite den Dienst Google Ads. Anbieter des
					Dienstes ist die Google Ireland Limited, Gordon House, Barrow Street,
					Dublin 4, Irland.
				</p>
				<p className="mb-4 text-muted-foreground">
					Durch die Nutzung des Dienstes kann es zu einer Datenübertragung in
					ein Drittland kommen (USA). Der Anbieter ist gemäß EU-U.S. Data
					Privacy Framework zertifiziert und bietet daher ein angemessenes
					Datenschutzniveau.
				</p>
				<p className="mb-4 text-muted-foreground">
					Weitere Informationen sind in den Datenschutzinformationen des
					Anbieters unter folgender URL zu finden:{" "}
					<a
						href="https://business.safety.google/privacy"
						className="text-primary hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						https://business.safety.google/privacy
					</a>
					.
				</p>

				<h2 className="mt-10 mb-4 font-semibold text-2xl">Google AdSense</h2>
				<p className="mb-4 text-muted-foreground">
					Wir nutzen auf unserer Webseite den Dienst Google AdSense. Anbieter
					des Dienstes ist die Google Ireland Limited (GV), Gordon House, Barrow
					Street, Dublin 4, Irland.
				</p>
				<p className="mb-4 text-muted-foreground">
					Durch die Nutzung des Dienstes kann es zu einer Datenübertragung in
					ein Drittland kommen (USA). Der Anbieter ist gemäß EU-U.S. Data
					Privacy Framework zertifiziert und bietet daher ein angemessenes
					Datenschutzniveau.
				</p>
				<p className="mb-4 text-muted-foreground">
					Weitere Informationen sind in den Datenschutzinformationen des
					Anbieters unter folgender URL zu finden:{" "}
					<a
						href="https://business.safety.google/privacy"
						className="text-primary hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						https://business.safety.google/privacy
					</a>
					.
				</p>

				<h2 className="mt-10 mb-4 font-semibold text-2xl">Kontaktformulare</h2>
				<p className="mb-4 text-muted-foreground">
					Auf unserer Webseite besteht die Möglichkeit, uns über ein
					Kontaktformular zu benachrichtigen. Für die Kontaktaufnahme über
					dieses Formular werden insbesondere Ihre Kontaktdaten benötigt.
				</p>
				<p className="mb-4 text-muted-foreground">
					Wenn Sie Ihre Einwilligung erteilen, ist die Rechtsgrundlage Art. 6
					Abs. 1 lit. a DSGVO. Diese kann jederzeit widerrufen werden.
				</p>
				<p className="mb-4 text-muted-foreground">
					Wenn Sie Anfragen zu unseren Produkten, Dienstleistungen oder unserem
					Unternehmen absenden, erfolgt die Verarbeitung zum Zwecke der
					Vertragserfüllung bzw. vorvertraglicher Maßnahmen gem. Art. 6 Abs. 1
					lit. b DSGVO verwiesen. Außerdem kann ein berechtigtes Interesse
					vorliegen, um Geschäftsbeziehungen zu pflegen oder Ihre Anfrage aus
					sonstigen Gründen zu beantworten. Die Rechtsgrundlage für die
					Verarbeitung Ihrer Daten wäre diesfalls Art. 6 Abs. 1 lit. f DSGVO.
				</p>
				<p className="mb-4 text-muted-foreground">
					Die Daten werden gelöscht, wenn wir Ihre Anfrage abschließend
					beantwortet haben und keine sonstigen Aufbewahrungspflichten dem
					entgegenstehen.
				</p>

				<h2 className="mt-10 mb-4 font-semibold text-2xl">
					Präsenz auf LinkedIn
				</h2>
				<p className="mb-4 text-muted-foreground">
					Soziale Netzwerke verarbeiten personenbezogene Daten Ihrer Nutzer in
					umfangreichen Maß. Beim Besuch unserer Profile werden unter anderem
					Ihre IP-Adresse sowie weitere Informationen zu Ihren verwendeten
					Geräten verarbeitet, was eine Zuordnung der IP-Adressen zu einzelnen
					Nutzern ermöglicht. Auf diese Datenverarbeitung können wir keinen
					Einfluss nehmen. Wir weisen Sie darauf hin, dass Sie unsere Profile
					auf den sozialen Netzwerken und ihre Funktionen in eigener
					Verantwortung nutzen. Details zur Datenverarbeitung können Sie der
					Datenschutzerklärung des Betreibers entnehmen.
				</p>
				<p className="mb-4 text-muted-foreground">
					Wir verfügen über ein Profil bei LinkedIn. Anbieter ist die LinkedIn
					Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2,
					Irland. LinkedIn verwendet Werbecookies.
				</p>
				<p className="mb-4 text-muted-foreground">
					Genaue Informationen über den Umgang mit personenbezogenen Daten
					finden Sie in der folgenden Datenschutzerklärung von LinkedIn:{" "}
					<a
						href="https://www.linkedin.com/legal/privacy-policy"
						className="text-primary hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						https://www.linkedin.com/legal/privacy-policy
					</a>
					.
				</p>
				<p className="mb-4 text-muted-foreground">
					Zweck unserer Profile auf Social Media-Plattformen ist Vergrößerung
					unserer Internetpräsenz und damit einhergehende größere Bekanntheit.
					Daher ist als Rechtsgrundlage berechtigtes Interesse gem. Art. 6 Abs.
					1 lit. f DSGVO heranzuziehen. Weiters ist bezüglich den
					Verarbeitungstätigkeiten durch die sozialen Netzwerke, auf deren
					eigene Rechtsgrundlagen (z. B. Einwilligung gem. Art. 6 Abs. 1 lit. a
					DSGVO) zu verweisen, welche Sie der jeweiligen Datenschutzerklärung
					entnehmen.
				</p>
				<p className="mb-4 text-muted-foreground">
					Grundsätzlich sind wir gemeinsam mit der Social-Media-Plattform für
					die beim Besuch unseres Profils ausgelösten Datenverarbeitungsvorgänge
					verantwortlich. Daher können Sie Ihre Betroffenenrechte gem. Art. 15ff
					DGSVO gegenüber der Social Media-Plattform als auch gegenüber uns
					geltend machen. Wir weisen jedoch daraufhin, dass wir keinen Einfluss
					auf die Datenverarbeitung durch die Social Media-Plattform nehmen
					können.
				</p>
			</section>
		</main>
	);
}
