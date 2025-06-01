import { Interval, getInterval, intervals } from "./music.ts";
import { ScaleBase, scaleBases } from "./scaleBase.ts";
import { ScalePattern } from "./scalePattern.ts";

const build_pattern = (scale: ScaleBase, pattern: string): ScalePattern => {
   let scalePattern = new ScalePattern();

  let start = 1;
  switch (pattern) {
    case "6/1":
      start = 0;
      break;
    case "6/2":
      start = 6;
      break;
    case "6/3":
      start = 5;
      break;
    case "5/1":
      start = 4;
      break;
    case "5/2":
      start = 3;
      break;
    case "5/3":
      start = 2;
      break;
    case "4/1":
      start = 1;
      break;
  }

  let intervals: Interval[] = []
  for (let i = 0; i < 7; i++) {
    const degree = (start + I) % 7 + 1;
    const interval = scale.getInterval(degree);
    if (interval != null) {
      intervals.push(interval);
    }
  }

  

  return scalePattern;
};

const build = (): void => {
  for (let base of scaleBases) {
    if (base.intervals.length == 7) {
      const pattern_61 = build_pattern(base, "6/1");
      const pattern_62 = build_pattern(base, "6/2");
      const pattern_63 = build_pattern(base, "6/3");
      const pattern_51 = build_pattern(base, "5/1");
      const pattern_52 = build_pattern(base, "5/2");
      const pattern_53 = build_pattern(base, "5/3");
      const pattern_41 = build_pattern(base, "4/1");
    }
  }
};

build();
