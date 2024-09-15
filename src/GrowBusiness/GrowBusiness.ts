import { AbstractClass } from "../lib";

export class GrowBusiness extends AbstractClass {
    document: HTMLElement;

    constructor() {
        super()
        this.document = document.createElement('section')
        this.document.className = ''
    }
}