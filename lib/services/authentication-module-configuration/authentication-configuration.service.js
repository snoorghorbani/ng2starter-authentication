"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var rxjs_1 = require("rxjs");
var config_1 = require("@soushians/config");
var authentication_config_1 = require("../../authentication.config");
var authentication_config_2 = require("../../authentication.config");
var AuthenticationConfigurationService = /** @class */ (function () {
    function AuthenticationConfigurationService(configFile, store) {
        var _this = this;
        this.store = store;
        this.config$ = new rxjs_1.BehaviorSubject(this._config);
        this._config = Object.assign({}, authentication_config_1.MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(config_1.getAuthenticationModuleConfig).subscribe(function (storeConfig) {
            if (!storeConfig)
                return;
            _this._config = Object.assign({}, _this._config, storeConfig.Config);
            _this.config$.next(_this._config);
        });
    }
    Object.defineProperty(AuthenticationConfigurationService.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationConfigurationService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    AuthenticationConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core_1.Inject, args: [authentication_config_2.MODULE_CONFIG_TOKEN,] },] },
        { type: store_1.Store, },
    ]; };
    return AuthenticationConfigurationService;
}());
exports.AuthenticationConfigurationService = AuthenticationConfigurationService;
//# sourceMappingURL=authentication-configuration.service.js.map