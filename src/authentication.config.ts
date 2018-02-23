﻿import { InjectionToken } from "@angular/core";

export interface AuthenticationModuleConfig {
	endpoints?: {
		signOut?: string;
		signIn?: string;
		userInformation?: string;
	};
	env: {
		production: boolean;
	};
}

export const MODULE_DEFAULT_CONFIG: AuthenticationModuleConfig = {
	endpoints: {
		signOut: "",
		signIn: "",
		userInformation: ""
	},
	env: {
		production: false
	}
};

export const MODULE_CONFIG_TOKEN = new InjectionToken<AuthenticationModuleConfig>("ModuleConfig");
