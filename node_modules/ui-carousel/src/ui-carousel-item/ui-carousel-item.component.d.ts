import { Renderer2, QueryList, ElementRef, ChangeDetectorRef } from '@angular/core';
import { SwiperDirective } from '../directives/swiper.directive';
import { UILazyloadDirective } from '../directives/ui-lazy-load.directive';
export declare class UICarouselItemComponent {
    private renderer;
    private ref;
    el: ElementRef;
    swiper: SwiperDirective;
    lazyLoadedImages: QueryList<UILazyloadDirective>;
    speed: number;
    static transitionStyle: any;
    currentPosition: number;
    position: number;
    zIndex: number;
    constructor(renderer: Renderer2, ref: ChangeDetectorRef);
    ngOnInit(): void;
    transition: any;
    moveTo(position: number): void;
    moveBy(distance: number): void;
    setzIndex(zIndex: number): void;
    disableTransition(): void;
    enableTransition(): void;
    fadeOut(duration: number): Promise<{}>;
    fadeIn(duration: number): void;
    lazyLoad(): void;
}
