import { IconButton } from "@/components/buttons/IconButton";
import { NavLink } from "@/components/navigation/NavLink";
import { HomeIcon, LogInIcon, UsersIcon } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 p-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-xl font-semibold">Squadbuilder</span>
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          <nav aria-label="Main navigation" className="flex gap-2">
            <NavLink href="/" active icon={<HomeIcon size={16} />}>
              Home
            </NavLink>
            <NavLink href="/squads" icon={<UsersIcon size={16} />}>
              Squads
            </NavLink>
          </nav>

          <IconButton icon={<LogInIcon size={16} className="text-accent" />}>
            Sign in with Google
          </IconButton>
        </div>
      </div>
    </header>
  );
}
