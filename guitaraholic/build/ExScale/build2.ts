// Run following command in PowerShell
// > deno --allow-read --allow-write ./build2.ts

const build = (): void => {
  const text = Deno.readTextFileSync("./scalePatternBases.json");
  let scalePatternBases = JSON.parse(text);
  for (let base of scalePatternBases) {
    console.log(base.name);
  }
};

build();
