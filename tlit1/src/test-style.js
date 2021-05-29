
import { LitElement, html, css } from 'lit-element';

class TestStyle extends LitElement {
  static get properties() {
    return {
      flag: { type: Boolean },
    };
  }
  static get styles() {
    return css`
      p {
        font-family: Helvetica;
        font-size: 14px;
        font-weight: 500;
      }
      .red {
        color: red;
      }
      .blue {
        color: blue;
      }
    `;
  }
  constructor() {
    super();
    this.flag = true;
  }
  render() {
    return html`
      <p class="${this.flag ? 'red' : 'blue'}">style paragraph</p>
      ${this.flag ?
        html`<p>One color if flag is true</p>` :
        html`<p>Another color if flag is false</p>`}
      <button @click=${this.clickHandler}>Click</button>
    `;
  }
  clickHandler(event) {
    console.log(event.target);
    this.flag = !this.flag;
  }
}
customElements.define('test-style', TestStyle);
