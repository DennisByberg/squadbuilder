import { PlayerSlot } from "@/components/PlayerSlot";
import type { Formation } from "@/types/formation";

type PitchProps = {
  formation: Formation;
};

export function Pitch({ formation }: PitchProps) {
  return (
    <div className="relative mx-auto w-full max-w-sm aspect-2/3 overflow-hidden rounded-lg border border-border bg-pitch shadow-lg">
      {/* Pitch markings */}
      <div className="pointer-events-none absolute inset-0">
        {/* Outer border */}
        <div className="absolute inset-4 border border-pitch-lines" />
        {/* Halfway line */}
        <div className="absolute left-4 right-4 top-1/2 border-t border-pitch-lines" />
        {/* Center circle */}
        <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-pitch-lines" />
        {/* Center dot */}
        <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pitch-lines" />
        {/* Top penalty area */}
        <div className="absolute left-1/2 top-4 h-[18%] w-[55%] -translate-x-1/2 border border-pitch-lines" />
        {/* Bottom penalty area */}
        <div className="absolute bottom-4 left-1/2 h-[18%] w-[55%] -translate-x-1/2 border border-pitch-lines" />
      </div>

      {/* Player slots */}
      {formation.positions.map((position) => (
        <PlayerSlot key={position.id} position={position} />
      ))}
    </div>
  );
}
