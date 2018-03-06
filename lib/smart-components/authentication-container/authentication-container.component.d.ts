import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import * as FeatureReducer from "../../reducers/index";
import { CaptchaModel } from "../../models";
export declare class AuthenticationContainerComponent {
    private store;
    captcha$: Observable<CaptchaModel>;
    constructor(store: Store<FeatureReducer.FeatureState>);
    newCaptcha(): void;
}
