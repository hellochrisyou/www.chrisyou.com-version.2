"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/throttleTime");
var ui_carousel_item_component_1 = require("../ui-carousel-item/ui-carousel-item.component");
var UICarouselComponent = (function () {
    function UICarouselComponent(el) {
        this.el = el;
        this.nextSubject = new Subject_1.Subject();
        this.prevSubject = new Subject_1.Subject();
        this.onChange = new core_1.EventEmitter();
        this.height = "300px";
        this.width = "100%";
        this.autoPlay = true;
        this.infinite = true;
        this.fade = false;
        this.isDotsVisible = true;
        this.isArrowsVisible = true;
        this.currentItemIndex = 0;
    }
    UICarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.speed = this.speed || 500;
        this.autoPlaySpeed = this.autoPlaySpeed || 1500;
        if (this.autoPlay) {
            this.autoPlayFunction(true);
        }
        this.nextSubject.throttleTime(this.speed).subscribe(function () {
            if (!_this.fade) {
                _this.slideLeft();
            }
            else {
                _this.fadeLeft();
            }
        });
        this.prevSubject.throttleTime(this.speed).subscribe(function () {
            if (!_this.fade) {
                _this.slideRight();
            }
            else {
                _this.fadeRight();
            }
        });
        this.onChange.subscribe(function (index) {
            var item = _this.getItemByIndex(index);
            item.lazyLoad();
        });
    };
    UICarouselComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.el.nativeElement.style.height = this.height;
        this.el.nativeElement.style.width = this.width;
        if (this.items && this.items.length > 0) {
            this.onChange.emit(0);
            this._width = this.items.first.el.nativeElement.offsetWidth;
        }
        this.firstItemIndex = 0;
        this.lastItemIndex = this.items.length - 1;
        if (!this.fade) {
            this.items.forEach(function (item, itemIndex) {
                var totalDistanceSwiped = 0;
                item.speed = _this.speed;
                item.position = _this._width * itemIndex;
                item.currentPosition = item.position;
                item.disableTransition();
                item.moveTo(item.position);
                item.swiper.onSwipeLeft.subscribe(function (distance) {
                    totalDistanceSwiped += Math.abs(distance);
                    var shortDistance = distance / Math.pow(totalDistanceSwiped, .4);
                    if (itemIndex === _this.firstItemIndex && _this.infinite) {
                        _this.rotateRight();
                    }
                    _this.items.forEach(function (itm, index) {
                        if ((itemIndex === _this.firstItemIndex || (itemIndex === _this.lastItemIndex && distance > 0))
                            && !_this.infinite) {
                            itm.currentPosition += shortDistance;
                        }
                        else {
                            itm.currentPosition += distance;
                        }
                        itm.moveTo(itm.currentPosition);
                    });
                });
                item.swiper.onSwipeRight.subscribe(function (distance) {
                    totalDistanceSwiped += Math.abs(distance);
                    var shortDistance = distance / Math.pow(totalDistanceSwiped, .4);
                    if (itemIndex === _this.lastItemIndex && _this.infinite) {
                        _this.rotateLeft();
                    }
                    _this.items.forEach(function (itm, index) {
                        if ((itemIndex === _this.lastItemIndex || (itemIndex === _this.firstItemIndex && distance < 0))
                            && !_this.infinite) {
                            itm.currentPosition += shortDistance;
                        }
                        else {
                            itm.currentPosition += distance;
                        }
                        itm.moveTo(itm.currentPosition);
                    });
                });
                item.swiper.swipeLeft.subscribe(function () {
                    totalDistanceSwiped = 0;
                    _this.slideLeft();
                });
                item.swiper.swipeRight.subscribe(function () {
                    totalDistanceSwiped = 0;
                    _this.slideRight();
                });
                item.swiper.onSwipeEnd.subscribe(function () {
                    totalDistanceSwiped = 0;
                    _this.enableTransition();
                    _this.slideToPrevPosition();
                });
                item.swiper.onSwipeStart.subscribe(function () {
                    totalDistanceSwiped = 0;
                    _this.disableTransition();
                });
            });
        }
        else {
            this.items.forEach(function (item, index) {
                item.zIndex = _this.items.length - index;
                item.setzIndex(item.zIndex);
            });
        }
    };
    UICarouselComponent.prototype.next = function () {
        this.prevSubject.next();
    };
    UICarouselComponent.prototype.prev = function () {
        this.nextSubject.next();
    };
    UICarouselComponent.prototype.goTo = function (index) {
        if (!this.fade) {
            this.slideTo(index);
        }
        else {
            this.fadeTo(index);
        }
    };
    UICarouselComponent.prototype.rotateRightTo = function (index) {
        while (index !== this.lastItemIndex) {
            this.rotateRight();
        }
    };
    UICarouselComponent.prototype.rotateLeftTo = function (index) {
        while (index !== this.firstItemIndex) {
            this.rotateLeft();
        }
    };
    UICarouselComponent.prototype.slideTo = function (index) {
        var _this = this;
        this.onChange.emit((index + this.items.length) % this.items.length);
        var steps = this.currentItemIndex - index;
        if (this.infinite) {
            if (steps > 0) {
                this.rotateRightTo(this.currentItemIndex);
            }
            else if (steps < 0) {
                this.rotateLeftTo(this.currentItemIndex);
            }
        }
        setTimeout(function () {
            _this.enableTransition();
            _this.items.forEach(function (item, i) {
                item.position += _this._width * (steps);
                item.currentPosition = item.position;
                item.moveTo(item.position);
            });
            _this.currentItemIndex = (index + _this.items.length) % _this.items.length;
        }, 50);
    };
    UICarouselComponent.prototype.slideLeft = function () {
        if (!this.infinite) {
            if (this.currentItemIndex === 0) {
                this.slideToPrevPosition();
                return;
            }
        }
        this.slideTo(this.currentItemIndex - 1);
    };
    UICarouselComponent.prototype.slideRight = function () {
        if (!this.infinite) {
            if (this.currentItemIndex === this.items.length - 1) {
                this.slideToPrevPosition();
                return;
            }
        }
        this.slideTo(this.currentItemIndex + 1);
    };
    UICarouselComponent.prototype.slideToPrevPosition = function () {
        this.enableTransition();
        this.items.forEach(function (item) {
            item.currentPosition = item.position;
            item.moveTo(item.position);
        });
    };
    UICarouselComponent.prototype.disableTransition = function () {
        this.items.forEach(function (item, index) {
            item.disableTransition();
        });
    };
    UICarouselComponent.prototype.enableTransition = function () {
        this.items.forEach(function (item, index) {
            item.enableTransition();
        });
    };
    UICarouselComponent.prototype.getItemByIndex = function (index) {
        return this.items.find(function (item, i) {
            return i === index;
        });
    };
    UICarouselComponent.prototype.getIndexByItem = function (item) {
        return this.items.toArray().indexOf(item);
    };
    UICarouselComponent.prototype.rotateRightNTimes = function (n) {
        for (var i = 0; i < n; i++) {
            this.rotateRight();
        }
    };
    UICarouselComponent.prototype.rotateLeftNTimes = function (n) {
        for (var i = 0; i < n; i++) {
            this.rotateLeft();
        }
    };
    UICarouselComponent.prototype.rotateRight = function () {
        var firstItemRef = this.getItemByIndex(this.firstItemIndex);
        var lastItemRef = this.getItemByIndex(this.lastItemIndex);
        if (!this.fade) {
            lastItemRef.position = firstItemRef.position - this._width;
            lastItemRef.currentPosition = lastItemRef.position;
            lastItemRef.disableTransition();
            lastItemRef.moveTo(lastItemRef.position);
            this.firstItemIndex = this.lastItemIndex;
            this.lastItemIndex = (this.lastItemIndex - 1 + this.items.length) % this.items.length;
        }
    };
    UICarouselComponent.prototype.rotateLeft = function () {
        var firstItemRef = this.getItemByIndex(this.firstItemIndex);
        var lastItemRef = this.getItemByIndex(this.lastItemIndex);
        firstItemRef.position = lastItemRef.position + this._width;
        firstItemRef.currentPosition = firstItemRef.position;
        firstItemRef.disableTransition();
        firstItemRef.moveTo(firstItemRef.position);
        this.lastItemIndex = this.firstItemIndex;
        this.firstItemIndex = (this.lastItemIndex + 1) % this.items.length;
    };
    UICarouselComponent.prototype.fadeTo = function (index) {
        this.onChange.emit(index);
        var firstItem = this.getItemByIndex(this.currentItemIndex);
        var targetItem = this.getItemByIndex(index);
        var highestZIndex = this.items.length;
        targetItem.zIndex = firstItem.zIndex + 1;
        targetItem.setzIndex(targetItem.zIndex);
        targetItem.disableTransition();
        targetItem.fadeIn(this.speed);
        this.currentItemIndex = index;
    };
    UICarouselComponent.prototype.fadeRight = function () {
        var newIndex = (this.currentItemIndex + 1) % this.items.length;
        this.fadeTo(newIndex);
        this.currentItemIndex = newIndex;
    };
    UICarouselComponent.prototype.fadeLeft = function () {
        var newIndex = (this.currentItemIndex - 1 + this.items.length) % this.items.length;
        this.fadeTo(newIndex);
        this.currentItemIndex = newIndex;
    };
    // is item first visually and not necessary first in the dom (QueryList)
    // is item first visually and not necessary first in the dom (QueryList)
    UICarouselComponent.prototype.isItemFirst = 
    // is item first visually and not necessary first in the dom (QueryList)
    function (index) {
        return this.firstItemIndex === index;
    };
    // is item last visually and not necessary last in the dom (QueryList)
    // is item last visually and not necessary last in the dom (QueryList)
    UICarouselComponent.prototype.isItemLast = 
    // is item last visually and not necessary last in the dom (QueryList)
    function (index) {
        return this.lastItemIndex === index;
    };
    UICarouselComponent.prototype.onResize = function (event) {
        this.rePosition();
    };
    UICarouselComponent.prototype.rePosition = function () {
        if (this.items && this.items.length > 0) {
            this._width = this.items.first.el.nativeElement.offsetWidth;
        }
        var items = this.items.toArray();
        items.sort(function (item1, item2) {
            if (item1.position > item2.position)
                return 1;
            else if (item1.position < item2.position)
                return -1;
            else
                return 0;
        });
        var currentItem = this.getItemByIndex(this.currentItemIndex);
        var currentItemIndex = items.indexOf(currentItem);
        for (var i = currentItemIndex; i < items.length + currentItemIndex; i++) {
            var item = items[(i + items.length) % items.length];
            item.position = ((i + items.length) % items.length - currentItemIndex) * this._width;
            item.disableTransition();
            item.moveTo(item.position);
        }
    };
    UICarouselComponent.prototype.ngOnDestroy = function () {
        this.nextSubject.unsubscribe();
        this.prevSubject.unsubscribe();
    };
    UICarouselComponent.prototype.autoPlayFunction = function (isAutoPlay) {
        var _this = this;
        if (this.autoPlay) {
            if (isAutoPlay) {
                this.interval = setInterval(function () {
                    _this.next();
                }, this.autoPlaySpeed);
            }
            else {
                clearInterval(this.interval);
            }
        }
    };
    UICarouselComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ui-carousel',
                    template: "\n    <div (mouseenter)=\"(autoPlay)?autoPlayFunction(false):null\" (mouseleave)=\"(autoPlay)?autoPlayFunction(true):null\">\n        <ng-content></ng-content>\n        <dots *ngIf=\"isDotsVisible\" [dots-count]=\"items.length\" position=\"middle\" [active-dot]=\"currentItemIndex\" (on-click)=\"goTo($event)\"></dots>\n        <arrow *ngIf=\"isArrowsVisible\" dir=\"left\" (on-click)=\"prev()\" [disabled]=\"false\"></arrow>\n        <arrow *ngIf=\"isArrowsVisible\" dir=\"right\" (on-click)=\"next()\" [disabled]=\"false\"></arrow>\n    </div>\n    ",
                    styles: ["\n        :host{\n            display: block;\n            overflow: hidden;\n            position: relative;\n        }\n    "],
                },] },
    ];
    /** @nocollapse */
    UICarouselComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    UICarouselComponent.propDecorators = {
        "onChange": [{ type: core_1.Output },],
        "height": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "speed": [{ type: core_1.Input },],
        "autoPlay": [{ type: core_1.Input },],
        "autoPlaySpeed": [{ type: core_1.Input },],
        "infinite": [{ type: core_1.Input },],
        "fade": [{ type: core_1.Input },],
        "isDotsVisible": [{ type: core_1.Input, args: ['dots',] },],
        "isArrowsVisible": [{ type: core_1.Input, args: ['arrows',] },],
        "items": [{ type: core_1.ContentChildren, args: [ui_carousel_item_component_1.UICarouselItemComponent,] },],
        "onResize": [{ type: core_1.HostListener, args: ['window:resize', ['$event'],] },],
    };
    return UICarouselComponent;
}());
exports.UICarouselComponent = UICarouselComponent;
//# sourceMappingURL=ui-carousel.component.js.map