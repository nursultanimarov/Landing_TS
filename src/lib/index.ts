export abstract class AbstractClass {
    abstract document: HTMLElement | HTMLImageElement

    append(nodes: (Node | string)[]): void {
        this.document.append(...nodes)
    }
}