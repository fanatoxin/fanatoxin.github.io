export type Interval = {
  name: string;
  degree: number;
  step: number;
};

// 音程名と半音数
// 音程名は maj, min, per, aug, dim + 度数です.
export const intervals: Interval[] = [
  { name: "per1", degree: 1, step: 0 },
  { name: "dim2", degree: 2, step: 0 },
  { name: "min2", degree: 2, step: 1 },
  { name: "aug1", degree: 1, step: 1 },
  { name: "maj2", degree: 2, step: 2 },
  { name: "dim3", degree: 3, step: 2 },
  { name: "min3", degree: 3, step: 3 },
  { name: "aug2", degree: 2, step: 3 },
  { name: "maj3", degree: 3, step: 4 },
  { name: "dim4", degree: 4, step: 4 },
  { name: "per4", degree: 4, step: 5 },
  { name: "aug3", degree: 3, step: 5 },
  { name: "dim5", degree: 5, step: 6 },
  { name: "aug4", degree: 4, step: 6 },
  { name: "per5", degree: 5, step: 7 },
  { name: "dim6", degree: 6, step: 7 },
  { name: "min6", degree: 6, step: 8 },
  { name: "aug5", degree: 5, step: 8 },
  { name: "maj6", degree: 6, step: 9 },
  { name: "dim7", degree: 7, step: 9 },
  { name: "min7", degree: 7, step: 10 },
  { name: "aug6", degree: 6, step: 10 },
  { name: "maj7", degree: 7, step: 11 },
  { name: "dim8", degree: 8, step: 11 },
  { name: "per8", degree: 8, step: 12 },
  { name: "dim9", degree: 9, step: 12 },
  { name: "min9", degree: 9, step: 13 },
  { name: "aug8", degree: 8, step: 13 },
  { name: "maj9", degree: 9, step: 14 },
  { name: "dim10", degree: 10, step: 14 },
  { name: "min10", degree: 10, step: 15 },
  { name: "aug9", degree: 9, step: 15 },
  { name: "maj10", degree: 10, step: 16 },
  { name: "dim11", degree: 11, step: 16 },
  { name: "per11", degree: 11, step: 17 },
  { name: "aug10", degree: 10, step: 17 },
  { name: "dim12", degree: 12, step: 18 },
  { name: "aug11", degree: 11, step: 18 },
  { name: "per12", degree: 12, step: 19 },
  { name: "dim13", degree: 13, step: 19 },
  { name: "min13", degree: 13, step: 20 },
  { name: "aug12", degree: 12, step: 20 },
  { name: "maj13", degree: 13, step: 21 },
  { name: "dim14", degree: 14, step: 21 },
  { name: "min14", degree: 14, step: 22 },
  { name: "aug13", degree: 13, step: 22 },
  { name: "maj14", degree: 14, step: 23 },
  { name: "dim15", degree: 15, step: 23 },
];

export const getIntervalByName = (name: string): Interval => {
  for (let interval of intervals) {
    if (interval.name == name) {
      return interval;
    }
  }
  return { name: "", degree: 0, step: 0 };
};

const syllables: string[] = [
  "A",
  "A#",
  "A##",
  "Ab",
  "Abb",
  "B",
  "B#",
  "B##",
  "Bb",
  "Bbb",
  "C",
  "C#",
  "C##",
  "Cb",
  "Cbb",
  "D",
  "D#",
  "D##",
  "Db",
  "Dbb",
  "E",
  "E#",
  "E##",
  "Eb",
  "Ebb",
  "F",
  "F#",
  "F##",
  "Fb",
  "Fbb",
  "G",
  "G#",
  "G##",
  "Gb",
  "Gbb",
];

export function isSyllable(s: string): boolean {
  for (let syllable of syllables) {
    if (syllable === s) {
      return true;
    }
  }
  return false;
}

export type Pitch = {
  name: string;
  syllable: string;
  mnn: number; // MIDI Note Number
  oct: number; // Octave Number
};

export const pitches: Pitch[] = [
  { name: "B#L", syllable: "B#", mnn: 0, oct: -1 },
  { name: "CL", syllable: "C", mnn: 0, oct: -1 },
  { name: "DbbL", syllable: "Dbb", mnn: 0, oct: -1 },
  { name: "B##L", syllable: "B##", mnn: 1, oct: -1 },
  { name: "C#L", syllable: "C#", mnn: 1, oct: -1 },
  { name: "DbL", syllable: "Db", mnn: 1, oct: -1 },
  { name: "C##L", syllable: "C##", mnn: 2, oct: -1 },
  { name: "DL", syllable: "D", mnn: 2, oct: -1 },
  { name: "EbbL", syllable: "Ebb", mnn: 2, oct: -1 },
  { name: "D#L", syllable: "D#", mnn: 3, oct: -1 },
  { name: "EbL", syllable: "Eb", mnn: 3, oct: -1 },
  { name: "FbbL", syllable: "Fbb", mnn: 3, oct: -1 },
  { name: "D##L", syllable: "D##", mnn: 4, oct: -1 },
  { name: "EL", syllable: "E", mnn: 4, oct: -1 },
  { name: "FbL", syllable: "Fb", mnn: 4, oct: -1 },
  { name: "E#L", syllable: "E#", mnn: 5, oct: -1 },
  { name: "FL", syllable: "F", mnn: 5, oct: -1 },
  { name: "GbbL", syllable: "Gbb", mnn: 5, oct: -1 },
  { name: "E##L", syllable: "E##", mnn: 6, oct: -1 },
  { name: "F#L", syllable: "F#", mnn: 6, oct: -1 },
  { name: "GbL", syllable: "Gb", mnn: 6, oct: -1 },
  { name: "F##L", syllable: "F##", mnn: 7, oct: -1 },
  { name: "GL", syllable: "G", mnn: 7, oct: -1 },
  { name: "AbbL", syllable: "Abb", mnn: 7, oct: -1 },
  { name: "G#L", syllable: "G#", mnn: 8, oct: -1 },
  { name: "AbL", syllable: "Ab", mnn: 8, oct: -1 },
  { name: "G##L", syllable: "G##", mnn: 9, oct: -1 },
  { name: "AL", syllable: "A", mnn: 9, oct: -1 },
  { name: "BbbL", syllable: "Bbb", mnn: 9, oct: -1 },
  { name: "A#L", syllable: "A#", mnn: 10, oct: -1 },
  { name: "BbL", syllable: "Bb", mnn: 10, oct: -1 },
  { name: "CbbL", syllable: "Cbb", mnn: 10, oct: -1 },
  { name: "A##L", syllable: "A##", mnn: 11, oct: -1 },
  { name: "BL", syllable: "B", mnn: 11, oct: -1 },
  { name: "CbL", syllable: "Cb", mnn: 11, oct: -1 },
  { name: "B#0", syllable: "B#", mnn: 12, oct: 0 },
  { name: "C0", syllable: "C", mnn: 12, oct: 0 }, // Bösendorfer Model 290 Imperial の最低音
  { name: "Dbb0", syllable: "Dbb", mnn: 12, oct: 0 },
  { name: "B##0", syllable: "B##", mnn: 13, oct: 0 },
  { name: "C#0", syllable: "C#", mnn: 13, oct: 0 },
  { name: "Db0", syllable: "Db", mnn: 13, oct: 0 },
  { name: "C##0", syllable: "C##", mnn: 14, oct: 0 },
  { name: "D0", syllable: "D", mnn: 14, oct: 0 },
  { name: "Ebb0", syllable: "Ebb", mnn: 14, oct: 0 },
  { name: "D#0", syllable: "D#", mnn: 15, oct: 0 },
  { name: "Eb0", syllable: "Eb", mnn: 15, oct: 0 },
  { name: "Fbb0", syllable: "Fbb", mnn: 15, oct: 0 },
  { name: "D##0", syllable: "D##", mnn: 16, oct: 0 },
  { name: "E0", syllable: "E", mnn: 16, oct: 0 },
  { name: "Fb0", syllable: "Fb", mnn: 16, oct: 0 },
  { name: "E#0", syllable: "E#", mnn: 17, oct: 0 },
  { name: "F0", syllable: "F", mnn: 17, oct: 0 },
  { name: "Gbb0", syllable: "Gbb", mnn: 17, oct: 0 },
  { name: "E##0", syllable: "E##", mnn: 18, oct: 0 },
  { name: "F#0", syllable: "F#", mnn: 18, oct: 0 },
  { name: "Gb0", syllable: "Gb", mnn: 18, oct: 0 },
  { name: "F##0", syllable: "F##", mnn: 19, oct: 0 },
  { name: "G0", syllable: "G", mnn: 19, oct: 0 },
  { name: "Abb0", syllable: "Abb", mnn: 19, oct: 0 },
  { name: "G#0", syllable: "G#", mnn: 20, oct: 0 },
  { name: "Ab0", syllable: "Ab", mnn: 20, oct: 0 },
  { name: "G##0", syllable: "G##", mnn: 21, oct: 0 },
  { name: "A0", syllable: "A", mnn: 21, oct: 0 }, // 88 鍵ピアノの最低音
  { name: "Bbb0", syllable: "Bbb", mnn: 21, oct: 0 },
  { name: "A#0", syllable: "A#", mnn: 22, oct: 0 },
  { name: "Bb0", syllable: "Bb", mnn: 22, oct: 0 },
  { name: "Cbb0", syllable: "Cbb", mnn: 22, oct: 0 },
  { name: "A##0", syllable: "A##", mnn: 23, oct: 0 },
  { name: "B0", syllable: "B", mnn: 23, oct: 0 },
  { name: "Cb0", syllable: "Cb", mnn: 23, oct: 0 },
  { name: "B#1", syllable: "B#", mnn: 24, oct: 1 },
  { name: "C1", syllable: "C", mnn: 24, oct: 1 },
  { name: "Dbb1", syllable: "Dbb", mnn: 24, oct: 1 },
  { name: "B##1", syllable: "B##", mnn: 25, oct: 1 },
  { name: "C#1", syllable: "C#", mnn: 25, oct: 1 },
  { name: "Db1", syllable: "Db", mnn: 25, oct: 1 },
  { name: "C##1", syllable: "C##", mnn: 26, oct: 1 },
  { name: "D1", syllable: "D", mnn: 26, oct: 1 },
  { name: "Ebb1", syllable: "Ebb", mnn: 26, oct: 1 },
  { name: "D#1", syllable: "D#", mnn: 27, oct: 1 },
  { name: "Eb1", syllable: "Eb", mnn: 27, oct: 1 },
  { name: "Fbb1", syllable: "Fbb", mnn: 27, oct: 1 },
  { name: "D##1", syllable: "D##", mnn: 28, oct: 1 },
  { name: "E1", syllable: "E", mnn: 28, oct: 1 },
  { name: "Fb1", syllable: "Fb", mnn: 28, oct: 1 },
  { name: "E#1", syllable: "E#", mnn: 29, oct: 1 },
  { name: "F1", syllable: "F", mnn: 29, oct: 1 },
  { name: "Gbb1", syllable: "Gbb", mnn: 29, oct: 1 },
  { name: "E##1", syllable: "E##", mnn: 30, oct: 1 },
  { name: "F#1", syllable: "F#", mnn: 30, oct: 1 },
  { name: "Gb1", syllable: "Gb", mnn: 30, oct: 1 },
  { name: "F##1", syllable: "F##", mnn: 31, oct: 1 },
  { name: "G1", syllable: "G", mnn: 31, oct: 1 },
  { name: "Abb1", syllable: "Abb", mnn: 31, oct: 1 },
  { name: "G#1", syllable: "G#", mnn: 32, oct: 1 },
  { name: "Ab1", syllable: "Ab", mnn: 32, oct: 1 },
  { name: "G##1", syllable: "G##", mnn: 33, oct: 1 },
  { name: "A1", syllable: "A", mnn: 33, oct: 1 },
  { name: "Bbb1", syllable: "Bbb", mnn: 33, oct: 1 },
  { name: "A#1", syllable: "A#", mnn: 34, oct: 1 },
  { name: "Bb1", syllable: "Bb", mnn: 34, oct: 1 },
  { name: "Cbb1", syllable: "Cbb", mnn: 34, oct: 1 },
  { name: "A##1", syllable: "A##", mnn: 35, oct: 1 },
  { name: "B1", syllable: "B", mnn: 35, oct: 1 },
  { name: "Cb1", syllable: "Cb", mnn: 35, oct: 1 },
  { name: "B#2", syllable: "B#", mnn: 36, oct: 2 },
  { name: "C2", syllable: "C", mnn: 36, oct: 2 },
  { name: "Dbb2", syllable: "Dbb", mnn: 36, oct: 2 },
  { name: "B##2", syllable: "B##", mnn: 37, oct: 2 },
  { name: "C#2", syllable: "C#", mnn: 37, oct: 2 },
  { name: "Db2", syllable: "Db", mnn: 37, oct: 2 },
  { name: "C##2", syllable: "C##", mnn: 38, oct: 2 },
  { name: "D2", syllable: "D", mnn: 38, oct: 2 },
  { name: "Ebb2", syllable: "Ebb", mnn: 38, oct: 2 },
  { name: "D#2", syllable: "D#", mnn: 39, oct: 2 },
  { name: "Eb2", syllable: "Eb", mnn: 39, oct: 2 },
  { name: "Fbb2", syllable: "Fbb", mnn: 39, oct: 2 },
  { name: "D##2", syllable: "D##", mnn: 40, oct: 2 },
  { name: "E2", syllable: "E", mnn: 40, oct: 2 }, // ギターの 6 弦
  { name: "Fb2", syllable: "Fb", mnn: 40, oct: 2 },
  { name: "E#2", syllable: "E#", mnn: 41, oct: 2 },
  { name: "F2", syllable: "F", mnn: 41, oct: 2 },
  { name: "Gbb2", syllable: "Gbb", mnn: 41, oct: 2 },
  { name: "E##2", syllable: "E##", mnn: 42, oct: 2 },
  { name: "F#2", syllable: "F#", mnn: 42, oct: 2 },
  { name: "Gb2", syllable: "Gb", mnn: 42, oct: 2 },
  { name: "F##2", syllable: "F##", mnn: 43, oct: 2 },
  { name: "G2", syllable: "G", mnn: 43, oct: 2 },
  { name: "Abb2", syllable: "Abb", mnn: 43, oct: 2 },
  { name: "G#2", syllable: "G#", mnn: 44, oct: 2 },
  { name: "Ab2", syllable: "Ab", mnn: 44, oct: 2 },
  { name: "G##2", syllable: "G##", mnn: 45, oct: 2 },
  { name: "A2", syllable: "A", mnn: 45, oct: 2 }, // ギターの 5 弦
  { name: "Bbb2", syllable: "Bbb", mnn: 45, oct: 2 },
  { name: "A#2", syllable: "A#", mnn: 46, oct: 2 },
  { name: "Bb2", syllable: "Bb", mnn: 46, oct: 2 },
  { name: "Cbb2", syllable: "Cbb", mnn: 46, oct: 2 },
  { name: "A##2", syllable: "A##", mnn: 47, oct: 2 },
  { name: "B2", syllable: "B", mnn: 47, oct: 2 },
  { name: "Cb2", syllable: "Cb", mnn: 47, oct: 2 },
  { name: "B#3", syllable: "B#", mnn: 48, oct: 3 },
  { name: "C3", syllable: "C", mnn: 48, oct: 3 },
  { name: "Dbb3", syllable: "Dbb", mnn: 48, oct: 3 },
  { name: "B##3", syllable: "B##", mnn: 49, oct: 3 },
  { name: "C#3", syllable: "C#", mnn: 49, oct: 3 },
  { name: "Db3", syllable: "Db", mnn: 49, oct: 3 },
  { name: "C##3", syllable: "C##", mnn: 50, oct: 3 },
  { name: "D3", syllable: "D", mnn: 50, oct: 3 }, // ギターの 4 弦
  { name: "Ebb3", syllable: "Ebb", mnn: 50, oct: 3 },
  { name: "D#3", syllable: "D#", mnn: 51, oct: 3 },
  { name: "Eb3", syllable: "Eb", mnn: 51, oct: 3 },
  { name: "Fbb3", syllable: "Fbb", mnn: 51, oct: 3 },
  { name: "D##3", syllable: "D##", mnn: 52, oct: 3 },
  { name: "E3", syllable: "E", mnn: 52, oct: 3 },
  { name: "Fb3", syllable: "Fb", mnn: 52, oct: 3 },
  { name: "E#3", syllable: "E#", mnn: 53, oct: 3 },
  { name: "F3", syllable: "F", mnn: 53, oct: 3 },
  { name: "Gbb3", syllable: "Gbb", mnn: 53, oct: 3 },
  { name: "E##3", syllable: "E##", mnn: 54, oct: 3 },
  { name: "F#3", syllable: "F#", mnn: 54, oct: 3 },
  { name: "Gb3", syllable: "Gb", mnn: 54, oct: 3 },
  { name: "F##3", syllable: "F##", mnn: 55, oct: 3 },
  { name: "G3", syllable: "G", mnn: 55, oct: 3 }, // ギターの 3 弦
  { name: "Abb3", syllable: "Abb", mnn: 55, oct: 3 },
  { name: "G#3", syllable: "G#", mnn: 56, oct: 3 },
  { name: "Ab3", syllable: "Ab", mnn: 56, oct: 3 },
  { name: "G##3", syllable: "G##", mnn: 57, oct: 3 },
  { name: "A3", syllable: "A", mnn: 57, oct: 3 },
  { name: "Bbb3", syllable: "Bbb", mnn: 57, oct: 3 },
  { name: "A#3", syllable: "A#", mnn: 58, oct: 3 },
  { name: "Bb3", syllable: "Bb", mnn: 58, oct: 3 },
  { name: "Cbb3", syllable: "Cbb", mnn: 58, oct: 3 },
  { name: "A##3", syllable: "A##", mnn: 59, oct: 3 },
  { name: "B3", syllable: "B", mnn: 59, oct: 3 }, // ギターの 2 弦
  { name: "Cb3", syllable: "Cb", mnn: 59, oct: 3 },
  { name: "B#4", syllable: "B#", mnn: 60, oct: 4 },
  { name: "C4", syllable: "C", mnn: 60, oct: 4 }, // ピアノの ｢中央のド｣
  { name: "Dbb4", syllable: "Dbb", mnn: 60, oct: 4 },
  { name: "B##4", syllable: "B##", mnn: 61, oct: 4 },
  { name: "C#4", syllable: "C#", mnn: 61, oct: 4 },
  { name: "Db4", syllable: "Db", mnn: 61, oct: 4 },
  { name: "C##4", syllable: "C##", mnn: 62, oct: 4 },
  { name: "D4", syllable: "D", mnn: 62, oct: 4 },
  { name: "Ebb4", syllable: "Ebb", mnn: 62, oct: 4 },
  { name: "D#4", syllable: "D#", mnn: 63, oct: 4 },
  { name: "Eb4", syllable: "Eb", mnn: 63, oct: 4 },
  { name: "Fbb4", syllable: "Fbb", mnn: 63, oct: 4 },
  { name: "D##4", syllable: "D##", mnn: 64, oct: 4 },
  { name: "E4", syllable: "E", mnn: 64, oct: 4 }, // ギターの 1 弦
  { name: "Fb4", syllable: "Fb", mnn: 64, oct: 4 },
  { name: "E#4", syllable: "E#", mnn: 65, oct: 4 },
  { name: "F4", syllable: "F", mnn: 65, oct: 4 },
  { name: "Gbb4", syllable: "Gbb", mnn: 65, oct: 4 },
  { name: "E##4", syllable: "E##", mnn: 66, oct: 4 },
  { name: "F#4", syllable: "F#", mnn: 66, oct: 4 },
  { name: "Gb4", syllable: "Gb", mnn: 66, oct: 4 },
  { name: "F##4", syllable: "F##", mnn: 67, oct: 4 },
  { name: "G4", syllable: "G", mnn: 67, oct: 4 },
  { name: "Abb4", syllable: "Abb", mnn: 67, oct: 4 },
  { name: "G#4", syllable: "G#", mnn: 68, oct: 4 },
  { name: "Ab4", syllable: "Ab", mnn: 68, oct: 4 },
  { name: "G##4", syllable: "G##", mnn: 69, oct: 4 },
  { name: "A4", syllable: "A", mnn: 69, oct: 4 },
  { name: "Bbb4", syllable: "Bbb", mnn: 69, oct: 4 },
  { name: "A#4", syllable: "A#", mnn: 70, oct: 4 },
  { name: "Bb4", syllable: "Bb", mnn: 70, oct: 4 },
  { name: "Cbb4", syllable: "Cbb", mnn: 70, oct: 4 },
  { name: "A##4", syllable: "A##", mnn: 71, oct: 4 },
  { name: "B4", syllable: "B", mnn: 71, oct: 4 },
  { name: "Cb4", syllable: "Cb", mnn: 71, oct: 4 },
  { name: "B#5", syllable: "B#", mnn: 72, oct: 5 },
  { name: "C5", syllable: "C", mnn: 72, oct: 5 },
  { name: "Dbb5", syllable: "Dbb", mnn: 72, oct: 5 },
  { name: "B##5", syllable: "B##", mnn: 73, oct: 5 },
  { name: "C#5", syllable: "C#", mnn: 73, oct: 5 },
  { name: "Db5", syllable: "Db", mnn: 73, oct: 5 },
  { name: "C##5", syllable: "C##", mnn: 74, oct: 5 },
  { name: "D5", syllable: "D", mnn: 74, oct: 5 },
  { name: "Ebb5", syllable: "Ebb", mnn: 74, oct: 5 },
  { name: "D#5", syllable: "D#", mnn: 75, oct: 5 },
  { name: "Eb5", syllable: "Eb", mnn: 75, oct: 5 },
  { name: "Fbb5", syllable: "Fbb", mnn: 75, oct: 5 },
  { name: "D##5", syllable: "D##", mnn: 76, oct: 5 },
  { name: "E5", syllable: "E", mnn: 76, oct: 5 },
  { name: "Fb5", syllable: "Fb", mnn: 76, oct: 5 },
  { name: "E#5", syllable: "E#", mnn: 77, oct: 5 },
  { name: "F5", syllable: "F", mnn: 77, oct: 5 },
  { name: "Gbb5", syllable: "Gbb", mnn: 77, oct: 5 },
  { name: "E##5", syllable: "E##", mnn: 78, oct: 5 },
  { name: "F#5", syllable: "F#", mnn: 78, oct: 5 },
  { name: "Gb5", syllable: "Gb", mnn: 78, oct: 5 },
  { name: "F##5", syllable: "F##", mnn: 79, oct: 5 },
  { name: "G5", syllable: "G", mnn: 79, oct: 5 },
  { name: "Abb5", syllable: "Abb", mnn: 79, oct: 5 },
  { name: "G#5", syllable: "G#", mnn: 80, oct: 5 },
  { name: "Ab5", syllable: "Ab", mnn: 80, oct: 5 },
  { name: "G##5", syllable: "G##", mnn: 81, oct: 5 },
  { name: "A5", syllable: "A", mnn: 81, oct: 5 },
  { name: "Bbb5", syllable: "Bbb", mnn: 81, oct: 5 },
  { name: "A#5", syllable: "A#", mnn: 82, oct: 5 },
  { name: "Bb5", syllable: "Bb", mnn: 82, oct: 5 },
  { name: "Cbb5", syllable: "Cbb", mnn: 82, oct: 5 },
  { name: "A##5", syllable: "A##", mnn: 83, oct: 5 },
  { name: "B5", syllable: "B", mnn: 83, oct: 5 },
  { name: "Cb5", syllable: "Cb", mnn: 83, oct: 5 },
  { name: "B#6", syllable: "B#", mnn: 84, oct: 6 },
  { name: "C6", syllable: "C", mnn: 84, oct: 6 },
  { name: "Dbb6", syllable: "Dbb", mnn: 84, oct: 6 },
  { name: "B##6", syllable: "B##", mnn: 85, oct: 6 },
  { name: "C#6", syllable: "C#", mnn: 85, oct: 6 },
  { name: "Db6", syllable: "Db", mnn: 85, oct: 6 },
  { name: "C##6", syllable: "C##", mnn: 86, oct: 6 },
  { name: "D6", syllable: "D", mnn: 86, oct: 6 },
  { name: "Ebb6", syllable: "Ebb", mnn: 86, oct: 6 },
  { name: "D#6", syllable: "D#", mnn: 87, oct: 6 },
  { name: "Eb6", syllable: "Eb", mnn: 87, oct: 6 },
  { name: "Fbb6", syllable: "Fbb", mnn: 87, oct: 6 },
  { name: "D##6", syllable: "D##", mnn: 88, oct: 6 },
  { name: "E6", syllable: "E", mnn: 88, oct: 6 },
  { name: "Fb6", syllable: "Fb", mnn: 88, oct: 6 },
  { name: "E#6", syllable: "E#", mnn: 89, oct: 6 },
  { name: "F6", syllable: "F", mnn: 89, oct: 6 },
  { name: "Gbb6", syllable: "Gbb", mnn: 89, oct: 6 },
  { name: "E##6", syllable: "E##", mnn: 90, oct: 6 },
  { name: "F#6", syllable: "F#", mnn: 90, oct: 6 },
  { name: "Gb6", syllable: "Gb", mnn: 90, oct: 6 },
  { name: "F##6", syllable: "F##", mnn: 91, oct: 6 },
  { name: "G6", syllable: "G", mnn: 91, oct: 6 },
  { name: "Abb6", syllable: "Abb", mnn: 91, oct: 6 },
  { name: "G#6", syllable: "G#", mnn: 92, oct: 6 },
  { name: "Ab6", syllable: "Ab", mnn: 92, oct: 6 },
  { name: "G##6", syllable: "G##", mnn: 93, oct: 6 },
  { name: "A6", syllable: "A", mnn: 93, oct: 6 },
  { name: "Bbb6", syllable: "Bbb", mnn: 93, oct: 6 },
  { name: "A#6", syllable: "A#", mnn: 94, oct: 6 },
  { name: "Bb6", syllable: "Bb", mnn: 94, oct: 6 },
  { name: "Cbb6", syllable: "Cbb", mnn: 94, oct: 6 },
  { name: "A##6", syllable: "A##", mnn: 95, oct: 6 },
  { name: "B6", syllable: "B", mnn: 95, oct: 6 },
  { name: "Cb6", syllable: "Cb", mnn: 95, oct: 6 },
  { name: "B#7", syllable: "B#", mnn: 96, oct: 7 },
  { name: "C7", syllable: "C", mnn: 96, oct: 7 },
  { name: "Dbb7", syllable: "Dbb", mnn: 96, oct: 7 },
  { name: "B##7", syllable: "B##", mnn: 97, oct: 7 },
  { name: "C#7", syllable: "C#", mnn: 97, oct: 7 },
  { name: "Db7", syllable: "Db", mnn: 97, oct: 7 },
  { name: "C##7", syllable: "C##", mnn: 98, oct: 7 },
  { name: "D7", syllable: "D", mnn: 98, oct: 7 },
  { name: "Ebb7", syllable: "Ebb", mnn: 98, oct: 7 },
  { name: "D#7", syllable: "D#", mnn: 99, oct: 7 },
  { name: "Eb7", syllable: "Eb", mnn: 99, oct: 7 },
  { name: "Fbb7", syllable: "Fbb", mnn: 99, oct: 7 },
  { name: "D##7", syllable: "D##", mnn: 100, oct: 7 },
  { name: "E7", syllable: "E", mnn: 100, oct: 7 },
  { name: "Fb7", syllable: "Fb", mnn: 100, oct: 7 },
  { name: "E#7", syllable: "E#", mnn: 101, oct: 7 },
  { name: "F7", syllable: "F", mnn: 101, oct: 7 },
  { name: "Gbb7", syllable: "Gbb", mnn: 101, oct: 7 },
  { name: "E##7", syllable: "E##", mnn: 102, oct: 7 },
  { name: "F#7", syllable: "F#", mnn: 102, oct: 7 },
  { name: "Gb7", syllable: "Gb", mnn: 102, oct: 7 },
  { name: "F##7", syllable: "F##", mnn: 103, oct: 7 },
  { name: "G7", syllable: "G", mnn: 103, oct: 7 },
  { name: "Abb7", syllable: "Abb", mnn: 103, oct: 7 },
  { name: "G#7", syllable: "G#", mnn: 104, oct: 7 },
  { name: "Ab7", syllable: "Ab", mnn: 104, oct: 7 },
  { name: "G##7", syllable: "G##", mnn: 105, oct: 7 },
  { name: "A7", syllable: "A", mnn: 105, oct: 7 },
  { name: "Bbb7", syllable: "Bbb", mnn: 105, oct: 7 },
  { name: "A#7", syllable: "A#", mnn: 106, oct: 7 },
  { name: "Bb7", syllable: "Bb", mnn: 106, oct: 7 },
  { name: "Cbb7", syllable: "Cbb", mnn: 106, oct: 7 },
  { name: "A##7", syllable: "A##", mnn: 107, oct: 7 },
  { name: "B7", syllable: "B", mnn: 107, oct: 7 },
  { name: "Cb7", syllable: "Cb", mnn: 107, oct: 7 },
  { name: "B#8", syllable: "B#", mnn: 108, oct: 8 },
  { name: "C8", syllable: "C", mnn: 108, oct: 8 }, // ピアノの最高音
  { name: "Dbb8", syllable: "Dbb", mnn: 108, oct: 8 },
  { name: "B##8", syllable: "B##", mnn: 109, oct: 8 },
  { name: "C#8", syllable: "C#", mnn: 109, oct: 8 },
  { name: "Db8", syllable: "Db", mnn: 109, oct: 8 },
  { name: "C##8", syllable: "C##", mnn: 110, oct: 8 },
  { name: "D8", syllable: "D", mnn: 110, oct: 8 },
  { name: "Ebb8", syllable: "Ebb", mnn: 110, oct: 8 },
  { name: "D#8", syllable: "D#", mnn: 111, oct: 8 },
  { name: "Eb8", syllable: "Eb", mnn: 111, oct: 8 },
  { name: "Fbb8", syllable: "Fbb", mnn: 111, oct: 8 },
  { name: "D##8", syllable: "D##", mnn: 112, oct: 8 },
  { name: "E8", syllable: "E", mnn: 112, oct: 8 },
  { name: "Fb8", syllable: "Fb", mnn: 112, oct: 8 },
  { name: "E#8", syllable: "E#", mnn: 113, oct: 8 },
  { name: "F8", syllable: "F", mnn: 113, oct: 8 },
  { name: "Gbb8", syllable: "Gbb", mnn: 113, oct: 8 },
  { name: "E##8", syllable: "E##", mnn: 114, oct: 8 },
  { name: "F#8", syllable: "F#", mnn: 114, oct: 8 },
  { name: "Gb8", syllable: "Gb", mnn: 114, oct: 8 },
  { name: "F##8", syllable: "F##", mnn: 115, oct: 8 },
  { name: "G8", syllable: "G", mnn: 115, oct: 8 },
  { name: "Abb8", syllable: "Abb", mnn: 115, oct: 8 },
  { name: "G#8", syllable: "G#", mnn: 116, oct: 8 },
  { name: "Ab8", syllable: "Ab", mnn: 116, oct: 8 },
  { name: "G##8", syllable: "G##", mnn: 117, oct: 8 },
  { name: "A8", syllable: "A", mnn: 117, oct: 8 },
  { name: "Bbb8", syllable: "Bbb", mnn: 117, oct: 8 },
  { name: "A#8", syllable: "A#", mnn: 118, oct: 8 },
  { name: "Bb8", syllable: "Bb", mnn: 118, oct: 8 },
  { name: "Cbb8", syllable: "Cbb", mnn: 118, oct: 8 },
  { name: "A##8", syllable: "A##", mnn: 119, oct: 8 },
  { name: "B8", syllable: "B", mnn: 119, oct: 8 },
  { name: "Cb8", syllable: "Cb", mnn: 119, oct: 8 },
  { name: "B#9", syllable: "B#", mnn: 120, oct: 9 },
  { name: "C9", syllable: "C", mnn: 120, oct: 9 },
  { name: "Dbb9", syllable: "Dbb", mnn: 120, oct: 9 },
  { name: "B##9", syllable: "B##", mnn: 121, oct: 9 },
  { name: "C#9", syllable: "C#", mnn: 121, oct: 9 },
  { name: "Db9", syllable: "Db", mnn: 121, oct: 9 },
  { name: "C##9", syllable: "C##", mnn: 122, oct: 9 },
  { name: "D9", syllable: "D", mnn: 122, oct: 9 },
  { name: "Ebb9", syllable: "Ebb", mnn: 122, oct: 9 },
  { name: "D#9", syllable: "D#", mnn: 123, oct: 9 },
  { name: "Eb9", syllable: "Eb", mnn: 123, oct: 9 },
  { name: "Fbb9", syllable: "Fbb", mnn: 123, oct: 9 },
  { name: "D##9", syllable: "D##", mnn: 124, oct: 9 },
  { name: "E9", syllable: "E", mnn: 124, oct: 9 },
  { name: "Fb9", syllable: "Fb", mnn: 124, oct: 9 },
  { name: "E#9", syllable: "E#", mnn: 125, oct: 9 },
  { name: "F9", syllable: "F", mnn: 125, oct: 9 },
  { name: "Gbb9", syllable: "Gbb", mnn: 125, oct: 9 },
  { name: "E##9", syllable: "E##", mnn: 126, oct: 9 },
  { name: "F#9", syllable: "F#", mnn: 126, oct: 9 },
  { name: "Gb9", syllable: "Gb", mnn: 126, oct: 9 },
  { name: "F##9", syllable: "F##", mnn: 127, oct: 9 },
  { name: "G9", syllable: "G", mnn: 127, oct: 9 },
  { name: "Abb9", syllable: "Abb", mnn: 127, oct: 9 },
];

export const getPitchByName = (name: string): Pitch => {
  for (let pitch of pitches) {
    if (pitch.name == name) {
      return pitch;
    }
  }
  return pitches[0];
};
