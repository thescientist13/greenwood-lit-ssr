import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import styles from './modal.css?type=raw';

/**
 * An event that's fired when the modal content needs to be updated
 */
export class UpdateModalEvent extends Event {
  static readonly eventName = 'update-modal';

  readonly content: string;

  constructor(content: string) {
    super(UpdateModalEvent.eventName, { bubbles: true, composed: true });
    this.content = content;
  }
}

@customElement('app-modal')
export class Modal extends LitElement {

  @state()
  accessor content: string;

  static styles = [unsafeCSS(styles)];

  updateModal(content: string) {
    console.log(`selected item is => ${content}`);
    const dialog = this.shadowRoot.querySelector('dialog');

    this.content = content;

    dialog.showModal();
  }

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener('update-modal', (event: UpdateModalEvent) => {
      this.updateModal(event.content);
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