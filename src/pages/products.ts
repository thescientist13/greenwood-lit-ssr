import { html } from 'lit';
import { getProducts } from '../services/products.ts';
import '../components/card/card.ts';

export const isolation = true;

export async function getBody() {
  const products = await getProducts();

  return html`
    ${
      products.map((product, idx) => {
        const { title, thumbnail } = product;
        return html`
          <app-card
            title="${idx + 1}) ${title}"
            thumbnail="${thumbnail}"
          ></app-card>
        `;
      })
    }
  `;
}