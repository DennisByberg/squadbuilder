type ArrowRightIconProps = {
  size?: number;
};

export function ArrowRightIcon({ size = 16 }: ArrowRightIconProps) {
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
    >
      <path d="M5 12h14m-7-7l7 7l-7 7" />
    </svg>
  );
}
