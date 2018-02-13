"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const router_1 = require("@angular/router");
const http_1 = require("@angular/common/http");
const flex_layout_1 = require("@angular/flex-layout");
const material_1 = require("@angular/material");
const animations_1 = require("@angular/platform-browser/animations");
const forms_1 = require("@angular/forms");
const store_1 = require("@ngrx/store");
const effects_1 = require("@ngrx/effects");
const authentication_config_1 = require("./authentication.config");
const authentication_routing_module_1 = require("./authentication-routing.module");
const infra_1 = require("@soushians/infra");
const smart_components_1 = require("./smart-components");
const dump_components_1 = require("./dump-components");
const services_1 = require("./services");
const routing_guards_1 = require("./routing-guards");
const interceptors_1 = require("./interceptors");
const effects_2 = require("./effects");
const reducers_1 = require("./reducers");
require("./smart-components");
require("./dump-components");
require("./effects");
let AuthenticationModule = class AuthenticationModule {
    static forRoot(config = {}) {
        return {
            ngModule: RootAuthenticationModule,
            providers: [
                { provide: authentication_config_1.MODULE_CONFIG_TOKEN, useValue: config },
                services_1.AuthenticationConfigurationService,
                services_1.CaptchaService,
                services_1.SigninService,
                routing_guards_1.UserGuard,
                routing_guards_1.AdminGuard,
                routing_guards_1.AgentGuard,
                routing_guards_1.SigninGuard,
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: interceptors_1.UnauthorizedInterceptor,
                    multi: true
                },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: interceptors_1.WithCredentialInterceptor,
                    multi: true
                }
            ]
        };
    }
};
AuthenticationModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            forms_1.FormsModule,
            http_1.HttpClientModule,
            flex_layout_1.FlexLayoutModule,
            material_1.MatIconModule,
            material_1.MatButtonModule,
            material_1.MatCardModule,
            material_1.MatSnackBarModule,
            material_1.MatSidenavModule,
            material_1.MatExpansionModule,
            material_1.MatSelectModule,
            material_1.MatFormFieldModule,
            material_1.MatListModule,
            material_1.MatMenuModule,
            material_1.MatRadioModule,
            material_1.MatInputModule,
            material_1.MatToolbarModule,
            material_1.MatDatepickerModule,
            material_1.MatProgressBarModule,
            animations_1.BrowserAnimationsModule,
            forms_1.ReactiveFormsModule,
            forms_1.FormsModule,
            infra_1.InfraModule
        ],
        declarations: [
            smart_components_1.SigninContainerComponent,
            smart_components_1.CaptchaContainerComponent,
            dump_components_1.CaptchaComponent,
            dump_components_1.SigninComponent,
            smart_components_1.AuthenticationContainerComponent
        ],
        exports: [smart_components_1.CaptchaContainerComponent]
    })
], AuthenticationModule);
exports.AuthenticationModule = AuthenticationModule;
let RootAuthenticationModule = class RootAuthenticationModule {
};
RootAuthenticationModule = __decorate([
    core_1.NgModule({
        imports: [
            store_1.StoreModule.forFeature('authentication', reducers_1.AuthenticationReducers),
            effects_1.EffectsModule.forFeature([effects_2.CaptchaEffects, effects_2.SigninEffects, effects_2.AuthenticationEffects]),
            authentication_routing_module_1.AuthenticationRoutingModule,
            AuthenticationModule
        ]
    })
], RootAuthenticationModule);
exports.RootAuthenticationModule = RootAuthenticationModule;
//# sourceMappingURL=authentication.module.js.map