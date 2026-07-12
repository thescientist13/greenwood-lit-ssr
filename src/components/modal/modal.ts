import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import sheet from './modal.css' with { type: 'css' };

@customElement('app-modal')
export class Modal extends LitElement {

  @state()
  accessor content: string = '';

  static styles = [sheet];

  updateModal(content: string) {
    console.log(`selected item is => ${content}`);
    const dialog = this?.shadowRoot?.querySelector('dialog');

    this.content = content;

    dialog?.showModal();
  }

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener('update-modal', (event) => {
      const customEvent = event as CustomEvent<{ content: string }>;
      this.updateModal(customEvent.detail.content);
    });
  }

  firstUpdated() {
    const button = this?.shadowRoot?.querySelector('button');
    const dialog = this?.shadowRoot?.querySelector('dialog');

    button?.addEventListener("click", () => dialog?.close());
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