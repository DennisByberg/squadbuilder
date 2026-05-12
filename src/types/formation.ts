export type Position = {
  id: string;
  label: string;
  x: number; // percentage from left (0-100)
  y: number; // percentage from top (0-100)
};

export type Formation = {
  name: string;
  positions: Position[];
};
