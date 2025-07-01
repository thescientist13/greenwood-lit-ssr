import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { UpdateModalEvent } from '../modal/modal.ts';
import styles from './card.css?type=raw';

@customElement('app-card')
export class Card extends LitElement {

  @property()
  accessor title: string;

  @property()
  accessor thumbnail: string;

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();

    this.title;
    this.thumbnail;
  }

  selectItem() {
    const content =  `You selected the "${this.title}"`;

    window.dispatchEvent(new UpdateModalEvent(content));
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