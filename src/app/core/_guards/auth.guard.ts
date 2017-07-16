import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

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
      return this.authService.authState
        .map(user => {
          return user
            ? true
            : this.router.navigate(['/app/auth/login'], { queryParams: { returnUrl: state.url }}) && false;
        })
        .catch(() => {
          this.router.navigate(['/app/auth/login'], { queryParams: { returnUrl: state.url }});
          return Observable.of(false);
        });
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.authState
      .map(user => {
        return user
          ? true
          : this.router.navigate(['/app/auth/login']) && false;
      })
      .catch(() => {
        this.router.navigate(['/app/auth/login']);
        return Observable.of(false);
      });
  }
}
