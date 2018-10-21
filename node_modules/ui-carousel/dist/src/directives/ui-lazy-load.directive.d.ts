import { ElementRef, Renderer2 } from '@angular/core';
export declare class UILazyloadDirective {
    private el;
    private renderer;
    uiLazyLoad: string;
    constructor(el: ElementRef, renderer: Renderer2);
    load(): void;
}
