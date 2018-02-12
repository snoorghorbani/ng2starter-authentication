import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as FeatureReducer from '../../reducers';
import { Signin, ClearCaptcha } from '../../actions';
import { CaptchaModel, Signin_ApiModel } from '../../models';
import { SigninService } from '../../services';

@Component({
	template: `
        <auth-signin 
                [formGroup]='form'
                (signedin)="authenticate($event)"
        ></auth-signin>
        
  `
})
export class SigninContainerComponent implements OnInit, OnDestroy {
	captcha$: Observable<CaptchaModel>;
	form: FormGroup = Signin_ApiModel.Request.formGroup;

	constructor(
		//private configurationService: ConfigurationService,
		private store: Store<FeatureReducer.FeatureState>
	) {
		this.captcha$ = this.store.select(FeatureReducer.getCaptcha);
	}

	ngOnInit() {
		this.captcha$
			// .skipWhile(data => !!(data.Captcha && data.Token))
			.subscribe((data) => {
				if (!(data.Captcha && data.Token)) return;
				this.form.patchValue({ Captcha: data.Captcha });
				this.form.patchValue({ Token: data.Token.Token });
			});
	}
	ngOnDestroy() {
		this.store.dispatch(new ClearCaptcha());
	}

	authenticate(formValue: any) {
		debugger;
		this.store.dispatch(new Signin(formValue));
	}
}
