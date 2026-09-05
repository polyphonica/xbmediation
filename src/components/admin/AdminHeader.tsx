import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { logout } from "@/app/admin/actions";

export function AdminHeader() {
  return (
    <header className="bg-navy">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="font-display text-sm font-medium text-cream">
            XB Mediation <span className="text-cream/50">Admin</span>
          </span>
          <nav className="flex items-center gap-5">
            <Link href="/admin" className="text-sm text-cream/75 hover:text-cream">
              Anfragen
            </Link>
            <Link
              href="/admin/settings"
              className="text-sm text-cream/75 hover:text-cream"
            >
              Einstellungen
            </Link>
          </nav>
        </div>
        <form action={logout}>
          <button type="submit" className="text-sm text-cream/75 hover:text-cream">
            Abmelden
          </button>
        </form>
      </Container>
    </header>
  );
}
