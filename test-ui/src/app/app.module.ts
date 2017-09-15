import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import {UIRouterModule} from "@uirouter/angular";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import {uiRouterConfigFn} from './router.conf';
import {statehome, statepost, statelogin, stateregister} from './states';


import { AlertComponent } from './_directives/index';
import { AlertService, AuthenticationService, UserService, PostService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { MenuComponent } from './menu/menu.component';
import { PostComponent } from './post/post.component';
import { SnakbarComponent } from './snakbar/snakbar.component';

let INITIAL_STATES =  [ statehome, statepost, statelogin, stateregister ];
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        BrowserAnimationsModule,
        UIRouterModule.forRoot({ 
          states: INITIAL_STATES,
          useHash: true,
          config: uiRouterConfigFn
        })
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        MenuComponent,
        PostComponent,
        SnakbarComponent
    ],
    providers: [
        AlertService,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }