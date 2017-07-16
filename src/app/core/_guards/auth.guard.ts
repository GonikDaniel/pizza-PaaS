import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log(this.authService.isAuthenticated)
      return this.authService.isAuthenticated
        ? true
        : this.router.navigate(['/app/auth/login'], { queryParams: { returnUrl: state.url }}) && false;
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
      console.log(this.authService.isAuthenticated)
      return this.authService.isAuthenticated;
  }
}
