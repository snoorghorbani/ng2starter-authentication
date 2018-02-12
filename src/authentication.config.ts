import { InjectionToken } from "@angular/core";

export interface AuthenticationModuleConfig {
    endpoints?: {
        signOut?: string,
        signIn?: string,
        userInformation?: string
    };
}

export const MODULE_CONFIG_TOKEN = new InjectionToken<AuthenticationModuleConfig>('ModuleConfig');