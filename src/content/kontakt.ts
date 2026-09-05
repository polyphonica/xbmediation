import type { PageMeta } from "@/types/content";

export const meta: PageMeta = {
  title: "Kontakt – XB Mediation",
  description:
    "Nehmen Sie Kontakt auf: telefonisch, per E-Mail oder über das Kontaktformular. Termine nach Vereinbarung, persönlich oder online.",
};

export const pageHeading = "Kontakt";
export const intro =
  "Der erste Schritt muss noch keine Lösung sein. Sie möchten herausfinden, ob Mediation für Ihre Situation geeignet ist? Dann nehmen Sie gerne Kontakt mit mir auf. Gemeinsam können wir klären, ob Mediation ein sinnvoller Weg ist.";

export const formHeading = "Nachricht senden";
export const submitLabel = "Nachricht senden";
export const consentText =
  "Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer Datenschutzerklärung zu.";
export const successMessage =
  "Vielen Dank für Ihre Nachricht. Ich melde mich zeitnah bei Ihnen.";

export const areaOptions = [
  { value: "FAMILIE", label: "Familienmediation" },
  { value: "WIRTSCHAFT", label: "Wirtschaftsmediation" },
  { value: "UNSICHER", label: "Ich bin mir noch nicht sicher" },
] as const;
