import type { ReactNode } from "react";

type IconButtonProps = {
  children: ReactNode;
  icon: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export function IconButton({
  children,
  icon,
  onClick,
  disabled,
}: IconButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="inline-flex cursor-pointer items-center font-medium gap-2 border border-border px-4 py-2 text-sm  hover:bg-surface-hover"
    >
      {icon}
      {children}
    </button>
  );
}
