import type { Formation } from "@/types/formation";

export const formations: Formation[] = [
  {
    name: "2-3-1",
    positions: [
      { id: "gk", label: "GK", x: 50, y: 88 },
      { id: "cb1", label: "CB", x: 65, y: 70 },
      { id: "cb2", label: "CB", x: 35, y: 70 },
      { id: "rm", label: "RM", x: 80, y: 50 },
      { id: "cm", label: "CM", x: 50, y: 50 },
      { id: "lm", label: "LM", x: 20, y: 50 },
      { id: "st", label: "ST", x: 50, y: 22 },
    ],
  },
  {
    name: "3-2-1",
    positions: [
      { id: "gk", label: "GK", x: 50, y: 88 },
      { id: "cb1", label: "CB", x: 70, y: 70 },
      { id: "cb2", label: "CB", x: 50, y: 70 },
      { id: "cb3", label: "CB", x: 30, y: 70 },
      { id: "cm1", label: "CM", x: 62, y: 48 },
      { id: "cm2", label: "CM", x: 38, y: 48 },
      { id: "st", label: "ST", x: 50, y: 22 },
    ],
  },
];
