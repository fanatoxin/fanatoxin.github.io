// Run following command in PowerShell
// > deno --allow-read --allow-write ./build2.ts
import { ScalePattern, Pattern } from "./scalePattern.ts";

function makePattern(): Pattern {

}

const build = (): void => {
  let scalePatterns: ScalePattern[] = [];
  const text = Deno.readTextFileSync("./scalePatternBases.json");
  const roots = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];
  let scalePatternBases = JSON.parse(text);
  for (let base of scalePatternBases) {
    for (let root of roots) {
      console.log(`${base.name} ${root}`);
      let scalePattern = new ScalePattern(base.name, base.abbr, root);
      for (let basePattern of base.patterns) {
        let pattern = new Pattern(basePattern.name, []);
        for (let basePosition of basePattern.positions) {
          
        }
      }
    }
  }
};

build();
