import type { Config } from '@greenwood/cli';
import { greenwoodPluginAdapterVercel } from '@greenwood/plugin-adapter-vercel';
import { greenwoodPluginRendererLit } from '@greenwood/plugin-renderer-lit';

const config: Config = {
  useTsc: true,
  // enable this polyfill until there is Safari support for CSS Module Scripts
  // https://github.com/ProjectEvergreen/greenwood/discussions/1275
  polyfills: {
    importAttributes: ['css']
  },
  plugins: [
    greenwoodPluginRendererLit(),
    greenwoodPluginAdapterVercel()
  ]
}

export default config;