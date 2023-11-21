import { render } from '@lit-labs/ssr';
import { collectResultSync } from '@lit-labs/ssr/lib/render-result.js'
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { getProducts } from '../services/products.js';
import '../components/card.js';

export async function handler(request) {
  const formData = await request.formData();
  const term = formData.has('term') ? formData.get('term') : '';
  const products = (await getProducts())
    .filter((product => {
      return term !== '' && product.title.toLowerCase().includes(term.toLowerCase());
    }));
  let body = '';

  if (products.length === 0) {
    body = 'No results found.';
  } else {
    body = collectResultSync(render(html`
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