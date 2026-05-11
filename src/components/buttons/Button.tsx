import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({ children, icon, onClick, disabled }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="inline-flex cursor-pointer items-center gap-2 border border-border px-4 py-2 text-sm font-medium hover:bg-surface-hover"
    >
      {icon}
      {children}
    </button>
  );
}
