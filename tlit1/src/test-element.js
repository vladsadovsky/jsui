import { LitElement, html,css } from 'lit';
import {customElement, property} from 'lit/decorators.js';

export class TestElement extends LitElement {
  static get styles() {
    return css`p { color: blue, background: yellow }`;
  }

  static get properties() {
    return {
      name: {type: String}
    }
  }

  constructor() {
    super();
    this.name = 'Unknown';
  }

  render() {
    return html`
        <!-- template content -->
        <p>I am custom element with name: ${this.name}</p>
    `;
  }
}

customElements.define('test-element', TestElement);