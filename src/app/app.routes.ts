import { Routes, CanActivate } from '@angular/router';
import { Login } from './login/login';
import { Welcome } from './welcome/welcome';
import { Error } from './error/error';
import { Articoli } from './articoli/articoli';
import { Logout } from './logout/logout';
import { RouteGuard } from '../services/route-guard';

export const routes: Routes = [
    {path: '', component: Login},
    {path: 'login', component: Login},
    {path: 'welcome/:userId', component: Welcome, canActivate: [RouteGuard]},
    {path: 'articoli', component: Articoli, canActivate: [RouteGuard]},
    {path: 'logout', component: Logout, canActivate: [RouteGuard]},
    {path: '**', component: Error}
];
