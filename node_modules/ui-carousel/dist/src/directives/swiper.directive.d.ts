import { ElementRef, Renderer2, EventEmitter } from '@angular/core';
export declare class SwiperDirective {
    private el;
    private renderer;
    isDown: boolean;
    initialPos: number;
    lastPos: number;
    swipeDistance: number;
    firstSwipeDate: number;
    static canISwipe: boolean;
    onSwipeRight: EventEmitter<any>;
    onSwipeLeft: EventEmitter<any>;
    onSwipeStart: EventEmitter<any>;
    onSwipeEnd: EventEmitter<any>;
    swipeLeft: EventEmitter<any>;
    swipeRight: EventEmitter<any>;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    onMouseDown(event: any): void;
    onMouseUp(event: any): void;
    onMouseMove(event: any): void;
    onTouchMove(event: any): void;
    onTouchStart(event: any): void;
    onTouchEnd(event: any): void;
}
