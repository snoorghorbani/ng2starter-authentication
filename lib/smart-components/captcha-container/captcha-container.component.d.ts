import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as featureReducer from '../../reducers/index';
import { CaptchaModel } from '../../models';
export declare class CaptchaContainerComponent implements OnInit {
    private authStore;
    captcha$: Observable<CaptchaModel>;
    constructor(authStore: Store<featureReducer.FeatureState>);
    reset(): void;
    setCaptchaValue(value: string): void;
    ngOnInit(): void;
}
