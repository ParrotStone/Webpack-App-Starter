'use strict';

// U can use as keyword here, but on the usual/ordinary object destructuring
import { dosomethingElse as doSomethingElse } from './module-foo';

// Implementation detail
const _radius = new WeakMap();
// Public interface
export default class Circle {
    constructor(radius, color) {
        _radius.set(this, radius);
        this.color = color;
    }

    draw() {
        doSomethingElse();
        console.log('draw');
    }
}
