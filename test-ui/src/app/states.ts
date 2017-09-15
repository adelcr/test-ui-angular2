import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { PostComponent } from './post/index';
import {Transition} from "ui-router-ng2";


export let statehome= { name: 'home', url: '/home',  component: HomeComponent }

export let statepost= { name: 'post', url: '/post',  component: PostComponent }

export let statelogin= { name: 'login', url: '/login',  component: LoginComponent  }

export let stateregister= { name: 'register', url: '/register',  component: RegisterComponent }

