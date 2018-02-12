import { Store } from '@ngrx/store';
import { AuthenticationModuleConfig } from '../../authentication.config';
import { AuthenticationState } from '../../reducers';
export declare class AuthenticationConfigurationService {
    private store;
    _config: AuthenticationModuleConfig;
    readonly config: AuthenticationModuleConfig;
    constructor(configFile: any, store: Store<AuthenticationState>);
}
