"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
// import { SocketService } from '@ng2-starter/infra/socket';
let SigninComponent = class SigninComponent {
    constructor() {
        this.signedin = new core_1.EventEmitter();
        // this.socketService.initSocket();
        // this.socketService.send("asdfasdf");
        // this.socketService.onConnect().subscribe(data=>{
        //         debugger;
        // })
        // this.socketService.onMessage().subscribe(data=>{
        //         debugger;
        // })
    }
    get Email() { return this.formGroup.get('Email'); }
    get Password() { return this.formGroup.get('Password'); }
    signin() {
        if (!this.formGroup.valid)
            return;
        this.signedin.emit(this.formGroup.value);
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SigninComponent.prototype, "signedin", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.FormGroup)
], SigninComponent.prototype, "formGroup", void 0);
SigninComponent = __decorate([
    core_1.Component({
        selector: 'auth-signin',
        templateUrl: './signin.component.html',
        styleUrls: ['./signin.component.scss']
    }),
    __metadata("design:paramtypes", [])
], SigninComponent);
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=signin.component.js.map