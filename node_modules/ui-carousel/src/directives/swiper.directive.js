"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ZERO = 0.000000000001;
var SwiperDirective = (function () {
    function SwiperDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.isDown = false;
        this.initialPos = ZERO;
        this.lastPos = ZERO;
        this.swipeDistance = ZERO;
        this.firstSwipeDate = Date.now();
        this.onSwipeRight = new core_1.EventEmitter();
        this.onSwipeLeft = new core_1.EventEmitter();
        this.onSwipeStart = new core_1.EventEmitter();
        this.onSwipeEnd = new core_1.EventEmitter();
        this.swipeLeft = new core_1.EventEmitter();
        this.swipeRight = new core_1.EventEmitter();
    }
    SwiperDirective.prototype.ngOnInit = function () {
        this.onSwipeEnd.subscribe(function () {
        });
        this.swipeLeft.subscribe(function () {
            SwiperDirective.canISwipe = false;
            setTimeout(function () {
                SwiperDirective.canISwipe = true;
            }, 350);
        });
        this.swipeRight.subscribe(function () {
            SwiperDirective.canISwipe = false;
            setTimeout(function () {
                SwiperDirective.canISwipe = true;
            }, 350);
        });
    };
    SwiperDirective.prototype.onMouseDown = function (event) {
        if (!SwiperDirective.canISwipe) {
            return;
        }
        this.firstSwipeDate = Date.now();
        this.isDown = true;
        this.initialPos = event.clientX;
        this.swipeDistance = 0;
        this.onSwipeStart.emit();
    };
    SwiperDirective.prototype.onMouseUp = function (event) {
        if (!this.isDown)
            return;
        this.initialPos = this.lastPos = ZERO;
        this.isDown = false;
        if (this.swipeDistance > 100) {
            this.swipeLeft.emit();
        }
        else if (this.swipeDistance < -100) {
            this.swipeRight.emit();
        }
        else {
            this.onSwipeEnd.emit();
        }
        this.swipeDistance = ZERO;
    };
    SwiperDirective.prototype.onMouseMove = function (event) {
        if (this.isDown) {
            var swipeFrameDistance = event.clientX - this.initialPos - this.lastPos;
            this.swipeDistance += swipeFrameDistance;
            this.lastPos = event.clientX - this.initialPos;
            if (swipeFrameDistance > 0) {
                this.onSwipeLeft.emit(swipeFrameDistance);
            }
            else {
                this.onSwipeRight.emit(swipeFrameDistance);
            }
        }
    };
    SwiperDirective.prototype.onTouchMove = function (event) {
        if (!SwiperDirective.canISwipe) {
            return;
        }
        var touch = event.touches[0] || event.changedTouches[0];
        var swipeFrameDistance = touch.clientX - this.initialPos - this.lastPos;
        swipeFrameDistance = swipeFrameDistance < 30 ? swipeFrameDistance : 30;
        this.swipeDistance += swipeFrameDistance;
        this.lastPos = touch.clientX - this.initialPos;
        if (swipeFrameDistance > 0) {
            this.onSwipeLeft.emit(swipeFrameDistance);
        }
        else {
            this.onSwipeRight.emit(swipeFrameDistance);
        }
    };
    SwiperDirective.prototype.onTouchStart = function (event) {
        if (!SwiperDirective.canISwipe) {
            return;
        }
        var touch = event.touches[0] || event.changedTouches[0];
        this.firstSwipeDate = Date.now();
        this.initialPos = touch.clientX;
        this.swipeDistance = ZERO;
        this.onSwipeStart.emit();
    };
    SwiperDirective.prototype.onTouchEnd = function (event) {
        this.initialPos = this.lastPos = ZERO;
        if (this.swipeDistance > 100) {
            this.swipeLeft.emit();
        }
        else if (this.swipeDistance < -100) {
            this.swipeRight.emit();
        }
        else {
            this.onSwipeEnd.emit();
        }
        this.swipeDistance = ZERO;
    };
    SwiperDirective.canISwipe = true;
    SwiperDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[swiper]',
                    exportAs: 'swiper'
                },] },
    ];
    /** @nocollapse */
    SwiperDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer2, },
    ]; };
    SwiperDirective.propDecorators = {
        "onSwipeRight": [{ type: core_1.Output },],
        "onSwipeLeft": [{ type: core_1.Output },],
        "onSwipeStart": [{ type: core_1.Output },],
        "onSwipeEnd": [{ type: core_1.Output },],
        "swipeLeft": [{ type: core_1.Output },],
        "swipeRight": [{ type: core_1.Output },],
        "onMouseDown": [{ type: core_1.HostListener, args: ["mousedown", ["$event"],] },],
        "onMouseUp": [{ type: core_1.HostListener, args: ["document:mouseup", ["$event"],] },],
        "onMouseMove": [{ type: core_1.HostListener, args: ["mousemove", ["$event"],] },],
        "onTouchMove": [{ type: core_1.HostListener, args: ['touchmove', ['$event'],] },],
        "onTouchStart": [{ type: core_1.HostListener, args: ["touchstart", ["$event"],] },],
        "onTouchEnd": [{ type: core_1.HostListener, args: ["touchend", ["$event"],] },],
    };
    return SwiperDirective;
}());
exports.SwiperDirective = SwiperDirective;
//# sourceMappingURL=swiper.directive.js.map