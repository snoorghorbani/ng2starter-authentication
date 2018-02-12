﻿import { NgModule, ModuleWithProviders, InjectionToken, Injectable, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
	MatIconModule,
	MatButtonModule,
	MatCardModule,
	MatSnackBarModule,
	MatSidenavModule,
	MatExpansionModule,
	MatSelectModule,
	MatFormFieldModule,
	MatListModule,
	MatMenuModule,
	MatRadioModule,
	MatInputModule,
	MatToolbarModule,
	MatDatepickerModule,
	MatProgressBarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthenticationModuleConfig, MODULE_CONFIG_TOKEN } from './authentication.config';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { InfraModule } from '@ng2-starter/infra';
import {
	SigninContainerComponent,
	CaptchaContainerComponent,
	AuthenticationContainerComponent
} from './smart-components';
import { SigninComponent, CaptchaComponent } from './dump-components';
import { AuthenticationConfigurationService, CaptchaService, SigninService } from './services';
import { UserGuard, SigninGuard, AgentGuard, AdminGuard } from './routing-guards';
import { UnauthorizedInterceptor, WithCredentialInterceptor } from './interceptors';

import { CaptchaEffects, SigninEffects, AuthenticationEffects } from './effects';
import { AuthenticationReducers } from './reducers';

import "./smart-components";
import "./dump-components";
import "./effects";

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		HttpClientModule,
		FlexLayoutModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatSnackBarModule,
		MatSidenavModule,
		MatExpansionModule,
		MatSelectModule,
		MatFormFieldModule,
		MatListModule,
		MatMenuModule,
		MatRadioModule,
		MatInputModule,
		MatToolbarModule,
		MatDatepickerModule,
		MatProgressBarModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		FormsModule,
		InfraModule
	],
	declarations: [
		SigninContainerComponent,
		CaptchaContainerComponent,
		CaptchaComponent,
		SigninComponent,
		AuthenticationContainerComponent
	],
	exports: [ CaptchaContainerComponent ]
})
export class AuthenticationModule {
	static forRoot(config: AuthenticationModuleConfig = <AuthenticationModuleConfig>{}): ModuleWithProviders {
		return {
			ngModule: RootAuthenticationModule,
			providers: [
				{ provide: MODULE_CONFIG_TOKEN, useValue: config },
				AuthenticationConfigurationService,
				CaptchaService,
				SigninService,
				UserGuard,
				AdminGuard,
				AgentGuard,
				SigninGuard,
				{
					provide: HTTP_INTERCEPTORS,
					useClass: UnauthorizedInterceptor,
					multi: true
				},
				{
					provide: HTTP_INTERCEPTORS,
					useClass: WithCredentialInterceptor,
					multi: true
				}
			]
		};
	}
}

@NgModule({
	imports: [
		StoreModule.forFeature('authentication', AuthenticationReducers),
		EffectsModule.forFeature([ CaptchaEffects, SigninEffects, AuthenticationEffects ]),
		AuthenticationRoutingModule,
		AuthenticationModule
	]
})
export class RootAuthenticationModule {}
