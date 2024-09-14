import { AbstractClass } from "../lib";

export class Logo extends AbstractClass {
    document: HTMLImageElement;

    constructor() {
        super();
        this.document = document.createElement('img');
        this.document.className = 'logo';
        this.document.src = 'https://marketplace.canva.com/EAF0Hq4UHjM/1/0/1600w/canva-orange-phoenix-animal-gaming-logo-WIPEOAyYPIs.jpg';
        this.document.alt = 'Logo';
    }
}
