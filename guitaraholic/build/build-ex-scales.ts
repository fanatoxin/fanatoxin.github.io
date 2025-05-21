import { scales } from "./music.ts";

const build = (): void => {
  const roots = ["C", "C#", "Db", "D", "D#", "Eb", "E"];
  for (let scale of scales) {
    if (scale.type === "modal" || scale.type === "altered") {
      for (let root of roots) {
        console.log(root + " " + scale.name);
        const filename =
          scale.abbr + "-" + root.toLowerCase().replace("#", "s") + ".html";
        console.log(filename);
      }
    }
  }
};

build();
