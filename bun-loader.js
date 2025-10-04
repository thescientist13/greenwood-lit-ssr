import { plugin } from "bun";
import { readAndMergeConfig } from "@greenwood/cli/src/lifecycles/config.js";
import { initContext } from "@greenwood/cli/src/lifecycles/context.js";
import { mergeResponse } from "@greenwood/cli/src/lib/resource-utils.js";

const config = await readAndMergeConfig();
const context = await initContext({ config });

const resourcePlugins = config.plugins
  .filter((plugin) => plugin.type === "resource")
  .map((plugin) =>
    plugin.provider({
      context,
      config,
      graph: [],
    }),
  );

// could be shared with node-loader
async function getCustomLoaderResponse(initUrl, checkOnly = false) {
  const headers = {
    Accept: "text/javascript",
  };
  const initResponse = new Response("");
  let request = new Request(initUrl, { headers });
  let url = initUrl;
  let response = initResponse.clone();
  let shouldHandle = false;

  for (const plugin of resourcePlugins) {
    if (
      initUrl.protocol === "file:" &&
      plugin.shouldResolve &&
      (await plugin.shouldResolve(initUrl, request))
    ) {
      shouldHandle = true;

      if (!checkOnly) {
        url = new URL((await plugin.resolve(initUrl, request)).url);
      }
    }
  }

  for (const plugin of resourcePlugins) {
    if (plugin.shouldServe && (await plugin.shouldServe(initUrl, request))) {
      shouldHandle = true;

      if (!checkOnly) {
        response = mergeResponse(response, await plugin.serve(initUrl, request));
      }
    }
  }

  for (const plugin of resourcePlugins) {
    if (
      plugin.shouldPreIntercept &&
      (await plugin.shouldPreIntercept(url, request, response.clone()))
    ) {
      shouldHandle = true;

      if (!checkOnly) {
        response = mergeResponse(
          response,
          await plugin.preIntercept(url, request, response.clone()),
        );
      }
    }

    if (plugin.shouldIntercept && (await plugin.shouldIntercept(url, request, response.clone()))) {
      shouldHandle = true;

      if (!checkOnly) {
        response = mergeResponse(response, await plugin.intercept(url, request, response.clone()));
      }
    }
  }

  return {
    shouldHandle,
    response,
  };
}

// https://bun.sh/docs/runtime/plugins
await plugin({
  name: "greenwood-custom-resources-loader",
  async setup(build) {
    // https://bun.sh/docs/bundler/loaders
    const supportedExtensionsBun = ["js", "cjs", "mjs", "mts", "cts", "ts", "tsx", "jsx", "toml", "json", "txt", "wasm", "node", "html"];
    const customExtensions = [];

    for(const plugin of resourcePlugins) {
      const pluginsExtensions = plugin.extensions ?? [];

      for (let i = 0; i < pluginsExtensions.length; i++) {
        const ext = pluginsExtensions[i].replace('.', '') ?? "";

        if (!customExtensions.includes(ext) && !supportedExtensionsBun.includes(ext)) {
          customExtensions.push(ext);
        }
      }
    }

    const filter = new RegExp(`\\.(${customExtensions.join('|')})`)

    build.onLoad({ filter, namespace: "file" }, async (args) => {
      console.log('custom loader handling for ', args.path);
      const url = new URL(`file://${args.path}`);
      const { response } = await getCustomLoaderResponse(url);
      const contents = await response.text();

      return {
        contents,
        loader: "js"
      };
    });
  },
});