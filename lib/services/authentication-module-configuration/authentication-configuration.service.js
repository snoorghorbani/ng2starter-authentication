"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var authentication_config_1 = require("../../authentication.config");
var authentication_module_config_default_value_1 = require("./authentication-module-config-default-value");
var config_1 = require("@soushians/config");
var AuthenticationConfigurationService = /** @class */ (function () {
    function AuthenticationConfigurationService(configFile, store) {
        var _this = this;
        this.store = store;
        this._config = Object.assign({}, authentication_module_config_default_value_1.MODULE_DEFAULT_CONFIG, configFile);
        this.store.select(config_1.getAuthenticationModuleConfig).subscribe(function (storeConfig) {
            if (!storeConfig)
                return;
            _this._config = Object.assign({}, _this._config, storeConfig.Config);
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
        { type: undefined, decorators: [{ type: core_1.Inject, args: [authentication_config_1.MODULE_CONFIG_TOKEN,] },] },
        { type: store_1.Store, },
    ]; };
    return AuthenticationConfigurationService;
}());
exports.AuthenticationConfigurationService = AuthenticationConfigurationService;
//# sourceMappingURL=authentication-configuration.service.js.map