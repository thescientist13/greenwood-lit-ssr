import { greenwoodPluginAdapterVercel } from '@greenwood/plugin-adapter-vercel';
import { greenwoodPluginRendererLit } from '@greenwood/plugin-renderer-lit';

export default {
  plugins: [
    greenwoodPluginRendererLit(),
    greenwoodPluginAdapterVercel()
  ]
};