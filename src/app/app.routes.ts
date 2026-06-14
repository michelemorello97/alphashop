import { Routes, CanActivate } from '@angular/router';
import { Login } from './pages/login/login';
import { Welcome } from './pages/welcome/welcome';
import { Error } from './pages/error/error';
import { Articoli } from './pages/articoli/articoli';
import { Logout } from './pages/logout/logout';
import { RouteGuard } from '../services/route-guard';
import { GridArticoli } from './pages/grid-articoli/grid-articoli';

export const routes: Routes = [
    {path: '', component: Login},
    {path: 'login', component: Login},
    {path: 'welcome/:userId', component: Welcome, canActivate: [RouteGuard]},
    {path: 'articoli', component: Articoli, canActivate: [RouteGuard]},
    {path: 'articoli/grid', component: GridArticoli, canActivate: [RouteGuard]},
    {path: 'logout', component: Logout, canActivate: [RouteGuard]},
    {path: '**', component: Error}
];
