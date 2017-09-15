import { Injectable,Injector } from '@angular/core';
import { StateService } from '@uirouter/angular';

export function canActivate (state: StateService) {
    
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
       state.target('login');
        return false;
    }