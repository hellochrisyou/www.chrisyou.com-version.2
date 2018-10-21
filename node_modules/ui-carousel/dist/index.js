"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ui_carousel_component_1 = require("./src/ui-carousel/ui-carousel.component");
var ui_carousel_item_component_1 = require("./src/ui-carousel-item/ui-carousel-item.component");
var swiper_directive_1 = require("./src/directives/swiper.directive");
var ui_lazy_load_directive_1 = require("./src/directives/ui-lazy-load.directive");
var dots_component_1 = require("./src/dots/dots.component");
var arrow_component_1 = require("./src/arrow/arrow.component");
var UICarouselModule = (function () {
    function UICarouselModule() {
    }
    UICarouselModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    exports: [
                        ui_carousel_component_1.UICarouselComponent,
                        ui_carousel_item_component_1.UICarouselItemComponent,
                        ui_lazy_load_directive_1.UILazyloadDirective
                    ],
                    declarations: [
                        ui_carousel_component_1.UICarouselComponent,
                        ui_carousel_item_component_1.UICarouselItemComponent,
                        dots_component_1.DotsComponent,
                        arrow_component_1.ArrowComponent,
                        swiper_directive_1.SwiperDirective,
                        ui_lazy_load_directive_1.UILazyloadDirective
                    ],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    UICarouselModule.ctorParameters = function () { return []; };
    return UICarouselModule;
}());
exports.UICarouselModule = UICarouselModule;
//# sourceMappingURL=index.js.map