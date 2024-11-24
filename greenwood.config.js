import { greenwoodPluginAdapterVercel } from '@greenwood/plugin-adapter-vercel';
import { greenwoodPluginRendererLit } from '@greenwood/plugin-renderer-lit';
import { greenwoodPluginTypeScript } from '@greenwood/plugin-typescript';

export default {
  plugins: [
    greenwoodPluginRendererLit(),
    greenwoodPluginAdapterVercel(),
    greenwoodPluginTypeScript()
  ]
};