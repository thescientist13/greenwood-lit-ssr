import { LitElement, html, unsafeCSS } from 'lit';
import styles from './card.css?type=raw';

// TODO: restore decorators usage
export class Card extends LitElement {
  title: string;
  thumbnail: string;

  static properties = {
    title: { type: String },
    thumbnail: { type: String },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();

    this.title;
    this.thumbnail;
  }

  selectItem() {
    const itemSelectedEvent = new CustomEvent("update-modal", {
      detail: {
        content: `You selected the "${this.title}"`,
      },
    });

    window.dispatchEvent(itemSelectedEvent);
  }

  render() {
    const { title, thumbnail } = this;

    if(!title && !thumbnail) {
      return;
    }

    return html`
      <div>
        <h3>${title}</h3>
        <img src="${thumbnail}" alt="${title}" loading="lazy" width="100%">
        <button @click="${this.selectItem}">View Item Details</button>
      </div>
    `;
  }
}

customElements.define('app-card', Card);