type ChevronDownIconProps = {
  size?: number;
  className?: string;
};

export function ChevronDownIcon({ size = 16, className }: ChevronDownIconProps) {
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
      <path d="m6 9l6 6l6-6" />
    </svg>
  );
}
