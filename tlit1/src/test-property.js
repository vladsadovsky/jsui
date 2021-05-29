import { LitElement, html } from 'lit-element';

class TestProperty extends LitElement {
  static get properties() {
    return { text: { type: String } };
  }
  constructor() {
    super();
    this.text='Custom test property default text';
  }
  render() {
    return html`
      <a>${this.text}</a>
    `;
  }
}
customElements.define('test-property', TestProperty);
