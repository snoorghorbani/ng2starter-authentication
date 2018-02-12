"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const smart_components_1 = require("./smart-components");
const routing_guards_1 = require("./routing-guards");
const routes = [
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