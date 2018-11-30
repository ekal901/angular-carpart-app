"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DirectiveComponent = (function () {
    function DirectiveComponent() {
        this.val = true;
    }
    return DirectiveComponent;
}());
DirectiveComponent = __decorate([
    core_1.Component({
        selector: 'my-directive',
        template: " <h1>Custom Directive \uC608\uC81C</h1>\n                <h1 myHidden>Hidden Welcome</h1>\n                <h2> <span myUnderline>Hover to underline</span> </h2>\n                <h1 mycolor> Let's 'Hover' me!</h1>\n                "
    })
], DirectiveComponent);
exports.DirectiveComponent = DirectiveComponent;
//# sourceMappingURL=directive.component.js.map