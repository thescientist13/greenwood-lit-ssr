import { greenwoodPluginAdapterVercel } from '@greenwood/plugin-adapter-vercel';
import { greenwoodPluginRendererLit } from '@greenwood/plugin-renderer-lit';
import { builtInTypeScriptPlugin } from "./built-in-typescript-plugin.ts";
// import { greenwoodPluginTypeScript } from '@greenwood/plugin-typescript';

export default {
  plugins: [
    greenwoodPluginRendererLit(),
    greenwoodPluginAdapterVercel({
      runtime: 'nodejs22.x'
    }),
    builtInTypeScriptPlugin(),
    // greenwoodPluginTypeScript({
    //   extendConfig: true
    // })
  ]
};