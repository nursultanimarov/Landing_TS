import { AbstractClass } from "../lib"

export class Header extends AbstractClass {
    document: HTMLElement

    constructor() {
        super()
        this.document = document.createElement('header')
        this.document.className = 'header'
    }
}