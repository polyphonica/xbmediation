import type { PageMeta } from "@/types/content";

export const meta: PageMeta = {
  title: "Datenschutzerklärung – XB Mediation",
  description: "Datenschutzerklärung gemäß DSGVO.",
};

// TODO before launch: replace the address placeholder and confirm the
// retention period with the client; update the hosting sentence once the
// IONOS server/domain is live.
export const sections = [
  {
    heading: "1. Verantwortlicher",
    paragraphs: [
      "Verantwortlich für die Datenverarbeitung auf dieser Website ist:",
      "Xaver Behl, XB Mediation, [Anschrift – bitte ergänzen], E-Mail: kontakt@xb-mediation.de",
    ],
  },
  {
    heading: "2. Erhebung und Verarbeitung von Daten über das Kontaktformular",
    paragraphs: [
      "Wenn Sie das Kontaktformular auf dieser Website nutzen, erheben und verarbeiten wir folgende Daten: Name, E-Mail-Adresse, optional Ihre Telefonnummer, Ihr Anliegen sowie – sofern angegeben – der Bereich, zu dem Sie sich informieren möchten (Familienmediation, Wirtschaftsmediation oder unsicher), und der Zeitpunkt der Übermittlung.",
    ],
  },
  {
    heading: "3. Zweck und Rechtsgrundlage der Verarbeitung",
    paragraphs: [
      "Die Verarbeitung dient der Bearbeitung Ihrer Anfrage und der Kontaktaufnahme im Rahmen der Anbahnung einer Mediation. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahme) sowie, soweit erforderlich, Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung eingehender Anfragen).",
      "Da es sich bei Mediationsanliegen häufig um sensible persönliche Informationen handelt, behandeln wir alle über das Formular übermittelten Angaben mit besonderer Vertraulichkeit und geben sie nicht an Dritte weiter.",
    ],
  },
  {
    heading: "4. Speicherort und Speicherdauer",
    paragraphs: [
      "Ihre Daten werden auf einem Server gespeichert, der von uns selbst betrieben wird und sich in Deutschland befindet. Es erfolgt keine Übermittlung an Cloud-Anbieter außerhalb der EU.",
      "Ihre Anfrage wird gespeichert, bis Ihr Anliegen abschließend bearbeitet wurde, längstens jedoch für [Zeitraum – bitte festlegen, z. B. 12 Monate], sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Sie können jederzeit die Löschung Ihrer Daten verlangen.",
    ],
  },
  {
    heading: "5. Keine Cookies, kein Tracking",
    paragraphs: [
      "Diese Website verwendet keine Analyse- oder Marketing-Cookies und bindet keine Dienste Dritter ein, die Ihr Verhalten auf dieser Seite nachverfolgen. Schriftarten werden lokal ausgeliefert und nicht von externen Servern geladen.",
    ],
  },
  {
    heading: "6. Ihre Rechte",
    paragraphs: [
      "Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten sowie ein Widerspruchsrecht gegen die Verarbeitung. Zudem haben Sie das Recht auf Datenübertragbarkeit und das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.",
    ],
  },
  {
    heading: "7. Kontakt",
    paragraphs: [
      "Bei Fragen zum Datenschutz wenden Sie sich bitte an: kontakt@xb-mediation.de",
    ],
  },
] as const;
