import { ModuleWithProviders } from '@angular/core';
import { AuthenticationModuleConfig } from './authentication.config';
import "./smart-components";
import "./dump-components";
import "./effects";
export declare class AuthenticationModule {
    static forRoot(config?: AuthenticationModuleConfig): ModuleWithProviders;
}
export declare class RootAuthenticationModule {
}
