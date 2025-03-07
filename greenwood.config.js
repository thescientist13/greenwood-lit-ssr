import { greenwoodPluginAdapterVercel } from '@greenwood/plugin-adapter-vercel';
import { greenwoodPluginRendererLit } from '@greenwood/plugin-renderer-lit';
import { greenwoodPluginTypeScript } from '@greenwood/plugin-typescript';
import { builtInTypeScriptPlugin } from './built-in-native-typescript-plugin.js';

export default {
  useTsc: true,
  plugins: [
    builtInTypeScriptPlugin(),
    greenwoodPluginRendererLit(),
    greenwoodPluginAdapterVercel({
      runtime: 'nodejs22.x'
    }),
    // greenwoodPluginTypeScript({
    //   extendConfig: true
    // })
  ]
};