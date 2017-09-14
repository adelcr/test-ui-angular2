import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { PostComponent } from './post/index';
import { AuthGuard } from './_guards/index';
import {Transition} from "@uirouter/angular";

export const appState = [
{ name: 'home', url: '/home',  component: HomeComponent ,canActivate: [AuthGuard]}, 

{ name: 'post', url: '/post',  component: PostComponent ,canActivate: [AuthGuard]},

 { name: 'login', url: '/login',  component: LoginComponent },

 { name: 'register', url: '/register',  component: RegisterComponent }

];