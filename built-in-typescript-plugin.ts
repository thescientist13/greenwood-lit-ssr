// https://satanacchio.hashnode.dev/everything-you-need-to-know-about-nodejs-type-stripping#heading-type-stripping
import amaro from "amaro";
import fs from 'node:fs/promises';

import { ResourceInterface } from "@greenwood/cli/src/lib/resource-interface.js";

class NativeTsPlugin extends ResourceInterface {
  #extensions: string[];

  constructor(compilation) {
    super(compilation);

    this.#extensions = ["ts"];
  }

  async shouldServe(url: URL): Promise<boolean> {
    return url.pathname.endsWith(`.${this.#extensions[0]}`);
  }

  async serve(url: URL): Promise<Response> {
    const contents = await fs.readFile(url, 'utf-8')
    const { code } = amaro.transformSync(contents);

    return new Response(code, {
      headers: {
        "Content-Type": "text/javascript"
      }
    })
  }
}

export const builtInTypeScriptPlugin = () => {
  return {
    type: "resource",
    name: "native-ts-plugin",
    provider: (compilation) => new NativeTsPlugin(compilation)
  }
}