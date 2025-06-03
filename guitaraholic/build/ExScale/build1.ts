// Run following command in PowerShell
// > deno --allow-write ./build1.ts

import { Interval, getIntervalByName, intervals, Pitch, getPitchByName } from "../music.ts";
import { ScaleBase, scaleBases } from "./scaleBase.ts";
import { ScalePattern, Pattern } from "./scalePattern.ts";
import { tuning, getFretByMnn } from "../guitar.ts";

const makePattern = (scale: ScaleBase, patternName: string): Pattern => {
  let pattern: Pattern = { name: patternName, positions: [] };

  let lowestIndex = 0;
  if (patternName === "6/1") {
    lowestIndex = 0;
  } else if (patternName === "6/2") {
    lowestIndex = 6;
  } else if (patternName === "6/3") {
    lowestIndex = 5;
  } else if (patternName === "5/1") {
    lowestIndex = 4;
  } else if (patternName === "5/2") {
    lowestIndex = 3;
  } else if (patternName === "5/3") {
    lowestIndex = 2;
  } else if (patternName === "4/1") {
    lowestIndex = 1;
  }

  const e3 = tuning[6];
  let degree = lowestIndex + 1;
  let lastMnn = e3.mnn;
  for (let i = 0; i < 18; i++) {
    const str = 6 - Math.floor(i / 3);
    const index = i % scale.intervals.length;
    let mnn = e3.mnn;
    if (i == 0) {
      pattern.positions.push({ str: str, fret: 0, degree: degree });
    } else {
      let mnn =
        e3.mnn +
        scale.getIntervalByName(degree - 1).step -
        scale.getIntervalByName(lowestIndex).step;
      while (mnn < lastMnn) {
        mnn += 12;
      }
      const fret = getFretByMnn(str, mnn);
      pattern.positions.push({ str: str, fret: fret, degree: degree });
      lastMnn = mnn;
    }
    degree++;
    if (7 < degree) {
      degree = 1;
    }
  }

  return pattern;
};

const build = (): void => {
  let scalePatternBases: ScalePattern[] = [];
  for (let scaleBase of scaleBases) {
    if (scaleBase.intervals.length == 7) {
      let scalePattern = new ScalePattern();
      scalePattern.name = scaleBase.name;
      scalePattern.abbr = scaleBase.abbr;
      scalePattern.key = "X";
      scalePattern.patterns = [];
      const pattern: Pattern = makePattern(scaleBase, "6/1");
      scalePattern.patterns.push(makePattern(scaleBase, "6/1"));
      scalePattern.patterns.push(makePattern(scaleBase, "6/2"));
      scalePattern.patterns.push(makePattern(scaleBase, "6/3"));
      scalePattern.patterns.push(makePattern(scaleBase, "5/1"));
      scalePattern.patterns.push(makePattern(scaleBase, "5/2"));
      scalePattern.patterns.push(makePattern(scaleBase, "5/3"));
      scalePattern.patterns.push(makePattern(scaleBase, "4/1"));
      scalePatternBases.push(scalePattern);
    }
  }

  const write = Deno.writeTextFileSync(
    "./scalePatternBases.json",
    JSON.stringify(scalePatternBases)
  );
};

build();
