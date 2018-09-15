import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';


import { MutableData } from '@polymer/polymer/lib/mixins/mutable-data.js';
class ChildElement extends MutableData(PolymerElement) {
  static get properties() {
        return {
            arrayData:{
              type:Array,
              notify:true
            }
        };
    }
    static get observers() {
      return [
        '_arrayObserver(arrayData.*)'
      ]
    }
  _arrayObserver(thingA){
    console.log("Array observer called",thingA);
  }
  connectedCallback(){
    this.set('arrayData',['uid',Math.random().toString(36).substring(7)]);
  }
}
customElements.define('child-element', ChildElement);
