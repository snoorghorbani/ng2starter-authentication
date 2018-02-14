"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var smart_components_1 = require("./smart-components");
var routing_guards_1 = require("./routing-guards");
var routes = [
    {
        path: 'auth',
        component: smart_components_1.AuthenticationContainerComponent,
        children: [
            {
                path: 'signin',
                canActivate: [routing_guards_1.SigninGuard],
                component: smart_components_1.SigninContainerComponent
            }
        ]
    }
];
exports.AuthenticationRoutingModule = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=authentication-routing.module.js.map