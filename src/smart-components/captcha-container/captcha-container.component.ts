import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { NewCaptcha, CaptchaEntered } from '../../actions'
import * as featureReducer from '../../reducers/index'
import { CaptchaModel } from '../../models'


@Component({
        selector: 'auth-captcha-container',
        templateUrl: './captcha-container.component.html',
        styleUrls: ['./captcha-container.component.scss']
})
export class CaptchaContainerComponent implements OnInit {

        captcha$: Observable<CaptchaModel>;

        constructor(
                private authStore: Store<featureReducer.FeatureState>
        ) {
                this.captcha$ = this.authStore.select(featureReducer.getCaptcha);
        }

        reset() {
                this.authStore.dispatch(new NewCaptcha());
        }

        setCaptchaValue(value: string) {
                this.authStore.dispatch(new CaptchaEntered(value));
        }

        ngOnInit() {
                this.authStore.dispatch(new NewCaptcha());
        }
}