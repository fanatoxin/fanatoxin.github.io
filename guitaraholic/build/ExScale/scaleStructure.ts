import { Interval, getIntervalByName } from "../music.ts";

export class ScaleStructure {
  name: string;
  abbr: string;
  intervals: Interval[];

  constructor(name: string, abbr: string, intervalNames: string[] | null) {
    this.name = name;
    this.abbr = abbr;
    this.intervals = [];
    if (intervalNames && 0 < intervalNames.length) {
      for (name of intervalNames) {
        this.intervals.push(getIntervalByName(name));
      }
    }
  }

  getIntervalByName(index: number): Interval {
    let subIndex = index;
    while (subIndex < 0) {
      subIndex += this.intervals.length;
    }
    if (this.intervals.length <= subIndex) {
      subIndex %= this.intervals.length;
    }
    return this.intervals[subIndex];
  }
}

export const scaleStructures: ScaleStructure[] = [
  new ScaleStructure("Ionian", "ion", [
    "per1",
    "maj2",
    "maj3",
    "per4",
    "per5",
    "maj6",
    "maj7",
  ]),
  new ScaleStructure("Dorian", "dor", [
    "per1",
    "maj2",
    "min3",
    "per4",
    "per5",
    "maj6",
    "min7",
  ]),
  new ScaleStructure("Phrygian", "phr", []),
  new ScaleStructure("Lydian", "lyd", []),
  new ScaleStructure("Mixolydian", "mixlyd", []),
  new ScaleStructure("Aeolian", "aeo", []),
  new ScaleStructure("Locrian", "loc", []),
  new ScaleStructure("Harmonic Minor", "harmin", []),
  new ScaleStructure("Melodic Minor", "mermin", []),
  new ScaleStructure("Phrygian Dominant", "phrdom", []),
  new ScaleStructure("Lydian Dominant", "lyddom", []),
  new ScaleStructure("Super Locrian", "suploc", []),
  new ScaleStructure("Whole Tone", "wt", [
    "per1",
    "maj2",
    "maj3",
    "aug4",
    "aug5",
    "aug6",
  ]),
  new ScaleStructure("Diminished", "dim", []),
  new ScaleStructure("Major Pentatonic", "majpen", []),
  new ScaleStructure("Minor Pentatonic", "minpen", []),
];
