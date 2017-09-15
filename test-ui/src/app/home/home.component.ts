import { Component, OnInit, Injector } from '@angular/core';
import { User } from '../_models/index';
import { AlertService,UserService } from '../_services/index';
import { StateService } from '@uirouter/angular';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    constructor(private state: StateService,private alertService: AlertService,private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    }

    ngOnInit() {
        this.loadAllUsers();
        this.canActivate();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }
    canActivate () {
    
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
   this.alertService.success('connect please', true);
                      return this.state.go("login");
    }
    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}
  