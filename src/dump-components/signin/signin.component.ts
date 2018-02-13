import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { Observable } from 'rxjs/Rx';
import { AbstractControl } from '@angular/forms/src/model';
// import { SocketService } from '@soushians/infra/socket';

@Component({
        selector: 'auth-signin',
        templateUrl: './signin.component.html',
        styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
        @Output() signedin = new EventEmitter();

        @Input() formGroup: FormGroup;

        get Email() { return this.formGroup.get('Email') as AbstractControl;  }
        get Password() { return this.formGroup.get('Password') as AbstractControl; }

        signin() {
                if(!this.formGroup.valid) return;
                this.signedin.emit(this.formGroup.value);
        }

        constructor(
                // private socketService : SocketService
        ) { 
                // this.socketService.initSocket();
                // this.socketService.send("asdfasdf");
                // this.socketService.onConnect().subscribe(data=>{
                //         debugger;
                // })
                // this.socketService.onMessage().subscribe(data=>{
                //         debugger;
                // })
        }
}