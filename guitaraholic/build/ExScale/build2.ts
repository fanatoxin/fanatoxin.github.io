// Run following command in PowerShell
// > deno --allow-read --allow-write ./build2.ts
import { Scale, Pattern } from "./scale.ts";

function makePattern(): Pattern {

}

const build = (): void => {
  let scalePatterns: Scale[] = [];
  const text = Deno.readTextFileSync("./scaleBases.json");
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
      let scalePattern = new Scale(base.name, base.abbr, root);
      for (let basePattern of base.patterns) {
        let pattern = new Pattern(basePattern.name, []);
        for (let notes of basePattern.notes) {
        }
      }
    }
  }
};

build();
