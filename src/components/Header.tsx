"use client";

import { Button } from "@/components/ui/button";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { HouseIcon } from "@/components/icons/HouseIcon";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { UsersIcon } from "@/components/icons/UsersIcon";
import { XIcon } from "@/components/icons/XIcon";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home", icon: <HouseIcon size={16} /> },
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
    <header className="bg-background">
      {/* Top bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <div className="flex flex-1">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/squad-builder-logo.png"
            alt="Squadbuilder logo"
            width={40}
            height={40}
          />
        </Link>
        </div>

        <Button
          variant="ghost"
          size="icon"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="md:hidden"
        >
          {menuIcon}
        </Button>

        {/* Desktop navigation */}
        <nav aria-label="Main navigation" className="hidden gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-surface text-foreground"
                  : "text-muted hover:bg-surface hover:text-foreground"
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden flex-1 justify-end md:flex">
          <Button variant="outline">
            <GoogleIcon />
            Sign in
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        className={`fixed inset-0 top-18.25 z-50 flex flex-col items-center justify-center gap-8 bg-background transition-opacity duration-200 md:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex w-full flex-col gap-2"
          onClick={() => setIsMenuOpen(false)}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`inline-flex w-full items-center justify-center gap-2 px-3 py-4 text-lg font-medium transition-colors ${
                pathname === link.href
                  ? "bg-surface text-foreground"
                  : "text-muted hover:bg-surface hover:text-foreground"
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>

        <Button variant="outline">
          <GoogleIcon />
          Sign in with Google
        </Button>
      </div>
    </header>
  );
}
