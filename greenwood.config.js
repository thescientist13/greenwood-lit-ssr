import { greenwoodPluginAdapterVercel } from '@greenwood/plugin-adapter-vercel';
import { greenwoodPluginRendererLit } from '@greenwood/plugin-renderer-lit';
import { greenwoodPluginTypeScript } from '@greenwood/plugin-typescript';
import { greenwoodPluginImportRaw } from '@greenwood/plugin-import-raw';

export default {
  prerender: true,
  plugins: [
    greenwoodPluginImportRaw(),
    greenwoodPluginRendererLit(),
    greenwoodPluginAdapterVercel({
      runtime: 'nodejs22.x'
    }),
    greenwoodPluginTypeScript({
      extendConfig: true
    })
  ]
};