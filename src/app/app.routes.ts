import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Welcome } from './welcome/welcome';
import { Error } from './error/error';
import { Articoli } from './articoli/articoli';
import { Logout } from './logout/logout';

export const routes: Routes = [
    {path: '', component: Login},
    {path: 'login', component: Login},
    {path: 'welcome/:userId', component: Welcome},
    {path: 'articoli', component: Articoli},
    {path: 'logout', component: Logout},
    {path: '**', component: Error}
];
