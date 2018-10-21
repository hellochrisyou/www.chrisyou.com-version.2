"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ArrowComponent = (function () {
    function ArrowComponent() {
        this.disabled = true;
        this.click = new core_1.EventEmitter();
    }
    ArrowComponent.prototype.onClick = function () {
        if (!this.disabled)
            this.click.emit();
    };
    ArrowComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'arrow',
                    template: "\n        <div class=\"arrow\" (click)=\"onClick()\" \n        [ngClass]=\"{ left : dir === 'left', right : dir === 'right', disabled  : disabled}\"></div>\n    ",
                    styles: ["\n        .arrow{\n            position: absolute;\n            height: 50px;\n            width: 30px;\n            opacity: .6;\n            user-select: none;\n            -moz-user-select: none;\n            -khtml-user-select: none;\n            -webkit-user-select: none;\n            -o-user-select: none;\n            z-index: 1000;\n        }\n        .arrow.right{\n            right: 5px;\n            top: 50%;\n         \n            transform: scaleX(-1) translateY(-50%);\n            -moz-transform: scaleX(-1) translateY(-50%);\n            -o-transform: scaleX(-1) translateY(-50%);\n            -webkit-transform: scaleX(-1) translateY(-50%);\n            -ms-transform: scaleX(-1) translateY(-50%);\n            filter: FlipH;\n            -ms-filter: \"FlipH\";\n        }\n        \n        .arrow.left{\n            left: 5px;\n            top: 50%;\n            transform: translateY(-50%);\n            -moz-transform: translateY(-50%);\n            -webkit-transform: translateY(-50%);\n            -o-transform: translateY(-50%);\n            -ms-transform: translateY(-50%);\n        }\n        .arrow:hover{\n            opacity: .8;\n            cursor: pointer;\n        }\n        \n        .arrow:before{\n            content: \"\";\n            height: 3px;\n            width: 30px;\n            background: #fff;\n            display: block;\n            position: absolute;\n            top: 14px;\n            transform: rotate(-45deg);\n            -moz-transform: rotate(-45deg);\n            -webkit-transform: rotate(-45deg);\n            -o-transform: rotate(-45deg);\n            -ms-transform: rotate(-45deg);\n        }\n        .arrow:after{\n            content: \"\";\n            height: 3px;\n            width: 30px;\n            background: #fff;\n            display: block;\n            transform: rotate(45deg);\n            -moz-transform: rotate(45deg);\n            -webkit-transform: rotate(45deg);\n            -o-transform: rotate(45deg);\n            -ms-transform: rotate(45deg);\n            position: absolute;\n            bottom: 14px;\n        }\n        .arrow.disabled{\n            opacity: .4;\n        }\n        .arrow.disabled:hover{\n            opacity: .4;\n            cursor: pointer;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    ArrowComponent.ctorParameters = function () { return []; };
    ArrowComponent.propDecorators = {
        "dir": [{ type: core_1.Input },],
        "disabled": [{ type: core_1.Input, args: ["disabled",] },],
        "click": [{ type: core_1.Output, args: ['on-click',] },],
    };
    return ArrowComponent;
}());
exports.ArrowComponent = ArrowComponent;
//# sourceMappingURL=arrow.component.js.map