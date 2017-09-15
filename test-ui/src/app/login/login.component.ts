import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {StateService,Transition} from '@uirouter/angular';
import { AlertService, AuthenticationService } from '../_services/index';
import { MdSnackBar } from '@angular/material';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private state: StateService,
        private transition:Transition,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        public snackBar: MdSnackBar
        ) { 
}

    ngOnInit() {
        // reset login status

        this.authenticationService.logout();
        var parms= this.transition.params();
        console.log(this.state.params);
        // get return url from route parameters or default to '/'
     
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.state.go('home');
                },
                error => {
                    this.snackBar.open(error);
                    this.loading = false;
                });
    }
}
