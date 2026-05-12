"use client";

import { Button } from "@/components/buttons/Button";
import { LinkButton } from "@/components/buttons/LinkButton";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { HomeIcon, MenuIcon, UsersIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home", icon: <HomeIcon size={16} /> },
  { href: "/squads", label: "Squads", icon: <UsersIcon size={16} /> },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuIcon = isMenuOpen ? (
    <XIcon size={20} aria-hidden="true" />
  ) : (
    <MenuIcon size={20} aria-hidden="true" />
  );

  return (
    <header className="border-b border-border bg-background">
      {/* --- Top bar --- */}
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 p-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/squad-builder-logo.png"
            alt="Squadbuilder logo"
            width={40}
            height={40}
          />
        </Link>

        <button
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex cursor-pointer items-center justify-center p-2 text-foreground hover:bg-surface-hover md:hidden"
        >
          {menuIcon}
        </button>

        {/* --- Desktop navigation --- */}
        <div className="hidden flex-wrap items-center gap-3 md:flex">
          <nav aria-label="Main navigation" className="flex gap-2">
            {navLinks.map((link) => (
              <LinkButton
                key={link.href}
                href={link.href}
                variant="nav"
                active={pathname === link.href}
                icon={link.icon}
              >
                {link.label}
              </LinkButton>
            ))}
          </nav>

          <Button icon={<GoogleIcon />}>Sign in with Google</Button>
        </div>
      </div>

      {/* --- Mobile navigation --- */}
      {isMenuOpen ? (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-18.25 z-50 flex flex-col items-center justify-center gap-8 bg-background md:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="flex w-full flex-col gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            {navLinks.map((link) => (
              <LinkButton
                key={link.href}
                href={link.href}
                variant="nav"
                active={pathname === link.href}
                icon={link.icon}
                className="w-full justify-center py-4 text-lg"
              >
                {link.label}
              </LinkButton>
            ))}
          </nav>

          <Button icon={<GoogleIcon />}>Sign in with Google</Button>
        </div>
      ) : null}
    </header>
  );
}
