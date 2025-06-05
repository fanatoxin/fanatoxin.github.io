// Run following command in PowerShell
// > deno --allow-read --allow-write ./build3.ts

import { fileRead, fileWrite } from "../file.ts";

function build3(): void {
  const data = fileRead("./scales.json");
  let scales = JSON.parse(data);

  for (let scale of scales) {
    console.log(`${scale.name} ${scale.key}`);
  }
}

build3();
