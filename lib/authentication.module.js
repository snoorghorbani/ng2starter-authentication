"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var flex_layout_1 = require("@angular/flex-layout");
var material_1 = require("@angular/material");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var infra_1 = require("@soushians/infra");
var form_1 = require("@soushians/form");
var authentication_config_1 = require("./authentication.config");
var authentication_routing_module_1 = require("./authentication-routing.module");
var smart_components_1 = require("./smart-components");
var dump_components_1 = require("./dump-components");
var services_1 = require("./services");
var routing_guards_1 = require("./routing-guards");
var interceptors_1 = require("./interceptors");
var effects_2 = require("./effects");
var reducers_1 = require("./reducers");
require("./smart-components");
require("./dump-components");
require("./effects");
var NgsAuthenticationModule = /** @class */ (function () {
    function NgsAuthenticationModule() {
    }
    NgsAuthenticationModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: RootNgsAuthenticationModule,
            providers: [
                { provide: authentication_config_1.MODULE_CONFIG_TOKEN, useValue: config },
                services_1.AuthenticationConfigurationService,
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
    };
    NgsAuthenticationModule.decorators = [
        { type: core_1.NgModule, args: [{
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
                        infra_1.InfraModule,
                        form_1.NgsFormModule
                    ],
                    declarations: [
                        smart_components_1.SigninContainerComponent,
                        dump_components_1.SigninComponent,
                        smart_components_1.AuthenticationContainerComponent
                    ],
                    exports: []
                },] },
    ];
    /** @nocollapse */
    NgsAuthenticationModule.ctorParameters = function () { return []; };
    return NgsAuthenticationModule;
}());
exports.NgsAuthenticationModule = NgsAuthenticationModule;
var RootNgsAuthenticationModule = /** @class */ (function () {
    function RootNgsAuthenticationModule() {
    }
    RootNgsAuthenticationModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        store_1.StoreModule.forFeature("authentication", reducers_1.AuthenticationReducers),
                        effects_1.EffectsModule.forFeature([effects_2.SigninEffects, effects_2.AuthenticationEffects]),
                        authentication_routing_module_1.AuthenticationRoutingModule,
                        NgsAuthenticationModule
                    ]
                },] },
    ];
    /** @nocollapse */
    RootNgsAuthenticationModule.ctorParameters = function () { return []; };
    return RootNgsAuthenticationModule;
}());
exports.RootNgsAuthenticationModule = RootNgsAuthenticationModule;
//# sourceMappingURL=authentication.module.js.map