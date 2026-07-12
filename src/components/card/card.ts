import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { UpdateModalEvent } from '../modal/modal.ts';
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
    const content =  `You selected the "${this.title}"`;

    window.dispatchEvent(new UpdateModalEvent(content));
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
        <wa-button @click="${this.selectItem}">View Item Details</wa-button>
      </div>
    `;
  }
}