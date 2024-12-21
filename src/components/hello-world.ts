// import { FASTElement, html, css } from '@microsoft/fast-element';

// export class HelloWorld extends FASTElement {
//   static definition = {
//     name: "hello-world",
//     template: html`<span>Hello ${x => x.name}!</span>`,
//     styles: css`
//       span {
//         color: red;
//       }
//     `,
//     attributes: [
//       'name',
//     ],
//   };
// }

// FASTElement.define(HelloWorld);



/*
 * import utilities from @microsoft/fast-element
 */
import { attr, css, FASTElement, html } from "@microsoft/fast-element";

/*
 * Define your component logic
 */
class HelloWorld extends FASTElement {
  @attr
  name: string;
}

/*
 * Define your component for the browser and
 * include your CSS styles and HTML template
 */
HelloWorld.define({
  name: "hello-world",
  template: html`<span>Hello ${x => x.name}!</span>`,
  styles: css`
    span {
      color: red;
    }
  `,
});