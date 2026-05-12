import Link from "next/link";
import type { ReactNode } from "react";

type LinkButtonProps = {
  children: ReactNode;
  href: string;
  icon?: ReactNode;
  variant?: "default" | "nav";
  active?: boolean;
  className?: string;
};

export function LinkButton({
  children,
  href,
  icon,
  variant = "default",
  active = false,
  className,
}: LinkButtonProps) {
  const baseClassName =
    variant === "nav"
      ? active
        ? `inline-flex items-center gap-2 bg-surface px-3 py-2 text-sm font-medium ${className ?? ""}`
        : `inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted hover:bg-surface hover:text-foreground ${className ?? ""}`
      : `inline-flex cursor-pointer items-center gap-2 border border-border px-4 py-2 text-sm font-medium hover:bg-surface-hover ${className ?? ""}`;

  return (
    <Link
      href={href}
      aria-current={variant === "nav" && active ? "page" : undefined}
      className={baseClassName}
    >
      {children}
      {variant !== "nav" && icon}
      {variant === "nav" && icon && <span className="order-first">{icon}</span>}
    </Link>
  );
}
