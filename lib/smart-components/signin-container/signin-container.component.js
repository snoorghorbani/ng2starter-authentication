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
const FeatureReducer = require("../../reducers");
const actions_1 = require("../../actions");
const models_1 = require("../../models");
let SigninContainerComponent = class SigninContainerComponent {
    constructor(
    //private configurationService: ConfigurationService,
    store) {
        this.store = store;
        this.form = models_1.Signin_ApiModel.Request.formGroup;
        this.captcha$ = this.store.select(FeatureReducer.getCaptcha);
    }
    ngOnInit() {
        this.captcha$
            .subscribe((data) => {
            if (!(data.Captcha && data.Token))
                return;
            this.form.patchValue({ Captcha: data.Captcha });
            this.form.patchValue({ Token: data.Token.Token });
        });
    }
    ngOnDestroy() {
        this.store.dispatch(new actions_1.ClearCaptcha());
    }
    authenticate(formValue) {
        debugger;
        this.store.dispatch(new actions_1.Signin(formValue));
    }
};
SigninContainerComponent = __decorate([
    core_1.Component({
        template: `
        <auth-signin 
                [formGroup]='form'
                (signedin)="authenticate($event)"
        ></auth-signin>
        
  `
    }),
    __metadata("design:paramtypes", [store_1.Store])
], SigninContainerComponent);
exports.SigninContainerComponent = SigninContainerComponent;
//# sourceMappingURL=signin-container.component.js.map