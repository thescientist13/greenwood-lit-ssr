import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import sheet from './card.css' with { type: 'css' };

@customElement('app-card')
export class Card extends LitElement {

  @property()
  accessor title: string = '';

  @property()
  accessor thumbnail: string = '';

  @property()
  accessor id: string = '';

  static styles = [sheet];

  constructor() {
    super();

    this.title;
    this.thumbnail;
    this.id;
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
    const { title, thumbnail, id } = this;

    if(!title && !thumbnail) {
      return;
    }

    const link = id
      ? html`<a href="/product/${id}/">View Item Details</a>`
      : '';

    return html`
      <div>
        <h3>${title}</h3>
        <img src="${thumbnail}" alt="${title}" loading="lazy" width="100%">
        ${link}
        <button @click="${this.selectItem}">View Item Details</button>
      </div>
    `;
  }
}