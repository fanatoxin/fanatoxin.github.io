import { Pitch, getPitchByName, isSyllable } from "./music.ts";

export const tuning: Pitch[] = [
  getPitchByName["CL"],
  getPitchByName("E4"), // 1st
  getPitchByName("B3"), // 2nd
  getPitchByName("G3"), // 3rd
  getPitchByName("D3"), // 4th
  getPitchByName("A2"), // 5th
  getPitchByName("E2"), // 6th
];

export function getFretByMnn(str: number, mnn: number): number {
  if (1 <= str && str <= 6 && 0 <= mnn && mnn <= 127) {
    return mnn - tuning[str].mnn;
  } else {
    return 0;
  }
}

export function getFretBySyllable(str: number, syllable: string): number {
  if (isSyllable(syllable)) {
    return 0; // todo: Implement It!
  } else {
    return 0;
  }
}