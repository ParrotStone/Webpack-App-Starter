'use strict'

export function dosomethingElse() { console.log('dosomethingElse function from another file ;)'); }

export default class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    doSomething(something) {
        console.log(`doing ${something}...`);
    }
}