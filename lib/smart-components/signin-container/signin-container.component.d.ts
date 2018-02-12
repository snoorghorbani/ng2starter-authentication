import { OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as FeatureReducer from '../../reducers';
import { CaptchaModel } from '../../models';
export declare class SigninContainerComponent implements OnInit, OnDestroy {
    private store;
    captcha$: Observable<CaptchaModel>;
    form: FormGroup;
    constructor(store: Store<FeatureReducer.FeatureState>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    authenticate(formValue: any): void;
}
