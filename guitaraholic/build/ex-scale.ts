import { Interval, getInterval } from "./music";

export type Position = {
  str: number;
  fret: number;
};

export class Pattern {
  name: string;
  positions: Position[];
}

export class Scale {
  name: string;
  abbr: string;
  intervals: Interval[];
  patterns: Pattern[];

  constructor(name: string, abbr: string, intervalNames: string[] | null) {
    this.name = name;
    this.abbr = abbr;
    this.intervals = [];
    if (intervalNames && 0 < intervalNames.length) {
      const interval = getInterval(name);
      if (interval) {
        this.intervals.push(interval);
      }
    }
  }

  getInterval(degree: number): Interval | null {
    if (0 < degree && degree <= this.intervals.length) {
      return this.intervals[degree - 1];
    } else {
      return null;
    }
  }
}

export let scales: Scale[] = [
  new Scale(
    "Ionian",
    "ion",
    ["per1", "maj2", "maj3", "per4", "per5", "maj6", "maj7"]
  ),
  new Scale(
    "Dorian",
    "dor",
    ["per1", "maj2", "min3", "per4", "per5", "maj6", "min7"]
  ),
  new Scale("Phrygian", "phr", []),
  new Scale("Lydian", "lyd", []),
  new Scale("Mixolydian", "mixlyd", []),
  new Scale("Aeolian", "aeo", []),
  new Scale("Locrian", "loc", []),
  new Scale("Harmonic Minor", "harmin", []),
  new Scale("Melodic Minor", "mermin", []),
  new Scale("Phrygian Dominant", "phrdom", []),
  new Scale("Lydian Dominant", "lyddom", []),
  new Scale("Super Locrian", "suploc", []),
  new Scale(
    "Whole Tone",
    "wt",
    ["per1", "maj2", "maj3", "aug4", "aug5", "aug6"]
  ),
  new Scale("Diminished", "dim", []),
  new Scale("Major Pentatonic", "majpen", []),
  new Scale("Minor Pentatonic", "minpen", []),
];
