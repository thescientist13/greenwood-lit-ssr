import { render } from '@lit-labs/ssr';
import { collectResult } from '@lit-labs/ssr/lib/render-result.js'
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { getProducts } from '../../services/products.ts';
import '../../components/card.ts';

export const isolation = true;

export async function handler(request: Request) {
  const params = new URLSearchParams(request.url.slice(request.url.indexOf('?')));
  const limit = params.has('limit') ? parseInt(params.get('limit'), 10) : 5;
  const offset = params.has('offset') ? parseInt(params.get('offset'), 10) : 0;
  const products = (await getProducts()).slice(offset, offset + limit);
  const body = await collectResult(render(html`
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