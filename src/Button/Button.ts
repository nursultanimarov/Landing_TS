import { AbstractClass } from "../lib";

export class Button extends AbstractClass {
    document: HTMLButtonElement;

    constructor() {
        super()
        this.document = document.createElement('button')
        this.document.textContent = 'Get Started'
        this.document.className = 'btn_in_header'
    }
}