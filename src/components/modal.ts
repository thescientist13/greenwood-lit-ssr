import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-modal')
export class Modal extends LitElement {

  @property()
  accessor content: string;

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
        width: 80%;
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
    const button = this.shadowRoot.querySelector('sl-button');
    const dialog = this.shadowRoot.querySelector('dialog');

    button.addEventListener("click", () => dialog.close());
  }

  render() {
    const { content } = this;

    return html`
      <dialog>
        <h3 id="content">${content}</h3>
        <sl-button variant="neutral" autofocus>Close</sl-button>
      </dialog>
    `;
  }
}