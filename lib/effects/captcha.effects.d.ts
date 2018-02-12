import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/empty';
import { Actions } from '@ngrx/effects';
import { TokenReceived, TokenRequested } from '../actions';
import { CaptchaService } from '../services';
export declare class CaptchaEffects {
    private actions$;
    private router;
    private captchaService;
    constructor(actions$: Actions, router: Router, captchaService: CaptchaService);
    login$: Observable<TokenRequested>;
    tokenRequest$: Observable<{} | TokenReceived>;
}
