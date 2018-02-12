import { InjectionToken } from "@angular/core";
export interface AuthenticationModuleConfig {
    endpoints?: {
        signOut?: string;
        signIn?: string;
        userInformation?: string;
    };
}
export declare const MODULE_CONFIG_TOKEN: InjectionToken<AuthenticationModuleConfig>;
