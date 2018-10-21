import { EventEmitter } from '@angular/core';
export declare class ArrowComponent {
    dir: string;
    disabled: boolean;
    click: EventEmitter<any>;
    constructor();
    onClick(): void;
}
