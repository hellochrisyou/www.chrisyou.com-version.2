"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DotsComponent = (function () {
    function DotsComponent() {
        this.activeDot = 0;
        this.position = "left";
        this.onClick = new core_1.EventEmitter();
    }
    DotsComponent.prototype.ngOnInit = function () {
        this.numbers = Array(this.dotsCount).fill(0).map(function (x, i) { return i; });
    };
    DotsComponent.prototype.click = function (index) {
        this.onClick.emit(index);
        this.activeDot = index;
    };
    DotsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dots',
                    template: "\n    <div class=\"dot\" *ngFor=\"let index of numbers\" (click)=\"click(index)\" [class.active]=\"activeDot === index\"></div>\n    ",
                    styles: ["\n        :host{\n            position: absolute;\n            display: inline-block;\n            z-index: 1000;\n        }\n        \n        :host(.left){\n            bottom: 10px;\n            left: 10px;\n        }\n        \n        :host(.right){\n            bottom: 10px;\n            right: 10px;\n        }\n        \n        :host(.middle){\n            bottom: 20px;\n            left: 50%;\n            transform: translateX(-50%);\n            -webkit-transform: translateX(-50%);\n            -moz-transform: translateX(-50%);\n            -o-transform: translateX(-50%);\n            -ms-transform: translateX(-50%);\n        }\n        \n        .dot{\n            height: 10px;\n            width: 10px;\n            border-radius: 5px;\n            background: white;\n            opacity: .6;\n            margin: 0 4px;\n            display: inline-block;\n        }\n        \n        .dot:hover{\n            opacity: .8;\n            cursor: pointer;\n        }\n        \n        .dot.active{\n            opacity: .8;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    DotsComponent.ctorParameters = function () { return []; };
    DotsComponent.propDecorators = {
        "activeDot": [{ type: core_1.Input, args: ["active-dot",] },],
        "dotsCount": [{ type: core_1.Input, args: ["dots-count",] },],
        "position": [{ type: core_1.HostBinding, args: ["class",] }, { type: core_1.Input },],
        "onClick": [{ type: core_1.Output, args: ["on-click",] },],
    };
    return DotsComponent;
}());
exports.DotsComponent = DotsComponent;
//# sourceMappingURL=dots.component.js.map