import { greenwoodPluginAdapterVercel } from '@greenwood/plugin-adapter-vercel';
import { greenwoodPluginRendererLit } from '@greenwood/plugin-renderer-lit';
import { builtInTypeScriptPlugin } from "./built-in-typescript-plugin.ts";
import { greenwoodPluginImportRaw } from "@greenwood/plugin-import-raw";

export default {
  plugins: [
    greenwoodPluginImportRaw(),
    greenwoodPluginRendererLit(),
    greenwoodPluginAdapterVercel({
      runtime: 'nodejs22.x'
    }),
    builtInTypeScriptPlugin(),
  ]
};