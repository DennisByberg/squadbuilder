"use client";

import { Button } from "@/components/buttons/Button";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { NavLink } from "@/components/navigation/NavLink";
import { HomeIcon, MenuIcon, UsersIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuIcon = isMenuOpen ? (
    <XIcon size={20} aria-hidden="true" />
  ) : (
    <MenuIcon size={20} aria-hidden="true" />
  );

  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 p-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-xl font-semibold">Squadbuilder</span>
        </Link>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex cursor-pointer items-center justify-center border border-border p-2 text-foreground hover:bg-surface-hover md:hidden"
        >
          {menuIcon}
        </button>

        <div className="hidden flex-wrap items-center gap-3 md:flex">
          <nav aria-label="Main navigation" className="flex gap-2">
            <NavLink href="/" active icon={<HomeIcon size={16} />}>
              Home
            </NavLink>
            <NavLink href="/squads" icon={<UsersIcon size={16} />}>
              Squads
            </NavLink>
          </nav>

          <Button icon={<GoogleIcon />}>
            Sign in with Google
          </Button>
        </div>
      </div>

      {isMenuOpen ? (
        <div id="mobile-navigation" className="border-t border-border md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 p-4">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
              <NavLink href="/" active icon={<HomeIcon size={16} />}>
                Home
              </NavLink>
              <NavLink href="/squads" icon={<UsersIcon size={16} />}>
                Squads
              </NavLink>
            </nav>

            <Button icon={<GoogleIcon />}>
              Sign in with Google
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
