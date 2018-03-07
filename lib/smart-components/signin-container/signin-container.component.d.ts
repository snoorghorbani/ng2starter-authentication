import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import * as FeatureReducer from "../../reducers";
import { AuthenticationConfigurationService } from "../../services";
export declare class SigninContainerComponent {
    private configurationService;
    private store;
    formId$: Observable<string>;
    constructor(configurationService: AuthenticationConfigurationService, store: Store<FeatureReducer.FeatureState>);
    signIn(formValue: any): void;
}
