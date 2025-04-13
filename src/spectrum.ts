// https://opensource.adobe.com/spectrum-web-components/tools/theme/#advanced-usage
import '@spectrum-web-components/theme/sp-theme.js';
import '@spectrum-web-components/theme/src/themes.js';

import '@spectrum-web-components/button/sp-button.js';
import '@spectrum-web-components/action-menu/sp-action-menu.js';
import '@spectrum-web-components/menu/sp-menu.js';
import '@spectrum-web-components/menu/sp-menu-item.js';
import '@spectrum-web-components/menu/sp-menu-divider.js';
import '@spectrum-web-components/menu/sp-menu-group.js';

// @ts-expect-error see https://github.com/jianliao/spectrum-css/issues/64
import SpectrumCard from '@spectrum-css/card' with { type: 'css' };
// @ts-expect-error see https://github.com/jianliao/spectrum-css/issues/64
import SpectrumTokens from "@spectrum-css/tokens" with { type: "css" };

console.log({ SpectrumCard, SpectrumTokens });