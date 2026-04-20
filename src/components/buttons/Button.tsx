import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="cursor-pointer border border-border font-medium px-4 py-2 text-sm hover:bg-surface-hover"
    >
      {children}
    </button>
  );
}
