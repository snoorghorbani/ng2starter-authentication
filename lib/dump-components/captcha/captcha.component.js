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
const core_1 = require("@angular/core");
let CaptchaComponent = class CaptchaComponent {
    constructor() {
        this.reset = new core_1.EventEmitter();
        this.captchaEntered = new core_1.EventEmitter();
    }
    updateCaptchaValue() {
        this.captchaEntered.emit(this.captchaValue);
    }
    setStyle() {
        return {
            "background-image": 'url("' + this.captcha$.CaptchaImageUrl + '");'
        };
    }
};
__decorate([
    core_1.Input("captcha"),
    __metadata("design:type", Object)
], CaptchaComponent.prototype, "captcha$", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CaptchaComponent.prototype, "reset", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CaptchaComponent.prototype, "captchaEntered", void 0);
CaptchaComponent = __decorate([
    core_1.Component({
        selector: "auth-captcha",
        templateUrl: './captcha.component.html',
        styleUrls: ['./captcha.component.css']
    }),
    __metadata("design:paramtypes", [])
], CaptchaComponent);
exports.CaptchaComponent = CaptchaComponent;
//# sourceMappingURL=captcha.component.js.map