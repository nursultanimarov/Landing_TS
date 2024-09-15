import { AbstractClass } from "../lib"
import s from './Container.module.css'

export class Container extends AbstractClass {
    document: HTMLElement
    constructor() {
        super()
        this.document = document.createElement('div')
        this.document.className = s.container
    }
}
