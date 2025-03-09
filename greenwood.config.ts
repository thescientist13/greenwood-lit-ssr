import type { Config } from '@greenwood/cli';
import { greenwoodPluginAdapterVercel } from '@greenwood/plugin-adapter-vercel';
import { greenwoodPluginRendererLit } from '@greenwood/plugin-renderer-lit';
import { greenwoodPluginImportRaw } from '@greenwood/plugin-import-raw';

const config: Config = {
  useTsc: true,
  plugins: [
    greenwoodPluginImportRaw(),
    greenwoodPluginRendererLit(),
    greenwoodPluginAdapterVercel({
      runtime: 'nodejs22.x'
    })
  ]
}

export default config;