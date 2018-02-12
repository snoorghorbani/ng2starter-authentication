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
const store_1 = require("@ngrx/store");
const actions_1 = require("../../actions");
const featureReducer = require("../../reducers/index");
let CaptchaContainerComponent = class CaptchaContainerComponent {
    constructor(authStore) {
        this.authStore = authStore;
        this.captcha$ = this.authStore.select(featureReducer.getCaptcha);
    }
    reset() {
        this.authStore.dispatch(new actions_1.NewCaptcha());
    }
    setCaptchaValue(value) {
        this.authStore.dispatch(new actions_1.CaptchaEntered(value));
    }
    ngOnInit() {
        this.authStore.dispatch(new actions_1.NewCaptcha());
    }
};
CaptchaContainerComponent = __decorate([
    core_1.Component({
        selector: 'auth-captcha-container',
        templateUrl: './captcha-container.component.html',
        styleUrls: ['./captcha-container.component.scss']
    }),
    __metadata("design:paramtypes", [store_1.Store])
], CaptchaContainerComponent);
exports.CaptchaContainerComponent = CaptchaContainerComponent;
//# sourceMappingURL=captcha-container.component.js.map