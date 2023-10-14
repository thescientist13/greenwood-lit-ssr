import { html, LitElement } from 'lit';
import '../components/card.js';
import { getProducts } from '../services/products.js';

export default class ProductsPage extends LitElement {

  constructor() {
    super();
    this.products = [];
  }

  async connectedCallback() {
    super.connectedCallback();

    this.products = await getProducts();
  }

  render() {
    const { products } = this;

    return html`
      ${
        products.map((product) => {
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
}

// for now these are needed for the Lit specific implementations
customElements.define('products-page', ProductsPage);
export const tagName = 'products-page';