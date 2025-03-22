import { greenwoodPluginAdapterVercel } from '@greenwood/plugin-adapter-vercel';
import { greenwoodPluginRendererLit } from '@greenwood/plugin-renderer-lit';
import { greenwoodPluginImportRaw } from '@greenwood/plugin-import-raw';
import type { Config } from '@greenwood/cli';

export default {
  useTsc: true,
  prerender: true,
  plugins: [
    greenwoodPluginImportRaw(),
    greenwoodPluginRendererLit(),
    greenwoodPluginAdapterVercel({
      runtime: 'nodejs22.x'
    }),
  ]
} satisfies Config;