import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { Authapp } from './authapp';

@Injectable({
	providedIn: 'root',
})
export class RouteGuard implements CanActivate{

	constructor(private BasicAuth: Authapp, private router: Router){}
  
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    	if(!this.BasicAuth.isLogged()){
            this.router.navigate(['login']);
            return false;
    	}
        else{
            return true;
        }
	}
}
