﻿import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/empty";
import { Action } from "@ngrx/store";
import { Actions, Effect, toPayload } from "@ngrx/effects";
import { RouterAction } from "@ngrx/router-store";

import { SignInActionTypes, SigninSecceed, SigninFailed, SigninRedirect } from "../actions/signin.actions";
// import * as AuthActions from '../actions';

//import {  } from '../reducers';
import { SigninService } from "../services";
import { NewCaptcha } from "../actions";
import {
	CheckSignInFromLocalStorageAction_PayloadModel,
	Signin_ApiModel,
	SignInSucceedAction_PayloadModel
} from "../models";

@Injectable()
export class SigninEffects {
	constructor(private actions$: Actions, private router: Router, public signinService: SigninService) {}

	@Effect()
	preSignUpStart$ = this.actions$
		.ofType(SignInActionTypes.SIGNIN)
		.map(toPayload)
		.switchMap((payload: Signin_ApiModel.Request) =>
			this.signinService
				.signin(payload)
				.map((user) => new SigninSecceed(user))
				.catch((error) => Observable.of(new SigninFailed(error)))
		);

	@Effect()
	SigninSucceed$ = this.actions$
		.ofType(SignInActionTypes.SIGNIN_SUCCEED)
		.map(toPayload)
		.switchMap((data: SignInSucceedAction_PayloadModel) => {
			this.router.navigate([ data.destinationRoute || "/" ]);
			return Observable.empty();
		});

	@Effect() AfterSigninFiled$ = this.actions$.ofType(SignInActionTypes.SIGNIN_FAILURE).map(() => new NewCaptcha());

	@Effect({ dispatch: false })
	redirectToLoginPage$ = this.actions$
		.ofType(SignInActionTypes.SIGNIN_REDIRECT, SignInActionTypes.SIGNOUT)
		.do((authed) => {
			this.router.navigate([ "auth/signin" ]);
		});

		// TODO:
	// @Effect({ dispatch: false })
	// signout$ = this.actions$
	// 	.ofType(SignInActionTypes.SIGNOUT)
	// 	.map((data) => this.signinService.signout().subscribe((response) => null));
}