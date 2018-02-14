"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var FeatureReducer = require("../../reducers/index");
var actions_1 = require("../../actions");
//import { LoginService, AuthenticationAction, Login, LogoutAction, getLoggedIn, UserModel } from '../..';
var AuthenticationContainerComponent = /** @class */ (function () {
    //loggedIn$ = this.store.select(FeatureReducer.getLoggedIn);
    function AuthenticationContainerComponent(store) {
        this.store = store;
        this.captcha$ = this.store.select(FeatureReducer.getCaptcha);
    }
    AuthenticationContainerComponent.prototype.newCaptcha = function () {
        this.store.dispatch(new actions_1.NewCaptcha());
    };
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
    AuthenticationContainerComponent.prototype.ngOnInit = 
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
    function () {
    };
    AuthenticationContainerComponent.decorators = [
        { type: core_1.Component, args: [{
                    template: "\n          <router-outlet></router-outlet>\n        "
                },] },
    ];
    /** @nocollapse */
    AuthenticationContainerComponent.ctorParameters = function () { return [
        { type: store_1.Store, },
    ]; };
    return AuthenticationContainerComponent;
}());
exports.AuthenticationContainerComponent = AuthenticationContainerComponent;
//# sourceMappingURL=authentication-container.component.js.map