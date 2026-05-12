import type { Position } from "@/types/formation";

type PlayerSlotProps = {
  position: Position;
};

export function PlayerSlot({ position }: PlayerSlotProps) {
  return (
    <div
      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
    >
      <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border bg-surface-hover text-muted transition-colors hover:border-red hover:text-foreground">
        <span className="text-lg leading-none">+</span>
      </div>
      <span className="text-xs font-medium text-muted">{position.label}</span>
    </div>
  );
}
