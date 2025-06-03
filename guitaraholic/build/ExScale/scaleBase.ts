import { Interval, getInterval } from "../music.ts";

export class ScaleBase {
  name: string;
  abbr: string;
  intervals: Interval[];

  constructor(name: string, abbr: string, intervalNames: string[] | null) {
    this.name = name;
    this.abbr = abbr;
    this.intervals = [];
    if (intervalNames && 0 < intervalNames.length) {
      for (name of intervalNames) {
        this.intervals.push(getInterval(name));
      }
    }
  }

  getInterval(index: number): Interval {
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

export const scaleBases: ScaleBase[] = [
  new ScaleBase("Ionian", "ion", [
    "per1",
    "maj2",
    "maj3",
    "per4",
    "per5",
    "maj6",
    "maj7",
  ]),
  new ScaleBase("Dorian", "dor", [
    "per1",
    "maj2",
    "min3",
    "per4",
    "per5",
    "maj6",
    "min7",
  ]),
  new ScaleBase("Phrygian", "phr", []),
  new ScaleBase("Lydian", "lyd", []),
  new ScaleBase("Mixolydian", "mixlyd", []),
  new ScaleBase("Aeolian", "aeo", []),
  new ScaleBase("Locrian", "loc", []),
  new ScaleBase("Harmonic Minor", "harmin", []),
  new ScaleBase("Melodic Minor", "mermin", []),
  new ScaleBase("Phrygian Dominant", "phrdom", []),
  new ScaleBase("Lydian Dominant", "lyddom", []),
  new ScaleBase("Super Locrian", "suploc", []),
  new ScaleBase("Whole Tone", "wt", [
    "per1",
    "maj2",
    "maj3",
    "aug4",
    "aug5",
    "aug6",
  ]),
  new ScaleBase("Diminished", "dim", []),
  new ScaleBase("Major Pentatonic", "majpen", []),
  new ScaleBase("Minor Pentatonic", "minpen", []),
];
