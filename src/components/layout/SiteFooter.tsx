import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { legalNav, primaryNav, site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy bg-grain relative">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div>
          <Logo tone="light" />
          <p className="mt-5 text-sm leading-relaxed text-cream/60">
            {site.locations.join(" · ")}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-cream/60">
            {site.serviceArea}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-cream/40 uppercase">
            Navigation
          </p>
          <ul className="mt-4 space-y-2.5">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-cream/75 transition-colors hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-cream/40 uppercase">
            Rechtliches
          </p>
          <ul className="mt-4 space-y-2.5">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-cream/75 transition-colors hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-cream/40 uppercase">
            Kontakt
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/75">
            <li>{site.mediatorName}</li>
            <li>{site.phone}</li>
            <li>{site.email}</li>
            <li className="pt-1 text-cream/50">{site.appointmentNote}</li>
          </ul>
        </div>
      </Container>

      <div className="border-cream/10 relative border-t py-6">
        <Container>
          <p className="text-xs text-cream/45">
            © {year} {site.name}. Alle Rechte vorbehalten.
          </p>
        </Container>
      </div>
    </footer>
  );
}
