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
const FeatureReducer = require("../../reducers/index");
//import * as captchaReducer from '../../reducers/captcha.reducer'
//import * as loginPageReducer from '../../reducers/login-page.reducer'
//import { CaptchaModel } from '../../models'
const actions_1 = require("../../actions");
//import { LoginService, AuthenticationAction, Login, LogoutAction, getLoggedIn, UserModel } from '../..';
let AuthenticationContainerComponent = class AuthenticationContainerComponent {
    //loggedIn$ = this.store.select(FeatureReducer.getLoggedIn);
    constructor(store) {
        this.store = store;
        this.captcha$ = this.store.select(FeatureReducer.getCaptcha);
    }
    newCaptcha() {
        this.store.dispatch(new actions_1.NewCaptcha());
    }
    //constructor(
    //        private loginService: LoginService,
    //        public snackBar: MatSnackBar,
    //        //private store: Store<UserState>
    //) {
    //        debugger
    //        //this.loggedIn$ = store.select(state => state.loggedIn);
    //}
    //login() {
    //        // this.store.dispatch(new Login({}));
    //        // debugger
    //        // this.snackBar.open("Authentication", "", {
    //        //         duration: 500
    //        // });
    //        var user = new UserModel();
    //        //this.store.dispatch(new Login(user));
    //}
    //logout() {
    //}
    ngOnInit() {
    }
};
AuthenticationContainerComponent = __decorate([
    core_1.Component({
        template: `
          <router-outlet></router-outlet>
        `
    }),
    __metadata("design:paramtypes", [store_1.Store])
], AuthenticationContainerComponent);
exports.AuthenticationContainerComponent = AuthenticationContainerComponent;
//# sourceMappingURL=authentication-container.component.js.map