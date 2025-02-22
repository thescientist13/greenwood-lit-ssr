import { LitElement, html, css } from 'lit';
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';
// import { customElement, property } from 'lit/decorators.js';
import logo from "./greenwood-logo-leaf.svg?type=raw";

// TODO amaro / SWC does not support decorators yet?
// @customElement('app-modal')
export class Modal extends LitElement {

  static properties = {
    content: {type: String},
  };

  content: string;

  static styles = css`
    dialog {
      border: 1px solid #818181;
      text-align: center;
      width: 40%;
      border-radius: 10px;
      padding: 2rem 1rem;
      min-height: 200px;
      background-color: #fff;
      overflow-x: hidden;
    }
    
    h3 {
      font-size: 1.85rem;
    }
    
    button {
      background: var(--color-accent);
      color: var(--color-white);
      padding: 1rem 2rem;
      border: 0;
      font-size: 1rem;
      border-radius: 5px;
      cursor: pointer;
    }
    @media(max-width: 768px) {
      dialog {
        width: 80%!important;
      }
    }
  `;

  updateModal(content: string) {
    console.log(`selected item is => ${content}`);
    const dialog = this.shadowRoot.querySelector('dialog');

    this.content = content;

    dialog.showModal();
    this.requestUpdate();
  }

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener('update-modal', (event: CustomEvent) => {
      this.updateModal(event.detail.content);
    })
  }

  firstUpdated() {
    const button = this.shadowRoot.querySelector('button');
    const dialog = this.shadowRoot.querySelector('dialog');

    button.addEventListener("click", () => dialog.close());
  }

  render() {
    const { content } = this;

    return html`
      <dialog>
        ${unsafeHTML(logo)}
        <h3 id="content">${content}</h3>
        <button autofocus>Close</button>
      </dialog>
    `;
  }
}

// TODO amaro / SWC does not support decorators yet?
customElements.define('app-modal', Modal);