import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import '../icon-toggle.js';
import './child-element.js';
class DemoElement extends PolymerElement {
  static get template() {
    return html `
      <style>
        :host {
          font-family: sans-serif;
        }
      </style>
      
      <child-element array-data="{{demoArray}}"></child-element>
    `;
  }
  static get properties() {
    return {
      demoArray: {
        type: Array,
      }
    };
  }
}
customElements.define('demo-element', DemoElement);