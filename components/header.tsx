"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useMobile } from "@/hooks/use-mobile";

export default function Header() {
  const pathname = usePathname();
  const isMobile = useMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isActiveLink = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/75 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="relative flex items-center">
          <span className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-2xl" />
          <img
            src="/images/logo_black.png"
            alt="Logo"
            className="block h-auto w-28 dark:hidden sm:w-32 md:w-40"
          />
          <img
            src="/images/logo_white.png"
            alt="Logo"
            className="hidden h-auto w-28 dark:block sm:w-32 md:w-40"
          />
        </Link>

        {isMobile ? (
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="h-11 w-11 rounded-full border border-border/80 bg-card/80 text-foreground shadow-sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>

            {isMenuOpen && (
              <div className="fixed inset-0 top-20 z-50 bg-background/95 px-4 py-6 backdrop-blur-xl">
                <div className="mx-auto flex max-w-xl flex-col rounded-3xl border border-border/70 bg-card/80 p-6 shadow-2xl shadow-black/20">
                  <nav className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`rounded-2xl px-4 py-3 text-base font-medium transition-all ${
                          isActiveLink(item.href)
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-accent/30 hover:text-foreground"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                  >
                    Let&apos;s talk
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <nav className="flex items-center gap-1 rounded-full border border-border/70 bg-card/70 p-1.5 shadow-sm">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    isActiveLink(item.href)
                      ? "bg-primary/10 text-primary shadow-sm"
                      : "text-muted-foreground hover:bg-accent/40 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/20"
            >
              Let&apos;s talk
              <ArrowRight className="h-4 w-4" />
            </Link>
            <ThemeToggle />
          </div>
        )}
      </div>
    </header>
  );
}
