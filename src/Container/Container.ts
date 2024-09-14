import { AbstractClass } from "../lib"

export class Container extends AbstractClass {
    document: HTMLElement
    constructor() {
        super()
        this.document = document.createElement('div')
        this.document.className = 'container'
    }
}
