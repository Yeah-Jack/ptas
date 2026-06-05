import { FadeInUp } from "@/components/animations/fade-in-up";

export const metadata = {
	title: "Datenschutz | PTAS",
	description: "Datenschutzerklärung der Daniel Software GmbH.",
};

export default function DatenschutzPage() {
	return (
		<>
			<section className="container mx-auto max-w-4xl py-16 text-center md:py-24">
				<FadeInUp>
					<h1 className="mb-6 font-bold text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
						Datenschutzerklärung
					</h1>
				</FadeInUp>
			</section>

			<section className="pb-16 md:pb-24">
				<div className="container mx-auto max-w-4xl px-4">
					<FadeInUp delay={0.1}>
						<div className="flex flex-col gap-8 text-foreground/80 md:text-lg">
							<div>
								<h2 className="mb-4 font-bold text-2xl text-foreground">
									1. Datenschutz auf einen Blick
								</h2>

								<h3 className="mt-6 mb-2 font-semibold text-foreground text-xl">
									Allgemeine Hinweise
								</h3>
								<p className="mb-4 leading-relaxed">
									Die folgenden Hinweise geben einen einfachen Überblick
									darüber, was mit Ihren personenbezogenen Daten passiert, wenn
									Sie diese Website besuchen. Personenbezogene Daten sind alle
									Daten, mit denen Sie persönlich identifiziert werden können.
									Ausführliche Informationen zum Thema Datenschutz entnehmen Sie
									unserer unter diesem Text aufgeführten Datenschutzerklärung.
								</p>

								<h3 className="mt-6 mb-2 font-semibold text-foreground text-xl">
									Datenerfassung auf dieser Website
								</h3>

								<h4 className="mt-4 mb-2 font-semibold text-foreground text-lg">
									Wer ist verantwortlich für die Datenerfassung auf dieser
									Website?
								</h4>
								<p className="mb-4 leading-relaxed">
									Die Datenverarbeitung auf dieser Website erfolgt durch den
									Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
									„Hinweis zur Verantwortlichen Stelle“ in dieser
									Datenschutzerklärung entnehmen.
								</p>

								<h4 className="mt-4 mb-2 font-semibold text-foreground text-lg">
									Wie erfassen wir Ihre Daten?
								</h4>
								<p className="mb-4 leading-relaxed">
									Ihre Daten werden zum einen dadurch erhoben, dass Sie uns
									diese mitteilen. Hierbei kann es sich z. B. um Daten handeln,
									die Sie in ein Kontaktformular eingeben.
								</p>
								<p className="mb-4 leading-relaxed">
									Andere Daten werden automatisch oder nach Ihrer Einwilligung
									beim Besuch der Website durch unsere IT-Systeme erfasst. Das
									sind vor allem technische Daten (z. B. Internetbrowser,
									Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung
									dieser Daten erfolgt automatisch, sobald Sie diese Website
									betreten.
								</p>

								<h4 className="mt-4 mb-2 font-semibold text-foreground text-lg">
									Wofür nutzen wir Ihre Daten?
								</h4>
								<p className="mb-4 leading-relaxed">
									Ein Teil der Daten wird erhoben, um eine fehlerfreie
									Bereitstellung der Website zu gewährleisten. Andere Daten
									können zur Analyse Ihres Nutzerverhaltens verwendet werden.
								</p>

								<h4 className="mt-4 mb-2 font-semibold text-foreground text-lg">
									Welche Rechte haben Sie bezüglich Ihrer Daten?
								</h4>
								<p className="mb-4 leading-relaxed">
									Sie haben jederzeit das Recht, unentgeltlich Auskunft über
									Herkunft, Empfänger und Zweck Ihrer gespeicherten
									personenbezogenen Daten zu erhalten. Sie haben außerdem ein
									Recht, die Berichtigung oder Löschung dieser Daten zu
									verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung
									erteilt haben, können Sie diese Einwilligung jederzeit für die
									Zukunft widerrufen. Außerdem haben Sie das Recht, unter
									bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
									personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen
									ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
								</p>
								<p className="mb-4 leading-relaxed">
									Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können
									Sie sich jederzeit an uns wenden.
								</p>

								<h3 className="mt-6 mb-2 font-semibold text-foreground text-xl">
									Analyse-Tools und Tools von Dritt­anbietern
								</h3>
								<p className="mb-4 leading-relaxed">
									Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
									ausgewertet werden. Das geschieht vor allem mit sogenannten
									Analyseprogrammen.
								</p>
								<p className="mb-4 leading-relaxed">
									Detaillierte Informationen zu diesen Analyseprogrammen finden
									Sie in der folgenden Datenschutzerklärung.
								</p>
							</div>

							<hr className="border-border/50" />

							<div>
								<h2 className="mb-4 font-bold text-2xl text-foreground">
									2. Hosting
								</h2>

								<h3 className="mt-6 mb-2 font-semibold text-foreground text-xl">
									Externes Hosting
								</h3>
								<p className="mb-4 leading-relaxed">
									Diese Website wird bei einem externen Dienstleister gehostet
									(Hoster). Die personenbezogenen Daten, die auf dieser Website
									erfasst werden, werden auf den Servern des Hosters
									gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
									Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
									Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die
									über eine Website generiert werden, handeln.
								</p>
								<p className="mb-4 leading-relaxed">
									Der Einsatz des Hosters erfolgt zum Zwecke der
									Vertragserfüllung gegenüber unseren potenziellen und
									bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im
									Interesse einer sicheren, schnellen und effizienten
									Bereitstellung unseres Online-Angebots durch einen
									professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern
									eine entsprechende Einwilligung abgefragt wurde, erfolgt die
									Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1
									lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung
									die Speicherung von Cookies oder den Zugriff auf Informationen
									im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne
									des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
								</p>
								<p className="mb-4 leading-relaxed">
									Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie
									dies zur Erfüllung seiner Leistungspflichten erforderlich ist
									und unsere Weisungen in Bezug auf diese Daten befolgen.
								</p>
								<p className="mb-4 leading-relaxed">
									Wir setzen folgenden Hoster ein:
								</p>
								<p className="mb-4 leading-relaxed">
									Microsoft Azure
									<br />
									Microsoft Ireland Operations Limited
									<br />
									70 Sir John Rogerson's Quay
									<br />
									Dublin 2<br />
									Irland
								</p>

								<h4 className="mt-4 mb-2 font-semibold text-foreground text-lg">
									Auftragsverarbeitung
								</h4>
								<p className="mb-4 leading-relaxed">
									Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit
									dem oben genannten Anbieter geschlossen. Hierbei handelt es
									sich um einen datenschutzrechtlich vorgeschriebenen Vertrag,
									der gewährleistet, dass dieser die personenbezogenen Daten
									unserer Websitebesucher nur nach unseren Weisungen und unter
									Einhaltung der DSGVO verarbeitet.
								</p>
							</div>

							<hr className="border-border/50" />

							<div>
								<h2 className="mb-4 font-bold text-2xl text-foreground">
									3. Allgemeine Hinweise und Pflicht­informationen
								</h2>

								<h3 className="mt-6 mb-2 font-semibold text-foreground text-xl">
									Datenschutz
								</h3>
								<p className="mb-4 leading-relaxed">
									Die Betreiber dieser Seiten nehmen den Schutz Ihrer
									persönlichen Daten sehr ernst. Wir behandeln Ihre
									personenbezogenen Daten vertraulich und entsprechend den
									gesetzlichen Datenschutzvorschriften sowie dieser
									Datenschutzerklärung.
								</p>
								<p className="mb-4 leading-relaxed">
									Wenn Sie diese Website benutzen, werden verschiedene
									personenbezogene Daten erhoben. Personenbezogene Daten sind
									Daten, mit denen Sie persönlich identifiziert werden können.
									Die vorliegende Datenschutzerklärung erläutert, welche Daten
									wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
									und zu welchem Zweck das geschieht.
								</p>
								<p className="mb-4 leading-relaxed">
									Wir weisen darauf hin, dass die Datenübertragung im Internet
									(z. B. bei der Kommunikation per E-Mail) Sicherheitslücken
									aufweisen kann. Ein lückenloser Schutz der Daten vor dem
									Zugriff durch Dritte ist nicht möglich.
								</p>

								<h3 className="mt-6 mb-2 font-semibold text-foreground text-xl">
									Hinweis zur verantwortlichen Stelle
								</h3>
								<p className="mb-4 leading-relaxed">
									Die verantwortliche Stelle für die Datenverarbeitung auf
									dieser Website ist:
								</p>
								<p className="mb-4 leading-relaxed">
									Daniel Software GmbH
									<br />
									Im Brand 1A
									<br />
									65719 Hofheim
								</p>
								<p className="mb-4 leading-relaxed">
									Telefon: +49 6192 9999 002
									<br />
									E-Mail: info@daniel.de
								</p>
								<p className="mb-4 leading-relaxed">
									Verantwortliche Stelle ist die natürliche oder juristische
									Person, die allein oder gemeinsam mit anderen über die Zwecke
									und Mittel der Verarbeitung von personenbezogenen Daten (z. B.
									Namen, E-Mail-Adressen o. Ä.) entscheidet.
								</p>

								<h3 className="mt-6 mb-2 font-semibold text-foreground text-xl">
									Speicherdauer
								</h3>
								<p className="mb-4 leading-relaxed">
									Soweit innerhalb dieser Datenschutzerklärung keine speziellere
									Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
									Daten bei uns, bis der Zweck für die Datenverarbeitung
									entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend
									machen oder eine Einwilligung zur Datenverarbeitung
									widerrufen, werden Ihre Daten gelöscht, sofern wir keine
									anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
									personenbezogenen Daten haben (z. B. steuer- oder
									handelsrechtliche Aufbewahrungsfristen); im letztgenannten
									Fall erfolgt die Löschung nach Fortfall dieser Gründe.
								</p>

								<h3 className="mt-6 mb-2 font-semibold text-foreground text-xl">
									Allgemeine Hinweise zu den Rechtsgrundlagen der
									Datenverarbeitung auf dieser Website
								</h3>
								<p className="mb-4 leading-relaxed">
									Sofern Sie in die Datenverarbeitung eingewilligt haben,
									verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von
									Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO,
									sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO
									verarbeitet werden. Sofern Sie in die Speicherung von Cookies
									oder in den Zugriff auf Informationen in Ihr Endgerät (z. B.
									via Device-Fingerprinting) eingewilligt haben, erfolgt die
									Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1
									TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre
									Daten zur Vertragserfüllung oder zur Durchführung
									vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre
									Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des
									Weiteren verarbeiten wir Ihre Daten, sofern diese zur
									Erfüllung einer rechtlichen Verpflichtung erforderlich sind
									auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die
									Datenverarbeitung kann ferner auf Grundlage unseres
									berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO
									erfolgen. Über die jeweils im Einzelfall einschlägigen
									Rechtsgrundlagen wird in den folgenden Absätzen dieser
									Datenschutzerklärung informiert.
								</p>

								<h3 className="mt-6 mb-2 font-semibold text-foreground text-xl">
									Hinweis zur Datenweitergabe in die USA und sonstige
									Drittstaaten
								</h3>
								<p className="mb-4 leading-relaxed">
									Wir verwenden unter anderem Tools von Unternehmen mit Sitz in
									den USA oder sonstigen datenschutzrechtlich nicht sicheren
									Drittstaaten. Wenn diese Tools aktiv sind, können Ihre
									personenbezogene Daten in diese Drittstaaten übertragen und
									dort verarbeitet werden. Wir weisen darauf hin, dass in diesen
									Ländern kein mit der EU vergleichbares Datenschutzniveau
									garantiert werden kann. Beispielsweise sind US-Unternehmen
									dazu verpflichtet, personenbezogene Daten an
									Sicherheitsbehörden herauszugeben, ohne dass Sie als
									Betroffener hiergegen gerichtlich vorgehen könnten. Es kann
									daher nicht ausgeschlossen werden, dass US-Behörden (z. B.
									Geheimdienste) Ihre auf US-Servern befindlichen Daten zu
									Überwachungszwecken verarbeiten, auswerten und dauerhaft
									speichern. Wir haben auf diese Verarbeitungstätigkeiten keinen
									Einfluss.
								</p>

								<h3 className="mt-6 mb-2 font-semibold text-foreground text-xl">
									Widerruf Ihrer Einwilligung zur Datenverarbeitung
								</h3>
								<p className="mb-4 leading-relaxed">
									Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
									ausdrücklichen Einwilligung möglich. Sie können eine bereits
									erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
									der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
									Widerruf unberührt.
								</p>

								<h3 className="mt-6 mb-2 font-semibold text-foreground text-xl">
									Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen
									sowie gegen Direktwerbung (Art. 21 DSGVO)
								</h3>
								<p className="mb-4 uppercase leading-relaxed">
									Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1
									lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht,
									aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
									gegen die Verarbeitung Ihrer personenbezogenen Daten
									Widerspruch einzulegen; dies gilt auch für ein auf diese
									Bestimmungen gestütztes Profiling. Die jeweilige
									Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen
									Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch
									einlegen, werden wir Ihre betroffenen personenbezogenen Daten
									nicht mehr verarbeiten, es sei denn, wir können zwingende
									schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre
									Interessen, Rechte und Freiheiten überwiegen oder die
									Verarbeitung dient der Geltendmachung, Ausübung oder
									Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21
									Abs. 1 DSGVO).
								</p>
								<p className="mb-4 uppercase leading-relaxed">
									Werden Ihre personenbezogenen Daten verarbeitet, um
									Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit
									Widerspruch gegen die Verarbeitung Sie betreffender
									personenbezogener Daten zum Zwecke derartiger Werbung
									einzulegen; dies gilt auch für das Profiling, soweit es mit
									solcher Direktwerbung in Verbindung steht. Wenn Sie
									widersprechen, werden Ihre personenbezogenen Daten
									anschließend nicht mehr zum Zwecke der Direktwerbung verwendet
									(Widerspruch nach Art. 21 Abs. 2 DSGVO).
								</p>

								<h3 className="mt-6 mb-2 font-semibold text-foreground text-xl">
									Beschwerde­recht bei der zuständigen Aufsichts­behörde
								</h3>
								<p className="mb-4 leading-relaxed">
									Im Falle von Verstößen gegen die DSGVO steht den Betroffenen
									ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere
									in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
									Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
									Das Beschwerderecht besteht unbeschadet anderweitiger
									verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
								</p>

								<h3 className="mt-6 mb-2 font-semibold text-foreground text-xl">
									Recht auf Daten­übertrag­barkeit
								</h3>
								<p className="mb-4 leading-relaxed">
									Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
									Einwilligung oder in Erfüllung eines Vertrags automatisiert
									verarbeiten, an sich oder an einen Dritten in einem gängigen,
									maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
									direkte Übertragung der Daten an einen anderen
									Verantwortlichen verlangen, erfolgt dies nur, soweit es
									technisch machbar ist.
								</p>

								<h3 className="mt-6 mb-2 font-semibold text-foreground text-xl">
									SSL- bzw. TLS-Verschlüsselung
								</h3>
								<p className="mb-4 leading-relaxed">
									Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
									Übertragung vertraulicher Inhalte, wie zum Beispiel
									Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
									senden, eine SSL- bzw. TLS-Verschlüsselung. Eine
									verschlüsselte Verbindung erkennen Sie daran, dass die
									Adresszeile des Browsers von „http://“ auf „https://“ wechselt
									und an dem Schloss-Symbol in Ihrer Browserzeile.
								</p>
								<p className="mb-4 leading-relaxed">
									Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können
									die Daten, die Sie an uns übermitteln, nicht von Dritten
									mitgelesen werden.
								</p>

								<h3 className="mt-6 mb-2 font-semibold text-foreground text-xl">
									Auskunft, Löschung und Berichtigung
								</h3>
								<p className="mb-4 leading-relaxed">
									Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
									jederzeit das Recht auf unentgeltliche Auskunft über Ihre
									gespeicherten personenbezogenen Daten, deren Herkunft und
									Empfänger und den Zweck der Datenverarbeitung und ggf. ein
									Recht auf Berichtigung oder Löschung dieser Daten. Hierzu
									sowie zu weiteren Fragen zum Thema personenbezogene Daten
									können Sie sich jederzeit an uns wenden.
								</p>

								<h3 className="mt-6 mb-2 font-semibold text-foreground text-xl">
									Recht auf Einschränkung der Verarbeitung
								</h3>
								<p className="mb-4 leading-relaxed">
									Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
									personenbezogenen Daten zu verlangen. Hierzu können Sie sich
									jederzeit an uns wenden. Das Recht auf Einschränkung der
									Verarbeitung besteht in folgenden Fällen:
								</p>
								<ul className="mb-4 list-disc pl-6 leading-relaxed">
									<li className="mb-2">
										Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
										personenbezogenen Daten bestreiten, benötigen wir in der
										Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung
										haben Sie das Recht, die Einschränkung der Verarbeitung
										Ihrer personenbezogenen Daten zu verlangen.
									</li>
									<li className="mb-2">
										Wenn die Verarbeitung Ihrer personenbezogenen Daten
										unrechtmäßig geschah/geschieht, können Sie statt der
										Löschung die Einschränkung der Datenverarbeitung verlangen.
									</li>
									<li className="mb-2">
										Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen,
										Sie sie jedoch zur Ausübung, Verteidigung oder
										Geltendmachung von Rechtsansprüchen benötigen, haben Sie das
										Recht, statt der Löschung die Einschränkung der Verarbeitung
										Ihrer personenbezogenen Daten zu verlangen.
									</li>
									<li className="mb-2">
										Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO
										eingelegt haben, muss eine Abwägung zwischen Ihren und
										unseren Interessen vorgenommen werden. Solange noch nicht
										feststeht, wessen Interessen überwiegen, haben Sie das
										Recht, die Einschränkung der Verarbeitung Ihrer
										personenbezogenen Daten zu verlangen.
									</li>
								</ul>
								<p className="mb-4 leading-relaxed">
									Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
									eingeschränkt haben, dürfen diese Daten – von ihrer
									Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur
									Geltendmachung, Ausübung oder Verteidigung von
									Rechtsansprüchen oder zum Schutz der Rechte einer anderen
									natürlichen oder juristischen Person oder aus Gründen eines
									wichtigen öffentlichen Interesses der Europäischen Union oder
									eines Mitgliedstaats verarbeitet werden.
								</p>
							</div>

							<hr className="border-border/50" />

							<div>
								<h2 className="mb-4 font-bold text-2xl text-foreground">
									4. Datenerfassung auf dieser Website
								</h2>

								<h3 className="mt-6 mb-2 font-semibold text-foreground text-xl">
									Cookies
								</h3>
								<p className="mb-4 leading-relaxed">
									Unsere Internetseiten verwenden so genannte „Cookies“. Cookies
									sind kleine Textdateien und richten auf Ihrem Endgerät keinen
									Schaden an. Sie werden entweder vorübergehend für die Dauer
									einer Sitzung (Session-Cookies) oder dauerhaft (permanente
									Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies
									werden nach Ende Ihres Besuchs automatisch gelöscht.
									Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis
									Sie diese selbst löschen oder eine automatische Löschung durch
									Ihren Webbrowser erfolgt.
								</p>
								<p className="mb-4 leading-relaxed">
									Teilweise können auch Cookies von Drittunternehmen auf Ihrem
									Endgerät gespeichert werden, wenn Sie unsere Seite betreten
									(Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die
									Nutzung bestimmter Dienstleistungen des Drittunternehmens (z.
									B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
								</p>
								<p className="mb-4 leading-relaxed">
									Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind
									technisch notwendig, da bestimmte Websitefunktionen ohne diese
									nicht funktionieren würden (z. B. die Warenkorbfunktion oder
									die Anzeige von Videos). Andere Cookies dienen dazu, das
									Nutzerverhalten auszuwerten oder Werbung anzuzeigen.
								</p>
								<p className="mb-4 leading-relaxed">
									Cookies, die zur Durchführung des elektronischen
									Kommunikationsvorgangs, zur Bereitstellung bestimmter, von
									Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion)
									oder zur Optimierung der Website (z. B. Cookies zur Messung
									des Webpublikums) erforderlich sind (notwendige Cookies),
									werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
									gespeichert, sofern keine andere Rechtsgrundlage angegeben
									wird. Der Websitebetreiber hat ein berechtigtes Interesse an
									der Speicherung von notwendigen Cookies zur technisch
									fehlerfreien und optimierten Bereitstellung seiner Dienste.
									Sofern eine Einwilligung zur Speicherung von Cookies und
									vergleichbaren Wiedererkennungstechnologien abgefragt wurde,
									erfolgt die Verarbeitung ausschließlich auf Grundlage dieser
									Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
									TTDSG); die Einwilligung ist jederzeit widerrufbar.
								</p>
								<p className="mb-4 leading-relaxed">
									Sie können Ihren Browser so einstellen, dass Sie über das
									Setzen von Cookies informiert werden und Cookies nur im
									Einzelfall erlauben, die Annahme von Cookies für bestimmte
									Fälle oder generell ausschließen sowie das automatische
									Löschen der Cookies beim Schließen des Browsers aktivieren.
									Bei der Deaktivierung von Cookies kann die Funktionalität
									dieser Website eingeschränkt sein.
								</p>
								<p className="mb-4 leading-relaxed">
									Soweit Cookies von Drittunternehmen oder zu Analysezwecken
									eingesetzt werden, werden wir Sie hierüber im Rahmen dieser
									Datenschutzerklärung gesondert informieren und ggf. eine
									Einwilligung abfragen.
								</p>

								<h3 className="mt-6 mb-2 font-semibold text-foreground text-xl">
									Einwilligung mit Usercentrics
								</h3>
								<p className="mb-4 leading-relaxed">
									Diese Website nutzt die Consent-Technologie von Usercentrics,
									um Ihre Einwilligung zur Speicherung bestimmter Cookies auf
									Ihrem Endgerät oder zum Einsatz bestimmter Technologien
									einzuholen und diese datenschutzkonform zu dokumentieren.
									Anbieter dieser Technologie ist die Usercentrics GmbH,
									Sendlinger Straße 7, 80331 München, Website:{" "}
									<a
										href="https://usercentrics.com/de/"
										className="text-primary hover:underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										https://usercentrics.com/de/
									</a>{" "}
									(im Folgenden „Usercentrics“).
								</p>
								<p className="mb-4 leading-relaxed">
									Wenn Sie unsere Website betreten, werden folgende
									personenbezogene Daten an Usercentrics übertragen:
								</p>
								<ul className="mb-4 list-disc pl-6 leading-relaxed">
									<li className="mb-2">
										Ihre Einwilligung(en) bzw. der Widerruf Ihrer
										Einwilligung(en)
									</li>
									<li className="mb-2">Ihre IP-Adresse</li>
									<li className="mb-2">Informationen über Ihren Browser</li>
									<li className="mb-2">Informationen über Ihr Endgerät</li>
									<li className="mb-2">
										Zeitpunkt Ihres Besuchs auf der Website
									</li>
								</ul>
								<p className="mb-4 leading-relaxed">
									Des Weiteren speichert Usercentrics ein Cookie in Ihrem
									Browser, um Ihnen die erteilten Einwilligungen bzw. deren
									Widerruf zuordnen zu können. Die so erfassten Daten werden
									gespeichert, bis Sie uns zur Löschung auffordern, das
									Usercentrics-Cookie selbst löschen oder der Zweck für die
									Datenspeicherung entfällt. Zwingende gesetzliche
									Aufbewahrungspflichten bleiben unberührt.
								</p>
								<p className="mb-4 leading-relaxed">
									Der Einsatz von Usercentrics erfolgt, um die gesetzlich
									vorgeschriebenen Einwilligungen für den Einsatz bestimmter
									Technologien einzuholen. Rechtsgrundlage hierfür ist Art. 6
									Abs. 1 lit. c DSGVO.
								</p>

								<h4 className="mt-4 mb-2 font-semibold text-foreground text-lg">
									Auftragsverarbeitung
								</h4>
								<p className="mb-4 leading-relaxed">
									Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit
									dem oben genannten Anbieter geschlossen. Hierbei handelt es
									sich um einen datenschutzrechtlich vorgeschriebenen Vertrag,
									der gewährleistet, dass dieser die personenbezogenen Daten
									unserer Websitebesucher nur nach unseren Weisungen und unter
									Einhaltung der DSGVO verarbeitet.
								</p>

								<h3 className="mt-6 mb-2 font-semibold text-foreground text-xl">
									Kontaktformular
								</h3>
								<p className="mb-4 leading-relaxed">
									Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
									werden Ihre Angaben aus dem Anfrageformular inklusive der von
									Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
									Anfrage und für den Fall von Anschlussfragen bei uns
									gespeichert. Diese Daten geben wir nicht ohne Ihre
									Einwilligung weiter.
								</p>
								<p className="mb-4 leading-relaxed">
									Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
									Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung
									eines Vertrags zusammenhängt oder zur Durchführung
									vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen
									Fällen beruht die Verarbeitung auf unserem berechtigten
									Interesse an der effektiven Bearbeitung der an uns gerichteten
									Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
									Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese
									abgefragt wurde.
								</p>
								<p className="mb-4 leading-relaxed">
									Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben
									bei uns, bis Sie uns zur Löschung auffordern, Ihre
									Einwilligung zur Speicherung widerrufen oder der Zweck für die
									Datenspeicherung entfällt (z. B. nach abgeschlossener
									Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen
									– insbesondere Aufbewahrungsfristen – bleiben unberührt.
								</p>

								<h3 className="mt-6 mb-2 font-semibold text-foreground text-xl">
									Anfrage per E-Mail, Telefon oder Telefax
								</h3>
								<p className="mb-4 leading-relaxed">
									Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren,
									wird Ihre Anfrage inklusive aller daraus hervorgehenden
									personenbezogenen Daten (Name, Anfrage) zum Zwecke der
									Bearbeitung Ihres Anliegens bei uns gespeichert und
									verarbeitet. Diese Daten geben wir nicht ohne Ihre
									Einwilligung weiter.
								</p>
								<p className="mb-4 leading-relaxed">
									Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
									Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung
									eines Vertrags zusammenhängt oder zur Durchführung
									vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen
									Fällen beruht die Verarbeitung auf unserem berechtigten
									Interesse an der effektiven Bearbeitung der an uns gerichteten
									Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
									Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese
									abgefragt wurde.
								</p>
								<p className="mb-4 leading-relaxed">
									Die von Ihnen an uns per Kontaktanfragen übersandten Daten
									verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
									Einwilligung zur Speicherung widerrufen oder der Zweck für die
									Datenspeicherung entfällt (z. B. nach abgeschlossener
									Bearbeitung Ihres Anliegens). Zwingende gesetzliche
									Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen –
									bleiben unberührt.
								</p>
							</div>

							<hr className="border-border/50" />

							<div>
								<h2 className="mb-4 font-bold text-2xl text-foreground">
									5. Analyse-Tools und Werbung
								</h2>

								<h3 className="mt-6 mb-2 font-semibold text-foreground text-xl">
									Google Ads
								</h3>
								<p className="mb-4 leading-relaxed">
									Der Websitebetreiber verwendet Google Ads. Google Ads ist ein
									Online-Werbeprogramm der Google Ireland Limited („Google“),
									Gordon House, Barrow Street, Dublin 4, Irland.
								</p>
								<p className="mb-4 leading-relaxed">
									Google Ads ermöglicht es uns Werbeanzeigen in der
									Google-Suchmaschine oder auf Drittwebseiten auszuspielen, wenn
									der Nutzer bestimmte Suchbegriffe bei Google eingibt
									(Keyword-Targeting). Ferner können zielgerichtete
									Werbeanzeigen anhand der bei Google vorhandenen Nutzerdaten
									(z. B. Standortdaten und Interessen) ausgespielt werden
									(Zielgruppen-Targeting). Wir als Websitebetreiber können diese
									Daten quantitativ auswerten, indem wir beispielsweise
									analysieren, welche Suchbegriffe zur Ausspielung unserer
									Werbeanzeigen geführt haben und wie viele Anzeigen zu
									entsprechenden Klicks geführt haben.
								</p>
								<p className="mb-4 leading-relaxed">
									Die Nutzung von Google Ads erfolgt auf Grundlage von Art. 6
									Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
									Interesse an einer möglichst effektiven Vermarktung seiner
									Dienstleistung Produkte.
								</p>
								<p className="mb-4 leading-relaxed">
									Die Datenübertragung in die USA wird auf die
									Standardvertragsklauseln der EU-Kommission gestützt. Details
									finden Sie hier:{" "}
									<a
										href="https://policies.google.com/privacy/frameworks"
										className="text-primary hover:underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										https://policies.google.com/privacy/frameworks
									</a>{" "}
									und{" "}
									<a
										href="https://privacy.google.com/businesses/controllerterms/mccs/"
										className="text-primary hover:underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										https://privacy.google.com/businesses/controllerterms/mccs/
									</a>
									.
								</p>
							</div>
						</div>
					</FadeInUp>
				</div>
			</section>
		</>
	);
}
