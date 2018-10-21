"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UILazyloadDirective = (function () {
    function UILazyloadDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    UILazyloadDirective.prototype.load = function () {
        var img = this.el.nativeElement;
        if (img.src)
            return;
        img.src = this.uiLazyLoad;
        // this.renderer.listen(img, "load", (event) => { });
    };
    UILazyloadDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: '[ui-lazy-load]' },] },
    ];
    /** @nocollapse */
    UILazyloadDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer2, },
    ]; };
    UILazyloadDirective.propDecorators = {
        "uiLazyLoad": [{ type: core_1.Input, args: ["ui-lazy-load",] },],
    };
    return UILazyloadDirective;
}());
exports.UILazyloadDirective = UILazyloadDirective;
//# sourceMappingURL=ui-lazy-load.directive.js.map