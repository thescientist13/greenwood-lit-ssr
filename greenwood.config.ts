import type { Config } from '@greenwood/cli';
import { greenwoodPluginAdapterVercel } from '@greenwood/plugin-adapter-vercel';
import { greenwoodPluginRendererLit } from '@greenwood/plugin-renderer-lit';

const config: Config = {
  useTsc: true,
  plugins: [
    greenwoodPluginRendererLit(),
    greenwoodPluginAdapterVercel({
      runtime: 'nodejs22.x'
    })
  ]
}

export default config;