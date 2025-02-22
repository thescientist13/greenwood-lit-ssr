import { plugin } from "bun";

await plugin({
  name: "RAW",
  async setup(build) {

    // TODO use .svg?type=raw
    // TODO use greenwood plugin
    build.onLoad({ filter: /\.gwd/, namespace: "file" }, async (args) => {
      const text = await Bun.file(new URL(`file://${args.path}`).pathname).text();
      const contents = `const raw = \`${text.replace(/\r?\n|\r/g, " ").replace(/\\/g, "\\\\")}\`;\nexport default raw;`;
      
      console.log({ args, contents });
      return {
        contents,
        loader: "js",
      };
    });
  },
});