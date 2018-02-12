// ./effects/auth.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/empty';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import {
        TOKEN_REQUESTED, NEW_CAPTCHA, TOKEN_RECEIVED, TokenReceived, TokenRequested,
} from '../actions';
//import {  } from '../reducers';
import { CaptchaService } from '../services';

@Injectable()
export class CaptchaEffects {

        constructor(
                private actions$: Actions,
                private router: Router,
                private captchaService: CaptchaService
        ) { }

        @Effect()
        login$ = this.actions$
                .ofType(NEW_CAPTCHA)
                .map(() => new TokenRequested());

        @Effect()
        tokenRequest$ = this.actions$
                .ofType(TOKEN_REQUESTED)
                .switchMap(() => this.captchaService.getToken()
                        .map(token => new TokenReceived(token))
                        .catch(err => {
                                return Observable.empty();
                        })
                )

}