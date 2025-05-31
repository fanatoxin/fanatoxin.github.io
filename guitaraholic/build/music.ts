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

export const getInterval = (name: string): Interval | null => {
  for (let interval of intervals) {
    if (interval.name == name) {
      return interval;
    }
  }
  return null;
};
