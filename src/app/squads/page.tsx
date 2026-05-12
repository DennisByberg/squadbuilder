"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pitch } from "@/components/Pitch";
import { formations } from "@/lib/formations";
import { useState } from "react";

export default function SquadsPage() {
  const [selectedFormation, setSelectedFormation] = useState(formations[0]);

  return (
    <div className="flex flex-1 flex-col items-center gap-6 py-8">
      {/* --- Formation selector --- */}
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium text-muted">Formation</span>
        <Select
          value={selectedFormation.name}
          onValueChange={(value) => {
            const formation = formations.find((f) => f.name === value);
            if (formation) setSelectedFormation(formation);
          }}
        >
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {formations.map((f) => (
              <SelectItem key={f.name} value={f.name}>
                {f.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* --- Pitch --- */}
      <Pitch formation={selectedFormation} />
    </div>
  );
}
