import { AbstractClass } from "../lib";


export class Navigation extends AbstractClass {
    document: HTMLElement;

    constructor() {
        super()
        this.document = document.createElement('nav')
        this.document.className = 'nav'

        const ul = document.createElement('ul')

        const items = [
            { text: 'Home', url: '#' },
            { text: 'Features', url: '#' },
            { text: 'Pricing', url: '#' },
            { text: 'Blog', url: '#' }
        ];

        items.forEach(item => {
            const li = document.createElement('li')
            const a = document.createElement('a')
            li.textContent = item.text
            a.href = item.url

            li.appendChild(a)
            ul.appendChild(li)
        })

        this.document.appendChild(ul)
    }
}