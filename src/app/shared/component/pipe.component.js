"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PipeComponent = (function () {
    function PipeComponent() {
        this.dateStr = "20161020";
        this.numbers = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15
        ];
        var dt = new Date();
        var month = dt.getMonth() + 1;
        var day = dt.getDate();
        var year = dt.getFullYear();
        this.dateStr = year + '' + month + '' + day;
    }
    return PipeComponent;
}());
PipeComponent = __decorate([
    core_1.Component({
        selector: 'my-pipe',
        template: "<h2>\uB0A0\uC9DC\uBCC0\uD658 : {{dateStr|mydate:'/'}} <br>\n                    \uB0A0\uC9DC\uBCC0\uD658 : {{dateStr|mydate:'-'}} <br></h2>\n                <div>\n                    <ul>\n                        <li *ngFor=\"let num of numbers\">\n                            {{ num | ordinal }}\n                        </li>\n                    </ul>\n                </div>\n                 "
    }),
    __metadata("design:paramtypes", [])
], PipeComponent);
exports.PipeComponent = PipeComponent;
//# sourceMappingURL=pipe.component.js.map