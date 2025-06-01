export type Position = {
  str: number;
  fret: number;
  degree: number;
};

export class Pattern {
  name: string;
  positions: Position[];
}

export class ScalePattern {
  name: string;
  key: string;
  patterns: Pattern[];
}
