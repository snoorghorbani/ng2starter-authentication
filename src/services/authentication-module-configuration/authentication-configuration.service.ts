import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AuthenticationModuleConfig } from '../../authentication.config';
import { MODULE_CONFIG_TOKEN } from '../../authentication.config';
import { MODULE_DEFAULT_CONFIG } from './authentication-module-config-default-value';
import { AuthenticationState } from '../../reducers';
import { getAuthenticationModuleConfig } from '@ng2-starter/config';

@Injectable()
export class AuthenticationConfigurationService {
	_config: AuthenticationModuleConfig;
	get config() {
		return this._config;
	}

	constructor(@Inject(MODULE_CONFIG_TOKEN) configFile: any, private store: Store<AuthenticationState>) {
		this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
		this.store.select(getAuthenticationModuleConfig).subscribe((storeConfig) => {
			if (!storeConfig) return;
			this._config = Object.assign({}, this._config, storeConfig.Config);
		});
	}
}
