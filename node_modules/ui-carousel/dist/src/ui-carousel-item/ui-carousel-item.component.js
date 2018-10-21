"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var swiper_directive_1 = require("../directives/swiper.directive");
var ui_lazy_load_directive_1 = require("../directives/ui-lazy-load.directive");
var UICarouselItemComponent = (function () {
    function UICarouselItemComponent(renderer, ref) {
        this.renderer = renderer;
        this.ref = ref;
        this.currentPosition = 0;
        this.position = 0;
    }
    UICarouselItemComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(UICarouselItemComponent.prototype, "transition", {
        get: function () {
            return UICarouselItemComponent.transitionStyle;
        },
        set: function (transitionStyle) {
            UICarouselItemComponent.transitionStyle = transitionStyle;
        },
        enumerable: true,
        configurable: true
    });
    UICarouselItemComponent.prototype.moveTo = function (position) {
        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate3d(' + position + 'px, 0px, 0px)');
        this.renderer.setStyle(this.el.nativeElement, '-webkit-transform', 'translate3d(' + position + 'px, 0px, 0px)');
        this.renderer.setStyle(this.el.nativeElement, '-moz-transform', 'translate3d(' + position + 'px, 0px, 0px)');
        this.renderer.setStyle(this.el.nativeElement, '-o-transform', 'translate3d(' + position + 'px, 0px, 0px)');
        this.renderer.setStyle(this.el.nativeElement, '-ms-transform', 'translate3d(' + position + 'px, 0px, 0px)');
    };
    UICarouselItemComponent.prototype.moveBy = function (distance) {
        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate3d(' + distance + 'px, 0px, 0px)');
        this.renderer.setStyle(this.el.nativeElement, '-webkit-transform', 'translate3d(' + distance + 'px, 0px, 0px)');
        this.renderer.setStyle(this.el.nativeElement, '-moz-transform', 'translate3d(' + distance + 'px, 0px, 0px)');
        this.renderer.setStyle(this.el.nativeElement, '-o-transform', 'translate3d(' + distance + 'px, 0px, 0px)');
        this.renderer.setStyle(this.el.nativeElement, '-ms-transform', 'translate3d(' + distance + 'px, 0px, 0px)');
    };
    UICarouselItemComponent.prototype.setzIndex = function (zIndex) {
        this.renderer.setStyle(this.el.nativeElement, 'z-index', zIndex);
    };
    UICarouselItemComponent.prototype.disableTransition = function () {
        this.renderer.setStyle(this.el.nativeElement, "transition", "none");
        this.renderer.setStyle(this.el.nativeElement, "-moz-transition", "none");
        this.renderer.setStyle(this.el.nativeElement, "-webkit-transition", "none");
        this.renderer.setStyle(this.el.nativeElement, "-o-transition", "none");
        this.renderer.setStyle(this.el.nativeElement, "-ms-transition", "none");
        // this.transition = {
        //     "transition": "none",
        //     "-moz-transition": "none",
        //     "-webkit-transition": "none",
        //     "-o-transition": "none",
        //     "-ms-transition": "none"
        // }
    };
    UICarouselItemComponent.prototype.enableTransition = function () {
        // this.transition = {
        //     "transition": "transform .5s",
        //     "-moz-transition": "transform .5s",
        //     "-webkit-transition": "transform .5s",
        //     "-o-transition": "transform .5s",
        //     "-ms-transition": "transform .5s",
        // }
        this.renderer.setStyle(this.el.nativeElement, "transition", "transform");
        this.renderer.setStyle(this.el.nativeElement, "-moz-transition", "transform");
        this.renderer.setStyle(this.el.nativeElement, "-webkit-transition", "transform");
        this.renderer.setStyle(this.el.nativeElement, "-o-transition", "transform");
        this.renderer.setStyle(this.el.nativeElement, "-ms-transition", "transform");
        this.renderer.setStyle(this.el.nativeElement, "transition-duration", this.speed + "ms");
        this.renderer.setStyle(this.el.nativeElement, "-moz-transition-duration", this.speed + "ms");
        this.renderer.setStyle(this.el.nativeElement, "-webkit-transition-duration", this.speed + "ms");
        this.renderer.setStyle(this.el.nativeElement, "-o-transition-duration", this.speed + "ms");
        this.renderer.setStyle(this.el.nativeElement, "-ms-transition-duration", this.speed + "ms");
    };
    UICarouselItemComponent.prototype.fadeOut = function (duration) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.renderer.setStyle(_this.el.nativeElement, "opacity", "0");
            setTimeout(function () {
                _this.renderer.setStyle(_this.el.nativeElement, "opacity", "1");
                resolve();
            }, duration);
        });
    };
    UICarouselItemComponent.prototype.fadeIn = function (duration) {
        var _this = this;
        this.renderer.setStyle(this.el.nativeElement, "opacity", "0");
        setTimeout(function () {
            _this.renderer.setStyle(_this.el.nativeElement, "transition", "opacity " + duration + "ms");
            // this.renderer.setStyle(this.el.nativeElement, "transition-duration", duration+ "ms");
            // this.renderer.setStyle(this.el.nativeElement, "transition-duration", duration+ "ms");
            _this.renderer.setStyle(_this.el.nativeElement, "opacity", "1");
        }, 0);
    };
    UICarouselItemComponent.prototype.lazyLoad = function () {
        this.lazyLoadedImages
            .forEach(function (img) {
            img.load();
        });
    };
    UICarouselItemComponent.transitionStyle = {};
    UICarouselItemComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ui-carousel-item',
                    template: "\n        <div #carouselItem class=\"ui-carousel-item fade\" [ngStyle]=\"transition\" swiper tabindex=\"-1\" style=\"outline: none\">\n        <ng-content></ng-content>\n        </div>\n   ",
                    styles: ["\n        :host{\n            width: 100%;\n        }\n        \n        .ui-carousel-item{\n            user-select: none;\n            -moz-user-select: none;\n            -khtml-user-select: none;\n            -webkit-user-select: none;\n            -o-user-select: none;\n            -ms-user-select: none;\n        }\n         \n        .transition{\n            transition: transform;\n            -moz-transition: transform;\n            -webkit-transition: transform;\n            -o-transition: transform;\n            -ms-transition: transform;\n            transition-timing-function: ease;\n            -moz-transition-timing-function: ease;\n            -o-transition-timing-function: ease;\n            -ms-transition-timing-function: ease;\n        }\n        \n        .ui-carousel-item{\n            height: 100%;\n            width: 100%;\n            background: orange;\n            position: absolute;    \n            overflow: hidden;\n        }\n        \n        .fade{\n            opacity: 1;\n            -webkit-transition: opacity .5s ease-in;\n               -moz-transition: opacity .5s ease-in;\n                -ms-transition: opacity .5s ease-in;\n                 -o-transition: opacity .5s ease-in;\n                    transition: opacity .5s ease-in;\n        }\n        \n        .fade-out{\n            opacity: 0;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    UICarouselItemComponent.ctorParameters = function () { return [
        { type: core_1.Renderer2, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    UICarouselItemComponent.propDecorators = {
        "el": [{ type: core_1.ViewChild, args: ["carouselItem",] },],
        "swiper": [{ type: core_1.ViewChild, args: [swiper_directive_1.SwiperDirective,] },],
        "lazyLoadedImages": [{ type: core_1.ContentChildren, args: [ui_lazy_load_directive_1.UILazyloadDirective,] },],
    };
    return UICarouselItemComponent;
}());
exports.UICarouselItemComponent = UICarouselItemComponent;
//# sourceMappingURL=ui-carousel-item.component.js.map