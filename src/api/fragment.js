import { render } from '@lit-labs/ssr/lib/render-with-global-dom-shim.js';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { getProducts } from '../services/products.js';
import { renderFromHTML } from '../services/render-to-string.js';
import '../components/card.js';

export async function handler(request) {
  const params = new URLSearchParams(request.url.slice(request.url.indexOf('?')));
  const limit = params.has('limit') ? parseInt(params.get('limit'), 10) : 5;
  const offset = params.has('offset') ? parseInt(params.get('offset'), 10) : 0;
  const products = (await getProducts()).slice(offset, offset + limit);
  const body = await renderFromHTML(render(html`
    ${
      unsafeHTML(products.map((item, idx) => {
        const { title, thumbnail } = item;

        return `
          <app-card
            title="${offset + idx + 1}) ${title}"
            thumbnail="${thumbnail}"
          ></app-card>
        `;
      }).join(''))
    }
  `));

  return new Response(body, {
    headers: new Headers({
      'Content-Type': 'text/html'
    })
  });
}