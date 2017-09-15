import { Component } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { AlertService, UserService } from '../_services/index';
import { MdSnackBar } from '@angular/material';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private state: StateService,
        private userService: UserService,
        private alertService: AlertService,
        public snackBar: MdSnackBar) {
         }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                      return this.state.go("login");
                },
                error => {
                    this.snackBar.open(error);
                    this.loading = false;
                });
    }
}
