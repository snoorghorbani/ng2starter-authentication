import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { selectCaptchaState } from '../../reducers'
import * as FeatureReducer from '../../reducers/index'
//import * as captchaReducer from '../../reducers/captcha.reducer'
//import * as loginPageReducer from '../../reducers/login-page.reducer'
//import { CaptchaModel } from '../../models'
import { TokenReceived, NewCaptcha } from '../../actions'
import { CaptchaModel } from '../../models'

//import { LoginService, AuthenticationAction, Login, LogoutAction, getLoggedIn, UserModel } from '../..';


@Component({
        template: `
          <router-outlet></router-outlet>
        `
})
export class AuthenticationContainerComponent implements OnInit {
        captcha$: Observable<CaptchaModel>;
        //loggedIn$ = this.store.select(FeatureReducer.getLoggedIn);

        constructor(
                private store: Store<FeatureReducer.FeatureState>
        ) {
                this.captcha$ = this.store.select(FeatureReducer.getCaptcha);
        }

        newCaptcha() {
                this.store.dispatch(new NewCaptcha());
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

}