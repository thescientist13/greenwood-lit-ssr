import { LitElement, html, unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import styles from './modal.css?type=raw';

// TODO: restore decorators usage
export class Modal extends LitElement {
  content: string;

  static properties = {
    content: {},
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();

    this.content;
  }

  updateModal(content: string) {
    console.log(`selected item is => ${content}`);
    const dialog = this.shadowRoot.querySelector('dialog');

    this.content = content;

    dialog.showModal();
    // TODO: figure out why `content: string` breaks reactivity 
    // and / or why TypeScript complains if `content: string` is not there
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
        <h3 id="content">${unsafeHTML(content)}</h3>
        <button autofocus>Close</button>
      </dialog>
    `;
  }
}

customElements.define('app-modal', Modal);