import { OnInit, EventEmitter } from '@angular/core';
export declare class DotsComponent implements OnInit {
    numbers: Array<number>;
    activeDot: number;
    dotsCount: number;
    position: string;
    onClick: EventEmitter<number>;
    constructor();
    ngOnInit(): void;
    click(index: any): void;
}
