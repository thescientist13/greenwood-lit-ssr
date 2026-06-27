import { html } from 'lit';
import { getProducts } from '../services/products.ts';
import '../components/card/card.ts';
// import this specifically on the backend to avoid duplicate define calls when importing catd.ts
import '@awesome.me/webawesome/dist/components/button/button.js';

export const isolation = true;

export async function getBody() {
  const products = await getProducts();

  return html`
    ${
      products.map((product, idx) => {
        const { title, thumbnail, id } = product;

        return html`
          <app-card
            id="${id}"
            title="${idx + 1}) ${title}"
            thumbnail="${thumbnail}"
          ></app-card>
        `;
      })
    }
  `;
}