import { Pitch, getPitch } from "./music.ts";

export const tuning: Pitch[] = [
  getPitch["CL"],
  getPitch("E4"), // 1st
  getPitch("B3"), // 2nd
  getPitch("G3"), // 3rd
  getPitch("D3"), // 4th
  getPitch("A2"), // 5th
  getPitch("E2"), // 6th
];

export function getFret(str: number, mnn: number): number {
  if (1 <= str && str <= 6 && 0 <= mnn && mnn <= 127) {
    return mnn - tuning[str].mnn;
  } else {
    return 0;
  }
}