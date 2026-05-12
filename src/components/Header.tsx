"use client";

import { Button } from "@/components/buttons/Button";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { NavLink } from "@/components/navigation/NavLink";
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
          <span className="text-xl font-semibold">SquadBuilder</span>
        </Link>

        <button
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex cursor-pointer items-center justify-center border border-border p-2 text-foreground hover:bg-surface-hover md:hidden"
        >
          {menuIcon}
        </button>

        {/* --- Desktop navigation --- */}
        <div className="hidden flex-wrap items-center gap-3 md:flex">
          <nav aria-label="Main navigation" className="flex gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                active={pathname === link.href}
                icon={link.icon}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <Button icon={<GoogleIcon />}>Sign in with Google</Button>
        </div>
      </div>

      {/* --- Mobile navigation --- */}
      {isMenuOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-border md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-3 p-4">
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  active={pathname === link.href}
                  icon={link.icon}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <Button icon={<GoogleIcon />}>Sign in with Google</Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
