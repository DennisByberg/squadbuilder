type MenuIconProps = {
  size?: number;
  className?: string;
};

export function MenuIcon({ size = 16, className }: MenuIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 5h16M4 12h16M4 19h16" />
    </svg>
  );
}
