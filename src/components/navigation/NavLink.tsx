import Link from "next/link";
import type { ReactNode } from "react";

type NavLinkProps = {
  children: ReactNode;
  href: string;
  active?: boolean;
  icon?: ReactNode;
};

export function NavLink({
  children,
  href,
  active = false,
  icon,
}: NavLinkProps) {
  const className = active
    ? "inline-flex items-center gap-2 bg-surface px-3 font-medium py-2 text-sm"
    : "inline-flex items-center gap-2 px-3 py-2 text-sm text-muted hover:bg-surface font-medium hover:text-foreground";

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={className}
    >
      {icon}
      {children}
    </Link>
  );
}
