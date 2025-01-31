import { FASTElement, html, css } from '@microsoft/fast-element';

export class Count extends FASTElement {
  static definition = {
    name: 'my-count',
    template: html`<div>${(x) => x.count}</div>`,
    styles: css`
      div {
        color: red
      }
    `,
    attributes: [
      'count',
    ],
  };
}

FASTElement.define(Count);