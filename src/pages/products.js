import { html } from 'lit';
import { getProducts } from '../services/products.js';
import '../components/card.js';

export const isolation = true;

export async function getBody(compilation, page, data) {
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