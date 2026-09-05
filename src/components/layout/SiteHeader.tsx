"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";
import { headerCta, primaryNav } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-border/70 bg-cream/95 sticky top-0 z-40 border-b backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <Button href={headerCta.href} className="px-5 py-2.5 text-xs">
                {headerCta.label}
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={open}
              className="text-navy inline-flex h-10 w-10 items-center justify-center lg:hidden"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <nav className="hidden items-center gap-6 pb-4 lg:flex">
          {primaryNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative py-1 text-xs font-semibold tracking-[0.08em] text-ink-soft uppercase transition-colors hover:text-navy",
                  "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-olive after:transition-transform after:duration-200 hover:after:scale-x-100",
                  active && "text-navy after:scale-x-100",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </Container>

      {open ? (
        <div className="border-border/70 bg-cream border-t lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-stone hover:text-navy",
                  pathname === item.href && "bg-stone text-navy",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button href={headerCta.href} className="mt-3 sm:hidden">
              {headerCta.label}
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
