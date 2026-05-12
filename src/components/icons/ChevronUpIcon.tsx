type ChevronUpIconProps = {
  size?: number;
  className?: string;
};

export function ChevronUpIcon({ size = 16, className }: ChevronUpIconProps) {
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
      <path d="m18 15l-6-6l-6 6" />
    </svg>
  );
}
