import { OnInit, OnDestroy } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import * as FeatureReducer from "../../reducers";
import { CaptchaModel } from "../../models";
import { AuthenticationConfigurationService } from "../../services";
export declare class SigninContainerComponent implements OnInit, OnDestroy {
    private configurationService;
    private store;
    captcha$: Observable<CaptchaModel>;
    formId$: Observable<string>;
    constructor(configurationService: AuthenticationConfigurationService, store: Store<FeatureReducer.FeatureState>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    signIn(formValue: any): void;
}
