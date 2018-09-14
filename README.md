# poly-observer-bug
Polymer method observer gets called twice if two-way binding is used on a mutable data child.

0) child-element has method observer on wildcard array mutation
1) child-element uses the mixin MutableData
2) child-element has a property that has notify: true
3) parent-element uses two-way data binding to bind that property to one of its properties.
4) child-element sets property value
5) child-element method observer is called twice
