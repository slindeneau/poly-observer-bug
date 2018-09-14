import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';


import { MutableData } from '@polymer/polymer/lib/mixins/mutable-data.js';
class ChildElement extends MutableData(PolymerElement) {
  static get properties() {
        return {
            arrayData:{
              type:Array,
              notify:true
            },
            objectData:{
              type: Object
            }
        };
    }
    static get observers() {
      return [
        '_arrayObserver(arrayData.*)',
        '_objectObserver(objectData.*)'
      ]
    }
  _arrayObserver(thingA){
    console.log("Array observer called",thingA);
  }
  connectedCallback(){
    this.set('arrayData',[]);
  }
  // _objectObserver(thingB){
  //   console.log("Object observer called",thingB);
  //   this.set('arrayData',[]);
  //   console.log("Object Observer done");
  // }
}
customElements.define('child-element', ChildElement);
