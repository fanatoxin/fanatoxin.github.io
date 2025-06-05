// Run following command in PowerShell
// > deno --allow-read --allow-write ./build2.ts

import { fileRead, fileWrite } from "../file.ts";
import { Scale, Pattern } from "./scale.ts";

function makePattern(): Pattern {
  let pattern = new Pattern("", []);
  return pattern;
}

const build = (): void => {
  let scalePatterns: Scale[] = [];
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

  const data = fileRead("./scaleTemplates.json");
  let scaleTemplates = JSON.parse(data);
  for (let template of scaleTemplates) {
    for (let root of roots) {
      console.log(`${template.name} ${root}`);
      let scale = new Scale(template.name, template.abbr, root);
      for (let templatePattern of template.patterns) {
        let pattern = makePattern();
        scale.patterns.push(pattern);
      }
    }
  }
};

build();
