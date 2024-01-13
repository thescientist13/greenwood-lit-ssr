// import '@lit-labs/ssr/lib/install-global-dom-shim.js';
// import { html } from '@lit-labs/ssr';
import { LitElement, html } from 'lit';
import '../components/card.js';
// // import { unsafeStatic, withStatic } from 'lit/static-html.js';
// // import { getProducts } from '../services/products.js';

// export default class ProductsPage extends LitElement {

//   constructor() {
//     super();
//     this.products = [{ title: 'TODO', thumbnail: 'https://www.greenwoodjs.io/assets/greenwood-logo-og.png' }];
//   }

//   // async connectedCallback() {
//   //   super.connectedCallback();

//   //   this.products = await getProducts();
//   // }

//   render() {
//     const { products } = this;
//     console.log('RENDER', products);

//     return html`
//       ${
//         products.map((product, idx) => {
//           const { title, thumbnail } = product;
//           return html`
//             <app-card
//               title="${idx + 1}) ${title}"
//               thumbnail="${thumbnail}"
//             ></app-card>
//           `;
//         })
//       }
//     `;
//   }
// }

// // for now these are needed for the Lit specific implementations
// customElements.define('products-page', ProductsPage);
// export const tagName = 'products-page';

export function getBody() {
  // TODO this needs to be shared with the client side since Lit depends on a runtime hydration solution
  const products = [{ title: 'TODO', thumbnail: 'https://www.greenwoodjs.io/assets/greenwood-logo-og.png' }];

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