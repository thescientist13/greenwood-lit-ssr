import { render } from '@lit-labs/ssr';
import { collectResult } from '@lit-labs/ssr/lib/render-result.js'
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { getProducts } from '../../services/products.ts';
import '../../components/card.ts';

export const isolation = true;

export async function handler(request: Request) {
  const formData = await request.formData();
  const term = formData.has('term') ? formData.get('term') as string : '';
  const products = (await getProducts())
    .filter((product => {
      return term !== '' && product.title.toLowerCase().includes(term.toLowerCase());
    }));
  let body = '';

  if (products.length === 0) {
    body = 'No results found.';
  } else {
    body = await collectResult(render(html`
      ${
        unsafeHTML(products.map((item, idx) => {
          const { title, thumbnail } = item;

          return `
            <app-card
              title="${idx + 1}) ${title}"
              thumbnail="${thumbnail}"
            ></app-card>
          `;
        }).join(''))
      }
    `));
  }

  return new Response(body, {
    headers: new Headers({
      'Content-Type': 'text/html'
    })
  });
}